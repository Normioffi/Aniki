const { AnimeKitsu, MangaKitsu } = require("./apis/kitsu/index.js");
const { MyAnimeList, MyMangaList } = require("./apis/myanimelist/index.js");
const { WaifuIm } = require("./apis/waifuim/index.js");

const { isSameArray } = require("./funcs/index.js");

const { kitsu, myanimelist } = require("./consts/index.js");

module.exports = {
  // Classes and functions
  AnimeKitsu,
  MangaKitsu,
  isSameArray,
  MyAnimeList,
  MyMangaList,
  WaifuIm,
  // Constants
  kitsu,
  myanimelist,
};
