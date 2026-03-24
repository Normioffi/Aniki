const { AnikiCore } = require("../../core/index");
const { DanPosts } = require("./posts");

class Danbooru extends AnikiCore {
  constructor({ client_id, access_oken }) {
    super();
  }

  posts(params, hooks) {
    return new DanPosts(this, params, hooks);
  }
}
