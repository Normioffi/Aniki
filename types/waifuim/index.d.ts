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
type WIMTags =
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
type WIMOperators = "<=" | ">=" | ">" | "<" | "!=" | "=";

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
  /**
   * Force the API to return images with at least all the provided tags.
   */
  included_tags?: WIMTags[];
  /**
   * Force the API to return images without any of the provided tags.
   */
  excluded_tags?: WIMTags[];
  /**
   * Force the API to provide only the specified file IDs or signatures.
   */
  included_files?: string[];
  /**
   * Force the API to not list the specified file IDs or signatures.
   */
  excluded_files?: string[];
  /**
   * Default to `false`.
   *
   * Force or exclude lewd files. (only works if included_tags only contain versatile tags and no nsfw only tag)
   *
   * You can provide 'null' to make it random.
   */
  is_nsfw: boolean | null;
  /**
   * 
Force or prevent the API to return .gif files.
   */
  gif?: boolean;
  /**
   * Ordering criteria for the images.
   */
  order_by?: "UPLOADED_AT" | "RANDOM" | "FAVORITES";
  /**
   * Image orientation criteria.
   */
  orientation?: "LANDSCAPE" | "STANDALONE" | "RANDOM";
  /**
   * Default is 1.
   *
   * Return an array of the number provided. A value greater than 30 requires admin permissions.
   */
  limit?: number;
  /**
   * Returns the full result without any limit. (admins only)
   */
  full?: boolean;
  /**
   * Filter images by width. (in pixels)
   *
   * Accepted operators:
   * * `<=`
   * * `>=`
   * * `>`
   * * `<`
   * * `!=`
   * * `=`
   */
  width?: `${WIMOperators}${number}`;
  /**
   * Filter images by height. (in pixels)
   *
   * Accepted operators:
   * * `<=`
   * * `>=`
   * * `>`
   * * `<`
   * * `!=`
   * * `=`
   */
  height?: `${WIMOperators}${number}`;
  /**
   * Filter images by byte size.
   *
   * Accepted operators:
   * * `<=`
   * * `>=`
   * * `>`
   * * `<`
   * * `!=`
   * * `=`
   */
  byte_size?: `${WIMOperators}${number}`;
}

interface IWaifuImError {
  detail: string;
}

/**
 * @class
 * @description This class use the Waifu.Im to get anime or manga waifu with optionals parameters.
 * @since 2.0.0-beta.1
 */
declare class WaifuIm {
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
    handleError?: IWaifuImHandleError,
  ): Promise<IWaifuIm | undefined>;
}

export { WaifuIm };
export type {
  IWaifuIm,
  IWaifuImError,
  IWaifuImHandleError,
  IWaifuImParams,
  WIMOperators,
  WIMTags,
};
