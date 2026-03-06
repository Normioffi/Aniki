const fetch = (...args) =>
  // @ts-ignore
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

class AnikiCore {
  #defaultHandleError = async (error) => {
    if (error) console.error("Aniki: Unhandled API error:", await error);
  };

  async fetching(config, hooks) {
    let beforeRequest = hooks?.beforeRequest;
    let onError = hooks?.onError;
    let afterRequest = hooks?.afterRequest;

    if (beforeRequest) {
      await beforeRequest(config);
    }
    const res = await fetch(
      `${config.url}${config.endpoint}${config.parameters}`,
      {
        headers: config.headers,
      },
    );

    if (!res.ok) {
      await (onError || this.#defaultHandleError)(await res.json(), res);
    }
    if (afterRequest) {
      await afterRequest(res);
    }
    return res;
  }
}

module.exports = { AnikiCore };
