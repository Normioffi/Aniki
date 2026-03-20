// Handling errors

import { AnikiCore, AnikiHooks, FetchConfig } from "../../core/index";
import type {
  // Interfaces
  IKitsuAnime,
  IKitsuAnimeSingle,
  IKitsuChapter,
  IKitsuChapters,
  IKitsuEpisode,
  IKitsuEpisodes,
  IKitsuError,
  IKitsuManga,
  IKitsuMangaSingle,
  TKitsuAnimeFind,
  TKitsuAnimeList,
  TKitsuMangaFind,
  TKitsuMangaList,
} from "./interfaces";

// Main classes.
/**
 * @class
 * @extends {AnikiCore} The core for the fetch method.
 * @description A class using the Kitsu.app API to retrieve anime information with multiple methods.
 * @constructor
 *
 * @template AT A token-type flag that switches certain API response types between restricted and unrestricted variants.
 *
 * @example
 * // CJS
 * const { AnimeKitsu } = require("aniki");
 * // ESM / TS
 * import { AnimeKitsu } from "aniki";
 *
 *
 * // If you got an access token with your custom auth system:
 * const anime = new AnimeKitsu("abdcefg123456789");
 *
 * //Need to add things in the configuration?
 * const anime = new AnimeKitsu("", {
 *  headers: {
 *    // ...
 *  }
 * })
 *
 * anime.find({ query: "Oshi no Ko" }).then(a => console.log(a.data[0]));
 * anime.find(3163).then(a => console.log(a.data));
 * anime.findUnique(3600).then(a => console.log(a.data));
 *
 * @since 1.0.2
 */
declare class AnimeKitsu<AT extends string = ""> extends AnikiCore {
  private config: FetchConfig;

  constructor(
    access_token?: AT,
    /**
     * Any supplementary configuration that you need to add for the fetch function.
     */
    config?: FetchConfig,
  );

  /**
   * @method
   * @description Searches for anime using the provided parameters.
   *
   * @param params The search parameters for the request.
   * @param hooks Object with functions inside to execute code before, after a request and on error.
   * @returns A Promise containing the anime results, or `undefined` if an error occurs.
   *
   * @since 1.0.2
   */
  find(
    params: TKitsuAnimeFind<AT>,
    hooks: AnikiHooks<IKitsuError>,
  ): Promise<Readonly<IKitsuAnime> | undefined>;
  /**
   * @method
   * @description Fetch a specific anime using an ID.
   *
   * @param param The anime ID.
   * @param hooks Object with functions inside to execute code before, after a request and on error.
   * @returns A Promise containing the single anime result, or `undefined` if an error occurs.
   *
   * @since 1.0.2
   */
  find(
    param: number,
    hooks: AnikiHooks<IKitsuError>,
  ): Promise<Readonly<IKitsuAnimeSingle> | undefined>;

  /**
   * @method
   * @description Retrieves an anime by its ID.
   *
   * @param id The anime ID.
   * @param hooks Object with functions inside to execute code before, after a request and on error.
   * @returns A Promise containing the single anime result, or `undefined` if an error occurs.
   *
   * @since 1.3.0
   */
  findUnique(
    id: number | `${number}`,
    hooks: AnikiHooks<IKitsuError>,
  ): Promise<Readonly<IKitsuAnimeSingle> | undefined>;

  /**
   *
   * @method
   * @description Retrieves a list of anime using different parameters.
   * 
   * @param params The parameters for the request.
   * @param hooks Object with functions inside to execute code before, after a request and on error.
   * @returns A Promise containing the anime list, or `undefined` if an error occurs.

   * @since 1.0.2
   *
   */
  findMany(
    params: TKitsuAnimeList<AT>,
    hooks: AnikiHooks<IKitsuError>,
  ): Promise<Readonly<IKitsuAnime> | undefined>;

  /**
   * @method
   * @description Retrieves a specific anime episode using its episode ID.
   *
   * @param id The episode ID.
   * @param hooks Object with functions inside to execute code before, after a request and on error.
   * @returns A Promise containing the episode data, or `undefined` if an error occurs.
   *
   * @since 1.3.0
   */
  episode(
    id: number | `${number}`,
    hooks: AnikiHooks<IKitsuError>,
  ): Promise<Readonly<IKitsuEpisode> | undefined>;

