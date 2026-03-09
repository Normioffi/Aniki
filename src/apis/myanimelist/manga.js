const { AnikiCore } = require("../../core/index.js");
const { myanimelist } = require("../../consts/index.js");
const { isSameArray } = require("../../funcs/index.js");
const { MMLFields, MALUrl, MMLRankingType } = myanimelist;

class MyMangaList extends AnikiCore {
  #config = {};
  constructor({ client_id, access_token }, config) {
    super();
    const defaultConfig = {
      url: MALUrl,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

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
    } else Object.assign(parameters, { limit: 10 });

    if (params.fields) {
      if (!Array.isArray(params.fields))
        throw new TypeError("Parameter 'fields' must be an array.");

      if (!isSameArray(params.fields, MMLFields))
        throw new TypeError("Invalid value(s) in the 'fields' parameter.");

      Object.assign(parameters, { fields: params.fields });
    }
    // @ts-ignore
    const p = new URLSearchParams(parameters);
    const res = await super.fetching(
      {
        ...this.#config,
        endpoint: "/manga",
        parameters: p,
      },
      hooks,
    );

    if (res) return res.json();
    return;
  }

  async details(params, hooks) {
    let fie = [];

    if (!params.manga_id)
      throw new ReferenceError("Parameter 'manga_id' must be specified.");

    if (Number.isNaN(params.manga_id))
      throw new TypeError("Parameter 'manga_id' must be a number.");
    else if (!Number.isInteger(params.manga_id))
      throw new TypeError("Parameter 'manga_id' must be an integer.");
    if (params.fields) {
      if (!Array.isArray(params.fields))
        throw new TypeError("Parameter 'fields' must be an array.");

      if (!isSameArray(params.fields, MMLFields))
        throw new TypeError("Invalid value(s) in the 'fields' parameter.");

      fie = params.fields;
    }

    const res = await super.fetching(
      {
        ...this.#config,
        endpoint: `/manga/${params.manga_id}`,
        parameters: new URLSearchParams({ fields: fie.toString() }),
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
    if (!MMLRankingType.includes(params.ranking_type))
      throw new ReferenceError(
        "Parameter 'ranking_type' must be either 'all','manga','novels','oneshots','doujin','manhwa','manhua','bypopularity' or 'favorite'.",
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

      if (!isSameArray(params.fields, MMLFields))
        throw new TypeError("Invalid value(s) in the 'fields' parameter.");

      Object.assign(parameters, { fields: params.fields });
    }
    // @ts-ignore
    const p = new URLSearchParams(parameters);

    const res = await super.fetching(
      {
        ...this.#config,
        endpoint: "/manga/ranking",
        parameters: p,
      },
      hooks,
    );

    if (res) return res.json();
    return;
  }
}

module.exports = { MyMangaList };
