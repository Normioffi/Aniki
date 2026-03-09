const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { MangaKitsu } = require("./manga");
const { AnimeKitsu } = require("./anime");

module.exports = {
  MangaKitsu,
  AnimeKitsu,
};
