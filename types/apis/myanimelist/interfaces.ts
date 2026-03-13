/**
 * Basic `MyAnimeList`/`MyMangaList` error response.
 * @since 1.4.0
 */
interface IMALError {
  /**
   * Error type.
   */
  error: string;
  /**
   * Error message.
   */
  message: string;
}

/**
 * Anime or manga fields depending on the T choosen.
 * @since 1.4.0
 */
type TMALFields<T extends IMALAnime | IMALManga> = Exclude<
  keyof T,
  "id" | "title" | "main_picture"
>;

/**
 * Anime ranking types.
 *
 * - `all` :	*Top Anime Series*
 * - `airing` :	*Top Airing Anime*
 * - `upcoming` :	*Top Upcoming Anime*
 * - `tv` :	*Top Anime TV Series*
 * - `ova` : *Top Anime OVA Series*
 * - `movie` : *Top Anime Movies*
 * - `special` : *Top Anime Specials*
 * - `bypopularity` :	*Top Anime by Popularity*
 * - `favorite` :	*Top Favorited Anime*
 * @since 1.4.3
 */
type TMALRankingType =
  | "all"
  | "airing"
  | "upcoming"
  | "tv"
  | "ova"
  | "movie"
  | "special"
  | "bypopularity"
  | "favorite";

/**
 * Manga ranking types.
 *
 * - `all`: *All*
 * - `manga` :	*Top Manga*
 * - `novels` :	*Top Novels*
 * - `oneshots`: *Top One-shots*
 * - `doujin`	: *Top Doujinshi*
 * - `manhwa`	: *Top Manhwa*
 * - `manhua`	: *Top Manhua*
 * - `bypopularity` :	*Most Popular*
 * - `favorite`	: *Most Favorited*
 * @since 1.4.3
 */
type TMMLRankingType =
  | "all"
  | "manga"
  | "novels"
  | "oneshots"
  | "doujin"
  | "manhwa"
  | "manhua"
  | "bypopularity"
  | "favorite";

/**
 * All seasons in the year.
 *
 * - `spring` : *April*, *May*, *June*
 * - `summer` : *July*, *August*, *September*
 * - `fall` : *October*, *November*, *December*
 * - `winter` : *January*, *February*, *March*
 * @since 1.4.3
 */
type TMALSeason = "spring" | "summer" | "fall" | "winter";

/**
 * Anime age rating categories.
 *
 * - `g` : *All Ages*
 * - `pg` : *Children*
 * - `pg_13` : *Teens 13 and Older*
 * - `r` : *17+ (violence & profanity)*
 * - `r+` : *Profanity & Mild Nudity*
 * - `rx`	: *Hentai*
 * @since 1.4.3
 */
type TMALRating = "g" | "pg" | "pg_13" | "r" | "r+" | "rx";

/**
 * Anime / Manga NSFW categories.
 *
 * - `white` : *This work is safe for work*
 * - `gray` : *This work may be not safe for work*
 * - `black` : *This work is not safe for work*
 * @since 1.4.3
 */
type TMALNsfwCategories = "white" | "grey" | "black";

/**
 * Anime media types.
 * @since 1.4.3
 */
type TMALMediaTypes =
  | "unknown"
  | "tv"
  | "ova"
  | "movie"
  | "special"
  | "ona"
  | "music";

/**
 * Manga media types.
 * @since 1.4.3
 */
type TMMLMediaTypes =
  | "manga"
  | "novel"
  | "one_shot"
  | "doujinshi"
  | "manhwa"
  | "manhua"
  | "oel";

/**
 * Anime status.
 * @since 1.4.3
 */
type TMALStatus = "finished_airing" | "currently_airing" | "not_yet_aired";

/**
 * Manga status.
 * @since 1.4.3
 */
type TMMStatus = "finished" | "currently_plublishing" | "not_yet_published";

/**
 * User anime status.
 * @since 1.4.3
 */
type TMALUserStatus =
  | "watching"
  | "completed"
  | "on_hold"
  | "dropped"
  | "plan_to_watch";

/**
 * User manga status.
 * @since 1.4.3
 */
type TMMLUserStatus =
  | "reading"
  | "completed"
  | "on_hold"
  | "dropped"
  | "plan_to_read";

/**
 * Content related to the anime or manga.
 * @since 1.4.3
 */
type TMALRelationNode =
  | "sequel"
  | "prequel"
  | "alternative_setting"
  | "alternative_version"
  | "side_story"
  | "parent_story"
  | "summary"
  | "full_story";

/**
 * Anime / Manga sources.
 * @since 1.4.3
 */