  /**
   * @method
   * @description Retrieves all episodes for a given anime using its media ID.
   *
   * @param mediaId The parameters to find all episodes of an anime using its ID.
   * @param hooks Object with functions inside to execute code before, after a request and on error.
   * @returns A Promise containing all episodes for the anime, or `undefined` if an error occurs.
   *
   * @since 1.3.5
   */
  episodes(
    mediaId: number | `${number}`,
    hooks: AnikiHooks<IKitsuError>,
  ): Promise<Readonly<IKitsuEpisodes> | undefined>;
}

/**
 * @class
 * @extends {AnikiCore} The core for the fetch method.
 *
 * @description A class using the Kitsu.app API to retrieve manga information with multiple methods.
 * @constructor
 *
 * @template AT A token-type flag that switches certain API response types between restricted and unrestricted variants.
 *
 * @example
 * // CJS
 * const { MangaKitsu } = require("aniki");
 * // ESM / TS
 * import { MangaKitsu } from "aniki";
 *
 * const manga = new MangaKitsu();
 *
 * // If you got an access token with your custom auth system:
 * const manga = new MangaKitsu("abdcefg123456789");
 *
 * //Need to add things in the configuration?
 * const manga = new MangaKitsu("", {
 *  headers: {
 *    // ...
 *  }
 * })
 *
 * manga.find({ query: "Oshi no Ko" }).then(m => console.log(m.data[0]));
 * manga.findUnique(3600).then(m => console.log(m.data));
 *
 * @since 1.0.2
 */
declare class MangaKitsu<AT extends string = ""> extends AnikiCore {
  private config: FetchConfig;

  constructor(
    access_token?: AT,
    /**
     * Any supplementary configuration that you need to add for the fetch function.
     */
    config?: FetchConfig,
  );

  // Methods
  /**
   * @method
   * @description Searches for manga using the provided parameters.
   *
   * @param params The search parameters for the request.
   * @param hooks Object with functions inside to execute code before, after a request and on error.
   * @returns A Promise containing the manga list.
   *
   * @since 1.0.2
   */
  find(
    params: TKitsuMangaFind<AT>,
    hooks: AnikiHooks<IKitsuError>,
  ): Promise<Readonly<IKitsuManga> | undefined>;

  /**
   * @method
   * @description Get a specific manga with its id.
   *
   * @param params The ID for the request. (example: 1265)
   * @param hooks Object with functions inside to execute code before, after a request and on error.
   * @returns A Promise containing the single manga result, or `undefined` if an error occurs.
   *
   * @since 1.0.2
   */
  find(
    param: number,
    hooks: AnikiHooks<IKitsuError>,
  ): Promise<Readonly<IKitsuMangaSingle> | undefined>;

  /**
   * @method
   * @description Retrieves a manga by its ID.
   *
   * @param id The manga ID.
   * @param hooks Object with functions inside to execute code before, after a request and on error.
   * @returns A Promise containing a single manga, or `undefined` if an error occurs.
   *
   * @since 1.3.0
   */
  findUnique(
    id: number | `${number}`,
    hooks: AnikiHooks<IKitsuError>,
  ): Promise<Readonly<IKitsuMangaSingle> | undefined>;

  /**
   * @method
   * @description Retrieves a list of anime.
   *
   * @param params The parameters for the request.
   * @param hooks Object with functions inside to execute code before, after a request and on error.
   * @returns A Promise containing the manga list.
   *
   * @since 1.0.2
   */
  findMany(
    params: TKitsuMangaList<AT>,
    hooks: AnikiHooks<IKitsuError>,
  ): Promise<Readonly<IKitsuManga> | undefined>;

  /**
   * @method
   * @description Retrieves a manga chapter by its ID.
   *
   * @param id The chapter ID.
   * @param hooks Object with functions inside to execute code before, after a request and on error.
   * @returns A Promise containing the chapter.
   *
   * @since 1.3.0
   */
  chapter(
    id: number | `${number}`,
    hooks: AnikiHooks<IKitsuError>,
  ): Promise<Readonly<IKitsuChapter> | undefined>;

  /**
   * @method
   * @description
   *
   * @param mangaId Retrieves all chapters for a manga by its ID.
   * @param hooks Object with functions inside to execute code before, after a request and on error.
   * @returns A Promise containing all chapters for the manga.
   *
   * @since 1.3.5
   */
  chapters(
    mangaId: number | `${number}`,
    hooks: AnikiHooks<IKitsuError>,
  ): Promise<Readonly<IKitsuChapters> | undefined>;
}

export type * from "./interfaces";
export { AnimeKitsu, MangaKitsu };
