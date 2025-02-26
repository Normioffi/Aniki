/**
 * @file This file contain the MangaKitsu class, used to get Manga informations from the Kitsu.app API.
 */

import { IKitsuMangaFind, IKitsuMangaList } from "./interfaces/manga/params.js";
import {
  IKitsuChapter,
  IKitsuError,
  IKitsuHandleError,
  IKitsuManga,
  IKitsuMangaSingle,
} from "./interfaces/manga/result.js";

// The url
const url = "https://kitsu.app/api/edge";

// Main class
/**
 * @class
 * @since 1.0.2
 * @description MangaKitsu is a class that's using the Kitsu.app API, with this class you can find Mangas informations in different ways
 * @example
 * Basic usage:
 * ```js
 * // CJS
 * const { MangaKitsu } = require("aniki/kitsu")
 * // JS ESM or TS
 * import { MangaKitsu } from "aniki/kitsu";
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
  { query: "Oshi no ko" },
  async ({ apiError, moduleError }, status) => {
    if (apiError) console.error(await apiError);
    if (moduleError) console.error(await moduleError);
  }
);

 *
 * // Best practice to avoid using .then() method is by using asynchronous function
 *
 * async function getManga(query) {
 * // ...
 *  const a = await manga.find({ query: query })
 * // ...
 * }
 *
 * ```
 */
class MangaKitsu {
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
   * @description The find method is used to find mangas with different parameters.
   * @returns {Promise<IKitsuManga | undefined>} - Returns a Promise with the IKitsuManga inteface.
   * @example
   * ```js
   * manga.find({ query: "Oshi no ko", offset: 0 }).then(a => console.log(a)); // offset is optional.
   * ```
   */
  async find(
    params: IKitsuMangaFind,
    handleError?: IKitsuHandleError
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
   * @since 1.3.0
   * @param {number | `${number}`} id - The ID of the manga.
   * @description Get an Manga with the ID.
   * @returns {Promise<IKitsuMangaSingle | undefined>} - Return a Promise.
   * @example
   * ```js
   * manga.findById(30).then(r => console.log(r.data.id));
   *
   * // Or
   * manga.findById("30").then(r => console.log(r.data.id));
   * ```
   */
  async findById(
    id: number | `${number}`,
    handleError?: IKitsuHandleError
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
   * @since 1.0.2
   * @param params - The parameters for the request.
   * @description Get an list of Mangas, you can choose the page, and the number of Mangas per page.
   * @returns {Promise<IKitsuManga | undefined>} - Return a Promise.
   * @example
   * ```js
   * Manga.list({ offset: 0, perPage: 10 }).then(a => console.log(a));
   * ```
   *
   */
  async list(
    params: IKitsuMangaList,
    handleError?: IKitsuHandleError
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
   * @since 1.3.0
   * @param params - The parameters to find an chapter or a list of chapters
   * @description Get an chapter with the ID.
   * @returns {Promise<IKitsuchapter | undefined>} - Return a IKitsuChapter Promise interface or undefined if it has no result.
   * @example
   * ```js
   * Manga.chapter(30).then(r => console.log(r.data.attributes.titles.en));
   * ```
   */
  async chapters(
    id: number | `${number}`,
    handleError?: IKitsuHandleError
  ): Promise<IKitsuChapter | undefined> {
    if (!id) {
      await (handleError || this.defaultHandleError)(
        {
          moduleError: "'id' in MangaKitsu#chapters is empty.",
        },
        400
      );
      return;
    }
    if (isNaN(id as any)) {
      await (handleError || this.defaultHandleError)(
        {
          moduleError: "'id' in MangaKitsu#chapters is not a number.",
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
}

export { MangaKitsu };
export default MangaKitsu;
