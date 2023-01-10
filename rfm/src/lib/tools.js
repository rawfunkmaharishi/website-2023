import moment from "moment";

export async function fetchFromAPI(page) {
  return await fetch("https://json.rawfunkmaharishi.uk/" + page + ".json").then(
    function (response) {
      return response.json();
    }
  );
}

export async function futureGigs() {
  return await fetchFromAPI("gigs").then(function (gigs) {
    return gigs.filter((gig) => new Date(gig.startDate) > new Date());
  });
}

export function streamingServices(referenceUrls) {
  const urls = [...referenceUrls];
  const lookups = [
    // the ordering here is IMPORTANT!!!
    {
      matcher: "spotify.com",
      name: "Spotify",
      icon: "mdi-spotify",
    },
    { matcher: "music.apple.com", name: "Apple Music", icon: "mdi-apple" },
    {
      matcher: "youtube.com",
      name: "YouTube",
      icon: "mdi-youtube",
    },
    { matcher: "deezer.com", name: "Deezer", icon: "mdi-chart-bar-stacked" },
    { matcher: "music.amazon.co", name: "Amazon Music", icon: "mdi-music" },
  ];

  const services = [];

  lookups.forEach(function (lookup) {
    const urlForLookup = urls.filter(function (url) {
      return url.includes(lookup.matcher);
    });
    if (urlForLookup.length > 0) {
      const data = { ...lookup };
      delete data.matcher;
      data.url = urlForLookup[0];
      data.id = kebabCase(data.name);

      services.push(data);
    }
  });

  return services;
}

export function getJSONLD(data) {
  return JSON.stringify(data, null, 2);
}

export function niceDate(uglyDate, forceYear = false) {
  var formatString = "dddd MMMM Do";

  if (
    new Date(uglyDate).getFullYear() != new Date().getFullYear() ||
    forceYear
  ) {
    formatString += ", YYYY";
  }

  return moment(uglyDate).format(formatString);
}

export function kebabCase(name) {
  return name.toLowerCase().replaceAll(" ", "-");
}
