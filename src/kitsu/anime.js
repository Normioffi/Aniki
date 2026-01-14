const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const {
  KAgeRating,
  KHeaders,
  KSeason,
  KUrl,
  KACategories,
  KASubtypes,
  KStreamers,
} = require("../consts/kitsu");
const { isSameArray } = require("../funcs");

class AnimeKitsu {
  #headers = {};
  #defaultHandleError = async (error) => {
    if (error)
      console.error("Aniki: Unhandled API error:", (await error).errors);
  };

  constructor(accessToken) {
    if (accessToken)
      if (typeof accessToken !== "string")
        throw new TypeError("'accessToken' must be a string.");

    this.#headers = !accessToken
      ? KHeaders
      : {
          Accept: KHeaders.Accept,
          "Content-Type": KHeaders["Content-Type"],
          Authorization: `Bearer ${accessToken}`,
        };
  }

  async find(params, handleError) {
    const parameters = {};

    if (!params)
      throw new ReferenceError("Parameter 'param(s)' must be specified.");

    if (typeof params === "number") {
      const res = await fetch(`${KUrl}/anime/${params}`, {
        headers: this.#headers,
      });

      if (!res.ok) {
        await (handleError || this.#defaultHandleError)(await res.json(), res);
        return;
      }

      return res.json();
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
          "Parameter 'limit' must be less or equal to 20."
        );

      Object.assign(parameters, { "page[limit]": params.limit });
    } else Object.assign(parameters, { "page[limit]": 10 });

    if (params.ageRating) {
      if (!Array.isArray(params.ageRating))
        throw new TypeError("Parameter 'ageRating' must be an array.");
      if (!isSameArray(params.ageRating, KAgeRating))
        throw new ReferenceError(
          "Invalid value(s) in the 'ageRating' parameter."
        );

      Object.assign(parameters, { "filter[ageRating]": params.ageRating });
    }

    if (params.subtype) {
      if (!Array.isArray(params.subtype))
        throw new TypeError("Parameter 'subtype' must be an array.");
      if (!isSameArray(params.subtype, KASubtypes))
        throw new ReferenceError(
          "Invalid value(s) in the 'subtype' parameter."
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
          "First value (index 0) of the 'averageRating' parameter must be specified."
        );
      if (Number.isNaN(p[0]))
        throw new TypeError(
          `Parameter 'averageRating' index 0 (${p[0]}) must be a number.`
        );
      if (Number.isNaN(sec))
        throw new TypeError(
          `Parameter 'averageRating' index 1 (${sec}) must be a number.`
        );

      if (p[0] < 5 || p[0] > 100)
        throw new RangeError(
          `Parameter 'averageRating' index 0 (${p[0]}) must be lower than 5 or greater than 100.`
        );
      if (sec < 5 || sec > 100)
        throw new RangeError(
          `Parameter 'averageRating' index 1 (${sec}) must be lower than 5 or greater than 100.`
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
          "First value (index 0) of the 'year' parameter must be specified."
        );
      if (Number.isNaN(p[0]))
        throw new TypeError(
          `Parameter 'year' index 0 (${p[0]}) must be a number.`
        );
      if (Number.isNaN(sec))
        throw new TypeError(
          `Parameter 'year' index 1 (${sec}) must be a number.`
        );

      if (p[0] < 1907 || p[0] > 2027)
        throw new RangeError(
          `Parameter 'year' index 0 (${p[0]}) must be lower than 1907 or greater than 2027.`
        );
      if (sec < 1907 || sec > 2027)
        throw new RangeError(
          `Parameter 'year' index 1 (${sec}) must be lower than 1907 or greater than 2027.`
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
          "Invalid value(s) in the 'streamers' parameter."
        );
      Object.assign(parameters, { "filter[streamers]": params.streamers });
    }

    if (params.categories) {
      if (!Array.isArray(params.categories))
        throw new TypeError("Parameter 'categories' must be an array.");
      if (!isSameArray(params.categories, KACategories))
        throw new ReferenceError(
          "Invalid value(s) in the 'categories' parameter."
        );

      Object.assign(parameters, { "filter[categories]": params.categories });
    }

    const p = new URLSearchParams(parameters);

    const res = await fetch(`${KUrl}/anime?${p}`, {
      headers: this.#headers,
    });

    if (!res.ok) {
      await (handleError || this.#defaultHandleError)(await res.json(), res);
      return;
    }

    return res.json();
  }

  async findById(id, handleError) {
    if (!id) throw new ReferenceError("Parameter 'id' must be specified.");
    if (Number.isNaN(id))
      throw new TypeError("Parameter 'id' must be a number.");

    const res = await fetch(`${KUrl}/anime/${id}`, {
      headers: this.#headers,
    });

    if (!res.ok) {
      await (handleError || this.#defaultHandleError)(await res.json(), res);
      return;
    }

    return res.json();
  }

  async list(params, handleError) {
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
          "Parameter 'limit' must be less or equal to 20."
        );

      Object.assign(parameters, { "page[limit]": params.limit });
    } else Object.assign(parameters, { "page[limit]": 10 });

    if (params.ageRating) {
      if (!Array.isArray(params.ageRating))
        throw new TypeError("Parameter 'ageRating' must be an array.");
      if (!isSameArray(params.ageRating, KAgeRating))
        throw new ReferenceError(
          "Invalid value(s) in the 'ageRating' parameter."
        );

      Object.assign(parameters, { "filter[ageRating]": params.ageRating });
    }

    if (params.subtype) {
      if (!Array.isArray(params.subtype))
        throw new TypeError("Parameter 'subtype' must be an array.");
      if (!isSameArray(params.subtype, KASubtypes))
        throw new ReferenceError(
          "Invalid value(s) in the 'subtype' parameter."
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
          "First value (index 0) of the 'averageRating' parameter must be specified."
        );
      if (Number.isNaN(p[0]))
        throw new TypeError(
          `Parameter 'averageRating' index 0 (${p[0]}) must be a number.`
        );
      if (Number.isNaN(sec))
        throw new TypeError(
          `Parameter 'averageRating' index 1 (${sec}) must be a number.`
        );

      if (p[0] < 5 || p[0] > 100)
        throw new RangeError(
          `Parameter 'averageRating' index 0 (${p[0]}) must be lower than 5 or greater than 100.`
        );
      if (sec < 5 || sec > 100)
        throw new RangeError(
          `Parameter 'averageRating' index 1 (${sec}) must be lower than 5 or greater than 100.`
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
          "First value (index 0) of the 'year' parameter must be specified."
        );

      if (Number.isNaN(p[0]))
        throw new TypeError(
          `Parameter 'year' index 0 (${p[0]}) must be a number.`
        );

      if (Number.isNaN(sec))
        throw new TypeError(
          `Parameter 'year' index 1 (${sec}) must be a number.`
        );

      if (p[0] < 1907 || p[0] > 2027)
        throw new RangeError(
          `Parameter 'year' index 0 (${p[0]}) must be lower than 1907 or greater than 2027.`
        );
      if (sec < 1907 || sec > 2027)
        throw new RangeError(
          `Parameter 'year' index 1 (${sec}) must be lower than 1907 or greater than 2027.`
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
          "Invalid value(s) in the 'streamers' parameter."
        );

      Object.assign(parameters, { "filter[streamers]": params.streamers });
    }

    if (params.categories) {
      if (!Array.isArray(params.categories))
        throw new TypeError("Parameter 'categories' must be an array.");
      if (!isSameArray(params.categories, KACategories))
        throw new ReferenceError(
          "Invalid value(s) in the 'categories' parameter."
        );

      Object.assign(parameters, { "filter[categories]": params.categories });
    }

    const p = new URLSearchParams(parameters);
    const res = await fetch(`${KUrl}/anime?${p}`, {
      headers: this.#headers,
    });

    if (!res.ok) {
      await (handleError || this.#defaultHandleError)(await res.json(), res);
      return;
    }

    return res.json();
  }

  async episode(id, handleError) {
    if (!id) throw new ReferenceError("Parameter 'id' must be specified.");
    if (Number.isNaN(id))
      throw new TypeError("Parameter 'id' must be a number.");

    const res = await fetch(`${KUrl}/episodes/${id}`, {
      headers: this.#headers,
    });

    if (!res.ok) {
      await (handleError || this.#defaultHandleError)(await res.json(), res);
      return;
    }

    return res.json();
  }

  async episodes(mediaId, handleError) {
    if (!mediaId)
      throw new ReferenceError("Parameter 'mediaId' must be specified.");
    if (Number.isNaN(mediaId))
      throw new TypeError("Parameter 'mediaId' must be a number.");

    const res = await fetch(`${KUrl}/episodes?filter[media_id]=${mediaId}`, {
      headers: this.#headers,
    });

    if (!res.ok) {
      await (handleError || this.#defaultHandleError)(await res.json(), res);
      return;
    }

    return res.json();
  }
}

module.exports = { AnimeKitsu };
