/**
 * The main versatile Waifu.Im tags.
 * @since 1.4.7
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
 * @since 1.4.7
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
 * @since 1.4.7
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
 * @since 1.4.7
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

/**
 * Main interface of the WaifuIm errors.
 * @since 1.4.7
 */
interface IWaifuImError {
  type: string;
  title: string;
  status: number;
  detail: string;
  errors: {
    [fieldName: string]: string[];
  };
}

export type {
  IWaifuIm,
  IWaifuImError,
  IWaifuImParams,
  TWIMAnimatedMode,
  TWIMImageOrderBy,
  TWIMNsfwMode,
  TWIMOperators,
  TWIMOrientation,
  TWIMReviewStatusFilter,
  TWIMTags,
};
