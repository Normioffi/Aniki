import {
  EKitsuAnimeAgeRating,
  EKitsuAnimeCategories,
  EKitsuAnimeStreamers,
  EKitsuSeason,
} from "../../enums/index.js";

type TKitsuAnimeCategories =
  | "violence"
  | "plot-continuity"
  | "stereotypes"
  | "tone-changes"
  | "action"
  | "battle-royale"
  | "gunfights"
  | "martial-arts"
  | "ninja"
  | "space-battles"
  | "swordplay"
  | "samurai"
  | "adventure"
  | "angst"
  | "anime-influenced"
  | "anthropomorphism"
  | "blackmail"
  | "comedy"
  | "absurdist-humour"
  | "breaking-the-fourth-wall"
  | "parody"
  | "satire"
  | "super-deformed"
  | "violent-retribution-for-accidental-infringement"
  | "detective"
  | "drama"
  | "fantasy"
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
  | "love-polygon"
  | "psychological"
  | "romance"
  | "shoujo-ai"
  | "shounen-ai"
  | "slow-when-it-comes-to-love"
  | "sudden-girlfriend-appearance"
  | "unrequited-love"
  | "ecchi"
  | "slapstick"
  | "science-fiction"
  | "alien"
  | "humanoid-alien"
  | "cyberpunk"
  | "human-enhancement"
  | "cyborg"
  | "genetic-modification"
  | "mecha"
  | "robot"
  | "power-suit"
  | "space-opera"
  | "space-travel"
  | "steampunk"
  | "time-travel"
  | "super-power"
  | "superhero"
  | "supernatural"
  | "thriller"
  | "vampire"
  | "zombie"
  | "virtual-reality"
  | "countryside"
  | "desert"
  | "earth"
  | "africa"
  | "americas"
  | "united-states"
  | "new-york"
  | "china"
  | "japan"
  | "kyoto"
  | "tokyo"
  | "europe"
  | "korea"
  | "middle-east"
  | "france"
  | "germany"
  | "italy"
  | "russia"
  | "united-kingdom"
  | "floating-island"
  | "fantasy-world"
  | "future"
  | "isekai"
  | "island"
  | "parallel-universe"
  | "past"
  | "alternative-past"
  | "bakumatsu-meiji-period"
  | "heian-period"
  | "sengoku-period"
  | "three-kingdoms"
  | "tokugawa-period"
  | "victorian-period"
  | "world-war-ii"
  | "historical"
  | "present"
  | "alternative-present"
  | "space"
  | "other-planet"
  | "mars"
  | "shipboard"
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
  | "crime"
  | "assassin"
  | "bounty-hunter"
  | "mafia"
  | "pirate"
  | "thievery"
  | "disaster"
  | "epidemic"
  | "post-apocalypse"
  | "war"
  | "family"
  | "friendship"
  | "gender-bender"
  | "law-and-order"
  | "cops"
  | "special-squads"
  | "shinsengumi"
  | "military"
  | "air-force"
  | "feudal-warfare"
  | "navy"
  | "netorare"
  | "parental-abandonment"
  | "politics"
  | "proxy-battles"
  | "religion"
  | "buddhism"
  | "revenge"
  | "dystopia"
  | "school-life"
  | "music";
/**
 * @interface
 * @description The parameters for the AnimeKitsu#find method.
 * @since 1.3.0
 */
