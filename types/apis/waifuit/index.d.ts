import type { AnikiHooks, FetchConfig } from "../../core/index";
import { AnikiCore } from "../../core/index";
import type { IWaifuItError, IWITAnime, IWITFind } from "./interfaces";

/**
 * # WARNING
 * ## This API is currently down for some reason, i will keep it in the beta branch without being tested.
 * @class
 * @extends {AnikiCore} The core for the fetch method.
 * @constructor
 * @description
 *
 * @since 2.0.0-beta.1
 */
declare class WaifuIt extends AnikiCore {
  private config: FetchConfig;
  constructor(
    access_token: string,
    /**
     * Any supplementary configuration that you need to add for the fetch function.
     */
    config?: FetchConfig,
  );

  /**
   * @method
   *
   * @description
   * @param params
   * @param hooks
   * @since 2.0.0-beta.1
   */
  find(
    params: IWITFind,
    hooks?: AnikiHooks<IWaifuItError>,
  ): Promise<Readonly<IWITAnime> | undefined>;
}

export type * from "./interfaces";
export { WaifuIt };
