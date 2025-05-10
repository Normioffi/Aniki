/**
 * @file This file contain the AnimeKitsu class, used to get anime informations from the Kitsu.app API.
 */

import {
  IKitsuAnime,
  IKitsuAnimeFind,
  IKitsuAnimeList,
  IKitsuAnimeSingle,
  IKitsuEpisode,
  IKitsuEpisodes,
  IKitsuError,
  TKitsuHandleError,
} from "./interfaces/index.js";

// The url
const url = "https://kitsu.app/api/edge";

// Main class
/**
 * @class
 * @since 1.0.2
 * @description AnimeKitsu is a class that's using the Kitsu.app API, with this class you can find animes informations in different ways
 * @example
 * Basic usage:
 * ```js
 * // CJS
 * const { AnimeKitsu } = require("aniki")
 * // JS ESM or TS
 * import { AnimeKitsu } from "aniki";
 *
 * const anime = new AnimeKitsu();
 *
 * // Normal
 * anime.find({ query: "Oshi no Ko" }).then(a => console.log(a.data[0]));
 *
 * // Find by an id
 * anime.findById(3600).then(a => console.log(a.data));
 *
 * // Handling errors
 * 
 * anime.find(
 *  { query: "Oshi no ko" },
 *  async ({ apiError, moduleError }, status) => {
 *    if (apiError) console.error(await apiError);
 *    if (moduleError) console.error(await moduleError);
 *  });

 *
 * // Best practice to avoid using .then() method is by using asynchronous function
 *
 * async function getAnime(query) {
 * // ...
 *  const a = await anime.find({ query: query })
 * // ...
 * }
 *
 * ```
 */
class AnimeKitsu {
  private defaultHandleError: TKitsuHandleError = async (error) => {
    if (error.apiError)
      console.error(
        "Aniki: Unhandled API error:",
        (await error.apiError).errors
      );
    if (error.moduleError)
      console.error("Aniki: Unhandled error:", await error.moduleError);
  };
  // Methods
  /**
   * @method
   * @param {IKitsuAnimeFind} params - The parameters for the request.
   * @param {TKitsuHandleError} [handleError] - Used for handling errors from the method and the API.
   * @description The find method is used to find animes with different parameters.
   * @returns {Promise<IKitsuAnime | undefined>} - Returns a Promise with the IKitsuAnime inteface.
   * @example
   * ```js
   * // Searching an anime
   * anime.find({ query: "Oshi no ko", offset: 0 }).then(r=> console.log(r.data[0]))
   * ```
   * @since 1.0.2
   */
  async find(
    params: IKitsuAnimeFind,
    handleError?: TKitsuHandleError
  ): Promise<IKitsuAnime | undefined> {
    const parameters = {};
    if (!params.query) {
      await (handleError || this.defaultHandleError)(
        {
          moduleError: "'query' in AnimeKitsu#find is empty.",
        },
        400
      );
      return;
    }
    Object.assign(parameters, { "filter[text]": params.query });

    if (params.offset) {
      if (isNaN(params.offset as any)) {
        await (handleError || this.defaultHandleError)(
          {
            moduleError: "'offset' in AnimeKitsu#find is not a number.",
          },
          400
        );
        return;
      }
    }
    Object.assign(parameters, { "page[offset]": params.offset ?? 0 });
    if (params.perPage) {
      if (isNaN(params.perPage as any)) {
        await (handleError || this.defaultHandleError)(
          {
            moduleError: "'perPage' in AnimeKitsu#find is not a number.",
          },
          400
        );
        return;
      }
      if ((params.perPage as number) > 20) {
        await (handleError || this.defaultHandleError)(
          {
            moduleError:
              "'perPage' in MangaKitsu#find should be less than or equal to 20.",
          },
          400
        );
        return;
      }
    }
    Object.assign(parameters, { "page[limit]": params.perPage ?? 10 });

    if (params.averageRating)
      Object.assign(parameters, {
        "filter[averageRating]": params.averageRating,
      });

    if (params.season)
      Object.assign(parameters, { "filter[season]": params.season });
    if (params.ageRating)
      Object.assign(parameters, { "filter[ageRating]": params.ageRating });

    if (params.year) Object.assign(parameters, { "filter[year]": params.year });

    if (params.streamers)
      Object.assign(parameters, { "filter[streamers]": params.streamers });

    if (params.categories)
      Object.assign(parameters, { "filter[categories]": params.categories });

    const p = new URLSearchParams(parameters);
    const res = await fetch(`${url}/anime?${p}`, {
      headers: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json",
      },
    });
    if (!res.ok) {
      await (handleError || this.defaultHandleError)(
        {
          apiError: (await res.json()) as Promise<IKitsuError>,
        },
        res.status
      );
      return;
    }

