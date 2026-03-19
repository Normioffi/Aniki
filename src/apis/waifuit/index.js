const { AnikiCore } = require("../../core/index");
const { WITUrl } = require("../../consts/waifuit");

class WaifuIt extends AnikiCore {
  #config = {};
  constructor(access_token, config) {
    if (!access_token)
      throw new ReferenceError("'access_token' must be specified.");

    super();
    let defaultConfig = {
      url: WITUrl,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

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
  async find(params, hooks) {
    const parameters = {};
    if (params.name) {
      Object.assign(parameters, { name: params.name });
    }
    if (params.anime) {
      Object.assign(parameters, { anime: params.anime });
    }

    // @ts-ignore
    const p = new URLSearchParams(parameters);

    const res = await super.fetching(
      {
        ...this.#config,
        endpoint: "/waifu",
        parameters: p,
      },
      hooks,
    );
    if (res) return res.json();
    return;
  }
}

module.exports = { WaifuIt };
