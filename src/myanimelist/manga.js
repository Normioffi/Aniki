const { myanimelist } = require("../consts");
const { isSameArray } = require("../funcs");
const { MMLFields, MALUrl, MMLRankingType } = myanimelist;

class MyMangaList {
  #headers = {};
  #defaultHandleError = async (error) => {
    if (error) console.error("Aniki: Unhandled API error:", await error);
  };
  constructor({ client_id, access_token }) {
    if (!client_id && !access_token)
      throw new ReferenceError(
        "Either 'client_id' or 'access_token' must be specified."
      );
    else if (client_id && access_token)
      throw new ReferenceError(
        "'client_id' and 'access_token' are specified, please use only one authentification."
      );

    if (client_id) {
      if (typeof client_id !== "string")
        throw new TypeError("'client_id' must be a string.");
      this.#headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-MAL-CLIENT-ID": client_id,
      };
    }
    if (access_token) {
      if (typeof access_token !== "string")
        throw new TypeError("'access_token' must be a string.");
      this.#headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${access_token}`,
      };
    }
  }

  async find(params, handleError) {
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
          `Parameter 'limit' (${params.limit}) must be greater than 1 and less than 100.`
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
    const p = new URLSearchParams(parameters);
    const res = await fetch(`${MALUrl}/manga?${p}`, {
      headers: this.#headers,
    });

    if (!res.ok) {
      await (handleError || this.#defaultHandleError)(await res.json(), res);
      return;
    }

    return res.json();
  }

  async details(params, handleError) {
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

    const res = await fetch(
      `${MALUrl}/manga/${params.manga_id}?fields=${fie.toString()}`,
      {
        headers: this.#headers,
      }
    );

    if (!res.ok) {
      await (handleError || this.#defaultHandleError)(await res.json(), res);
      return;
    }

    return res.json();
  }
  async ranking(params, handleError) {
    const parameters = {};

    if (!params.ranking_type)
      throw new ReferenceError("Parameter 'ranking_type' must be specified.");
    if (!MMLRankingType.includes(params.ranking_type))
      throw new ReferenceError(
        "Parameter 'ranking_type' must be either 'all','manga','novels','oneshots','doujin','manhwa','manhua','bypopularity' or 'favorite'."
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
          `Parameter 'limit' (${params.limit}) must be greater than 1 and less than 500.`
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
    const p = new URLSearchParams(parameters);
    const res = await fetch(`${MALUrl}/manga/ranking?${p}`, {
      headers: this.#headers,
    });

    if (!res.ok) {
      await (handleError || this.#defaultHandleError)(await res.json(), res);
      return;
    }

    return res.json();
  }
}

module.exports = { MyMangaList };
