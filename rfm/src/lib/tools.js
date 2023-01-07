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
  const lookups = {
    "apple.com": {
      name: "Apple Music",
      icon: "mdi-apple",
    },
    "amazon.co": {
      name: "Amazon Music",
      icon: "mdi-music",
    },
  };

  const YouTubeURL = urls.filter((url) => url.includes("youtube.com"))[0];
  urls.splice(urls.indexOf(YouTubeURL), 1);

  const SpotifyURL = urls.filter((url) => url.includes("spotify.com"))[0];
  urls.splice(urls.indexOf(SpotifyURL), 1);

  const AppleURL = urls.filter((url) => url.includes("music.apple.com"))[0];
  urls.splice(urls.indexOf(AppleURL), 1);

  const otherServices = function () {
    const results = [];
    Object.keys(lookups).forEach(function (key) {
      urls.forEach(function (url) {
        if (url.includes(key)) {
          lookups[key]["url"] = url;
          results.push(lookups[key]);
        }
      });
    });
    return results;
  };

  return {
    YouTubeURL: YouTubeURL,
    SpotifyURL: SpotifyURL,
    AppleURL: AppleURL,
    otherServices: otherServices(),
  };
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
