import { Response } from "node-fetch";
import type { IKitsuError } from "../apis/kitsu/interfaces";
import type { IMALError } from "../apis/myanimelist/interfaces";
import type { IWaifuImError } from "../apis/waifuim/interfaces";
import type { IWaifuItError } from "../apis/waifuit/interfaces";

/**
 * List of every error interfaces.
 * @since 2.0.0-beta.1
 */
type ErrorsHook = IWaifuImError | IMALError | IKitsuError | IWaifuItError;

/**
 * @since 2.0.0-beta.1
 */
interface FetchConfig {
  url: string;
  headers: {
    [name: string | number]: string | Object;
  };
  endpoint?: string;
  parameters?: URLSearchParams;
}

/**
 * Type for hooks that can optionnally be executed before or after a request and on error.
 * @template Err - Generic type for changing the possible error response.
 * @since 2.0.0-beta.1
 */
type AnikiHooks<Err extends ErrorsHook | unknown> = {
  beforeRequest: (config: FetchConfig) => Promise<void>;
  afterRequest: (res: Response) => Promise<void>;
  onError: (error: Promise<Err>, res: Response) => Promise<void>;
};

/**
 * @class
 *
 *
 * @since 2.0.0-beta.1
 */
declare class AnikiCore {
  private defaultHandleError: (error) => Promise<void>;

  /**
   * @method
   *
   * @description d
   * @param config
   * @param hooks
   */
  fetching(
    config: FetchConfig,
    hooks: AnikiHooks<undefined>,
  ): Promise<Response | undefined>;
}

export { AnikiCore };
export type { AnikiHooks, FetchConfig };
