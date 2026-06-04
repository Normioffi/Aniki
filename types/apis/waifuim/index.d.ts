import type { AnikiHooks, FetchConfig } from "../../core/index";
import type { IWaifuIm, IWaifuImError, IWaifuImParams } from "./interfaces";
/**
 * @class
 * @description This class use the Waifu.Im to get anime or manga waifu with optionals parameters.
 *
 * @since 2.0.0-beta.1
 */
declare class WaifuIm {
  private config: FetchConfig;
  constructor(
    access_token?: string,
    /**
     * Any supplementary configuration that you need to add for the fetch function.
     */
    config?: FetchConfig,
  );
  /**
   * @method
   * @description Find an waifu with different parameters (only tags like: maid, waifu, marin-kitagawa, mori-calliope, raiden-shogun, oppai, selfies or uniform can be used.) For more informations, go to https://docs.waifu.im/ website.
   *
   * @param params - The optionals parameters for the request.
   * @param hooks Object with functions inside to execute code before, after a request and on error.
   *
   * @throws An internal server error has occured: **error**
   * @returns Return a Promise.
   * @since 2.0.0-beta.1
   */
  find(
    params: IWaifuImParams,
    hooks?: AnikiHooks<IWaifuImError>,
  ): Promise<Readonly<IWaifuIm> | undefined>;
}

export type * from "./interfaces";
export { WaifuIm };