type TMALSources =
  | "other"
  | "original"
  | "manga"
  | "4_koma_manga"
  | "web_manga"
  | "digital_manga"
  | "novel"
  | "light_novel"
  | "visual_novel"
  | "game"
  | "card_game"
  | "book"
  | "picture_book"
  | "radio"
  | "music";

// Interfaces

/**
 * Basic parameters of the API.
 * @since 1.4.3
 */
interface IMALBasicParams {
  /**
   * Pagination system.
   * - `0` : First page
   * - `1` : Second page
   * - `2` : Third page
   * - . . .
   */
  offset?: number | `${number}`;

  /**
   * Limiting the results.
   * - `MyAnimeList#find`
   *    - Default: `100`
   *    - Maximum: `100`
   * - `MyAnimeList#ranking`
   *    - Default: `100`
   *    - Maximum: `500`
   * - `MyAnimeList#seasonal`
   *    - Default: `100`
   *    - Maximum: `500`
   *
   * These limits also apply on the `MyMangaList` methods.
   */
  limit?: number | `${number}`;
}

/**
 * Interface parameter for `find` methods.
 * @since 1.4.0
 */
interface IMALFind extends IMALBasicParams {
  /**
   * Finding anime or manga based on a query.
   */
  q: string;
}

/**
 * Interface parameter for `MyAnimeList#details` method.
 * @since 1.4.0
 */
interface IMALDetails {
  /**
   * Unique ID of the anime.
   */
  anime_id: number;
}

/**
 * Interface parameter for `MyMangaList#details` method.
 * @since 1.4.3
 */
interface IMMLDetails {
  /**
   * Unique ID of the manga.
   */
  manga_id: number;
}

/**
 * Interface parameter for `MyAnimeList#ranking` method.
 * @since 1.4.3
 */
interface IMALRanking extends IMALBasicParams {
  /**
   * Listing animes based on any ranking category.
   *
   * - `all` :	*Top Anime Series*
   * - `airing` :	*Top Airing Anime*
   * - `upcoming` :	*Top Upcoming Anime*
   * - `tv` :	*Top Anime TV Series*
   * - `ova` : *Top Anime OVA Series*
   * - `movie` : *Top Anime Movies*
   * - `special` : *Top Anime Specials*
   * - `bypopularity` :	*Top Anime by Popularity*
   * - `favorite` :	*Top Favorited Anime*
   */
  ranking_type: TMALRankingType;
}

/**
 * Interface parameter for `MyAnimeList#seasonal` method.
 * @since 1.4.3
 */
interface IMALSeason extends IMALBasicParams {
  /**
   * Listing animes based on the year of publication.
   */
  year: number;

  /**
   * Listing animes based on the season of publication.
   *
   * - `spring` : *April*, *May*, *June*
   * - `summer` : *July*, *August*, *September*
   * - `fall` : *October*, *November*, *December*
   * - `winter` : *January*, *February*, *March*
   */
  season: TMALSeason;

  /**
   * Sort animes.
   */
  sort?: "anime_score" | "anime_num_list_users";
}

/**
 * Interface parameter for `MyMangaList#ranking` method.
 * @since 1.4.3
 */
interface IMMLRanking extends IMALBasicParams {
  /**
   * Listing animes based on a ranking type.
   *
   * - `all`: *All*
   * - `manga` :	*Top Manga*
   * - `novels` :	*Top Novels*
   * - `oneshots`: *Top One-shots*
   * - `doujin`	: *Top Doujinshi*
   * - `manhwa`	: *Top Manhwa*
   * - `manhua`	: *Top Manhua*
   * - `bypopularity` :	*Most Popular*
   * - `favorite`	: *Most Favorited*
   */
  ranking_type: TMMLRankingType;
}

/**
 * Anime statistics status.
 * @since 1.4.3
 */
interface IMALStatisticsStatus {
  /**
   * How much users are currently watching this anime.
   */
  watching: number;

  /**
   * How much users have completed this anime.
   */
  completed: number;

  /**
   * How much users are still on progress.
   */
  on_hold: number;

  /**
   * How much users have lost the want to watch this anime.
   */
  dropped: number;

  /**
   * How much users are planning to watch this anime in the future.
   */
  plan_to_watch: number;
}

/**
 * Anime statistics
 * @since 1.4.3
 */
interface IMALStatistics {
  status: IMALStatisticsStatus;
  num_list_users: number;
}

/**
 * @since 1.4.3
 */
interface IMALMyListStatus {
  status: TMALUserStatus;
  score: number;
  num_episodes_watched: number;

