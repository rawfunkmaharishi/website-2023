class ogFromJSON {
  constructor(data, site) {
    site = site.slice(-1);
    this.title = data.name;
    this.image = site + "/logos/rfm.png";
    this.url = site + data.url; // TODO double-slash

    if (data["@type"] == "MusicEvent") {
      this.type = "event";
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
