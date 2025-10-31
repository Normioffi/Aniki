const { AnimeKitsu, MangaKitsu } = require("./kitsu");
const { MyAnimeList } = require("./myanimelist");

const { isSameArray } = require("./funcs");

const { kitsu, myanimelist } = require("./consts");

module.exports = {
  AnimeKitsu,
  MangaKitsu,
  isSameArray,
  MyAnimeList,
  kitsu,
  myanimelist,
};
