import { EKitsuMangaCategories, EKitsuSeason } from "../../enums/index.js";

/**
 * @type {TKitsuMangaCategories}
 * @description This type is used for manga categories.
 * @since 1.3.5
 */
type TKitsuMangaCategories =
  | "violence"
  | "plot-continuity"
  | "stereotypes"
  | "tone-changes"
  | "action"
  | "battle-royale"
  | "gunfights"
  | "ninja"
  | "space-battles"
  | "samurai"
  | "adventure"
  | "angst"
  | "anime-influenced"
  | "anthropomorphism"
  | "blackmail"
  | "absurdist-humour"
  | "breaking-the-fourth-wall"
  | "parody"
  | "satire"
  | "violent-retribution-for-accidental-infringement"
  | "super-deformed"
  | "detective"
  | "drama"
  | "angel"
  | "contemporary-fantasy"
  | "dark-fantasy"
  | "deity"
  | "demon"
  | "dragon"
  | "elf"
  | "high-fantasy"
  | "magic"
  | "mermaid"
  | "ghost"
  | "harem"
  | "henshin"
  | "horror"
  | "magical-girl"
  | "mystery"
  | "parasite"
  | "dementia"
  | "psychological"
  | "love-polygon"
  | "shoujo-ai"
  | "shounen-ai"
  | "slow-when-it-comes-to-love"
  | "sudden-girlfriend-appearance"
  | "unrequited-love"
  | "science-fiction"
  | "humanoid-alien"
  | "cyberpunk"
  | "cyborg"
  | "genetic-modification"
  | "power-suit"
  | "android"
  | "piloted-robot"
  | "robot-helper"
  | "super-robot"
  | "transforming-craft"
  | "space-opera"
  | "space-travel"
  | "steampunk"
  | "time-travel"
  | "superhero"
  | "supernatural"
  | "thriller"
  | "vampire"
  | "virtual-reality"
  | "zombie"
  | "countryside"
  | "desert"
  | "africa"
  | "united-states"
  | "new-york"
  | "americas"
  | "earth"
  | "super-power"
  | "mecha"
  | "robot"
  | "alien"
  | "romance"
  | "asia"
  | "china"
  | "japan"
  | "kyoto"
  | "tokyo"
  | "korea"
  | "france"
  | "europe"
  | "italy"
  | "germany"
  | "russia"
  | "united-kingdom"
  | "middle-east"
  | "fantasy-world"
  | "floating-island"
  | "future"
  | "isekai"
  | "island"
  | "parallel-universe"
  | "alternative-past"
  | "bakumatsu-meiji-period"
  | "heian-period"
  | "sengoku-period"
  | "three-kingdoms"
  | "tokugawa-period"
  | "victorian-period"
  | "world-war-ii"
  | "historical"
  | "past"
  | "present"
  | "alternative-present"
  | "other-planet"
  | "shipboard"
  | "mars"
  | "space"
  | "summer"
  | "josei"
  | "kids"
  | "seinen"
  | "shoujo"
  | "shounen"
  | "anti-war"
  | "coming-of-age"
  | "conspiracy"
  | "cooking"
  | "assassin"
  | "bounty-hunter"
  | "mafia"
  | "pirate"
  | "thievery"
  | "epidemic"
  | "post-apocalypse"
  | "war"
  | "family"
  | "friendship"
  | "gender-bender"
  | "cops"
  | "shinsengumi"
  | "air-force"
  | "feudal-warfare"
  | "navy"
  | "military"
  | "special-squads"
  | "law-and-order"
  | "disaster"
  | "netorare"
  | "parental-abandonment"
  | "politics"
  | "proxy-battles"
  | "buddhism"
  | "revenge"
  | "rotten-world"
  | "dystopia"
  | "school-life"
  | "all-girls-school"
  | "delinquent"
  | "elementary-school"
  | "high-school"
  | "middle-school"
  | "school-clubs"
  | "student-government"
  | "university"
  | "religion"
  | "slavery"
  | "slice-of-life"
  | "working-life"
  | "baseball"
  | "basketball"
  | "sports"
  | "card-games"
  | "combat"
  | "cycling"
  | "boxing"
  | "wrestling"
  | "motorsport"
  | "drifting"
  | "formula-racing"
  | "street-racing"
  | "soccer"
  | "tennis"
  | "volleyball"
  | "idol"
  | "musical-band"
  | "performance"
  | "the-arts"
  | "fantasy"
  | "ecchi"
  | "human-enhancement"
  | "crime"
  | "music";
