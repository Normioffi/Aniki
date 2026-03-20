const { AnikiCore } = require("../../core/index.js");
const {
  KAgeRating,
  KHeaders,
  KSeason,
  KUrl,
  KACategories,
  KASubtypes,
  KStreamers,
} = require("../../consts/kitsu");
const { isSameArray } = require("../../funcs/index.js");

class AnimeKitsu extends AnikiCore {
  #config = {};

  constructor(access_token, config) {
    super();
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

    if (!params)
      throw new ReferenceError("Parameter 'param' must be specified.");

    if (typeof params === "number") {
      const res = await super.fetching(
        // @ts-ignore
        {
          ...this.#config,
          endpoint: `/anime/${params}`,
        },
        hooks,
      );

      if (res) return res.json();
      return;
    }

    if (!params.query)
      throw new ReferenceError("Parameter 'query' must be specified.");
    if (typeof params.query !== "string")
      throw new TypeError("Parameter 'query' must be a string");

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

    if (params.ageRating) {
      if (!Array.isArray(params.ageRating))
        throw new TypeError("Parameter 'ageRating' must be an array.");
      if (!isSameArray(params.ageRating, KAgeRating))
        throw new ReferenceError(
          "Invalid value(s) in the 'ageRating' parameter.",
        );

      Object.assign(parameters, { "filter[ageRating]": params.ageRating });
    }

    if (params.subtype) {
      if (!Array.isArray(params.subtype))
        throw new TypeError("Parameter 'subtype' must be an array.");
      if (!isSameArray(params.subtype, KASubtypes))
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

      if (p[0] < 1907 || p[0] > 2027)
        throw new RangeError(
          `Parameter 'year' index 0 (${p[0]}) must be lower than 1907 or greater than 2027.`,
        );
      if (sec < 1907 || sec > 2027)
        throw new RangeError(
          `Parameter 'year' index 1 (${sec}) must be lower than 1907 or greater than 2027.`,
        );

      Object.assign(parameters, {
        "filter[year]": `${p[0]}..${sec}`,
      });
    }

    if (params.streamers) {
      if (!Array.isArray(params.streamers))
        throw new TypeError("Parameter 'streamers' must be an array.");
      if (!isSameArray(params.streamers, KStreamers))
        throw new ReferenceError(
          "Invalid value(s) in the 'streamers' parameter.",
        );
      Object.assign(parameters, { "filter[streamers]": params.streamers });
    }

    if (params.categories) {
      if (!Array.isArray(params.categories))
        throw new TypeError("Parameter 'categories' must be an array.");
      if (!isSameArray(params.categories, KACategories))
        throw new ReferenceError(
          "Invalid value(s) in the 'categories' parameter.",
        );

      Object.assign(parameters, { "filter[categories]": params.categories });
    }

    // @ts-ignore
    const p = new URLSearchParams(parameters);

    const res = await super.fetching(
      // @ts-ignore
      {
        ...this.#config,
        endpoint: `/anime`,
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

    const res = await super.fetching(
      // @ts-ignore
      {
        ...this.#config,
        endpoint: `/anime/${id}`,
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

    if (params.ageRating) {
      if (!Array.isArray(params.ageRating))
        throw new TypeError("Parameter 'ageRating' must be an array.");
      if (!isSameArray(params.ageRating, KAgeRating))
        throw new ReferenceError(
          "Invalid value(s) in the 'ageRating' parameter.",
        );

      Object.assign(parameters, { "filter[ageRating]": params.ageRating });
    }

    if (params.subtype) {
      if (!Array.isArray(params.subtype))
        throw new TypeError("Parameter 'subtype' must be an array.");
      if (!isSameArray(params.subtype, KASubtypes))
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

      if (p[0] < 1907 || p[0] > 2027)
        throw new RangeError(
          `Parameter 'year' index 0 (${p[0]}) must be lower than 1907 or greater than 2027.`,
        );
      if (sec < 1907 || sec > 2027)
        throw new RangeError(
          `Parameter 'year' index 1 (${sec}) must be lower than 1907 or greater than 2027.`,
        );

      Object.assign(parameters, {
        "filter[year]": `${p[0]}..${sec}`,
      });
    }

    if (params.streamers) {
      if (!Array.isArray(params.streamers))
        throw new TypeError("Parameter 'streamers' must be an array.");
      if (!isSameArray(params.streamers, KStreamers))
        throw new ReferenceError(
          "Invalid value(s) in the 'streamers' parameter.",
        );

      Object.assign(parameters, { "filter[streamers]": params.streamers });
    }

    if (params.categories) {
      if (!Array.isArray(params.categories))
        throw new TypeError("Parameter 'categories' must be an array.");
      if (!isSameArray(params.categories, KACategories))
        throw new ReferenceError(
          "Invalid value(s) in the 'categories' parameter.",
        );

      Object.assign(parameters, { "filter[categories]": params.categories });
    }

    // @ts-ignore
    const p = new URLSearchParams(parameters);

    const res = await super.fetching(
      // @ts-ignore
      {
        ...this.#config,
        endpoint: `/anime`,
        parameters: p,
      },
      hooks,
    );

    if (res) return res.json();
    return;
  }

  async episode(id, hooks) {
    if (!id) throw new ReferenceError("Parameter 'id' must be specified.");
    if (Number.isNaN(id))
      throw new TypeError("Parameter 'id' must be a number.");
    else if (!Number.isInteger(id))
      throw new TypeError("Parameter 'id' must be an integer.");

    const res = await super.fetching(
      // @ts-ignore
      {
        ...this.#config,
        endpoint: `/episodes/${id}`,
      },
      hooks,
    );

    if (res) return res.json();
    return;
  }

  async episodes(mediaId, hooks) {
    if (!mediaId)
      throw new ReferenceError("Parameter 'mediaId' must be specified.");
    if (Number.isNaN(mediaId))
      throw new TypeError("Parameter 'mediaId' must be a number.");
    else if (!Number.isInteger(mediaId))
      throw new TypeError("Parameter 'mediaId' must be an integer.");

    const res = await super.fetching(
      // @ts-ignore
      {
        ...this.#config,
        endpoint: `/episodes?filter[media_id]=${mediaId}`,
      },
      hooks,
    );

    if (res) return res.json();
    return;
  }
}

module.exports = { AnimeKitsu };
