const fetch = (...args) =>
  // @ts-ignore
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

async function defaultHandleError(res) {
  throw new Error(`Aniki: An unhandled error has been received: ${res}`);
}
async function fetching(config, hooks) {
  let beforeRequest = hooks?.beforeRequest;
  let onError = hooks?.onError;
  let afterRequest = hooks?.afterRequest;

  if (beforeRequest) {
    await beforeRequest(config);
  }
  const res = await fetch(
    `${config.url}${config.endpoint}${config.parameters ? `?${config.parameters}` : ""}`,
    {
      headers: config.headers,
    },
  );

  if (!res.ok || res.status !== 200) {
    await (onError || defaultHandleError)(await res.json(), res);
    return;
  }
  if (afterRequest) {
    await afterRequest(res);
  }
  return res;
}

module.exports = { fetching };
