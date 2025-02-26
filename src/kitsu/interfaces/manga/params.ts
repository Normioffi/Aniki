import { EKitsuMangaCategories, EKitsuSeason } from "../../enums";

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
   * manga.list({ perPage: 30 }) // Kitsu.app will accept less or equal to 30.
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
   * @param {( | "comedy" | "anti_war" | "coming_of_age" | "epidemic" | "post_apocalypse" | "war" | "feudal_warfare" | "navy" | "family" | "friendship" | "gender_bender" | "law_and_order" | "shinsengumi" | "air_force" | "police" | "conspiracy" | "cooking" | "crime" | "assassin" | "bounty_hunter" | "mafia" | "pirate" | "thievery" | "disaster" | "countryside" | "desert" | "earth" | "fantasy_world" | "josei" | "shoujo" | "shounen" | "kids" | "seinen" | "alternative_present" | "space" | "summer" | "shipboard" | "other_planet" | "mars" | "isekai" | "island" | "parallel_universe" | "floating_island" | "past" | "alternative_past" | "bakumatsu_meiji_period" | "heian_period" | "sengoku_period" | "three_kingdoms" | "tokugawa_period" | "victorian_period" | "world_war_ii" | "future" | "romance" | "fantasy" | "action" | "drama" | "harem" | "mecha" | "ecchi" | "supernatural" | "super_power" | "mystery" | "magical_girl" | "horror" | "henshin" | "parasite" | "science_fiction" | "thriller" | "vampire" | "virtual_reality" | "zombie" | "detective" | "blackmail" | "anthropomorphism" | "manga_influenced" | "angst" | "ghost" | "slice_of_life" | "adventure" | "school_life" | EKitsumangaCategories ) | ( | "comedy" | "anti_war" | "coming_of_age" | "epidemic" | "post_apocalypse" | "war" | "feudal_warfare" | "navy" | "family" | "friendship" | "gender_bender" | "law_and_order" | "shinsengumi" | "air_force" | "police" | "conspiracy" | "cooking" | "crime" | "assassin" | "bounty_hunter" | "mafia" | "pirate" | "thievery" | "disaster" | "countryside" | "desert" | "earth" | "fantasy_world" | "josei" | "shoujo" | "shounen" | "kids" | "seinen" | "alternative_present" | "space" | "summer" | "shipboard" | "other_planet" | "mars" | "isekai" | "island" | "parallel_universe" | "floating_island" | "past" | "alternative_past" | "bakumatsu_meiji_period" | "heian_period" | "sengoku_period" | "three_kingdoms" | "tokugawa_period" | "victorian_period" | "world_war_ii" | "future" | "romance" | "fantasy" | "action" | "drama" | "harem" | "mecha" | "ecchi" | "supernatural" | "super_power" | "mystery" | "magical_girl" | "horror" | "henshin" | "parasite" | "science_fiction" | "thriller" | "vampire" | "virtual_reality" | "zombie" | "detective" | "blackmail" | "anthropomorphism" | "manga_influenced" | "angst" | "ghost" | "slice_of_life" | "adventure" | "school_life" | EKitsumangaCategories )[]} categories
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
    | (
        | "violence"
        | "comedy"
        | "anti_war"
        | "coming_of_age"
        | "epidemic"
        | "post_apocalypse"
        | "war"
        | "feudal_warfare"
        | "navy"
        | "family"
        | "friendship"
        | "gender_bender"
        | "law_and_order"
        | "shinsengumi"
        | "air_force"
        | "police"
        | "conspiracy"
        | "cooking"
        | "crime"
        | "assassin"
        | "bounty_hunter"
        | "mafia"
        | "pirate"
        | "thievery"
        | "disaster"
        | "countryside"
        | "desert"
        | "earth"
        | "fantasy_world"
        | "josei"
        | "shoujo"
        | "shounen"
        | "kids"
        | "seinen"
        | "alternative_present"
        | "space"
        | "summer"
        | "shipboard"
        | "other_planet"
        | "mars"
        | "isekai"
        | "island"
        | "parallel_universe"
        | "floating_island"
        | "past"
        | "alternative_past"
        | "bakumatsu_meiji_period"
        | "heian_period"
        | "sengoku_period"
        | "three_kingdoms"
        | "tokugawa_period"
        | "victorian_period"
        | "world_war_ii"
        | "future"
        | "romance"
        | "fantasy"
        | "action"
        | "drama"
        | "harem"
        | "mecha"
        | "ecchi"
        | "supernatural"
        | "super_power"
        | "mystery"
        | "magical_girl"
        | "horror"
        | "henshin"
        | "parasite"
        | "science_fiction"
        | "thriller"
        | "vampire"
        | "virtual_reality"
        | "zombie"
        | "detective"
        | "blackmail"
        | "anthropomorphism"
        | "Manga_influenced"
        | "angst"
        | "ghost"
        | "slice_of_life"
        | "adventure"
        | "school_life"
        | EKitsuMangaCategories
      )
    | (
        | "comedy"
        | "violence"
        | "anti_war"
        | "coming_of_age"
        | "epidemic"
        | "post_apocalypse"
        | "war"
        | "feudal_warfare"
        | "navy"
        | "family"
        | "friendship"
        | "gender_bender"
        | "law_and_order"
        | "shinsengumi"
        | "air_force"
        | "police"
        | "conspiracy"
        | "cooking"
        | "crime"
        | "assassin"
        | "bounty_hunter"
        | "mafia"
        | "pirate"
        | "thievery"
        | "disaster"
        | "countryside"
        | "desert"
        | "earth"
        | "fantasy_world"
        | "josei"
        | "shoujo"
        | "shounen"
        | "kids"
        | "seinen"
        | "alternative_present"
        | "space"
        | "summer"
        | "shipboard"
        | "other_planet"
        | "mars"
        | "isekai"
        | "island"
        | "parallel_universe"
        | "floating_island"
        | "past"
        | "alternative_past"
        | "bakumatsu_meiji_period"
        | "heian_period"
        | "sengoku_period"
        | "three_kingdoms"
        | "tokugawa_period"
        | "victorian_period"
        | "world_war_ii"
        | "future"
        | "romance"
        | "fantasy"
        | "action"
        | "drama"
        | "harem"
        | "mecha"
        | "ecchi"
        | "supernatural"
        | "super_power"
        | "mystery"
        | "magical_girl"
        | "horror"
        | "henshin"
        | "parasite"
        | "science_fiction"
        | "thriller"
        | "vampire"
        | "virtual_reality"
        | "zombie"
        | "detective"
        | "blackmail"
        | "anthropomorphism"
        | "Manga_influenced"
        | "angst"
        | "ghost"
        | "slice_of_life"
        | "adventure"
        | "school_life"
        | EKitsuMangaCategories
      )[];
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
   * manga.list({ perPage: 30 }) // Kitsu.app will accept less or equal to 30.
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
   * @param {( | "comedy" | "anti_war" | "coming_of_age" | "epidemic" | "post_apocalypse" | "war" | "feudal_warfare" | "navy" | "family" | "friendship" | "gender_bender" | "law_and_order" | "shinsengumi" | "air_force" | "police" | "conspiracy" | "cooking" | "crime" | "assassin" | "bounty_hunter" | "mafia" | "pirate" | "thievery" | "disaster" | "countryside" | "desert" | "earth" | "fantasy_world" | "josei" | "shoujo" | "shounen" | "kids" | "seinen" | "alternative_present" | "space" | "summer" | "shipboard" | "other_planet" | "mars" | "isekai" | "island" | "parallel_universe" | "floating_island" | "past" | "alternative_past" | "bakumatsu_meiji_period" | "heian_period" | "sengoku_period" | "three_kingdoms" | "tokugawa_period" | "victorian_period" | "world_war_ii" | "future" | "romance" | "fantasy" | "action" | "drama" | "harem" | "mecha" | "ecchi" | "supernatural" | "super_power" | "mystery" | "magical_girl" | "horror" | "henshin" | "parasite" | "science_fiction" | "thriller" | "vampire" | "virtual_reality" | "zombie" | "detective" | "blackmail" | "anthropomorphism" | "manga_influenced" | "angst" | "ghost" | "slice_of_life" | "adventure" | "school_life" | EKitsumangaCategories ) | ( | "comedy" | "anti_war" | "coming_of_age" | "epidemic" | "post_apocalypse" | "war" | "feudal_warfare" | "navy" | "family" | "friendship" | "gender_bender" | "law_and_order" | "shinsengumi" | "air_force" | "police" | "conspiracy" | "cooking" | "crime" | "assassin" | "bounty_hunter" | "mafia" | "pirate" | "thievery" | "disaster" | "countryside" | "desert" | "earth" | "fantasy_world" | "josei" | "shoujo" | "shounen" | "kids" | "seinen" | "alternative_present" | "space" | "summer" | "shipboard" | "other_planet" | "mars" | "isekai" | "island" | "parallel_universe" | "floating_island" | "past" | "alternative_past" | "bakumatsu_meiji_period" | "heian_period" | "sengoku_period" | "three_kingdoms" | "tokugawa_period" | "victorian_period" | "world_war_ii" | "future" | "romance" | "fantasy" | "action" | "drama" | "harem" | "mecha" | "ecchi" | "supernatural" | "super_power" | "mystery" | "magical_girl" | "horror" | "henshin" | "parasite" | "science_fiction" | "thriller" | "vampire" | "virtual_reality" | "zombie" | "detective" | "blackmail" | "anthropomorphism" | "manga_influenced" | "angst" | "ghost" | "slice_of_life" | "adventure" | "school_life" | EKitsumangaCategories )[]} categories
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
    | (
        | "violence"
        | "comedy"
        | "anti_war"
        | "coming_of_age"
        | "epidemic"
        | "post_apocalypse"
        | "war"
        | "feudal_warfare"
        | "navy"
        | "family"
        | "friendship"
        | "gender_bender"
        | "law_and_order"
        | "shinsengumi"
        | "air_force"
        | "police"
        | "conspiracy"
        | "cooking"
        | "crime"
        | "assassin"
        | "bounty_hunter"
        | "mafia"
        | "pirate"
        | "thievery"
        | "disaster"
        | "countryside"
        | "desert"
        | "earth"
        | "fantasy_world"
        | "josei"
        | "shoujo"
        | "shounen"
        | "kids"
        | "seinen"
        | "alternative_present"
        | "space"
        | "summer"
        | "shipboard"
        | "other_planet"
        | "mars"
        | "isekai"
        | "island"
        | "parallel_universe"
        | "floating_island"
        | "past"
        | "alternative_past"
        | "bakumatsu_meiji_period"
        | "heian_period"
        | "sengoku_period"
        | "three_kingdoms"
        | "tokugawa_period"
        | "victorian_period"
        | "world_war_ii"
        | "future"
        | "romance"
        | "fantasy"
        | "action"
        | "drama"
        | "harem"
        | "mecha"
        | "ecchi"
        | "supernatural"
        | "super_power"
        | "mystery"
        | "magical_girl"
        | "horror"
        | "henshin"
        | "parasite"
        | "science_fiction"
        | "thriller"
        | "vampire"
        | "virtual_reality"
        | "zombie"
        | "detective"
        | "blackmail"
        | "anthropomorphism"
        | "Manga_influenced"
        | "angst"
        | "ghost"
        | "slice_of_life"
        | "adventure"
        | "school_life"
        | EKitsuMangaCategories
      )
    | (
        | "comedy"
        | "violence"
        | "anti_war"
        | "coming_of_age"
        | "epidemic"
        | "post_apocalypse"
        | "war"
        | "feudal_warfare"
        | "navy"
        | "family"
        | "friendship"
        | "gender_bender"
        | "law_and_order"
        | "shinsengumi"
        | "air_force"
        | "police"
        | "conspiracy"
        | "cooking"
        | "crime"
        | "assassin"
        | "bounty_hunter"
        | "mafia"
        | "pirate"
        | "thievery"
        | "disaster"
        | "countryside"
        | "desert"
        | "earth"
        | "fantasy_world"
        | "josei"
        | "shoujo"
        | "shounen"
        | "kids"
        | "seinen"
        | "alternative_present"
        | "space"
        | "summer"
        | "shipboard"
        | "other_planet"
        | "mars"
        | "isekai"
        | "island"
        | "parallel_universe"
        | "floating_island"
        | "past"
        | "alternative_past"
        | "bakumatsu_meiji_period"
        | "heian_period"
        | "sengoku_period"
        | "three_kingdoms"
        | "tokugawa_period"
        | "victorian_period"
        | "world_war_ii"
        | "future"
        | "romance"
        | "fantasy"
        | "action"
        | "drama"
        | "harem"
        | "mecha"
        | "ecchi"
        | "supernatural"
        | "super_power"
        | "mystery"
        | "magical_girl"
        | "horror"
        | "henshin"
        | "parasite"
        | "science_fiction"
        | "thriller"
        | "vampire"
        | "virtual_reality"
        | "zombie"
        | "detective"
        | "blackmail"
        | "anthropomorphism"
        | "Manga_influenced"
        | "angst"
        | "ghost"
        | "slice_of_life"
        | "adventure"
        | "school_life"
        | EKitsuMangaCategories
      )[];
}

export { IKitsuMangaFind, IKitsuMangaList };
