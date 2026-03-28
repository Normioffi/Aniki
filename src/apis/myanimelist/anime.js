const { myanimelist } = require("../../consts/index.js");
const { isSameArray } = require("../../funcs/index.js");
const { MALFields, MALUrl, MALSeason, MALRankingType } = myanimelist;
const { fetching } = require("../../core/index.js");

class MyAnimeList {
  #config = {};

  constructor({ client_id, access_token }, config) {
    const defaultConfig = {
      url: MALUrl,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    if (!client_id && !access_token)
      throw new ReferenceError(
        "Either 'client_id' or 'access_token' must be specified.",
      );
    else if (client_id && access_token)
      throw new ReferenceError(
        "'client_id' and 'access_token' are specified, please use only one authentification.",
      );

    if (client_id) {
      if (typeof client_id !== "string")
        throw new TypeError("'client_id' must be a string.");
      if (config)
        this.#config = {
          ...defaultConfig,
          headers: {
            "X-MAL-CLIENT-ID": client_id,
          },
          ...config,
        };
      else
        this.#config = {
          ...defaultConfig,
          headers: {
            "X-MAL-CLIENT-ID": client_id,
          },
        };
    }

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

    if (!params.q)
      throw new ReferenceError("Parameter 'q' (query) must be specified.");

    if (typeof params.q !== "string")
      throw new TypeError("Parameter 'q' (query) must be a string.");
    Object.assign(parameters, { q: params.q });

    if (params.offset) {
      if (Number.isNaN(params.offset))
        throw new TypeError("Parameter 'offset' must be a number.");
      else if (!Number.isInteger(params.offset))
        throw new TypeError("Parameter 'offset' must be an integer.");

      Object.assign(parameters, { offset: params.offset });
    } else Object.assign(parameters, { offset: 0 });

    if (params.limit) {
      if (Number.isNaN(params.limit))
        throw new TypeError("Parameter 'limit' must be a number.");
      else if (!Number.isInteger(params.limit))
        throw new TypeError("Parameter 'limit' must be an integer.");

      if (params.limit > 100 || params.limit < 1)
        throw new RangeError(
          `Parameter 'limit' (${params.limit}) must be greater than 1 and less than 100.`,
        );

      Object.assign(parameters, { limit: params.limit });
    } else Object.assign(parameters, { limit: 100 });

    if (params.fields) {
      if (!Array.isArray(params.fields))
        throw new TypeError("Parameter 'fields' must be an array.");

      if (!isSameArray(params.fields, MALFields))
        throw new ReferenceError("Invalid value(s) in the 'fields' parameter.");

      Object.assign(parameters, { fields: params.fields });
    }

    // @ts-ignore
    const p = new URLSearchParams(parameters);
    const res = await fetching(
      {
        ...this.#config,
        endpoint: "/anime",
        parameters: p,
      },
      hooks,
    );

