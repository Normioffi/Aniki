/**
 * 
 * @param {string} api - The api used.
 * @param {string} text - The text entries in object.
 * @param {number} offset - The offset for a specific result/page.
 */

function apiEPP(api, text, offset) {
  let EPP = {
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
  if (offset && isNaN(offset) || null || undefined) {
    console.warn("Offset must be a number.")
  }
  if (!text || undefined) {
    console.warn("Missing text entries.")
  } else {
    if (api === "konet") {
      return EPP.konet
    } else if (api === "kitsu") {
      return EPP.kitsu
    }
  }
};
module.exports = { apiEPP }
