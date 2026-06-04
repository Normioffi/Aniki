import { AnikiHooks, FetchConfig } from "../../core/index";
import type {
  IMALAnime,
  IMALDetails,
  IMALError,
  IMALFind,
  IMALManga,
  IMALRanking,
  IMALRankingRes,
  IMALSeason,
  IMALSeasonRes,
  IMMLDetails,
  IMMLRanking,
  TMALFields,
  TMALList,
} from "./interfaces";

/**
 * @class
 * @description A client class for interacting with the MyAnimeList API to retrieve anime information.
 * @constructor
 *
 * @example
 * // CJS
 * const { MyAnimeList } = require("aniki");
 * // ESM / TS
 * import { MyAnimeList } from "aniki";
 *
 * // Using your client id.
 * new MyAnimeList({ client_id: "ABcDEFghIJk123456789" });
 *
 * // Using an access token with your own authentification system.
 * new MyAnimeList({ access_token: "abCDeFGhiJK123456" });
 *
 * // Do not use both at the same time.
 * new MyAnimeList({ client_id: "ABcDEFghIJk123456789", access_token: "abCDeFGhiJK123456" }); // Error.
 *
 *
 * // Finding anime
 * anime.find({ q: "Oshi no ko", limit: 10 }).then(r => console.log(r));
 *
 * // Finding one anime and get the details.
 * anime.details({ anime_id: 272 }).then(r => console.log(r));
 *
 * // Listing anime by a rank.
 * anime.ranking({ ranking_type: "tv" }).then(r => console.log(r); // Will return the top TV anime series.
 *
 * // Listing anime by a year and the season.
 * anime.seasonal({ year: 2020, season: "fall"}).then(r => console.log(r); // Will return anime that have been published at this year and season.
 *
 * @since 1.4.0
 */
declare class MyAnimeList {
  private config: FetchConfig;
  constructor(
    {
      client_id,
    }: {
      /**
       *  Your MyAnimeList API `client_id` (https://myanimelist.net/apiconfig)
       */
      client_id: string;
    },
    /**
     * Any supplementary configuration that you need to add for the fetch function.
     */
    config?: FetchConfig,
  );
  constructor(
    {
      access_token,
    }: {
      /**
       *  An `access_token` belonging to an authenticated user.
       */
      access_token: string;
    },
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
   * @template F A list of additional fields to include from the `IMALAnime` type.
   * @returns A promise containing the search results, or `undefined` if an error occurs.
   *
   * @since 1.4.0
   */
  find<F extends readonly TMALFields<IMALAnime>[] = readonly []>(
    params: IMALFind & { fields?: F },
    hooks?: AnikiHooks<IMALError>,
  ): Promise<Readonly<TMALList<IMALAnime, F, {}>> | undefined>;

  /**
   * @method
   * @description Retrieves detailed information for a specific anime.
   *
   * @param params The fetch parameters for the request.
   * @param hooks Object with functions inside to execute code before, after a request and on error.
   * @template F A list of additional fields to include from the `IMALAnime` type.
   * @returns A promise containing the anime details, or `undefined` if an error occurs.
   *
   * @since 1.4.0
   */
  details<F extends readonly TMALFields<IMALAnime>[] = readonly []>(
    params: IMALDetails & { fields?: F },
    hooks?: AnikiHooks<IMALError>,
  ): Promise<
    | Readonly<
        Pick<IMALAnime, F[number]> & {
          id: number;
          title: string;
          main_picture: {
            medium: string;
            large: string;
          };
        }
      >
    | undefined
  >;
  /**
   * @method
   * @description Retrieves a ranked list of anime based on the provided ranking type.
   *
   * @param params The ranking parameters for the request.
   * @param hooks Object with functions inside to execute code before, after a request and on error.
   * @template F A list of additional fields to include from the `IMALAnime` type.
   * @returns A promise containing the ranking list response, or `undefined` if an error occurs.
   *
   * @since 1.4.3
   */
  ranking<F extends readonly TMALFields<IMALAnime>[] = readonly []>(
    params: IMALRanking & { fields?: F },
    hooks?: AnikiHooks<IMALError>,
  ): Promise<Readonly<TMALList<IMALAnime, F, IMALRankingRes>> | undefined>;

  /**
   * @method
   * @description Retrieves seasonal anime for a given year and season.
   *
   * @param params The parameters for the request.
   * @param hooks Object with functions inside to execute code before, after a request and on error.
   * @template F A list of additional fields to include from the `IMALAnime` type.
   * @returns A promise containing the seasonal list response, or `undefined` if an error occurs.
   *
   * @since 1.4.3
   */
  seasonal<F extends readonly TMALFields<IMALAnime>[] = readonly []>(
    params: IMALSeason & { fields?: F },
    hooks?: AnikiHooks<IMALError>,
  ): Promise<Readonly<TMALList<IMALAnime, F, IMALSeasonRes>> | undefined>;
}

/**
 * @class
 *
 * @description A client class for interacting with the MyAnimeList API to retrieve manga information.
 * @constructor
 *
 * @example
 * // CJS
 * const { MyMangaList } = require("aniki");
 *
 * // ESM / TS
 * import { MyMangaList } from "aniki";
 *
 * // Using your client ID.
 * new MyMangaList({ client_id: "ABcDEFghIJk123456789" });
 *
 * // Using an access token from your own authentication system
 * new MyMangaList({ access_token: "abCDeFGhiJK123456" });
 *
 * // Do not use the two at the same time.
 * new MyMangaList({ client_id: "ABcDEFghIJk123456789", access_token: "abCDeFGhiJK123456" }); // Error.
 *
 *
 * // Searching for any manga
 * manga.find({ q: "Oshi no ko", limit: 10 }).then(r => console.log(r));
 *
 * // Fetching a specific manga
 * manga.details({ manga_id: 212 }).then(r => console.log(r));
 *
 * // Listing manga by ranking.
 * manga.ranking({ ranking_type: "favorite" }).then(r => console.log(r);
 *
 * @since 1.4.3
 */
declare class MyMangaList {
  private config: FetchConfig;
  constructor(
    {
      client_id,
    }: {
      /**
       *  Your MyAnimeList API `client_id` (https://myanimelist.net/apiconfig)
       */
      client_id: string;
    },
    /**
     * Any supplementary configuration that you need to add for the fetch function.
     */
    config?: FetchConfig,
  );
  constructor(
    {
      access_token,
    }: {
      /**
       *  An `access_token` belonging to an authenticated user.
       */
      access_token: string;
    },
    /**
     * Any supplementary configuration that you need to add for the fetch function.
     */
    config?: FetchConfig,
  );

