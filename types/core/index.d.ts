import { Response } from "node-fetch";
import { IKitsuError } from "../kitsu";
import { IMALError } from "../myanimelist";
import type { IWaifuImError } from "../waifuim";

interface FetchConfig {
  url: string;
  headers: {
    [name: string | number]: string | Object;
  };
  parameters?: URLSearchParams;
  endpoint?: string;
}
type AnikiHooks<Err extends IWaifuImError | IMALError | IKitsuError> = {
  beforeRequest: (config: FetchConfig) => Promise<void>;
  afterRequest: (res: Response) => Promise<void>;
  onError: (error: Promise<Err>, res: Response) => Promise<void>;
};

declare class AnikiCore {
  fetching(
    config: FetchConfig,
    hooks: AnikiHooks,
  ): Promise<Response | undefined>;
}

export { AnikiCore };
export type { AnikiHooks, FetchConfig };
