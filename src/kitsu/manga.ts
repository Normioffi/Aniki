/**
 * @file This file contain the MangaKitsu class, used to get Manga informations from the Kitsu.app API.
 */

import {
  IKitsuChapter,
  IKitsuChapters,
  IKitsuError,
  IKitsuManga,
  IKitsuMangaFind,
  IKitsuMangaList,
  IKitsuMangaSingle,
  TKitsuHandleError,
} from "./interfaces/index.js";

// The url
const url = "https://kitsu.app/api/edge";

// Main class
/**
 * @class
 * @description MangaKitsu is a class that's using the Kitsu.app API, with this class you can find Mangas informations in different ways
 * @example
 * Basic usage:
 * ```js
 * // CJS
 * const { MangaKitsu } = require("aniki")
 * // JS ESM or TS
 * import { MangaKitsu } from "aniki";
 *
 * const manga = new MangaKitsu();
 *
 * // Normal
 * manga.find({ query: "Oshi no Ko" }).then(a => console.log(a.data[0]));
 *
 * // Find by an id
 * manga.findById(3600).then(a => console.log(a.data));
 *
 * // Handling errors
 *
 * manga.find(
 *  { query: "Oshi no ko" },
 *  async ({ apiError, moduleError }, status) => {
 *    if (apiError) console.error(await apiError);
 *    if (moduleError) console.error(await moduleError);
 * });
 *
 *
 * // Best practice to avoid using .then() method is by using asynchronous functions
 *
 * async function getManga(query) {
 * // ...
 *  const a = await manga.find({ query: query })
 *
 * // Tip to avoid multiple awaits
 * const a = manga.find({query: ""});
 * const b = manga.list({});
 * const [A, B] = await Promise.all([a, b])
 * }
 *
 * ```
 * @since 1.0.2
 */