interface IKitsuAnimeFind {
  /**
   * @param {string} query
   * @description An query to find an specific anime.
   * @example
   * ```js
   * anime.find({ query: "Oshi no ko" }).then(r => console.log(r))
   * ```
   */
  query: string;
  /**
   * @param {number} [offset]
   * @description The offset for pagination.
   * @example
   * ```js
   * anime.list({ offset: "33" }).then(r => console.log(r));
   * ```
   * should result as:
   * ```json
   * {
  "data": [
    {
      "id": "34",
      "type": "anime",
      "links": {},
      "attributes": {},
      "relationships": {}
    },
    {
      "id": "35",
      "type": "anime",
      "links": {},
      "attributes": {},
      "relationships": {}
    }
  ],
  "meta": { "count": 21099 },
  "links": {
    "first": "https://kitsu.app/api/edge/anime?page%5Blimit%5D=2&page%5Boffset%5D=0",
    "prev": "https://kitsu.app/api/edge/anime?page%5Blimit%5D=2&page%5Boffset%5D=31",
    "next": "https://kitsu.app/api/edge/anime?page%5Blimit%5D=2&page%5Boffset%5D=35",
    "last": "https://kitsu.app/api/edge/anime?page%5Blimit%5D=2&page%5Boffset%5D=21097"
  }
}
  ```
   */
  offset?: number | `${number}`;
  /**
   * @param {number | `${number}`} [perPage]
   * @description The number of animes that should return the API.
   * @example
   * ```js
   * anime.list({ perPage: 10 }) // 10 result will show up, by default if empty.
   * anime.list({ perPage: 20 }) // Kitsu.app will accept less or equal to 20.
   * // ...
   */
  perPage?: number | `${number}`;
  /**
   * @param {"winter" | "spring" | "summer" | "fall" | EKitsuSeason} season
   * @description The season of the anime.
   * @example
   * ```js
   * // Simplest way
   * anime.find({ query: "Oshi no ko", season: "fall" });
   *
   * // Using EKitsuSeason
   * anime.find({ query: "Oshi no ko", season: EKitsuSeason.fall });
   *
   */
  season?: "winter" | "spring" | "summer" | "fall" | EKitsuSeason;
  /**
   * @param {number | `${number}` | `${number}..` | `${number}..${number}`}
   * @description The year of animes, minimum is year **1907**. **No verification will occur for now**.
   * @example
   * ```js
   * // Simple number
   * anime.find({ query: "Oshi no ko", year: 2020 })
   *
   * // Simple ${number}
   * anime.find({ query: "Oshi no ko", year: "2020" })
   *
   * // Using ${number}..
   * anime.find({ query: "Oshi no ko", year: "2020.." })
   *
   * // Using ${number}..${number}
   * anime.find({ query: "Oshi no ko", year: "2020..2025" })
   *
   */
  year?: number | `${number}` | `${number}..` | `${number}..${number}`;
  /**
   * @param {( | "Crunchyroll" | "Hulu" | "Funanimation" | "CONtv" | "Netflix" | "HIDIVE" | "TubiTV" | "Amazon" | "Youtube" | "AnimeLab" | "VRV" | EKitsuAnimeStreamers ) | ( | "Crunchyroll" | "Hulu" | "Funanimation" | "CONtv" | "Netflix" | "HIDIVE" | "TubiTV" | "Amazon" | "Youtube" | "AnimeLab" | "VRV" | EKitsuAnimeStreamers )[]} streamers
   * @description The streaming platforms that diffuse the animes. (better using AnimeKitsu#list method)
   * @example
   * ```js
   * // Simplest way
   * anime.find({ query: "Oshi no ko", streamers: "Funanimation" });
   *
   * // Using string[]
   * anime.find({ query: "Oshi no ko", streamers: ["Funanimation", "Hulu"] });
   *
   * // Using EKitsuAnimeStreamers
   * anime.find({ query: "Oshi no ko", streamers: EKitsuAnimeStreamers.Hulu });
   * ```
   */
  streamers?:
    | (
        | "Crunchyroll"
        | "Hulu"
        | "Funanimation"
        | "CONtv"
        | "Netflix"
        | "HIDIVE"
        | "TubiTV"
        | "Amazon"
        | "Youtube"
        | "AnimeLab"
        | "VRV"
        | EKitsuAnimeStreamers
      )
    | (
        | "Crunchyroll"
        | "Hulu"
        | "Funanimation"
        | "CONtv"
        | "Netflix"
        | "HIDIVE"
        | "TubiTV"
        | "Amazon"
        | "Youtube"
        | "AnimeLab"
        | "VRV"
        | EKitsuAnimeStreamers
      )[];
  /**
   * @param {("G" | "PG" | "R" | EKitsuAnimeAgeRating) | ("G" | "PG" | "R" | EKitsuAnimeAgeRating)[]} ageRating
   * @description the age rating of the anime (**G**: *General Audiences*, **PG**: *Parental Guidance Suggested*, **R**: *Restricted*, **R18**: *Restricted for 18 years old or older*.)
   * @example
   * ```js
   * // Simplest way
   * anime.find({ query: "Oshi no ko", ageRating: "G" });
   *
   * // Using string[]
   * anime.find({ query: "Oshi no ko", ageRating: ["G", "PG"] });
   *
   * // Using EKitsuAnimeAgeRating
   * anime.find({ query: "Oshi no ko", ageRating: EKitsuAnimeAgeRating.GeneralAudiences });
   */
  ageRating?:
    | ("G" | "PG" | "R" | EKitsuAnimeAgeRating)
    | ("G" | "PG" | "R" | EKitsuAnimeAgeRating)[];
  /**
   * @param {number | `${number}..` | `${number}..${number}`} averageRating
   * @description The average rating of the anime in % (min **5**%, max **100**%). No verification will occur for now.
   * @example
   * ```js
   * // Using number only
   * anime.find({ query: "Oshi no ko", averageRating: 50 });
   *
   * // Using ${number}..
   * anime.find({ query: "Oshi no ko", averageRating: "50.." });
   *
   * // Using ${number}..${number}
   * anime.find({ query: "Oshi no ko", averageRating: "50..79" });
   */
  averageRating?: number | `${number}..` | `${number}..${number}`;
  /**
   * @param {(TKitsuAnimeCategories | EKitsuAnimeCategories) | (TKitsuAnimeCategories | EKitsuAnimeCategories)[]} categories
   * @description The available categories of the anime.
   * @example
   * ```js
   * // Using string only
   * anime.find({ query: "Oshi no ko", categories: "drama"});
   *
   * // Using string[]
   * anime.find({ query: "Oshi no ko", categories: ["drama", "family"] });
   *
   * // Using EKitsuAnimeCategories
   * anime.find({ query: "Oshi no ko", categories: EKitsuAnimeCategories.DRAMA });
   */
  categories?:
    | (TKitsuAnimeCategories | EKitsuAnimeCategories)
    | (TKitsuAnimeCategories | EKitsuAnimeCategories)[];
}