/**
 * @interface
 * @description The parameters for the MangaKitsu#find method.
 * @since 1.3.0
 */
interface IKitsuMangaFind {
  /**
   * @param {string} query
   * @description An query to find an specific manga.
   * @example
   * ```js
   * manga.find({ query: "Oshi no ko" }).then(r => console.log(r))
   * ```
   */
  query: string;
  /**
   * @param {number} [offset]
   * @description The offset for pagination.
   * @example
   * ```js
   * manga.list({ offset: "33" }).then(r => console.log(r));
   * ```
   * should result as:
   * ```json
   * {
  "data": [
    {
      "id": "34",
      "type": "manga",
      "links": {},
      "attributes": {},
      "relationships": {}
    },
    {
      "id": "35",
      "type": "manga",
      "links": {},
      "attributes": {},
      "relationships": {}
    }
  ],
  "meta": { "count": 21099 },
  "links": {
    "first": "https://kitsu.app/api/edge/manga?page%5Blimit%5D=2&page%5Boffset%5D=0",
    "prev": "https://kitsu.app/api/edge/manga?page%5Blimit%5D=2&page%5Boffset%5D=31",
    "next": "https://kitsu.app/api/edge/manga?page%5Blimit%5D=2&page%5Boffset%5D=35",
    "last": "https://kitsu.app/api/edge/manga?page%5Blimit%5D=2&page%5Boffset%5D=21097"
  }
}
  ```
   */
  offset?: number | `${number}`;
  /**
   * @param {number | `${number}`} [perPage]
   * @description The number of mangas that should return the API.
   * @example
   * ```js
   * manga.list({ perPage: 10 }) // 10 result will show up, by default if empty.
   * manga.list({ perPage: 20 }) // Kitsu.app will accept less or equal to 20.
   * // ...
   */
  perPage?: number | `${number}`;
  /**
   * @param {"winter" | "spring" | "summer" | "fall" | EKitsuSeason} season
   * @description The season of the manga.
   * @example
   * ```js
   * // Simplest way
   * manga.find({ query: "Oshi no ko", season: "fall"});
   *
   * // Using EKitsuSeason
   * manga.find({ query: "Oshi no ko", season: EKitsuSeason.fall });
   *
   */
  season?: "winter" | "spring" | "summer" | "fall" | EKitsuSeason;
  /**
   * @param {number | `${number}` | `${number}..` | `${number}..${number}`}
   * @description The year of mangas, minimum is year **1862**. **No verification will occur for now**.
   * @example
   * ```js
   * // Simple number
   * manga.find({ query: "Oshi no ko", year: 2020 })
   *
   * // Simple ${number}
   * manga.find({ query: "Oshi no ko", year: "2020" })
   *
   * // Using ${number}..
   * manga.find({ query: "Oshi no ko", year: "2020.." })
   *
   * // Using ${number}..${number}
   * manga.find({ query: "Oshi no ko", year: "2020..2025" })
   *
   */
  year?: number | `${number}` | `${number}..` | `${number}..${number}`;
  /**
   * @param {number | `${number}..` | `${number}..${number}`} averageRating
   * @description The average rating of the manga in % (min **5**%, max **100**%). No verification will occur for now.
   * @example
   * ```js
   * // Using number only
   * manga.find({ query: "Oshi no ko", averageRating: 50});
   *
   * // Using ${number}..
   * manga.find({ query: "Oshi no ko", averageRating: "50.."});
   *
   * // Using ${number}..${number}
   * manga.find({ query: "Oshi no ko", averageRating: "50..79"});
   */
  averageRating?: number | `${number}..` | `${number}..${number}`;
  /**
   * @param {(TKitsuMangaCategories | EKitsuMangaCategories) | (TKitsuMangaCategories | EKitsuMangaCategories)[]} categories
   * @description The available categories of the manga.
   * @example
   * ```js
   * // Using string only
   * manga.find({ query: "Oshi no ko", categories: "drama"});
   *
   * // Using string[]
   * manga.find({ query: "Oshi no ko", categories: ["drama", "family"]);
   *
   * // Using EKitsumangaCategories
   * manga.find({ query: "Oshi no ko", categories: EKitsumangaCategories.DRAMA});
   */
  categories?:
    | (TKitsuMangaCategories | EKitsuMangaCategories)
    | (TKitsuMangaCategories | EKitsuMangaCategories)[];
}

