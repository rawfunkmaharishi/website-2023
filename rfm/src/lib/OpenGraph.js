import { niceDate } from "./tools";

class ogFromJSON {
  constructor(data, site) {
    site = site.slice(0, -1);
    this.title = data.name;
    this.image = site + "/logos/rfm.png";

    if (data.url.startsWith("http")) {
      this.url = data.url;
    } else {
      this.url = site + data.url;
    }

    if (data["@type"] == "MusicEvent") {
      this.type = "event";
      this.description = data.name + " on " + niceDate(data.startDate);
    }
  }

  render() {
    var s = "";
    for (var key in this) {
      s += '<meta property="og:';
      s += key;
      s += '" content="';
      s += this[key];
      s += '" />';
      s += "\n";
    }

    return s;
  }
}

export { ogFromJSON };
