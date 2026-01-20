const { AnimeKitsu, MangaKitsu } = require("./kitsu");
const { MyAnimeList, MyMangaList } = require("./myanimelist");

const { isSameArray } = require("./funcs");

const { kitsu, myanimelist } = require("./consts");

module.exports = {
  // Classes and functions
  AnimeKitsu,
  MangaKitsu,
  isSameArray,
  MyAnimeList,
  MyMangaList,

  // Constants
  kitsu,
  myanimelist,
};