  /**
   * @method
   * @description Searches for manga using the provided parameters.
   *
   * @param params The search parameters for the request.
   * @param hooks Object with functions inside to execute code before, after a request and on error.
   * @template F A list of additional fields to include from the `IMALManga` type.
   * @returns A promise containing the search results, or `undefined` if an error occurs.
   *
   * @since 1.4.3
   */
  find<F extends readonly TMALFields<IMALManga>[] = readonly []>(
    params: IMALFind & { fields?: F },
    hooks?: AnikiHooks<IMALError>,
  ): Promise<Readonly<TMALList<IMALManga, F, {}>> | undefined>;

  /**
   * @method
   * @description Retrieves almost all informations for a specific manga.
   *
   * @param params The fetch parameters for the request.
   * @param hooks Object with functions inside to execute code before, after a request and on error.
   * @template F A list of additional fields to include from the `IMALManga` type.
   * @returns A promise containing the manga details, or `undefined` if an error occurs.
   *
   * @since 1.4.3
   */
  details<F extends readonly TMALFields<IMALManga>[] = readonly []>(
    params: IMMLDetails & { fields?: F },
    hooks?: AnikiHooks<IMALError>,
  ): Promise<
    | Readonly<
        Pick<IMALManga, F[number]> & {
          id: number;
          title: string;
          main_picture: {
            medium: string;
            large: string;
          };
        }
      >
    | undefined
  >;

  /**
   * @method
   * @description Retrieves a ranked list of manga based on the provided ranking type.
   *
   * @param params The ranking request parameters.
   * @param hooks Object with functions inside to execute code before, after a request and on error.
   * @template F A list of additional fields to include from the `IMALManga` type.
   * @returns A promise containing the ranking list response, or `undefined` if an error occurs.
   *
   * @since 1.4.3
   */
  ranking<F extends readonly TMALFields<IMALManga>[] = readonly []>(
    params: IMMLRanking & { fields?: F },
    hooks?: AnikiHooks<IMALError>,
  ): Promise<Readonly<TMALList<IMALManga, F, IMALRankingRes>> | undefined>;
}

export type * from "./interfaces";
export { MyAnimeList, MyMangaList };