  /**
   * If the user is rewatching this anime.
   */
  is_rewatching: boolean;

  /**
   * When the user did begin watching this anime.
   */
  start_date: Date | null;

  /**
   * When the user did finish watching this anime.
   */
  finish_date: Date | null;

  priority: number;

  /**
   * How much the user did rewatch this anime.
   */
  num_times_rewatched: number;

  /**
   * How much the user did rewatch this anime.
   */
  rewatch_value: number;

  tags: string[];
  comments: string;

  /**
   * Last update of this anime in this user list.
   */
  updated_at: Date;
}

/**
 * @since 1.4.3
 */
interface IMMLMyListStatus {
  status: TMMLUserStatus | null;
  score: number;

  /**
   * How much volumes the user did read this manga.
   */
  num_volumes_read: number;

  /**
   * How much chapters the user did read this manga.
   */
  num_chapters_read: number;

  /**
   * If the user is rereading this manga.
   */
  is_rereading: boolean;

  /**
   * When the user did begin reading this manga.
   */
  start_date: Date | null;

  /**
   * When the user did finish reading this manga.
   */
  finish_date: Date | null;

  priority: number;

  /**
   * How much the user did reread this manga.
   */
  num_times_reread: number;

  reread_value: number;
  tags: string[];
  /**
   * Comments that made the user on this manga.
   */
  comments: string;

  /**
   * Last update of this manga in the user list.
   */
  updated_at: Date;
}

/**
 * @since 1.4.3
 */
interface IMALBroadCast {
  day_of_the_week: string;
  start_time: string | null;
}

/**
 * @since 1.4.3
 */
interface IMALMainPicture {
  medium: string;
  large: string | null;
}

/**
 * The available alternative titles.
 * - `synonyms` : *One Punch Man 3rd Season*, *OPM 3*
 * - `ja` : *ワンパンマン 3*
 * - `en` : *One-Punch Man Season 3*
 * @since 1.4.3
 */
interface IMALAlternativeTitles {
  /**
   * Different synonyms of the main title.
   * - *One Punch Man 3rd Season*, *OPM 3*
   */
  synonyms: string[] | null;

  /**
   * The japanese version of the main title.
   * - *ワンパンマン 3*
   */
  ja: string | null;

  /**
   * The english version of the main title.
   * - *One-Punch Man Season 3*
   */
  en: string | null;
}

/**
 * The MyAnimeList "node".
 * @since 1.4.0
 */
interface IMALNode {
  node: {
    id: number;
    title: string;
    main_picture: IMALMainPicture;
  };
  relation_type: TMALRelationNode;
  relation_type_formatted: string;
  role: string | null;
  num_recommendations: number | null;
}

/**
 * The additional interface of the `MyAnimeList`/`MyMangaList#ranking` method.
 * @since 1.4.3
 */
interface IMALRankingRes {
  ranking: {
    rank: number;
    previous_rank: number | null;
  };
}

/**
 * The additional interface of the `MyAnimeList#seasonal` method.
 * @since 1.4.3
 */
interface IMALSeasonRes {
  season: {
    year: number;
    season: TMALSeason;
  };
}

/**
 * @since 1.4.3
 */
interface IMALNameAndId {
  id?: number;
  name?: string;
}
/**
 * Basic JSON response of an anime.
 * @since 1.4.0
 */
interface IMALAnime {
  /**
   * The ID of this anime. (MyAnimeList related)
   */
  id: number;

  /**
   * The main title.
   */
  title: string;

  /**
   * The main picture.
   */
  main_picture: IMALMainPicture;

  /**
   * Alternative titles. (**synonyms**, **ja**, **en**)
   */
  alternative_titles: IMALAlternativeTitles;

  /**
   * The start date of the anime airing.
   */
  start_date: string | null;

  /**
   * The end date of the anime airing.
   */
  end_date: string | null;

  /**
   * The synopsis (description) of the anime.
   */
  synopsis: string | null;

  mean: number | null;
  rank: number | null;
  popularity: number | null;
  num_list_users: number;
  num_scoring_users: number;

  /**
   * The different NSFW categories of MyAnimeList.
   *
   * - `white` : *This work is safe for work*
   * - `gray` : *This work may be not safe for work*
   * - `black` : *This work is not safe for work*
   */
  nsfw: TMALNsfwCategories | null;

  /**
   * Creation date of the document. (in myanimelist)
   */
  created_at: Date;

  /**
   * Last update of the document. (in myanimelist)
   */
  updated_at: Date;

  media_type: TMALMediaTypes;
  status: TMALStatus;
  genres: IMALNameAndId[];
  my_list_status: IMALMyListStatus | null;
  num_episodes: number;

