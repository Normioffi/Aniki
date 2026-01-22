const { WIMUrl, WIMTags } = require("../consts/waifuim");
const { isSameArray } = require("../funcs");

class WaifuIm {
  find(params, handleError) {
    const parameters = {};
    if (params.included_tags) {
      if (!Array.isArray(params.included_tags))
        throw new TypeError("Parameter 'included_tags' must be an array.");
      if (!isSameArray(params.included_tags, WIMTags))
        throw new ReferenceError(
          "Invalid value(s) in the 'included_tags' parameter."
        );

      Object.assign(parameters, params.included_tags);
    }

    if (params.excluded_tags) Object.assign(parameters, params.excluded_tags);

    if (params.included_files) Object.assign(parameters, params.included_files);

    if (params.excluded_files)
      Object.assign(parameters, {
        exluded_files: params.excluded_files,
      });

    if (params.is_nsfw) Object.assign(parameters, { is_nsfw: params.is_nsfw });

    if (params.gif) Object.assign(parameters, { gif: params.gif });

    if (params.order_by)
      Object.assign(parameters, { order_by: params.order_by });

    if (params.orientation)
      Object.assign(parameters, { orientation: params.orientation });

    if (params.limit) Object.assign(parameters, { limit: params.limit });

    if (params.size?.height)
      Object.assign(parameters, {
        height: params.size.height,
      });

    if (params.size?.width)
      Object.assign(parameters, {
        width: params.size.width,
      });

    const p = new URLSearchParams(parameters);

    return fetch(`${WIMUrl}?${p ?? ""}`, {
      headers: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json",
      },
    })
      .then((result) => {
        const r = result.json();
        if (handleError) if (result.status !== 200) handleError(r);

        return r;
      })
      .catch((e) => {
        throw new Error("Aniki: An error occured:" + e);
      });
  }
}
