import { format, getDefaultOptions } from "date-fns";

export async function fetchFromAPI(page) {
  return await fetch("https://json.rawfunkmaharishi.uk/" + page + ".json").then(
    function (response) {
      return response.json();
    }
  );
}

export async function futureGigs() {
  return await fetchFromAPI("gigs").then(function (gigs) {
    const fGigs = gigs.filter((gig) => new Date(gig.startDate) > new Date());

    if (fGigs.len > 0) {
      return fGigs;
    }

    // maybe there are no future gigs
    const defaultGigs = gigs.slice(-3)
    defaultGigs.reverse()
    return defaultGigs;
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

export function niceDate(uglyDate, forceYear = false, withDay = true) {
  var formatString = "MMMM do";

  if (withDay) {
    formatString = "EEEE " + formatString;
  }

  if (
    new Date(uglyDate).getFullYear() != new Date().getFullYear() ||
    forceYear
  ) {
    formatString += ", yyyy";
  }

  return format(new Date(uglyDate), formatString);
}

export function kebabCase(name) {
  return name.toLowerCase().replaceAll(" ", "-");
}

export function isActive(link, url) {
  return link.split("/")[1] == url.split("/")[1];
}

export function cleanUrl(...parts) {
  return parts.map(trimSlashes).join("/");
}
export function trimSlashes(word) {
  while (word.slice(0, 1) == "/") {
    word = word.slice(1);
  }
  while (word.slice(-1) == "/") {
    word = word.slice(0, -1);
  }
  return word;
}

// https://stackabuse.com/how-to-split-an-array-into-even-chunks-in-javascript/
export function spliceIntoChunks(arr, chunkSize, type = "") {
  const res = [];
  while (arr.length > 0) {
    const chunk = arr.splice(0, chunkSize);
    res.push({ "@type": type || chunk[0]["@type"], items: chunk });
  }
  return res;
}