  /**
   * Starting season information.
   */
  start_season: {
    /**
     * Beginning year of the anime production.
     */
    year: number;

    /**
     * Beginning season of the anime production.
     */
    season: TMALSeason;
  } | null;

  broadcast: IMALBroadCast | null;
  source: TMALSources | null;
  average_episode_duration: number | null;

  /**
   * The different rating categories of MyAnimeList.
   *
   * - `g` : *All Ages*
   * - `pg` : *Children*
   * - `pg_13` : *Teens 13 and Older*
   * - `r` : *17+ (violence & profanity)*
   * - `r+` : *Profanity & Mild Nudity*
   * - `rx`	: *Hentai*
   * */
  rating: TMALRating;

  pictures: IMALMainPicture[];
  background: string | null;

  /**
   * Related anime content based on this anime.
   */
  related_anime: IMALNode[];

  /**
   * Related manga content based on this anime.
   */
  related_manga: IMALNode[];

  /**
   * Recommended content based on this anime.
   */
  recommendations: IMALNode[];

  /**
   * Studio(s) that made the anime.
   */
  studios: IMALNameAndId[];

  statistics: IMALStatistics | null;
}

/**
 * @since 1.4.3
 */
interface IMALManga {
  /**
   * The ID of this manga. (MyAnimeList related)
   */
  id: number;

  /**
   * The main title.
   */
  title: string;

  /**
   * The main picture.
   */
  main_picture: IMALMainPicture;

  alternative_titles: IMALAlternativeTitles;
  start_date: string | null;
  end_date: string | null;
  synopsis: string | null;
  mean: number | null;
  rank: number | null;
  popularity: number | null;
  num_list_users: number;
  num_scoring_users: number;

  /**
   * The different NSFW categories of MyAnimeList.
   *
   * - `white` : *This work is safe for work*
   * - `gray` : *This work may be not safe for work*
   * - `black` : *This work is not safe for work*
   */
  nsfw: TMALNsfwCategories | null;

  created_at: Date;
  updated_at: Date;
  media_type: TMMLMediaTypes;
  status: TMMStatus;
  genres: IMALNameAndId[];
  my_list_status: IMMLMyListStatus | null;
  num_volumes: number;
  num_chapters: number;
  authors: {
    node: {
      id: number;
      first_name: string;
      last_name: string;
    };
  }[];
  broadcast: IMALBroadCast;
  source: string;
  average_episode_duration: number;
  pictures: IMALMainPicture;
  background: string | null;
  related_anime: IMALNode[];
  related_manga: IMALNode[];
  recommendations: IMALNode[];
  serialization: IMALNode[];
}

/**
 * @template M - A readonly model type extending either `IMALAnime` or `IMALManga`.
 *               Determines the shape of each media node.
 *
 * @template F - A readonly array of keys from `M` (filtered through `TMALFields`),
 *               specifying which additional fields should be included for each node.
 *               These fields are picked dynamically and merged into the node.
 *
 * @template A - An optional readonly metadata object extending ranking, seasonal,
 *               or any custom response properties. Used to enrich the response
 *               with extra contextual information.
 *
 * @since 1.4.3
 */
type IMALList<
  M extends Readonly<IMALAnime | IMALManga>,
  F extends readonly TMALFields<M>[],
  A extends Readonly<IMALRankingRes | IMALSeasonRes | {}>,
> = {
  data: {
    node: Pick<M, F[number]> & {
      id: number;
      title: string;
      main_picture: IMALMainPicture;
    };
  }[];
  paging: {
    next: string | null;
    previous: string | null;
  };
} & A;

export type {
  // Interfaces
  IMALAlternativeTitles,
  IMALAnime,
  IMALBasicParams,
  IMALBroadCast,
  IMALDetails,
  IMALError,
  IMALFind,
  IMALList,
  IMALMainPicture,
  IMALManga,
  IMALMyListStatus,
  IMALNode,
  IMALRanking,
  IMALRankingRes,
  IMALSeason,
  IMALSeasonRes,
  IMALStatistics,
  IMALStatisticsStatus,
  IMMLDetails,
  IMMLMyListStatus,
  IMMLRanking,

  // Types
  TMALFields,
  TMALMediaTypes,
  TMALNsfwCategories,
  TMALRankingType,
  TMALRating,
  TMALRelationNode,
  TMALSeason,
  TMALSources,
  TMALStatus,
  TMALUserStatus,
  TMMLMediaTypes,
  TMMLRankingType,
  TMMLUserStatus,
  TMMStatus,
};
