import type { AnikiHooks } from "../../core/index";
import { AnikiCore } from "../../core/index";
import type { IWaifuItError, IWITAnime, IWITFind } from "./interfaces";

/**
 * @class
 *
 * @since 2.0.0-beta.1
 */
declare class WaifuIt extends AnikiCore {
  find(
    params: IWITFind,
    hooks: AnikiHooks<IWaifuItError>,
  ): Promise<Readonly<IWITAnime> | undefined>;
}

export type * from "./interfaces";
export { WaifuIt };
