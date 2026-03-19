const { WIMUrl, WIMTags } = require("../../consts/waifuim");
const { isSameArray } = require("../../funcs/index");
const { AnikiCore } = require("../../core/index");

class WaifuIm extends AnikiCore {
  #config = {};
  constructor(config) {
    super();
    let defaultConfig = {
      url: WIMUrl,
      headers: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json",
      },
    };

    if (config) this.#config = { ...defaultConfig, ...config };
    else this.#config = defaultConfig;
  }
  async find(params, hooks) {
    const parameters = {};
    let IncludedTags = "";
    let ExcludedTags = "";

    if (params.IncludedTags) {
      if (!Array.isArray(params.IncludedTags))
        throw new TypeError("Parameter 'IncludedTags' must be an array.");
      if (!isSameArray(params.IncludedTags, WIMTags))
        throw new ReferenceError(
          "Invalid value(s) in the 'IncludedTags' parameter.",
        );

      Object.assign(parameters, { IncludedTags: params.IncludedTags });
    }

    if (params.ExcludedTags) {
      if (!Array.isArray(params.ExcludedTags))
        throw new TypeError("Parameter 'ExcludedTags' must be an array.");
      if (!isSameArray(params.ExcludedTags, WIMTags))
        throw new ReferenceError(
          "Invalid value(s) in the 'ExcludedTags' parameter.",
        );

      Object.assign(parameters, { ExcludedTags: params.ExcludedTags });
    }

    if (params.IncludedFiles)
      Object.assign(parameters, { IncludedFiles: params.IncludedFiles });

    if (params.ExcludedFiles)
      Object.assign(parameters, {
        ExcludedFiles: params.ExcludedFiles,
      });

    if (params.IsNsfw) Object.assign(parameters, { isNsfw: params.IsNsfw });
    else Object.assign(parameters, { isNsfw: false });

    if (params.Gif) Object.assign(parameters, { Gif: params.Gif });

    if (params.OrderBy) Object.assign(parameters, { OrderBy: params.OrderBy });

    if (params.Orientation)
      Object.assign(parameters, { Orientation: params.Orientation });

    if (params.PageSize)
      Object.assign(parameters, { PageSize: params.PageSize });
    else Object.assign(parameters, { PageSize: 10 });

    if (params.Page) Object.assign(parameters, { Page: params.Page });
    else Object.assign(parameters, { Page: 1 });

    if (params.Height) {
      if (Number.isNaN(params.Height))
        throw new TypeError(`Parameter 'Height' must be a number.`);
      else if (!Number.isInteger(params.Height))
        throw new TypeError(`Parameter 'Height' must be an integer.`);
      Object.assign(parameters, {
        Height: params.Height,
      });
    }

    if (params.Width) {
      if (Number.isNaN(params.Width))
        throw new TypeError(`Parameter 'Width' must be a number.`);
      else if (!Number.isInteger(params.Width))
        throw new TypeError(`Parameter 'Width' must be an integer.`);

      Object.assign(parameters, {
        Width: params.Width,
      });
    }

    // @ts-ignore
    const p = new URLSearchParams(parameters);

    const res = await super.fetching(
      {
        ...this.#config,
        endpoint: "/images",
        parameters: p,
      },
      hooks,
    );
    if (res) return res.json();
    return;
  }
}

module.exports = { WaifuIm };
