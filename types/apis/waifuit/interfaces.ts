interface IWITFind {
  name?: string;
  anime?: string;
}

interface IWaifuItError {
  status: number;
  message: {
    [name: string]: string | number | object;
  };
}

interface IWITCharacter {
  _id: number;
  name: {
    first: string;
    middle: string | null;
    last: string | null;
    full: string;
    native: string;
    userPrefered: string[] | [];
    alternativeSpoiler: string[] | [];
  };
  image: {
    large: string;
  };
  favourites: number;
  siteUrl: string;
  description: string | null;
  age: number | null;
  gender: string;
  bloodType: string | null;
  dateOfBirth: {
    year: number | null;
    month: number | null;
    day: number | null;
  };
  media: {
    nodes: {
      id: number;
      idMal: number;
      coverImage: {
        medium: string;
      };
      bannerImage?: string;
      title: {
        romaji: string;
        english: string | null;
        native: string;
        userPreferred: string;
      };
      synonyms: string[];
      popularity: number;
      type: string;
      format: string;
    }[];
  };
}

export type { IWaifuItError, IWITCharacter, IWITFind };
