interface Image {
  contentUrl: string;
}

interface SlideItem {
  "@type": string;
  additionalTitle?: string;
}

interface Musician extends SlideItem {
  url: string;
  name: string;
  knowsAbout: string;
  image: {
    contentUrl: string;
  };
}

interface RecordAlbum extends SlideItem {
  url: string;
  name: string;
  datePublished: string;
  image: Image;
}

interface EventSet extends SlideItem {
  items: SingleEvent[];
}

interface GenericSlideItem {
  [key: any];
}

interface SingleEvent extends SlideItem {
  subType: string;
  item: {
    recordedIn: {
      thumbnailUrl: string;
    };
    startDate: string;
    location: {
      image: Image;
      name: string;
    };
    url: String;
  };
}
