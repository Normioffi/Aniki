interface IWITFind {
  name?: string;
  anime?: string;
}

interface IWaifuItError {}

interface IWITAnime {
  _id: number;
  name: {
    first: string;
    middle?: string;
    last?: string;
    full: string;
    native: string;
    userPrefered: string[];
    alternativeSpoiler: string[];
  };
}
export type { IWaifuItError, IWITAnime, IWITFind };
