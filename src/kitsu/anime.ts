/**
 * @file This file contain the AnimeKitsu class, used to get anime informations from the Kitsu.app API.
 */

import { IKitsuAnimeFind, IKitsuAnimeList } from "./interfaces/anime/params.js";
import {
  IKitsuAnime,
  IKitsuAnimeSingle,
  IKitsuEpisode,
  IKitsuError,
  IKitsuHandleError,
} from "./interfaces/anime/result.js";

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
 * const { AnimeKitsu } = require("aniki/kitsu")
 * // JS ESM or TS
 * import { AnimeKitsu } from "aniki/kitsu";
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
  { query: "Oshi no ko" },
  async ({ apiError, moduleError }, status) => {
    if (apiError) console.error(await apiError);
    if (moduleError) console.error(await moduleError);
  }
);

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
  private defaultHandleError: IKitsuHandleError = async (error) => {
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
   * @since 1.0.2
   * @param params - The parameters for the request.
   * @description The find method is used to find animes with different parameters.
   * @returns {Promise<IKitsuAnime | undefined>} - Returns a Promise with the IKitsuAnime inteface.
   * @example
   * ```js
   * // Searching an anime
   * anime.find({ query: "Oshi no ko", offset: 0 }).then(r=> console.log(r.data[0]))
   * ```
   */
  async find(
    params: IKitsuAnimeFind,
    handleError?: IKitsuHandleError
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
   * @since 1.3.0
   * @param {number | `${number}`} id - The ID of the anime.
   * @description Get an anime with the ID.
   * @returns {Promise<IKitsuAnimeSingle | undefined>} - Return a Promise.
   * @example
   * ```js
   * anime.findById(30).then(r => console.log(r.data.id));
   * ```
   */
  async findById(
    id: number | `${number}`,
    handleError?: IKitsuHandleError
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
   * @since 1.0.2
   * @param params - The parameters for the request.
   * @description Get an list of animes, you can choose the page, and the number of animes per page.
   * @returns {Promise<IKitsuAnime | undefined>} - Return a Promise.
   * @example
   * ```js
   * anime.list({ offset: 0, perPage: 10 }).then(a => console.log(a));
   * ```
   *
   */
  async list(
    params: IKitsuAnimeList,
    handleError?: IKitsuHandleError
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
   * @since 1.3.0
   * @param params - The parameters to find an episode or a list of episodes
   * @description Get an episode with the ID.
   * @returns {Promise<IKitsuEpisode | undefined>} - Return a IKitsuEpisode Promise interface or undefined if it has no result.
   * @example
   * ```js
   * anime.episode(30).then(r => console.log(r.data.attributes.titles.en));
   * ```
   */
  async episode(
    id: number | `${number}`,
    handleError?: IKitsuHandleError
  ): Promise<IKitsuEpisode | undefined> {
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
}

export { AnimeKitsu };
export default AnimeKitsu;
