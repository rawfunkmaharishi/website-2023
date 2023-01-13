import { niceDate, cleanUrl } from "./tools";

class ogFromJSON {
  constructor(data, site) {
    this.title = data.name;
    this.image = cleanUrl(site, "/logos/rfm.png");

    if (data.url.startsWith("http")) {
      this.url = data.url;
    } else {
      this.url = cleanUrl(site, data.url);
    }

    if (data["@type"] == "MusicEvent") {
      this.type = "event";
      this.description = data.name + " on " + niceDate(data.startDate);
    }

    if (data["@type"] == "MusicAlbum") {
      this.type = "music.album";
      this.image = cleanUrl(site, data.image.contentUrl);
      this.description = data.name + " by " + data.byArtist.name;
    }

    if (data["@type"] == "MusicGroup") {
      this.type = "profile";
      this.description = data.name;
    }
  }

  render() {
    var lines = [];
    for (var key in this) {
      var s = "  ";
      s += '<meta property="og:';
      s += key;
      s += '" content="';
      s += this[key];
      s += '" />';
      s += "\n";

      lines.push(s);
    }

    return "\n" + lines.sort().join("");
  }
}

export { ogFromJSON };