    if (res) return res.json();
    return;
  }

  async details(params, hooks) {
    let fie = [];

    if (!params.anime_id)
      throw new ReferenceError("Parameter 'anime_id' must be specified.");

    if (Number.isNaN(params.anime_id))
      throw new TypeError("Parameter 'anime_id' must be a number.");
    else if (!Number.isInteger(params.anime_id))
      throw new TypeError("Parameter 'anime_id' must be an integer.");

    if (params.fields) {
      if (!Array.isArray(params.fields))
        throw new TypeError("Parameter 'fields' must be an array.");

      if (!isSameArray(params.fields, MALFields))
        throw new ReferenceError("Invalid value(s) in the 'fields' parameter.");

      fie = params.fields;
    }
    const res = await fetching(
      {
        ...this.#config,
        endpoint: "/anime",
        parameters: `fields=${fie.toString()}`,
      },
      hooks,
    );

    if (res) return res.json();
    return;
  }
  async ranking(params, hooks) {
    const parameters = {};

    if (!params.ranking_type)
      throw new ReferenceError("Parameter 'ranking_type' must be specified.");
    if (!MALRankingType.includes(params.ranking_type))
      throw new ReferenceError(
        "Parameter 'ranking_type' must be either 'all', 'airing', 'upcoming', 'tv', 'ova', 'movie', 'special', 'bypopularity' or 'favorite'.",
      );
    Object.assign(parameters, { ranking_type: params.ranking_type });

    if (params.offset) {
      if (Number.isNaN(params.offset))
        throw new TypeError("Parameter 'offset' must be a number.");
      else if (!Number.isInteger(params.offset))
        throw new TypeError("Parameter 'offset' must be an integer.");

      Object.assign(parameters, { offset: params.offset });
    } else Object.assign(parameters, { offset: 0 });

    if (params.limit) {
      if (Number.isNaN(params.limit))
        throw new TypeError("Parameter 'limit' must be a number.");
      else if (!Number.isInteger(params.limit))
        throw new TypeError("Parameter 'limit' must be an integer.");

      if (params.limit > 500 || params.limit < 1)
        throw new RangeError(
          `Parameter 'limit' (${params.limit}) must be greater than 1 and less than 500.`,
        );

      Object.assign(parameters, { limit: params.limit });
    } else Object.assign(parameters, { limit: 100 });

    if (params.fields) {
      if (!Array.isArray(params.fields))
        throw new TypeError("Parameter 'fields' must be an array.");

      if (!isSameArray(params.fields, MALFields))
        throw new ReferenceError("Invalid value(s) in the 'fields' parameter.");

      Object.assign(parameters, { fields: params.fields });
    }

    // @ts-ignore
    const p = new URLSearchParams(parameters);
    const res = await fetching(
      {
        ...this.#config,
        endpoint: "/anime/ranking",
        parameters: p,
      },
      hooks,
    );

    if (res) return res.json();
    return;
  }
  async seasonal(params, hooks) {
    let parameters = {};
    if (!params)
      throw new ReferenceError(
        "Parameters 'year' and 'season' must be specified.",
      );
    if (!params.year)
      throw new ReferenceError("Parameter 'year' must be specified.");
    if (!params.season)
      throw new ReferenceError("Parameter 'season' must be specified.");

    if (Number.isNaN(params.year))
      throw new TypeError("Parameter 'year' must be a number.");
    else if (!Number.isInteger(params.year))
      throw new TypeError("Parameter 'year' must be an integer.");
    if (typeof params.season !== "string")
      throw new TypeError("Parameter 'season' must be a string.");

    if (!MALSeason.includes(params.season))
      throw new ReferenceError(
        "Parameter 'season' must be either 'spring', 'summer', 'fall' or 'winter'.",
      );

    if (params.offset) {
      if (Number.isNaN(params.offset))
        throw new TypeError("Parameter 'offset' must be a number.");
      else if (!Number.isInteger(params.offset))
        throw new TypeError("Parameter 'offset' must be an integer.");

      Object.assign(parameters, { offset: params.offset });
    } else Object.assign(parameters, { offset: 0 });

    if (params.limit) {
      if (Number.isNaN(params.limit))
        throw new TypeError("Parameter 'limit' must be a number.");
      else if (!Number.isInteger(params.limit))
        throw new TypeError("Parameter 'limit' must be an integer.");

      if (params.limit > 500 || params.limit < 1)
        throw new RangeError(
          `Parameter 'limit' (${params.limit}) must be greater than 1 and less than 500.`,
        );

      Object.assign(parameters, { limit: params.limit });
    } else Object.assign(parameters, { limit: 100 });

    if (params.fields) {
      if (!Array.isArray(params.fields))
        throw new TypeError("Parameter 'fields' must be an array.");

      if (!isSameArray(params.fields, MALFields))
        throw new ReferenceError("Invalid value(s) in the 'fields' parameter.");

      Object.assign(parameters, { fields: params.fields });
    }

    if (params.sort) {
      if (typeof params.sort !== "string")
        throw new TypeError("Parameter 'sort' must be a string.");
      if (
        params.sort !== "anime_score" &&
        params.sort !== "anime_num_list_users"
      )
        throw new ReferenceError(
          "Parameter 'sort' must be either 'anime_score' or 'anime_num_list'.",
        );
      Object.assign(parameters, { sort: params.sort });
    }

    // @ts-ignore
    const p = new URLSearchParams(parameters);

    const res = await fetching(
      {
        ...this.#config,
        endpoint: "/anime/season",
        parameters: p,
      },
      hooks,
    );

    if (res) return res.json();
    return;
  }
}

module.exports = { MyAnimeList };