/**
 * @interface
 * @description The parameters for the MangaKitsu#list method.
 * @since 1.3.0
 */
interface IKitsuMangaList {
  /**
   * @param {number} [offset]
   * @description The offset for pagination.
   * @example
   * ```js
   * manga.list({ offset: "33" }).then(r => console.log(r));
   * ```
   * should result as:
   * ```json
   * {
  "data": [
    {
      "id": "34",
      "type": "manga",
      "links": {},
      "attributes": {},
      "relationships": {}
    },
    {
      "id": "35",
      "type": "manga",
      "links": {},
      "attributes": {},
      "relationships": {}
    }
  ],
  "meta": { "count": 21099 },
  "links": {
    "first": "https://kitsu.app/api/edge/manga?page%5Blimit%5D=2&page%5Boffset%5D=0",
    "prev": "https://kitsu.app/api/edge/manga?page%5Blimit%5D=2&page%5Boffset%5D=31",
    "next": "https://kitsu.app/api/edge/manga?page%5Blimit%5D=2&page%5Boffset%5D=35",
    "last": "https://kitsu.app/api/edge/manga?page%5Blimit%5D=2&page%5Boffset%5D=21097"
  }
}
  ```
   */
  offset?: number | `${number}`;
  /**
   * @param {number | `${number}`} [perPage]
   * @description The number of mangas that should return the API.
   * @example
   * ```js
   * manga.list({ perPage: 10 }) // 10 result will show up, by default if empty.
   * manga.list({ perPage: 20 }) // Kitsu.app will accept less or equal to 20.
   * // ...
   */
  perPage?: number | `${number}`;
  /**
   * @param {"winter" | "spring" | "summer" | "fall" | EKitsuSeason} season
   * @description The season of the manga.
   * @example
   * ```js
   * // Simplest way
   * manga.find({ query: "Oshi no ko", season: "fall"});
   *
   * // Using EKitsuSeason
   * manga.find({ query: "Oshi no ko", season: EKitsuSeason.fall });
   *
   */
  season?: "winter" | "spring" | "summer" | "fall" | EKitsuSeason;
  /**
   * @param {number | `${number}` | `${number}..` | `${number}..${number}`}
   * @description The year of mangas, minimum is year **1862**. **No verification will occur for now**.
   * @example
   * ```js
   * // Simple number
   * manga.find({ query: "Oshi no ko", year: 2020 })
   *
   * // Simple ${number}
   * manga.find({ query: "Oshi no ko", year: "2020" })
   *
   * // Using ${number}..
   * manga.find({ query: "Oshi no ko", year: "2020.." })
   *
   * // Using ${number}..${number}
   * manga.find({ query: "Oshi no ko", year: "2020..2025" })
   *
   */
  year?: number | `${number}` | `${number}..` | `${number}..${number}`;
  /**
   * @param {number | `${number}..` | `${number}..${number}`} averageRating
   * @description The average rating of the manga in % (min **5**%, max **100**%). No verification will occur for now.
   * @example
   * ```js
   * // Using number only
   * manga.find({ query: "Oshi no ko", averageRating: 50});
   *
   * // Using ${number}..
   * manga.find({ query: "Oshi no ko", averageRating: "50.."});
   *
   * // Using ${number}..${number}
   * manga.find({ query: "Oshi no ko", averageRating: "50..79"});
   */
  averageRating?: number | `${number}..` | `${number}..${number}`;
  /**
   * @param {(TKitsuMangaCategories | EKitsuMangaCategories) | (TKitsuMangaCategories | EKitsuMangaCategories)[]} categories
   * @description The available categories of the manga.
   * @example
   * ```js
   * // Using string only
   * manga.find({ query: "Oshi no ko", categories: "drama"});
   *
   * // Using string[]
   * manga.find({ query: "Oshi no ko", categories: ["drama", "family"]);
   *
   * // Using EKitsumangaCategories
   * manga.find({ query: "Oshi no ko", categories: EKitsumangaCategories.DRAMA});
   */
  categories?:
    | (TKitsuMangaCategories | EKitsuMangaCategories)
    | (TKitsuMangaCategories | EKitsuMangaCategories)[];
}

export { IKitsuMangaFind, IKitsuMangaList, TKitsuMangaCategories };