    return res.json() as Promise<IKitsuAnime>;
  }
  /**
   * @method
   * @param {number | `${number}`} id - The ID of the anime.
   * @param {TKitsuHandleError} [handleError] - Used for handling errors from the method and the API.
   * @description Get an anime with the ID.
   * @returns {Promise<IKitsuAnimeSingle | undefined>} - Return a Promise.
   * @example
   * ```js
   * anime.findById(30).then(r => console.log(r.data.id));
   * ```
   * @since 1.3.0
   */
  async findById(
    id: number | `${number}`,
    handleError?: TKitsuHandleError
  ): Promise<IKitsuAnimeSingle | undefined> {
    if (!id) {
      await (handleError || this.defaultHandleError)(
        {
          moduleError: "'id' in AnimeKitsu#findById is empty.",
        },
        400
      );
      return;
    }
    if (isNaN(id as any)) {
      await (handleError || this.defaultHandleError)(
        {
          moduleError: "'id' in AnimeKitsu#findById is not a number.",
        },
        400
      );
      return;
    }
    const res = await fetch(`${url}/anime/${id}`, {
      headers: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json",
      },
    });
    if (!res.ok) {
      await (handleError || this.defaultHandleError)(
        {
          apiError: (await res.json()) as Promise<IKitsuError>,
        },
        res.status
      );
      return;
    }

    return res.json() as Promise<IKitsuAnimeSingle>;
  }
  /**
   *
   * @method
   * @param {IKitsuAnimeList} params - The parameters for the request.
   * @param {TKitsuHandleError} [handleError] - Used for handling errors from the method and the API.
   * @description Get an list of animes, you can choose the page, and the number of animes per page.
   * @returns {Promise<IKitsuAnime | undefined>} - Return a Promise.
   * @example
   * ```js
   * anime.list({ offset: 0, perPage: 10 }).then(a => console.log(a));
   * ```
   * @since 1.0.2
   *
   */
  async list(
    params: IKitsuAnimeList,
    handleError?: TKitsuHandleError
  ): Promise<IKitsuAnime | undefined> {
    // Maybe i should delete this method and using find method only...
    const parameters = {};
    if (params.offset) {
      if (isNaN(params.offset as any)) {
        await (handleError || this.defaultHandleError)(
          {
            moduleError: "'offset' in AnimeKitsu#list is not a number.",
          },
          400
        );
        return;
      }
    }
    Object.assign(parameters, { "page[offset]": params.offset ?? 0 });
    if (params.perPage) {
      if (isNaN(params.perPage as any)) {
        await (handleError || this.defaultHandleError)(
          {
            moduleError: "'perPage' in AnimeKitsu#list is not a number.",
          },
          400
        );
        return;
      }
      if ((params.perPage as number) > 20) {
        await (handleError || this.defaultHandleError)(
          {
            moduleError:
              "'perPage' in MangaKitsu#find should be less than or equal to 20.",
          },
          400
        );
        return;
      }
    }
    Object.assign(parameters, { "page[limit]": params.perPage ?? 10 });

    if (params.averageRating)
      Object.assign(parameters, {
        "filter[averageRating]": params.averageRating,
      });
    if (params.ageRating)
      Object.assign(parameters, { "filter[averageRating]": params.ageRating });

    if (params.season)
      Object.assign(parameters, { "filter[season]": params.season });

    if (params.year) Object.assign(parameters, { "filter[year]": params.year });

    if (params.streamers)
      Object.assign(parameters, { "filter[streamers]": params.streamers });

    if (params.categories)
      Object.assign(parameters, { "filter[categories]": params.categories });

    const p = new URLSearchParams(parameters);
    const res = await fetch(`${url}/anime?${p}`, {
      headers: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json",
      },
    });
    if (!res.ok) {
      await (handleError || this.defaultHandleError)(
        {
          apiError: (await res.json()) as Promise<IKitsuError>,
        },
        res.status
      );
      return;
    }

    return res.json() as Promise<IKitsuAnime>;
  }

  /**
   * @method
   * @param {number | `${number}`} id - The parameters to find a specific episode of an anime using the episode ID.
   * @param {TKitsuHandleError} [handleError] - Used for handling errors from the method and the API.
   * @description Get an episode with the ID.
   * @returns {Promise<IKitsuEpisode | undefined>} - Return a IKitsuEpisode Promise interface or undefined if it has no result.
   * @example
   * ```js
   * anime.episode(30).then(r => console.log(r.data.attributes.titles.en));
   * ```
   * @since 1.3.0
   */
  async episode(
    id: number | `${number}`,
    handleError?: TKitsuHandleError
  ): Promise<IKitsuEpisode | undefined> {
    if (!id) {
      await (handleError || this.defaultHandleError)(
        {
          moduleError: "'id' in AnimeKitsu#episode is empty.",
        },
        400
      );
      return;
    }
    if (isNaN(id as any)) {
      await (handleError || this.defaultHandleError)(
        {
          moduleError: "'id' in AnimeKitsu#episode is not a number.",
        },
        400
      );
      return;
    }
    const res = await fetch(`${url}/episodes/${id}`, {
      headers: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json",
      },
    });
    if (!res.ok) {
      await (handleError || this.defaultHandleError)(
        {
          apiError: (await res.json()) as Promise<IKitsuError>,
        },
        res.status
      );
      return;
    }

    return res.json() as Promise<IKitsuEpisode>;
  }
  /**
   * @method
   * @param {number | `${number}`} mediaId - The parameters to find all episodes of an anime using its ID.
   * @param {TKitsuHandleError} [handleError] - Used for handling errors from the method and the API.
   * @description Get an episode with the ID.
   * @returns {Promise<IKitsuEpisodes | undefined>} - Return a IKitsuEpisode Promise interface or undefined if it has no result.
   * @example
   * ```js
   * anime.episodes(7442).then(r => console.log(r.data.attributes.titles.en));
   * ```
   * @since 1.3.5
   */
  async episodes(
    mediaId: number | `${number}`,
    handleError?: TKitsuHandleError
  ): Promise<IKitsuEpisodes | undefined> {
    if (!mediaId) {
      await (handleError || this.defaultHandleError)(
        {
          moduleError: "'mediaId' in AnimeKitsu#episodes is empty.",
        },
        400
      );
      return;
    }
    if (isNaN(mediaId as any)) {
      await (handleError || this.defaultHandleError)(
        {
          moduleError: "'mediaId' in AnimeKitsu#episodes is not a number.",
        },
        400
      );
      return;
    }
    const res = await fetch(`${url}/episodes?filter[media_id]=${mediaId}`, {
      headers: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json",
      },
    });
    if (!res.ok) {
      await (handleError || this.defaultHandleError)(
        {
          apiError: (await res.json()) as Promise<IKitsuError>,
        },
        res.status
      );
      return;
    }

    return res.json() as Promise<IKitsuEpisodes>;
  }
}

export { AnimeKitsu };
export default AnimeKitsu;