class MangaKitsu {
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
   * @param {IKitsuMangaFind} params - The parameters for the request.
   * @param {TKitsuHandleError} [handleError] - Used for handling errors from the method and the API.
   * @description The find method is used to find mangas with different parameters.
   * @returns {Promise<IKitsuManga | undefined>} - Returns a Promise with the IKitsuManga inteface.
   * @example
   * ```js
   * manga.find({ query: "Oshi no ko", offset: 0 }).then(a => console.log(a)); // offset is optional.
   * ```
   * @since 1.0.2
   */
  async find(
    params: IKitsuMangaFind,
    handleError?: TKitsuHandleError
  ): Promise<IKitsuManga | undefined> {
    const parameters = {};
    if (!params.query) {
      await (handleError || this.defaultHandleError)(
        {
          moduleError: "'query' in MangaKitsu#find is empty.",
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
            moduleError: "'offset' in MangaKitsu#find is not a number.",
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
            moduleError: "'perPage' in MangaKitsu#find is not a number.",
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

    if (params.season)
      Object.assign(parameters, { "filter[season]": params.season });

    if (params.year) Object.assign(parameters, { "filter[year]": params.year });

    if (params.categories)
      Object.assign(parameters, { "filter[categories]": params.categories });

    const p = new URLSearchParams(parameters);
    const res = await fetch(`${url}/manga?${p}`, {
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

    return res.json() as Promise<IKitsuManga>;
  }
  /**
   * @method
   * @param {number | `${number}`} id - The ID of the manga.
   * @param {TKitsuHandleError} [handleError] - Used for handling errors from the method and the API.
   * @description Get an Manga with the ID.
   * @returns {Promise<IKitsuMangaSingle | undefined>} - Return a Promise.
   * @example
   * ```js
   * manga.findById(30).then(r => console.log(r.data.id));
   *
   * // Or
   * manga.findById("30").then(r => console.log(r.data.id));
   * ```
   * @since 1.3.0
   */
  async findById(
    id: number | `${number}`,
    handleError?: TKitsuHandleError
  ): Promise<IKitsuMangaSingle | undefined> {
    if (!id) {
      await (handleError || this.defaultHandleError)(
        {
          moduleError: "'id' in MangaKitsu#findById is empty.",
        },
        400
      );
      return;
    }

    if (isNaN(id as any)) {
      await (handleError || this.defaultHandleError)(
        {
          moduleError: "'id' in MangaKitsu#findById is not a number.",
        },
        400
      );
      return;
    }
    const res = await fetch(`${url}/manga/${id}`, {
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

    return res.json() as Promise<IKitsuMangaSingle>;
  }
  /**
   *
   * @method
   * @param {IKitsuMangaList} params - The parameters for the request.
   * @param {TKitsuHandleError} [handleError] - Used for handling errors from the method and the API.
   * @description Get an list of Mangas, you can choose the page, and the number of Mangas per page.
   * @returns {Promise<IKitsuManga | undefined>} - Return a Promise.
   * @example
   * ```js
   * Manga.list({ offset: 0, perPage: 10 }).then(a => console.log(a));
   * ```
   * @since 1.0.2
   *
   */
  async list(
    params: IKitsuMangaList,
    handleError?: TKitsuHandleError
  ): Promise<IKitsuManga | undefined> {
    const parameters = {};

    if (params.offset) {
      if (isNaN(params.offset as any)) {
        await (handleError || this.defaultHandleError)(
          {
            moduleError: "'offset' in MangaKitsu#list is not a number.",
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
            moduleError: "'perPage' in MangaKitsu#list is not a number.",
          },
          400
        );
        return;
      }
      if ((params.perPage as number) > 20) {
        await (handleError || this.defaultHandleError)(
          {
            moduleError:
              "'perPage' in MangaKitsu#list should be less than or equal to 20.",
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

    if (params.year) Object.assign(parameters, { "filter[year]": params.year });

    if (params.categories)
      Object.assign(parameters, { "filter[categories]": params.categories });

    const p = new URLSearchParams(parameters);
    const res = await fetch(`${url}/manga?${p}`, {
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

    return res.json() as Promise<IKitsuManga>;
  }

  /**
   * @method
   * @param {number | `${number}`} id - The parameters to find a specific chapter of a manga using the chapter ID.
   * @param {TKitsuHandleError} [handleError] - Used for handling errors from the method and the API.
   * @description Get an chapter with the ID.
   * @returns {Promise<IKitsuChapter | undefined>} - Return a IKitsuChapter Promise interface or undefined if it has no result.
   * @example
   * ```js
   * manga.chapter(30).then(r => console.log(r.data.attributes.titles.en));
   * ```
   * @since 1.3.0
   */
  async chapter(
    id: number | `${number}`,
    handleError?: TKitsuHandleError
  ): Promise<IKitsuChapter | undefined> {
    if (!id) {
      await (handleError || this.defaultHandleError)(
        {
          moduleError: "'id' in MangaKitsu#chapter is empty.",
        },
        400
      );
      return;
    }
    if (isNaN(id as any)) {
      await (handleError || this.defaultHandleError)(
        {
          moduleError: "'id' in MangaKitsu#chapter is not a number.",
        },
        400
      );
      return;
    }
    const res = await fetch(`${url}/chapters/${id}`, {
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

    return res.json() as Promise<IKitsuChapter>;
  }
  /**
   * @method
   * @param {number | `${number}`} mangaId - The parameters to find all chapters of an manga using its ID.
   * @param {TKitsuHandleError} [handleError] - Used for handling errors from the method and the API.
   * @returns {Promise<IKitsuChapters | undefined>} Return a IKitsuChapters Promise interface or undefined if it has no result.
   * @example
   * ```js
   * manga.chapters(7442).then(r => console.log(r.data.attributes.titles.en));
   * ```
   * @since 1.3.5
   */
  async chapters(
    mangaId: number | `${number}`,
    handleError?: TKitsuHandleError
  ): Promise<IKitsuChapters | undefined> {
    if (!mangaId) {
      await (handleError || this.defaultHandleError)(
        {
          moduleError: "'mangaId' in MangaKitsu#chapters is empty.",
        },
        400
      );
      return;
    }
    if (isNaN(mangaId as any)) {
      await (handleError || this.defaultHandleError)(
        {
          moduleError: "'mangaId' in MangaKitsu#chapters is not a number.",
        },
        400
      );
      return;
    }
    const res = await fetch(`${url}/chapters?filter[manga_id]=${mangaId}`, {
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

    return res.json() as Promise<IKitsuChapters>;
  }
}

export { MangaKitsu };
export default MangaKitsu;
