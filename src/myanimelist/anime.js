const { myanimelist } = require("../consts");
const { isSameArray } = require("../funcs");
const { MALFields, MALUrl } = myanimelist;

class MyAnimeList {
  #headers = {};
  #defaultHandleError = async (error) => {
    if (error) console.error("Aniki: Unhandled API error:", await error);
  };
  constructor({ CLIENT_ID }) {
    if (!CLIENT_ID)
      throw new ReferenceError(
        "CLIENT_ID is empty or undefined, please add your CLIENT_ID to use the MyAnimeList API."
      );
    const type = typeof CLIENT_ID;
    if (type !== "string")
      throw new TypeError(
        `Invalid CLIENT_ID type, please use a string instead of a ${type} to use the MyAnimeList API.`
      );
    this.#headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-MAL-CLIENT-ID": CLIENT_ID,
    };
  }

  async find(params, handleError) {
    const parameters = {};

    if (!params.query) throw new ReferenceError("Value 'query' is empty.");

    Object.assign(parameters, { q: params.query });

    if (params.offset)
      if (Number.isNaN(params.offset))
        throw new TypeError("Value 'offset' must be a number.");

    Object.assign(parameters, { offset: params.offset ?? 0 });

    if (params.limit) {
      if (Number.isNaN(params.limit))
        throw new TypeError("Value 'limit' must be a number.");

      if (params.limit > 100 || params.limit < 1)
        throw new RangeError(
          `Value 'limit' (${params.limit}) is less than 1 or greater than 100.`
        );

      Object.assign(parameters, { limit: params.limit });
    } else Object.assign(parameters, { limit: 10 });

    const p = new URLSearchParams(parameters);
    const res = await fetch(`${MALUrl}/anime?${p}`, {
      headers: this.#headers,
    });

    if (!res.ok) {
      await (handleError || this.#defaultHandleError)(
        await res.json(),
        res.status
      );
      return;
    }

    return res.json();
  }

  async details(anime_id, fields, handleError) {
    let fie =
      fields.length > 0
        ? fields
        : [
            "id",
            "title",
            "start_date",
            "end_date",
            "main_picture",
            "synopsis",
            "media_type",
            "status",
          ];
    if (!anime_id) throw new ReferenceError("Parameter 'anime_id' is empty.");

    if (Number.isNaN(anime_id))
      throw new TypeError("Value 'anime_id' must be a number.");

    if (!isSameArray(fie, MALFields))
      throw new TypeError("Invalid value(s) in the 'field' parameter.");

    const res = await fetch(
      `${MALUrl}/anime/${anime_id}?fields=${fie.toString()}`,
      {
        headers: this.#headers,
      }
    );

    if (!res.ok) {
      await (handleError || this.#defaultHandleError)(
        await res.json(),
        res.status
      );
      return;
    }

    return res.json();
  }
}

module.exports = { MyAnimeList };
