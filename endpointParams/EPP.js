/**
 * 
 * @param {string} api - The api used.
 * @param {string} text - The text entries in object.
 * @param {number} offset - The offset for a specific result/page.
 */

export function apiEPP(api, text, offset) {
  let EPP = {
    konet: {
      anime: `anime?name=${text}`,
      search: `search?query=${text}`,
      list: `all`,
      gender: `genre?type=${text}`,
      theme: `theme?type=${text}`,
    },
    kitsu: {
      search: `anime?filter[text]=${text}&page%5Boffset%5D=${offset}`,
      list: `anime?page%5Blimit%5D=10&page%5Boffset%5D=${offset}`
    }
  }
  if (!text || undefined) {
    console.warn("Missing text entries.")
  } else {
    if (api === "konet") {
      return EPP.konet
    } else if (api === "kitsu") {
      return EPP.kitsu
    }
  if (!offset || isNaN(offset) === false || null || undefined) {
    console.warn("Offset must be a number.")
  }
  }
};