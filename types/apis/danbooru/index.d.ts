import { AnikiCore, AnikiHooks } from "../../core/index";

/**
 * @since 2.0.0-beta.2
 */
declare class DanPosts {
  constructor(core: Danbooru, params, hooks: AnikiHooks<undefined>);

  getRandom(): Promise<Readonly<any>>;
  findUnique(): Promise<Readonly<any>>;
  findMany(): Promise<Readonly<any>>;
}
/**
 * @since 2.0.0-beta.2
 */
declare class Danbooru extends AnikiCore {
  constructor({ access_token });
  constructor({ client_id });
  posts(): DanPosts;
}
