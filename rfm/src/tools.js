export async function fetchFromAPI(page) {
  return await fetch("https://json.rawfunkmaharishi.uk/" + page + ".json").then(
    function (response) {
      return response.json();
    }
  );
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

  // remove ourselves
  const RFMURL = urls.filter((url) => url.includes("rawfunkmaharishi.uk"))[0];
  urls.splice(urls.indexOf(RFMURL), 1);

  const YouTubeURL = urls.filter((url) => url.includes("youtube.com"))[0];
  urls.splice(urls.indexOf(YouTubeURL), 1);

  const SpotifyURL = urls.filter((url) => url.includes("spotify.com"))[0];
  urls.splice(urls.indexOf(SpotifyURL), 1);

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
    otherServices: otherServices(),
  };
}

export function getJSONLD(data) {
  return JSON.stringify(data, null, 2);
}
