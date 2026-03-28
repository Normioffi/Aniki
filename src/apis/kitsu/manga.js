const { fetching } = require("../../core/index");
const {
  KMCategoriesUR,
  KMSubtypes,
  KHeaders,
  KSeason,
  KUrl,
} = require("../../consts/kitsu");
const { isSameArray } = require("../../funcs/index");

class MangaKitsu {
  #config = {};

  constructor(access_token, config) {
    let defaultConfig = {
      url: KUrl,
      headers: {
        ...KHeaders,
      },
    };
    if (access_token) {
      if (typeof access_token !== "string")
        throw new TypeError("'access_token' must be a string.");
      if (config)
        this.#config = {
          ...defaultConfig,
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
          ...config,
        };
      else
        this.#config = {
          ...defaultConfig,
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        };
    }
  }

  async find(params, hooks) {
    const parameters = {};

    if (typeof params === "number") {
      const res = await fetching(
        // @ts-ignore
        {
          ...this.#config,
          endpoint: `/manga/${params}`,
        },
        hooks,
      );

      if (res) return res.json();
      return;
    }

    if (!params.query)
      throw new ReferenceError("Parameter 'query' must be specified.");
    if (typeof params.query !== "string")
      throw new TypeError("Parameter 'query' must be a string.");

    Object.assign(parameters, { "filter[text]": params.query });

    if (params.offset) {
      if (Number.isNaN(params.offset))
        throw new TypeError("Parameter 'offset' must be a number.");

      Object.assign(parameters, { "page[offset]": params.offset });
    } else Object.assign(parameters, { "page[offset]": 0 });

    if (params.limit) {
      if (Number.isNaN(params.limit))
        throw new TypeError("Parameter 'limit' must be a number.");

      if (params.limit > 20)
        throw new ReferenceError(
          "Parameter 'limit' must be less or equal to 20.",
        );

      Object.assign(parameters, { "page[limit]": params.limit });
    } else Object.assign(parameters, { "page[limit]": 10 });

    if (params.subtype) {
      if (!Array.isArray(params.subtype))
        throw new TypeError("Parameter 'subtype' must be an array.");
      if (!isSameArray(params.subtype, KMSubtypes))
        throw new ReferenceError(
          "Invalid value(s) in the 'subtype' parameter.",
        );
      Object.assign(parameters, { "filter[subtype]": params.subtype });
    }

    if (params.averageRating) {
      if (!Array.isArray(params.averageRating))
        throw new TypeError("Parameter 'averageRating' must be an array.");
      let p = params.averageRating;
      let sec = p[1] ? p[1] : 100;

      if (!p[0])
        throw new ReferenceError(
          "First value (index 0) of the 'averageRating' parameter must be specified.",
        );

      if (Number.isNaN(p[0]))
        throw new TypeError(
          `Parameter 'averageRating' index 0 (${p[0]}) must be a number.`,
        );
      else if (!Number.isInteger(p[0]))
        throw new TypeError(
          `Parameter 'averageRating' index 0 (${p[0]}) must be an integer.`,
        );

      if (Number.isNaN(sec))
        throw new TypeError(
          `Parameter 'averageRating' index 1 (${sec}) must be a number.`,
        );
      else if (!Number.isInteger(sec))
        throw new TypeError(
          `Parameter 'averageRating' index 1 (${sec}) must be an integer.`,
        );

      if (p[0] < 5 || p[0] > 100)
        throw new RangeError(
          `Parameter 'averageRating' index 0 (${p[0]}) must be lower than 5 or greater than 100.`,
        );

      if (sec < 5 || sec > 100)
        throw new RangeError(
          `Parameter 'averageRating' index 1 (${sec}) must be lower than 5 or greater than 100.`,
        );

      Object.assign(parameters, {
        "filter[averageRating]": `${p[0]}..${sec}`,
      });
    }

    if (params.season) {
      if (!Array.isArray(params.season))
        throw new TypeError("Parameter 'season' must be an array.");
      if (!isSameArray(params.season, KSeason))
        throw new ReferenceError("Invalid value(s) in the 'season' parameter.");
      Object.assign(parameters, { "filter[season]": params.season });
    }

    if (params.year) {
      if (!Array.isArray(params.year))
        throw new TypeError("Parameter 'year' must be an array.");
      let p = params.year;
      let sec = p[1] ? p[1] : 2027;

      if (!p[0])
        throw new ReferenceError(
          "First value (index 0) of the 'year' parameter must be specified.",
        );

      if (Number.isNaN(p[0]))
        throw new TypeError(
          `Parameter 'year' index 0 (${p[0]}) must be a number.`,
        );
      else if (!Number.isInteger(p[0]))
        throw new TypeError(
          `Parameter 'year' index 0 (${p[0]}) must be an integer.`,
        );

      if (Number.isNaN(sec))
        throw new TypeError(
          `Parameter 'year' index 1 (${sec}) must be a number.`,
        );
      else if (!Number.isInteger(sec))
        throw new TypeError(
          `Parameter 'year' index 1 (${sec}) must be an integer.`,
        );

      if (p[0] < 1862 || p[0] > 2027)
        throw new RangeError(
          `Parameter 'year' index 0 (${p[0]}) must be lower than 1862 or greater than 2027.`,
        );
      if (sec < 1862 || sec > 2027)
        throw new RangeError(
          `Parameter 'year' index 1 (${sec}) must be lower than 1862 or greater than 2027.`,
        );
      Object.assign(parameters, {
        "filter[year]": `${p[0]}..${sec}`,
      });
    }

    if (params.categories) {
      if (!Array.isArray(params.categories))
        throw new TypeError("Parameter 'categories' must be an array.");
      if (!isSameArray(params.categories, KMCategoriesUR))
        throw new ReferenceError(
          "Invalid value(s) in the 'categories' parameter.",
        );

      Object.assign(parameters, { "filter[categories]": params.categories });
    }

    // @ts-ignore
    const p = new URLSearchParams(parameters);

    const res = await fetching(
      // @ts-ignore
      {
        ...this.#config,
        endpoint: `/manga`,
        parameters: p,
      },
      hooks,
    );

    if (res) return res.json();
    return;
  }

  async findUnique(id, hooks) {
    if (!id) throw new ReferenceError("Parameter 'id' must be specified.");
    if (Number.isNaN(id))
      throw new TypeError("Parameter 'id' must be a number.");
    else if (!Number.isInteger(id))
      throw new TypeError("Parameter 'id' must be an integer.");

    const res = await fetching(
      // @ts-ignore
      {
        ...this.#config,
        endpoint: `/manga/${id}`,
      },
      hooks,
    );

    if (res) return res.json();
    return;
  }

  async findMany(params, hooks) {
    const parameters = {};

    if (params.offset) {
      if (Number.isNaN(params.offset))
        throw new TypeError("Parameter 'offset' must be a number.");

      Object.assign(parameters, { "page[offset]": params.offset });
    } else Object.assign(parameters, { "page[offset]": 0 });

    if (params.limit) {
      if (Number.isNaN(params.limit))
        throw new TypeError("Parameter 'limit' must be a number.");

      if (params.limit > 20)
        throw new ReferenceError(
          "Parameter 'limit' must be less or equal to 20.",
        );

      Object.assign(parameters, { "page[limit]": params.limit });
    } else Object.assign(parameters, { "page[limit]": 10 });

    if (params.subtype) {
      if (!Array.isArray(params.subtype))
        throw new TypeError("Parameter 'subtype' must be an array.");
      if (!isSameArray(params.subtype, KMSubtypes))
        throw new ReferenceError(
          "Invalid value(s) in the 'subtype' parameter.",
        );
      Object.assign(parameters, { "filter[subtype]": params.subtype });
    }

    if (params.averageRating) {
      if (!Array.isArray(params.averageRating))
        throw new TypeError("Parameter 'averageRating' must be an array.");
      let p = params.averageRating;
      let sec = p[1] ? p[1] : 100;

      if (!p[0])
        throw new ReferenceError(
          "First value (index 0) of the 'averageRating' parameter must be specified.",
        );

      if (Number.isNaN(p[0]))
        throw new TypeError(
          `Parameter 'averageRating' index 0 (${p[0]}) must be a number.`,
        );
      else if (!Number.isInteger(p[0]))
        throw new TypeError(
          `Parameter 'averageRating' index 0 (${p[0]}) must be an integer.`,
        );

      if (Number.isNaN(sec))
        throw new TypeError(
          `Parameter 'averageRating' index 1 (${sec}) must be a number.`,
        );
      else if (!Number.isInteger(sec))
        throw new TypeError(
          `Parameter 'averageRating' index 1 (${sec}) must be an integer.`,
        );

      if (p[0] < 5 || p[0] > 100)
        throw new RangeError(
          `Parameter 'averageRating' index 0 (${p[0]}) must be lower than 5 or greater than 100.`,
        );

      if (sec < 5 || sec > 100)
        throw new RangeError(
          `Parameter 'averageRating' index 1 (${sec}) must be lower than 5 or greater than 100.`,
        );

      Object.assign(parameters, {
        "filter[averageRating]": `${p[0]}..${sec}`,
      });
    }

    if (params.season) {
      if (!Array.isArray(params.season))
        throw new TypeError("Parameter 'season' must be an array.");
      if (!isSameArray(params.season, KSeason))
        throw new ReferenceError("Invalid value(s) in the 'season' parameter.");
      Object.assign(parameters, { "filter[season]": params.season });
    }

    if (params.year) {
      if (!Array.isArray(params.year))
        throw new TypeError("Parameter 'year' must be an array.");
      let p = params.year;
      let sec = p[1] ? p[1] : 2027;

      if (!p[0])
        throw new ReferenceError(
          "First value (index 0) of the 'year' parameter must be specified.",
        );

      if (Number.isNaN(p[0]))
        throw new TypeError(
          `Parameter 'year' index 0 (${p[0]}) must be a number.`,
        );
      else if (!Number.isInteger(p[0]))
        throw new TypeError(
          `Parameter 'year' index 0 (${p[0]}) must be an integer.`,
        );

      if (Number.isNaN(sec))
        throw new TypeError(
          `Parameter 'year' index 1 (${sec}) must be a number.`,
        );
      else if (!Number.isInteger(sec))
        throw new TypeError(
          `Parameter 'year' index 1 (${sec}) must be an integer.`,
        );

      if (p[0] < 1862 || p[0] > 2027)
        throw new RangeError(
          `Parameter 'year' index 0 (${p[0]}) must be lower than 1862 or greater than 2027.`,
        );
      if (sec < 1862 || sec > 2027)
        throw new RangeError(
          `Parameter 'year' index 1 (${sec}) must be lower than 1862 or greater than 2027.`,
        );
      Object.assign(parameters, {
        "filter[year]": `${p[0]}..${sec}`,
      });
    }

    if (params.categories) {
      if (!Array.isArray(params.categories))
        throw new TypeError("Parameter 'categories' must be an array.");
      if (!isSameArray(params.categories, KMCategoriesUR))
        throw new ReferenceError(
          "Invalid value(s) in the 'categories' parameter.",
        );

      Object.assign(parameters, { "filter[categories]": params.categories });
    }

    // @ts-ignore
    const p = new URLSearchParams(parameters);

    const res = await fetching(
      // @ts-ignore
      {
        ...this.#config,
        endpoint: `/manga`,
        parameters: p,
      },
      hooks,
    );

    if (res) return res.json();
    return;
  }

  async chapter(id, hooks) {
    if (!id) throw new ReferenceError("Parameter 'id' must be specified.");
    if (Number.isNaN(id))
      throw new TypeError("Parameter 'id' must be a number.");
    else if (!Number.isInteger(id))
      throw new TypeError("Parameter 'id' must be an integer.");

    const res = await fetching(
      // @ts-ignore
      {
        ...this.#config,
        endpoint: `/chapters/${id}`,
      },
      hooks,
    );

    if (res) return res.json();
    return;
  }

  async chapters(mangaId, hooks) {
    if (!mangaId)
      throw new ReferenceError("Parameter 'mangaId' must be specified.");
    if (Number.isNaN(mangaId))
      throw new TypeError("Parameter 'mangaId' must be a number.");
    else if (!Number.isInteger(mangaId))
      throw new TypeError("Parameter 'mangaId' must be an integer.");

    const res = await fetching(
      // @ts-ignore
      {
        ...this.#config,
        endpoint: `/chapters?filter[manga_id]=${mangaId}`,
      },
      hooks,
    );

    if (res) return res.json();
    return;
  }
}

module.exports = { MangaKitsu };