/**
 * @interface
 * @description The parameters for the AnimeKitsu#list method.
 * @since 1.3.0
 */
interface IKitsuAnimeList {
  /**
   * @param {number} [offset]
   * @description The offset for pagination
   * @example
   * ```js
   * anime.list({ offset: "33" }).then(r => console.log(r));
   * ```
   * should result as:
   * ```json
   * {
  "data": [
    {
      "id": "34",
      "type": "anime",
      "links": {...},
      "attributes": {...},
      "relationships": {...}
    },
    {
      "id": "35",
      "type": "anime",
      "links": {...},
      "attributes": {...},
      "relationships": {...}
    }
  ],
  "meta": { "count": 21099 },
  "links": {
    "first": "https://kitsu.app/api/edge/anime?page%5Blimit%5D=2&page%5Boffset%5D=0",
    "prev": "https://kitsu.app/api/edge/anime?page%5Blimit%5D=2&page%5Boffset%5D=31",
    "next": "https://kitsu.app/api/edge/anime?page%5Blimit%5D=2&page%5Boffset%5D=35",
    "last": "https://kitsu.app/api/edge/anime?page%5Blimit%5D=2&page%5Boffset%5D=21097"
  }
}
  ```
   */
  offset?: number | `${number}`;
  /**
   * @param {number | `${number}`} [perPage]
   * @description The number of animes that should return the API.
   * @example
   * ```js
   * anime.list({ perPage: 10 }) // 10 result will show up, by default if empty.
   * anime.list({ perPage: 20 }) // Kitsu.app will accept less or equal to 20.
   * // ...
   */
  perPage?: number | `${number}`;
  /**
   * @param {"winter" | "spring" | "summer" | "fall" | EKitsuSeason} season
   * @description The season of the anime.
   * @example
   * ```js
   * // Simplest way
   * anime.list({ season: "fall"});
   *
   * // Using EKitsuSeason
   * anime.list({ season: EKitsuSeason.fall });
   *
   */
  season?: "winter" | "spring" | "summer" | "fall" | EKitsuSeason;
  /**
   * @param {number | `${number}` | `${number}..` | `${number}..${number}`} year
   * @description The year of animes, minimum is year **1907**. **No verification will occur for now**.
   * @example
   * ```js
   * // Simple number
   * anime.list({ year: 2020 })
   *
   * // Simple ${number}
   * anime.list({ year: "2020" })
   *
   * // Using ${number}..
   * anime.list({ year: "2020.." })
   *
   * // Using ${number}..${number}
   * anime.list({ year: "2020..2025" })
   *
   */
  year?: number | `${number}` | `${number}..` | `${number}..${number}`;
  /**
   * @param {( | "Crunchyroll" | "Hulu" | "Funanimation" | "CONtv" | "Netflix" | "HIDIVE" | "TubiTV" | "Amazon" | "Youtube" | "AnimeLab" | "VRV" | EKitsuAnimeStreamers ) | ( | "Crunchyroll" | "Hulu" | "Funanimation" | "CONtv" | "Netflix" | "HIDIVE" | "TubiTV" | "Amazon" | "Youtube" | "AnimeLab" | "VRV" | EKitsuAnimeStreamers )[]} streamers
   * @description The streaming platforms that diffuse the animes. (better using AnimeKitsu#list method)
   * @example
   * ```js
   * // Simplest way
   * anime.list({ streamers: "Funanimation" });
   *
   * // Using string[]
   * anime.list({ streamers: ["Funanimation", "Hulu"] });
   *
   * // Using EKitsuAnimeStreamers
   * anime.list({ streamers: EKitsuAnimeStreamers.Hulu });
   * ```
   */
  streamers?:
    | (
        | "Crunchyroll"
        | "Hulu"
        | "Funanimation"
        | "CONtv"
        | "Netflix"
        | "HIDIVE"
        | "TubiTV"
        | "Amazon"
        | "Youtube"
        | "AnimeLab"
        | "VRV"
        | EKitsuAnimeStreamers
      )
    | (
        | "Crunchyroll"
        | "Hulu"
        | "Funanimation"
        | "CONtv"
        | "Netflix"
        | "HIDIVE"
        | "TubiTV"
        | "Amazon"
        | "Youtube"
        | "AnimeLab"
        | "VRV"
        | EKitsuAnimeStreamers
      )[];
  /**
   * @param {("G" | "PG" | "R" | EKitsuAnimeAgeRating) | ("G" | "PG" | "R" | EKitsuAnimeAgeRating)[]} ageRating
   * @description the age rating of the anime (**G**: *General Audiences*, **PG**: *Parental Guidance Suggested*, **R**: *Restricted*, **R18**: *Restricted for 18 years old or older*.)
   * @example
   * ```js
   * // Simplest way
   * anime.list({ ageRating: "G" });
   *
   * // Using string[]
   * anime.list({ ageRating: ["G", "PG"] });
   *
   * // Using EKitsuAnimeAgeRating
   * anime.list({ ageRating: EKitsuAnimeAgeRating.GeneralAudiences });
   */
  ageRating?:
    | ("G" | "PG" | "R" | EKitsuAnimeAgeRating)
    | ("G" | "PG" | "R" | EKitsuAnimeAgeRating)[];
  /**
   * @param {`${number}..` | `${number}..${number}`} averageRating
   * @description The average rating of the anime in % (min **5**%, max **100**%). **No verification will occur for now**.
   * @example
   * ```js
   * // Using ${number}..
   * anime.list({ averageRating: "50.." });
   *
   * // Using ${number}..${number}
   * anime.list({ averageRating: "50..79" });
   * @
   */
  averageRating?: `${number}..` | `${number}..${number}`;
  /**
   * @param {(TKitsuAnimeCategories | EKitsuAnimeCategories) | (TKitsuAnimeCategories | EKitsuAnimeCategories)[]}
   * @description The available categories of the anime.
   * @example
   * ```js
   * // Using string only
   * anime.list({ categories: "drama" });
   *
   * // Using string[]
   * anime.list({ categories: ["drama", "family"] });
   *
   * // Using EKitsuAnimeCategories
   * anime.list({ categories: EKitsuAnimeCategories.DRAMA });
   */
  categories?:
    | (TKitsuAnimeCategories | EKitsuAnimeCategories)
    | (TKitsuAnimeCategories | EKitsuAnimeCategories)[];
}

export { IKitsuAnimeFind, IKitsuAnimeList, TKitsuAnimeCategories };
