import { Response } from "node-fetch";
import type { IKitsuError } from "../apis/kitsu/interfaces";
import type { IMALError } from "../apis/myanimelist/interfaces";
import type { IWaifuImError } from "../apis/waifuim/interfaces";
// import type { IWaifuItError } from "../apis/waifuit/interfaces";
// import type { DanError } from "../apis/danbooru";

/**
 * List of every error interfaces.
 * @since 1.4.7
 */
type ErrorsHook = IWaifuImError | IMALError | IKitsuError; //| DanError;

interface HeaderProperty {
  [name: string | number]: string | number | this;
}

/**
 * The interface configuration that will be used for the `fetching` function.
 * @since 1.4.7
 */
interface FetchConfig {
  url: string;
  headers: HeaderProperty;
  endpoint?: string;
  parameters?: URLSearchParams;
}

/**
 * Type for hooks that can optionnally be executed before or after a request and on error.
 * @template Err - Generic type for changing the possible error response.
 *
 * @since 1.4.7
 */
type AnikiHooks<Err extends ErrorsHook | unknown> = {
  beforeRequest: (config: FetchConfig) => Promise<void>;
  afterRequest: (res: Response) => Promise<void>;
  onError: (error: Promise<Readonly<Err>>, res: Response) => Promise<void>;
};

/**
 * @function
 * @param res
 */
declare function defaultHandleError(res: ErrorsHook): Promise<Error>;

/**
 * @function
 *
 * @description This function is used as an "improved" version of the fetch function.
 * @param config The configuration parameter, will contain the url, endpoint, url parameters and headers.
 * @param hooks The hooks to execute a few functions before, after a request or once an error occured.
 */
declare function fetching(
  config: FetchConfig,
  hooks: AnikiHooks<undefined>,
): Promise<Response | undefined>;

export { fetching };
export type { AnikiHooks, ErrorsHook, FetchConfig };
