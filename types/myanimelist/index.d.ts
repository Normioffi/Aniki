/**
 
 * @description This interface is used as the error handler.
 * @since 1.4.0
 */
type IMALError = { error: string; message: string };

/**
 
 * @description This interface is used as the error handler.
 * @since 1.4.0
 */
type IMALHandleError = (
  /**
   * @param errors - The errors that return the API.
   */
  errors: Promise<Readonly<IMALError>>,
  /**
   * @param status - Return the status of the API error.
   */
  status: number
) => Promise<void>;
/**
 
 * @description The MyAnimeList fields that you can use to return a list or a specific data when requesting them.
 * @since 1.4.0
 */
type TMALFields =
  | "id"
  | "title"
  | "main_picture"
  | "alternative_titles"
  | "start_date"
  | "end_date"
  | "synopsis"
  | "mean"
  | "rank"
  | "popularity"
  | "num_list_users"
  | "num_scoring_users"
  | "nsfw"
  | "created_at"
  | "updated_at"
  | "media_type"
  | "status"
  | "genres"
  | "my_list_status"
  | "num_episodes"
  | "start_season"
  | "broadcast"
  | "source"
  | "average_episode_duration"
  | "rating"
  | "pictures"
  | "background"
  | "related_anime"
  | "related_manga"
  | "recommendations"
  | "studios"
  | "statistics";

/**
 
 * @description The type for the MyAnimeList#find method parameters.
 * @since 1.4.0
 */
type TMALFind = {
  query?: string;
  limit?: number;
  offset?: number;
  fields?: TMALFields[];
};

/**
 
 * @description The type for the MyAnimeList#details method parameters.
 * @since 1.4.0
 */
type TMALDetails = {
  /**
   * The unique id of the anime.
   */
  anime_id: number;
  fields: TMALFields[];
};

/**
 
 * @since 1.4.0
 * @description The MyAnimeList "node".
 */
interface IMALNode {
  node: {
    id: number;
    title: string;
    main_picture: {
      medium: string;
      large: string;
    };
  };
  relation_type: string;
  relation_type_formatted: string;
  num_recommendations: number;
}
/**
 
 * @since 1.4.0
 * @description The interface of the MyAnimeList API response list.
 */
interface IMALAnimeList {
  data: IMALNode[];
  paging: {
    next: string;
  };
}
/**
 
 * @since 1.4.0
 * @description The interface of the MyAnimeList API response details, used by the MyAnimeList#details method.
 */
interface IMALAnime {
  id: number;
  title: string;
  main_picture: {
    medium: string;
    large: string;
  };
  alternative_titles?: {
    synonyms?: string[];
    en?: string;
    ja?: string;
  };
  start_date?: string;
  end_date?: string;
  synopsis?: string;
  mean?: number;
  rank?: number;
  popularity?: number;
  num_list_users?: number;
  num_scoring_users?: number;
  nsfw?: "white" | "grey" | "black";
  created_at?: Date;
  updated_at?: Date;
  media_type?: "unknown" | "tv" | "ova" | "movie" | "special" | "ona" | "music";
  status?: "finished_airing" | "currently_airing" | "not_yet_aired";
  genres?: [
    {
      id?: number;
      name?: string;
    }
  ];
  /*
  my_list_status?: {
    status?: string;
    score?: number;
    num_episodes_watched?: number;
    is_rewatching?: boolean;
    updated_at?: Date;
  };
  */
  num_episodes?: number;
  start_season?: {
    year?: number;
    season?: "winter" | "spring" | "summer" | "fall";
  };
  broadcast?: {
    day_of_the_week?: string;
    start_time?: string;
  };
  source?: string;
  average_episode_duration?: number;
  rating?: string;
  pictures?: [
    {
      medium?: string;
      large?: string;
    }
  ];
  background?: string;
  related_anime?: IMALNode[];
  related_manga?: IMALNode[];
  recommendations?: IMALNode[];
  studios?: [
    {
      id?: number;
      name?: string;
    }
  ];
  statistics?: {
    status?: {
      watching?: number;
      completed?: number;
      on_hold?: number;
      dropped?: number;
      plan_to_watch?: number;
    };
    num_list_users?: number;
  };
}
/**
 * @class
 * @since 1.4.0
 * @description MyAnimeList is a class that's using the MAL.app API, with this class you can find animes informations in different ways.
 *
 * @constructor
 * @param CLIENT_ID - The MyAnimeList client ID.
 * @example
 * Basic usage:
 * ```js
 * // CJS
 * const { MyAnimeList } = require("aniki");
 * // JS ESM or TS
 * import { MyAnimeList } from "aniki";
 *
 * const anime = new MyAnimeList({ CLIENT_ID: "ABcDEFghIJk123456789"});
 *
 * // Normal
 * anime.find({ query: "Oshi no ko", limit: 10 }).then(r => console.log(r));
 * ```
 */
declare class MyAnimeList {
  private headers: {};
  private defaultHandleError: IMALHandleError;
  constructor({ CLIENT_ID }: { CLIENT_ID: string });

  /**
   * @method
   * @param params - The parameters for the request.
   * @description The find method is used to find animes with different parameters.
   * @returns Returns a Promise with the IMALAnime interface.
   * @example
   * ```js
   * // Searching an anime
   * anime.find({ query: "Oshi no ko", offset: 0 }).then(r=> console.log(r.data[0]))
   * ```
   * @since 1.4.0
   */
  find(
    params: TMALFind,
    handleError?: IMALHandleError
  ): Promise<Readonly<IMALAnimeList> | undefined>;
  /**
   * @method
   * @param anime_id - The ID of the anime.
   * @param fields - The fields that the API would return. If nothing is referenced in fields, by default it will return the **id**, **title**, **main picture**, start and end date, synopsis, media type and status.
   * Bold fields mean that they would return themselves even if you don't select them.
   * @description Get anime details with its ID.
   * @returns Return a Promise.
   * @example
   * ```js
   * anime.details(30, ["synopsis"]).then(r => console.log(r));
   * ```
   * Would return:
   * ```json
   * {
   *  "id": 52991,
   *  "title": "Sousou no Frieren",
   *  "main_picture": {
   *    "medium": "URL",
   *    "large": "URL"
   *  },
   *  "synopsis": "During their decade-long quest to defeat the Demon King, the members of the hero's party—Himmel himself, the priest Heiter, the dwarf warrior Eisen, and the elven mage Frieren—forge bonds through adventures and battles, creating unforgettable precious memories for most of them.\n" +
   *  "\n" +
   *  "However, the time that Frieren spends with her comrades is equivalent to merely a fraction of her life, which has lasted over a thousand years. When the party disbands after their victory, Frieren casually returns to her "usual" routine of collecting spells across the continent. Due to her different sense of time, she seemingly holds no strong feelings toward the experiences she went through.\n" +
   *  "\n" +
   *  "As the years pass, Frieren gradually realizes how her days in the hero's party truly impacted her. Witnessing the deaths of two of her former companions, Frieren begins to regret having taken their presence for granted; she vows to better understand humans and create real personal connections. Although the story of that once memorable journey has long ended, a new tale is about to begin.\n" +
   *  "\n" +
   *  "[Written by MAL Rewrite]"
   * }
   * ```
   * @since 1.4.0
   */
  details(
    anime_id: number,
    fields?: TMALFields[],
    handleError?: IMALHandleError
  ): Promise<Readonly<IMALAnime> | undefined>;
}

export {
  IMALAnime,
  IMALAnimeList,
  IMALError,
  IMALHandleError,
  IMALNode,
  MyAnimeList,
  TMALDetails,
  TMALFields,
  TMALFind,
};
