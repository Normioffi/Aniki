/**
 * 
 * @param {string} type - The type for api (Anime or Manga) 
 * @param {string} api - The api used.
 * @param {string} text - The text entries in object.
 * @param {number} offset - The offset for a specific result/page.
 */

function apiEPP(type, api, text, offset) {
  if (type === "anime") {
    let EPPAnime = {
      konet: {
        anime: `anime?name=${text}`,
        search: `search?query=${text}&offset=${offset}`,
        list: `all?offset=${offset}`,
        gender: `genre?type=${text}&offset=${offset}`,
        theme: `theme?type=${text}&offset=${offset}`,
      },
      kitsu: {
        search: `anime?filter[text]=${text}&page%5Boffset%5D=${offset}`,
        list: `anime?page%5Blimit%5D=10&page%5Boffset%5D=${offset}`
      }
    }
    if (!offset) offset = 0;
    
    if (offset && isNaN(offset) || null || undefined) {
      return console.warn("Offset must be a number.");
    }
    if (!text || undefined) {
      console.warn("Missing text entries.")
    } else {
      if (api === "konet") {
        return EPPAnime.konet;
      } else if (api === "kitsu") {
        return EPPAnime.kitsu;
      }
    }
  } else if (type === "manga") {
    let EPPManga = {
      kitsu: {
        search: `manga?filter[text]=${text}&page%5Boffset%5D=${offset}`,
      list: `manga?page%5Blimit%5D=10&page%5Boffset%5D=${offset}`
      }
    }
    if (offset && isNaN(offset) || null || undefined) {
      return console.warn("Offset must be a number.");
    }
    if (!text || undefined) {
      console.warn("Missing text entries.")
    } else {
      if (api === "kitsu") {
        return EPPManga.kitsu;
      }
    }
  } else if (type !== "anime" || "manga") {
    return console.error("Type is not valid.")
  }
};

module.exports = { apiEPP };
