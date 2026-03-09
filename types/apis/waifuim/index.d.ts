import type { AnikiHooks } from "../../core/index";
import { AnikiCore } from "../../core/index";
// Types

/**
 * This type returns errors from the waifu.im API.
 * @since 2.0.0-beta.1
 */
type IWaifuImHandleError = (error: Promise<IWaifuImError>) => any;

/**
 * The main versatile Waifu.Im tags.
 * @since 2.0.0-beta.1
 */
type TWIMTags =
  | "maid"
  | "waifu"
  | "marin-kitagawa"
  | "mori-calliope"
  | "raiden-shogun"
  | "oppai"
  | "selfies"
  | "uniform"
  | "kamisato-ayaka";

/**
 * The main operators for a few parameters.
 * @since 2.0.0-beta.1
 */
type TWIMOperators = "<=" | ">=" | ">" | "<" | "!=" | "=";

type TWIMNsfwMode = "False" | "True" | "All";
type TWIMAnimatedMode = "False" | "True" | "All";
type TWIMImageOrderBy = "Random" | "UploadedAt" | "Favorites" | "AddedToAlbum";
type TWIMOrientation = "All" | "Landscape" | "Portrait" | "Square";
type TWIMReviewStatusFilter = "Accepted" | "Pending" | "All";

// Interfaces

/**
 * This interface are the JSON response of the method request below.
 * @since 2.0.0-beta.1
 */
interface IWaifuIm {
  images: {
    signature: string;
    /**
     * The image extension (JPG, PNG...)
     */
    extension: string;
    image_id: number;
    favorites: number;
    /**
     * The dominant color of the image
     */
    dominant_color: string;
    source: string;
    artist: {
      /**
       * The artist id
       */
      artist_id: number;
      /**
       * The artist name
       */
      name: string;
      /**
       * The Patreon of the artist
       */
      patreon?: string;
      /**
       * The Pixiv of the artist
       */
      pixiv?: string;
      /**
       * The Twitter (X now) of the artist
       */
      twitter?: string;
      /**
       * The Deviant Art of the artist
       */
      deviant_art?: string;
    };
    uploaded_at: string;
    liked_at?: string;
    is_nsfw: boolean;
    width: number;
    height: number;
    byte_size: number;
    url: string;
    preview_url: string;
    tags: {
      tag_id: number;
      name: string;
      description: string;
      is_nsfw: boolean;
    }[];
  }[];
}

/**
 * This interface is used for the "find" method of the class "WaifuIm"
 * @since 2.0.0-beta.1
 */
interface IWaifuImParams {
  IsNsfw?: TWIMNsfwMode;
  IncludedTags?: TWIMTags[];
  ExcludedTags?: TWIMTags[];
  IncludedArtists?: string[];
  ExcludedArtists?: string[];
  IncludedIds?: string[];
  ExcludedIds?: string[];
  IsAnimated?: TWIMAnimatedMode;
  OrderBy?: TWIMImageOrderBy;
  Orientation?: TWIMOrientation;
  Page?: number | `${number}`;
  PageSize?: number | `${number}`;
  Width?: `${TWIMOperators}${number}` | number | `${number}`;
  Height?: `${TWIMOperators}${number}` | number | `${number}`;
  ByteSize?: `${TWIMOperators}${number}` | number | `${number}`;
  UploaderId?: number | `${number}`;
  ReviewStatus?: TWIMReviewStatusFilter;
  ChildrenReviewStatus?: TWIMReviewStatusFilter;
}

interface IWaifuImError {
  type: string;
  title: string;
  status: number;
  detail: string;
  errors: {
    [fieldName: string]: string[];
  };
}

/**
 * @class
 * @description This class use the Waifu.Im to get anime or manga waifu with optionals parameters.
 * @since 2.0.0-beta.1
 */
declare class WaifuIm extends AnikiCore {
  constructor(accessToken?: string);
  /**
   * @method
   * @description Find an waifu with different parameters (only tags like: maid, waifu, marin-kitagawa, mori-calliope, raiden-shogun, oppai, selfies or uniform can be used.) For more informations, go to https://docs.waifu.im/ website.
   * @param params - The optionals parameters for the request.
   * @throws An internal server error has occured: **error**
   * @returns Return a Promise.
   * @since 2.0.0-beta.1
   */
  find(
    params: IWaifuImParams,
    hooks?: AnikiHooks<IWaifuImError>,
  ): Promise<Readonly<IWaifuIm> | undefined>;
}

export { WaifuIm };
export type {
  IWaifuIm,
  IWaifuImError,
  IWaifuImHandleError,
  IWaifuImParams,
  TWIMOperators,
  TWIMTags,
};
