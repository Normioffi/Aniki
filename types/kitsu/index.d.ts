// Since enums are "bad", i replaced them with consts.

// Handling errors
/**
 
 * @description This interface is the JSON response of Kitsu.app errors.
 * @since 1.3.0
 */
interface IKitsuError {
  errors: [
    {
      title: string;
      detail?: string;
      code?: string;
      status: string;
    }
  ];
}
/**
 
 * @description This type returns errors from the Kitsu.app API.
 * @since 1.3.0
 */
type TKitsuHandleError = (
  /**
   * @param errors - The error(s) that return the API.
   */
  errors: Promise<Readonly<IKitsuError>>,
  /**
   * @param status - Return the status of the API error.
   */
  status: number
) => Promise<void>;

// Types for parameters and results

/**
 
 * @description This type contain all of the seasons of the year.
 * @since 1.4.0
 */
type TKitsuSeason = "winter" | "spring" | "summer" | "fall";

/**
 
 * @description This type contain all of Kitsu.app anime categories.
 * @since 1.3.5
 */
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
 
 * @description This type contain all of Kitsu.app anime categories.
 * @since 1.3.5
 */
type TKitsuAnimeCategoriesUR =
  | "nudity"
  | "sex"
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
 
 * @description This type contain all of available streamers that Kitsu.app is referencing.
 * @since 1.4.0
 */
type TKitsuAnimeStreamers =
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
  | "VRV";

/**
 
 * @description This type contain a few age rating category.
 * @since 1.4.0
 */
type TKitsuAnimeAgeRating = "G" | "PG" | "R";

/**
 
 * @descriptio This type contain all of the rating categories. (including **R18**)
 * @since 1.4.0
 */
type TKitsuAnimeAgeRatingUR = "G" | "PG" | "R" | "R18";

/**
 
 * @description This type contain all of the subtypes.
 * @since 1.4.0
 */
type TKitsuAnimeSubtypes = "ONA" | "OVA" | "TV" | "movie" | "music" | "special";

/**
 
 * @description This type contain all of the basic anime statues.
 *
 * tba = **T**o **B**e **A**nnounced.
 * @since 1.4.0
 */
type TKitsuStatus = "current" | "finished" | "tba" | "unreleased" | "upcoming";

/**
 
 * @description Used as array parameter for the `MangaKitsu#find` and `MangaKitsu#list` methods. (params.categories)
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
  | "manga-influenced"
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
 
 * @description Used as array parameter for the `MangaKitsu#find` and `MangaKitsu#list` methods. (params.categories)
 * This is the **U**n**R**estricted version of the type `TKitsuMangaCategories`.
 * @since 1.4.0
 */
type TKitsuMangaCategoriesUR =
  | "violence"
  | "nudity"
  | "sex"
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
  | "manga-influenced"
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
 
 * @description This type contain a few subtypes.
 * @since 1.4.0
 */
type TKitsuMangaSubtypes =
  | "manga"
  | "manhua"
  | "manhwa"
  | "oneshot"
  | "doujin"
  | "oel";
// Main types for parameters.
// Anime
/**
 
 * @description The parameters for the AnimeKitsu#find method.
 * @template AT - The AT generic type is to verify if there is an Access Token in the AnimeKitsu constructor and change the appropriate properties.
 * @since 1.3.0
 */
type TKitsuAnimeFind<AT extends string = ""> = {
  /**
   * @param
   * @description Finding anime based on a query.
   * @example
   * ```js
   * anime.find({ query: "Oshi no ko" }).then(r => console.log(r));
   * ```
   */
  query?: string;
  /**
   * @param
   * @description The offset for pagination. (offset 0 = first page, offset 1 = second page and so on.)
   * @example
   * ```js
   * anime.find({ offset: "33" }).then(r => console.log(r));
   * ```
   */
  offset?: number | `${number}`;
  /**
   * @param
   * @description Finding anime and add a limit of results. (default: **10**, max: **20**)
   * @example
   * ```js
   * // Default value
   * anime.find({ query: "One Piece", limit: 10 });
   *
   * // Maximum value
   * anime.find({ query: "One Piece", limit: 20 });
   * // ...
   * ```
   */
  limit?: number | `${number}`;
  /**
   * @param
   * @description Finding anime based on the season of publication.
   * @example
   * ```js
   * // Simple way
   * anime.find({ query: "Oshi no ko", season: ["fall"] });
   * ```
   */
  season?: TKitsuSeason[];
  /**
   * @param
   * @description Finding anime based on the year of publication. (min **1907**, max **2027**)
   * @example
   * ```js
   * // Basic usage
   * anime.find({ year: [1907, 2027] });
   *
   * // Using only one number
   * anime.find({ year: [1907] });
   * ```
   */
  year?: [number, number?];
  /**
   * @param
   * @description Finding anime based on the streamer of publication. (better using AnimeKitsu#list method)
   * @example
   * ```js
   * // Simple way
   * anime.find({ streamers: ["Funanimation", "Hulu"] });
   * ```
   */
  streamers?: TKitsuAnimeStreamers[];
  /**
   * @param
   * @description Finding anime based on the age rating category. (**G**: *General Audiences*, **PG**: *Parental Guidance Suggested*, **R**: *Restricted*, **R18**: *Restricted for 18 years old or older*)
   * Using an access token in the AnimeKitsu constructor will allow you to use the R18 rating.
   * @example
   * ```js
   *
   * // Simple way
   * anime.find({ query: "Oshi no ko", ageRating: ["G", "PG"] });
   *
   * // if you have an accessToken
   * anime.find({ query: "Boku" ageRating: ["R18"] });
   * ```
   */
  ageRating?: AT extends "" ? TKitsuAnimeAgeRating[] : TKitsuAnimeAgeRatingUR[];
  /**
   * @param
   * @description Finding anime based on the average rating. (min **5**%, max **100**%)
   * @example
   * ```js
   * // Basic usage
   * anime.find({ averageRating: [5, 100] });
   *
   * // Using one number only
   * anime.find({ averageRating: [35] });
   * ```
   */
  averageRating?: [number, number?];
  /**
   * @param
   * @description Finding anime based on any categories.
   * @example
   * ```js
   * // Main example
   * anime.find({ query: "Oshi no ko", categories: ["drama", "family"] });
   * ```
   */
  categories?: AT extends ""
    ? TKitsuAnimeCategories[]
    : TKitsuAnimeCategoriesUR[];

  /**
   * @param
   * @description Finding anime based on subtypes.
   * @example
   * ```js
   * // Main example
   * anime.find({ query: "Oshi no ko", subtype: ["TV"] });
   */
  subtype?: TKitsuAnimeSubtypes[];
};

/**
 
 * @description The parameters for the AnimeKitsu#list method.
 * @template AT - The AT generic type is to verify if there is an Access Token in the AnimeKitsu constructor and modify the appropriate properties.
 * @since 1.3.0
 */
type TKitsuAnimeList<AT extends string = ""> = {
  /**
   * @param
   * @description The offset for pagination. (offset 0 = first page, offset 1 = second page and so on.)
   * @example
   * ```js
   * anime.list({ offset: "33" }).then(r => console.log(r));
   * ```
   */
  offset?: number | `${number}`;
  /**
   * @param
   * @description The limit of anime that will return the API. (default: **10**, max: **20**)
   * @example
   * ```js
   * // Default value
   * anime.list({ query: "One Piece", limit: 10 });
   *
   * // Maximum value
   * anime.list({ query: "One Piece", limit: 20 });
   * // ...
   * ```
   */
  limit?: number | `${number}`;
  /**
   * @param
   * @description Listing anime based on the season of publication.
   * @example
   * ```js
   * // Simple way
   * anime.list({ query: "Oshi no ko", season: ["fall"] });
   * ```
   */
  season?: TKitsuSeason[];
  /**
   * @param
   * @description Listing anime based on the year of publication. (min **1907**, max **2027**)
   * @example
   * ```js
   * // Basic usage
   * anime.list({ year: [1907, 2027] });
   *
   * // Using only one number
   * anime.list({ year: [1907] });
   * ```
   */
  year?: [number, number?];
  /**
   * @param
   * @description Listing anime based on the streamer of publication. (better using AnimeKitsu#list method)
   * @example
   * ```js
   * // Simple way
   * anime.list({ streamers: ["Funanimation", "Hulu"] });
   * ```
   */
  streamers?: TKitsuAnimeStreamers[];
  /**
   * @param
   * @description Listing anime based on the age rating category. (**G**: *General Audiences*, **PG**: *Parental Guidance Suggested*, **R**: *Restricted*, **R18**: *Restricted for 18 years old or older*)
   * Using an access token in the AnimeKitsu constructor will allow you to use the R18 rating.
   * @example
   * ```js
   *
   * // Simple way
   * anime.list({ query: "Oshi no ko", ageRating: ["G", "PG"] });
   *
   * // if you have an accessToken
   * anime.list({ query: "Boku" ageRating: ["R18"] });
   * ```
   */
  ageRating?: AT extends "" ? TKitsuAnimeAgeRating[] : TKitsuAnimeAgeRatingUR[];
  /**
   * @param
   * @description Listing anime based on the average rating. (min **5**%, max **100**%)
   * @example
   * ```js
   * // Basic usage
   * anime.list({ averageRating: [5, 100] });
   *
   * // Using one number only
   * anime.list({ averageRating: [35] });
   * ```
   */
  averageRating?: [number, number?];
  /**
   * @param
   * @description Listing anime based on any categories.
   * @example
   * ```js
   * // Main example
   * anime.list({ query: "Oshi no ko", categories: ["drama", "family"] });
   * ```
   */
  categories?: AT extends ""
    ? TKitsuAnimeCategories[]
    : TKitsuAnimeCategoriesUR[];

  /**
   * @param
   * @description Listing anime based on subtypes.
   * @example
   * ```js
   * // Main example
   * anime.list({ query: "Oshi no ko", subtype: ["TV"] });
   */
  subtype?: TKitsuAnimeSubtypes[];
};
// Manga
/**
 
 * @description The parameters for the MangaKitsu#find method.
 * @template AT - The AT generic type is to verify if there is an Access Token in the AnimeKitsu constructor and modify the appropriate properties.
 * @since 1.3.0
 */
type TKitsuMangaFind<AT extends string = ""> = {
  /**
   * @param
   * @description Finding manga based on a query.
   * @example
   * ```js
   * manga.find({ query: "Oshi no ko" }).then(r => console.log(r));
   * ```
   */
  query?: string;
  /**
   * @param
   * @description The offset for pagination. (offset 0 = first page, offset 1 = second page and so on.)
   * @example
   * ```js
   * manga.find({ offset: "33" }).then(r => console.log(r));
   * ```
   */
  offset?: number | `${number}`;
  /**
   * @param
   * @description The limit of the manga that will return the API. (default: **10**, max: **20**)
   * @example
   * ```js
   * // Default value
   * manga.find({ query: "One Piece", limit: 10 });
   *
   * // Maximum value
   * manga.find({ query: "One Piece", limit: 20 });
   * // ...
   * ```
   */
  limit?: number | `${number}`;
  /**
   * @param
   * @description Finding manga based on the season of publication.
   * @example
   * ```js
   * // Simple way
   * manga.find({ query: "Oshi no ko", season: ["fall"] });
   * ```
   */
  season?: TKitsuSeason[];
  /**
   * @param
   * @description Finding manga based on the year of publication. (min **1862**, max **2027**)
   * @example
   * ```js
   * // Basic usage
   * manga.find({ year: [1862, 2027] });
   *
   * // Using only one number
   * manga.find({ year: [1862] });
   * ```
   */
  year?: [number, number?];
  /**
   * @param
   * @description Listing manga based on the average rating. (min **5**%, max **100**%)
   * @example
   * ```js
   * // Basic usage
   * manga.find({ averageRating: [5, 100] });
   *
   * // Using one number only
   * manga.find({ averageRating: [35] });
   * ```
   */
  averageRating?: [number, number?];
  /**
   * @param
   * @description Listing manga based on any categories.
   * @example
   * ```js
   * // Basic usage
   * manga.find({ query: "Oshi no ko", categories: ["drama", "family"]);
   * ```
   */
  categories?: AT extends ""
    ? TKitsuMangaCategories[]
    : TKitsuMangaCategoriesUR[];

  /**
   * @param
   * @description Listing manga based on subtypes.
   * @example
   * ```js
   * // Main example
   * manga.find({ query: "Oshi no ko", subtype: ["TV"] });
   */
  subtype?: TKitsuMangaSubtypes[];
};

/**
 
 * @description The parameters for the MangaKitsu#list method.
 * @template AT - The AT generic type is to verify if there is an Access Token in the AnimeKitsu constructor and modify the appropriate properties.
 * @since 1.3.0
 */
type TKitsuMangaList<AT extends string = ""> = {
  /**
   * @param
   * @description The offset for pagination. (offset 0 = first page, offset 1 = second page and so on.)
   * @example
   * ```js
   * manga.find({ offset: "33" }).then(r => console.log(r));
   * ```
   */
  offset?: number | `${number}`;
  /**
   * @param
   * @description The limit of the manga that will return the API. (default: **10**, max: **20**)
   * @example
   * ```js
   * // Default value
   * manga.find({ query: "One Piece", limit: 10 });
   *
   * // Maximum value
   * manga.find({ query: "One Piece", limit: 20 });
   * // ...
   * ```
   */
  limit?: number | `${number}`;
  /**
   * @param
   * @description Listing manga based on the season of publication.
   * @example
   * ```js
   * // Simple way
   * manga.find({ query: "Oshi no ko", season: ["fall"] });
   * ```
   */
  season?: TKitsuSeason[];
  /**
   * @param
   * @description Listing manga based on the year of publication. (min **1862**, max **2027**)
   * @example
   * ```js
   * // Basic usage
   * manga.find({ year: [1862, 2027] });
   *
   * // Using only one number
   * manga.find({ year: [1862] });
   * ```
   */
  year?: [number, number?];
  /**
   * @param
   * @description Listing manga based on the average rating. (min **5**%, max **100**%)
   * @example
   * ```js
   * // Basic usage
   * manga.find({ averageRating: [5, 100] });
   *
   * // Using one number only
   * manga.find({ averageRating: [35] });
   * ```
   */
  averageRating?: [number, number?];
  /**
   * @param
   * @description Listing manga based on any categories.
   * @example
   * ```js
   * // Basic usage
   * manga.find({ query: "Oshi no ko", categories: ["drama", "family"]);
   * ```
   */
  categories?: AT extends ""
    ? TKitsuMangaCategories[]
    : TKitsuMangaCategoriesUR[];

  /**
   * @param
   * @description Listing manga based on subtypes.
   * @example
   * ```js
   * // Main example
   * manga.find({ query: "Oshi no ko", subtype: ["TV"] });
   */
  subtype?: TKitsuMangaSubtypes[];
};

// Anime

/**
 
 * @description This interface is the list of titles in different languages.
 * @since 1.4.0
 */
interface IKitsuAnimeTitles {
  /**
   * Title in english version.
   */
  en: string;
  /**
   * Title in japanese but in readable version. (like "Oshi no ko")
   */
  en_jp: string;
  /**
   * Title in japanese (like "推しの子")
   */
  ja_jp: string;
}

/**
 
 * @description This interface is the main attributes of the selected anime.
 */
interface IKitsuAnimeAttributes {
  /**
   * The creation date of the data from Kitsu.io (ISO 8601)
   */
  createdAt: Date;
  /**
   * The update date of the data from Kitsu.io. (ISO 8601)
   */
  updatedAt: Date;
  /**
   * The title with - (oshi-no-ko)
   */
  slug: string;
  /**
   * The synopsis (description) of the anime
   */
  synopsis: string;
  /**
   * The description of the anime.
   */
  description: string;
  /**
   * The top offset of the cover image.
   * Seems deprecated but some animes have it so...
   */
  coverImageTopOffset: number;
  /**
   * Titles in different languages.
   */
  titles: IKitsuAnimeTitles;
  /**
   * Canonical title (mostly used for SEO)
   */
  canonicalTitle: string;
  /**
   * Abbreviated titles (like Roshidere)
   */
  abbreviatedTitles: string[];
  /**
   * The average rating of the anime in %
   */
  averageRating: string | null;
  ratingFrequencies: IKitsuRatingFrequencies;
  userCount: number;
  favoritesCount: number;
  /**
   * The official anime start date.
   */
  startDate: string;
  /**
   * The official anime end date.
   */
  endDate: string;
  /**
   * The approximate date of the next release.
   */
  nextRelease: string | null;
  /**
   * The popularity rank of the anime. (used for Kitsu.app)
   */
  popularityRank: number;
  ratingRank: number;
  /**
   * Age rating of the anime. (**G**: *General Audiences*, **PG**: *Parental Guidance Suggested*, **R**: *Restricted*, **R18**: *Restricted for 18 years old or older*.)
   */
  ageRating: "G" | "PG" | "R";
  ageRatingGuide: string | null;
  /**
   * The type of the anime (can be a movie, a TV serie or OVA episode, etc...)
   */
  subtype: TKitsuAnimeSubtypes;
  /**
   * the actual status of the anime.
   */
  status: TKitsuStatus;
  /**
   * If the anime is **t**o **b**e **a**nnounced.
   */
  tba: string | null;
  /**
   * the poster image (aka main image) of the anime. Available in different sizes.
   */
  posterImage: IKitsuImages;
  /**
   * The cover image of the anime, mostly used as background image. Available in different sizes.
   */
  coverImage: IKitsuImages;
  /**
   * Number of episodes planned.
   */
  episodeCount: number;
  /**
   * Approximative episodes length. (such as 24 mins)
   */
  episodeLength: number;
  /**
   * Total length of all episodes.
   */
  totalLength: number;
  /**
   * Official (or unofficial) Youtube video ID of the trailer/presentation (like https://youtu.be/lpiB2wMc49g)
   */
  youtubeVideoId: string;
  showType: string;
  nsfw: boolean;
}
interface IKitsuAnimeRelationShips {
  genres: IKitsuLinks;
  categories: IKitsuLinks;
  castings: IKitsuLinks;
  installments: IKitsuLinks;
  mappings: IKitsuLinks;
  reviews: IKitsuLinks;
  mediaRelationships: IKitsuLinks;
  characters: IKitsuLinks;
  staff: IKitsuLinks;
  productions: IKitsuLinks;
  quotes: IKitsuLinks;
  episodes: IKitsuLinks;
  streamingLinks: IKitsuLinks;
  animeProductions: IKitsuLinks;
  animeCharacters: IKitsuLinks;
  animeStaff: IKitsuLinks;
}

/**
 
 * @description This interface is the JSON response of the AnimeKitsu#find Promise.
 * @since 1.3.0
 */
interface IKitsuAnime {
  /**
   * Get the content of the request.
   * @example
   * ```js
   * anime.find({ query: "oshi no ko", offset: 0 }).then(r => console.log(r.data[0])) // Calling the first result with [0].
   * ```
   */
  data: {
    /**
     * The identifiant (ID) of the anime.
     */
    id: string;
    /**
     * The type of the requested content (in logic: anime)
     */
    type: string;
    links: {
      self: string;
    };
    /**
     * The main attributes (anime informations)
     * @example
     * ```js
     * anime.find({ query: "oshi no ko", offset: 0}).then(r=> console.log(r.data[0].attributes)) // { ... }
     * ```
     */
    attributes: IKitsuAnimeAttributes;
    relationships: IKitsuAnimeRelationShips;
  }[];
}
/**
 
 * @description This interface is the JSON response of the AnimeKitsu#findById Promise (single object)
 * @since 1.3.0
 */
interface IKitsuAnimeSingle {
  /**
   * Get the content of the request.
   * @example
   * ```js
   * anime.findById({ query: "oshi no ko", offset: 0 }).then(r => console.log(r.data)). { id: "...", type: "anime", links: { self: "..." } attributes: { ... }, ...}
   * ```
   */
  data: {
    /**
     * The identifiant (ID) of the anime.
     */
    id: string;
    /**
     * The type of the requested content (in logic: anime)
     */
    type: string;
    links: {
      self: string;
    };
    /**
     * The main attributes (anime informations)
     * @example
     * ```js
     * anime.find({ query: "oshi no ko", offset: 0}).then(r=> console.log(r.data[0].attributes)) // { ... }
     * ```
     */
    attributes: IKitsuAnimeAttributes;
    relationships: IKitsuAnimeRelationShips;
  };
}

// Episodes

/**
 
 * @since 1.4.0
 * @description This interface contain the attributes of the AnimeKitsu#episode response
 * @example
 * ```js
 * anime.find({ query: "oshi no ko", offset: 0}).then(r=> console.log(r.data[0].attributes)) // { data: { id: "3332", type: "episode", links: { self: "..." }, attributes: ... } }
 * ```
 */
interface IKitsuEpisodeAttributes {
  createdAt: string;
  updatedAt: string;
  synopsis: string;
  description: string;
  titles: IKitsuAnimeTitles;
  canonicalTitle: string;
  seasonNumber: number;
  number: number;
  relativeNumber: number;
  airdate: string;
  length: number;
  thumbnail: {
    original: string;
    meta: {
      dimensions: object;
    };
  };
}
/**
 
 * @since 1.4.0
 * @description This interface is the main relationships of the anime, such as the videos and medias.
 */
interface IKitsuEpisodeRelationShips {
  media: IKitsuLinks;
  videos: IKitsuLinks;
}

/**
 
 * @since 1.3.0
 * @description This interface is the JSON response of the AnimeKitsu#episode Promise (data is a object!).
 */
interface IKitsuEpisode {
  /**
   * Get the content of the request..
   * @example
   * ```js
   * anime.episode(9232).then(r => console.log(r.data)). // ==> { id: "...", type: "episode", links: { self: "..." } attributes: { ... }, ... }
   * ```
   */
  data: {
    /**
     * The identifiant (ID) of the episode.
     */
    id: string;
    /**
     * The type of the requested content. (in logic: episode)
     */
    type: string;
    links: {
      self: string;
    };
    /**
     * The main attributes. (episode informations)
     * @example
     * ```js
     * anime.find({ query: "oshi no ko", offset: 0}).then(r=> console.log(r.data[0].attributes)) // { ... }
     * ```
     */
    attributes: IKitsuEpisodeAttributes;
    /**
     * The main relationships of the episode, such as the videos and medias.
     */
    relationships: IKitsuEpisodeRelationShips;
  };
}

/**
 
 * @since 1.4.0
 * @description This interface is the main response of the AnimeKitsu#episodes API Promise.
 */
interface IKitsuEpisodes {
  /**
   * Get the content of the request.
   * @example
   * ```js
   * anime.episode(9232).then(r => console.log(r.data)). { id: "...", type: "episode", links: { self: "..." } attributes: { ... }, ...}
   * ```
   */
  data: [
    {
      /**
       * The identifiant (ID) of the episode.
       */
      id: string;
      /**
       * The type of the requested content (in logic: episode)
       */
      type: string;
      links: {
        self: string;
      };
      /**
       * The main attributes (episode informations)
       * @example
       * ```js
       * anime.find({ query: "oshi no ko", offset: 0}).then(r=> console.log(r.data[0].attributes)) // { ... }
       * ```
       */
      attributes: IKitsuEpisodeAttributes;
      /**
       * The main relationships of the episode, such as the videos and medias.
       */
      relationships: IKitsuEpisodeRelationShips;
    }
  ];
}
/**
 
 * @description This interface return the basic result of links, most of returned properties (relationships) uses this interface.
 * @since 1.4.0
 */
interface IKitsuLinks {
  links: {
    self: string;
    related?: string;
  };
}

/**
 
 * @description
 * @since 1.4.0
 */
interface IKitsuRatingFrequencies {
  "2": string;
  "3": string;
  "4": string;
  "5": string;
  "6": string;
  "7": string;
  "8": string;
  "9": string;
  "10": string;
  "11": string;
  "12": string;
  "13": string;
  "14": string;
  "15": string;
  "16": string;
  "17": string;
  "18": string;
  "19": string;
  "20": string;
}

/**
 
 * @description This interface contain the different properties of images with different sizes.
 * @since 1.4.0
 */
interface IKitsuImages {
  tiny: string;
  small: string;
  medium?: string;
  large?: string;
  original: string;
  meta: {
    dimensions: {
      tiny: {
        width: number;
        height: number;
      };
      small: {
        width: number;
        height: number;
      };
      medium?: {
        width: number;
        height: number;
      };
      large?: {
        width: number;
        height: number;
      };
      original: {
        width: number;
        height: number;
      };
    };
  };
}

// Manga
/**
 
 * @description
 * @since 1.4.0
 */
interface IKitsuMangaAttributes {
  /**
   * The creation date of the data from Kitsu.app (ISO 8601)
   */
  createdAt: Date;
  /**
   * The update date of the data from Kitsu.app. (ISO 8601)
   */
  updatedAt: Date;
  /**
   * The title with - (oshi-no-ko)
   */
  slug: string;
  /**
   * The synopsis (description) of the manga
   */
  synopsis: string;
  /**
   * The description of the manga.
   */
  description: string;
  /**
   * The top offset of the cover image.
   * Seems deprecated in docs but some mangas have it so...
   */
  coverImageTopOffset: number;
  /**
   * Titles in different languages.
   */
  titles: {
    /**
     * Title in english version.
     */
    en: string;
    /**
     * Title in japanese but in readable version. (like "Oshi no ko")
     */
    en_jp: string;
    /**
     * Title in japanese. (like "推しの子")
     */
    ja_jp: string;
    /**
     * Title in Thai. (like "เกิดใหม่เป็นลูกโอชิ")
     */
    th_th?: string;
    /**
     * Title in Korean.
     */
    ko_kr?: string;
    /**
     * Title in Russian.
     */
    ru_ru?: string;
  };
  /**
   * Canonical title. (mostly used for SEO)
   */
  canonicalTitle: string;
  /**
   * Abbreviated titles. (like Roshidere)
   */
  abbreviatedTitles: string[];
  averageRating: string | null;
  ratingFrequencies: IKitsuRatingFrequencies;
  userCount: number;
  favoritesCount: number;
  /**
   * The official manga start date.
   */
  startDate: string;
  /**
   * The official manga end date.
   */
  endDate: string;
  /**
   * The approximate date of the next release.
   */
  nextRelease: string | null;
  /**
   * The popularity rank of the manga. (used for Kitsu.app)
   */
  popularityRank: number;
  ratingRank: number;
  /**
   * Age rating of the manga. (**G**: *General Audiences*, **PG**: *Parental Guidance Suggested*, **R**: *Restricted*, **R18**: *Restricted for 18 years old or older*.)
   */
  ageRating: "G" | "PG" | "R";
  ageRatingGuide: string | null;
  subtype: TKitsuMangaSubtypes;
  /**
   * the actual status of the manga.
   */
  status: TKitsuStatus;
  /**
   * If the manga is **t**o **b**e **a**nnounced.
   */
  tba: string | null;
  /**
   * the poster image (aka main image) of the manga. Available in different sizes.
   */
  posterImage: IKitsuImages;
  /**
   * The cover image of the manga, mostly used as background image. Available in different sizes.
   */
  coverImage: IKitsuImages;
  /**
   * Number of chapters planned.
   */
  chapterCount: number;
  /**
   * Number of volumes planned.
   */
  volumeCount: number;
  serialization: string;
}

/**
 
 * @description
 * @since 1.4.0
 */
interface IKitsuMangaLinks {
  data: Array<{
    id: string;
    type: string;
  }>;
  links: {
    self: string;
    related: string;
  };
}

/**
 
 * @description
 * @since 1.4.0
 */
interface IKitsuMangaRelationShips {
  categories: IKitsuMangaLinks;
  castings: IKitsuLinks;
  mappings: IKitsuMangaLinks;
  mediaRelationships: IKitsuMangaLinks;
  characters: IKitsuMangaLinks;
  staff: IKitsuMangaLinks;
  productions: IKitsuMangaLinks;
  quotes: IKitsuMangaLinks;
  chapters: IKitsuMangaLinks;
}

/**
 
 * @description This interface is the JSON response of the MangaKitsu#find and MangaKitsu#list Promise.
 * @since 1.3.0
 */
interface IKitsuManga {
  /**
   * Get the content of the request (starting only with data)
   * @example
   * ```js
   * manga.find({ query: "oshi no ko", offset: 0 }).then(r => console.log(r.data[0])) // Calling the first result with [0].
   * ```
   */
  data: [
    {
      /**
       * The identifiant (ID) of the manga.
       */
      id: string;
      /**
       * The type of the requested content (in logic: manga)
       */
      type: string;
      links: {
        self: string;
      };
      /**
       * The main attributes (manga informations)
       * @example
       * ```js
       * manga.find({ query: "oshi no ko", offset: 0}).then(r=> console.log(r.data[0].attributes)) // { ... }
       * ```
       */
      attributes: IKitsuMangaAttributes;
      relationships: IKitsuMangaRelationShips;
    }
  ];
}
/**
 
 * @description This interface is the JSON response of the MangaKitsu#findById Promise (single object).
 * @since 1.3.0
 */

interface IKitsuMangaSingle {
  /**
   * Get the content of the request (starting only with data)
   * @example
   * ```js
   * manga.find({ query: "oshi no ko", offset: 0 }).then(r => console.log(r.data[0])) // Calling the first result with [0].
   * ```
   */
  data: {
    /**
     * The identifiant (ID) of the manga.
     */
    id: string;
    /**
     * The type of the requested content (in logic: manga)
     */
    type: string;
    links: {
      self: string;
    };
    /**
     * The main attributes (manga informations)
     * @example
     * ```js
     * manga.find({ query: "oshi no ko", offset: 0}).then(r=> console.log(r.data[0].attributes)) // { ... }
     * ```
     */
    attributes: IKitsuMangaAttributes;
    relationships: IKitsuMangaRelationShips;
  };
}

/**
 
 * @description
 * @since 1.4.0
 */
interface IKitsuChapterTitles {
  /**
   * Title in english version.
   */
  en: string;
  /**
   * Title in japanese but in readable version. (like "Oshi no ko")
   */
  en_jp: string;
  /**
   * Title in japanese. (like "推しの子")
   */
  ja_jp: string;
}
/**
 
 * @description
 * @since 1.4.0
 */
interface IKitsuChapterAttributes {
  /**
   * The creation date of the data from Kitsu.app (ISO 8601)
   */
  createdAt: Date;
  /**
   * The update date of the data from Kitsu.app. (ISO 8601)
   */
  updatedAt: Date;
  /**
   * The synopsis (description) of the chapter
   */
  synopsis: string;
  /**
   * The description of the chapter.
   */
  description: string;
  /**
   * Titles in different languages.
   */
  titles: IKitsuChapterTitles;
  canonicalTitle: string;
  seasonNumber: number;
  number: number;
  relativeNumber: number;
  airdate: string;
  length: number;
  thumbnail: {
    original: string;
    meta: {
      dimensions: object;
    };
  };
}

/**
 
 * @description
 * @since 1.4.0
 */
interface IKitsuChapterRelationShips {
  media: IKitsuLinks;
  videos: IKitsuLinks;
}

/**
 
 * @description The JSON response of the request from MangaKitsu#chapter
 * @since 1.3.0
 */
interface IKitsuChapter {
  data: {
    /**
     * The identifiant (ID) of the manga.
     */
    id: string;
    /**
     * The type of the requested content (in logic: manga)
     */
    type: string;
    links: {
      self: string;
    };
    attributes: IKitsuChapterAttributes;

    relationships: IKitsuChapterRelationShips;
  };
}

/**
 
 * @description The JSON response of the request from MangaKitsu#chapter
 * @since 1.3.0
 */
interface IKitsuChapters {
  data: [
    {
      /**
       * The identifiant (ID) of the manga.
       */
      id: string;
      /**
       * The type of the requested content (in logic: manga)
       */
      type: string;
      links: {
        self: string;
      };
      attributes: IKitsuChapterAttributes;
      relationships: IKitsuChapterRelationShips;
    }
  ];
}
// Main classes.
/**
 * @class
 * @since 1.0.2
 * @description An class that use the Kitsu.app API to receive anime informations by using different methods.
 * @example
 * Basic usage:
 * ```js
 * // CJS
 * const { AnimeKitsu } = require("aniki")
 * // JS ESM or TS
 * import { AnimeKitsu } from "aniki";
 *
 * const anime = new AnimeKitsu();
 * // If you have made an authentication and get the "accessToken", put it in the constructor.
 * const anime = new AnimeKitsu("abcdefghijk12345");
 * 
 * // Normal
 * anime.find({ query: "Oshi no Ko" }).then(a => console.log(a.data[0]));
 * anime.find(3163).then(a => console.log(a.data));
 * // Find by an id
 * anime.findById(3600).then(a => console.log(a.data));
 *
 * // Handling API errors
 * 
 * anime.find({ query: "Oshi no ko" }, async (apiError, status) => {
 *    if (apiError) console.error(await apiError);
 *  });

 *
 * // Best practice to avoid using multiple awaits
 * async function getAll() {
 *  const a = anime.find({query: ""});
 *  const b = anime.list({});
 *  const [A, B] = await Promise.all([a, b]);
 * 
 *  return [A, B];
 * }
 * ```
 */
declare class AnimeKitsu<AT extends string = ""> {
  private defaultHandleError: TKitsuHandleError;
  private headers: {
    "Content-Type": "application/vnd.api+json";
    Accept: "application/vnd.api+json";
    Authorization?: `Bearer ${string}`;
  };

  constructor(accessToken?: AT);

  /**
   * @method
   * @param params - The parameter(s) for the request. (query required!)
   * @param handleError - Used for handling errors from the method and the API.
   * @description The find method is used to find animes with different parameters, including an ID option.
   * @returns - Returns a Promise with the IKitsuAnime or IKitsuAnimeSingle interface.
   * @example
   * ```js
   * // Searching an anime
   * anime.find({ query: "Oshi no ko", offset: 0 }).then(r => console.log(r.data[0].attributes))
   *
   * // Searching an anime with an ID
   * anime.find(4238).then(r => console.log(r.data.attributes))
   * ```
   * @since 1.0.2
   */
  find(
    params: TKitsuAnimeFind<AT>,
    handleError?: TKitsuHandleError
  ): Promise<Readonly<IKitsuAnime> | undefined>;
  /**
   * @method
   * @param param - The parameter (ID) for the request. (example: 1267)
   * @param handleError - Used for handling errors from the method and the API.
   * @description The find method is used to find animes with different parameters, including an ID option.
   * @returns - Returns a Promise with the IKitsuAnime or IKitsuAnimeSingle interface.
   * @example
   * ```js
   * // Searching an anime with an ID
   * anime.find(4238).then(r => console.log(r.data.attributes))
   * ```
   * @since 1.0.2
   */
  find(
    param: number,
    handleError?: TKitsuHandleError
  ): Promise<Readonly<IKitsuAnimeSingle> | undefined>;
  /**
   * @method
   * @param params - The parameter(s) for the request. (Object or number (as ID.))
   * @param handleError - Used for handling errors from the method and the API.
   * @description The find method is used to find animes with different parameters, including an ID option.
   * @returns - Returns a Promise with the IKitsuAnime or IKitsuAnimeSingle interface.
   * @example
   * ```js
   * // Searching an anime
   * anime.find({ query: "Oshi no ko", offset: 0 }).then(r => console.log(r.data[0].attributes))
   *
   * // Searching an anime with an ID
   * anime.find(4238).then(r => console.log(r.data.attributes))
   * ```
   * @since 1.0.2
   */
  find(
    params: TKitsuAnimeFind<AT> | number,
    handleError?: TKitsuHandleError
  ): Promise<Readonly<IKitsuAnime | IKitsuAnimeSingle> | undefined>;

  /**
   * @method
   * @param id - The ID of the anime.
   * @param handleError - Used for handling errors from the method and the API.
   * @description Get an anime with the ID.
   * @returns Return a Promise.
   * @example
   * ```js
   * anime.findById(30).then(r => console.log(r.data.id));
   * ```
   * @since 1.3.0
   */
  findById(
    id: number | `${number}`,
    handleError?: TKitsuHandleError
  ): Promise<Readonly<IKitsuAnimeSingle> | undefined>;

  /**
   *
   * @method
   * @param params - The parameters for the request.
   * @param handleError - Used for handling errors from the method and the API.
   * @description Get an list of animes, you can choose the page, and the number of animes per page.
   * @returns Return a Promise.
   * @example
   * ```js
   * anime.list({ offset: 0, limit: 10 }).then(a => console.log(a));
   * ```
   * @since 1.0.2
   *
   */
  list(
    params: TKitsuAnimeList<AT>,
    handleError?: TKitsuHandleError
  ): Promise<Readonly<IKitsuAnime> | undefined>;

  /**
   * @method
   * @param id - The parameters to find a specific episode of an anime using the episode ID.
   * @param handleError - Used for handling errors from the method and the API.
   * @description Get an episode with the ID.
   * @returns Return a IKitsuEpisode Promise interface or undefined if it has no result.
   * @example
   * ```js
   * anime.episode(30).then(r => console.log(r.data.attributes.titles.en));
   * ```
   * @since 1.3.0
   */
  episode(
    id: number | `${number}`,
    handleError?: TKitsuHandleError
  ): Promise<Readonly<IKitsuEpisode> | undefined>;

  /**
   * @method
   * @param mediaId - The parameters to find all episodes of an anime using its ID.
   * @param handleError - Used for handling errors from the method and the API.
   * @description Get an episode with the ID.
   * @returns Return a IKitsuEpisode Promise interface or undefined if it has no result.
   * @example
   * ```js
   * anime.episodes(7442).then(r => console.log(r.data.attributes.titles.en));
   * ```
   * @since 1.3.5
   */
  episodes(
    mediaId: number | `${number}`,
    handleError?: TKitsuHandleError
  ): Promise<Readonly<IKitsuEpisodes> | undefined>;
}

/**
 * @class
 * @description MangaKitsu is a class that's using the Kitsu.app API, with this class you can find Mangas informations in different ways
 * @example
 * Basic usage:
 * ```js
 * // CJS
 * const { MangaKitsu } = require("aniki")
 * // JS ESM or TS
 * import { MangaKitsu } from "aniki";
 *
 * const manga = new MangaKitsu();
 *
 * // Normal
 * manga.find({ query: "Oshi no Ko" }).then(a => console.log(a.data[0]));
 *
 * // Find by an id
 * manga.findById(3600).then(a => console.log(a.data));
 *
 * // Handling errors
 *
 * manga.find(
 *  { query: "Oshi no ko" },
 *  async (error, status) => {
 *    if (error) console.error(await error);
 * });
 *
 *
 * // Best practice to avoid using .then() method is by using asynchronous functions
 *
 * async function getManga(query) {
 *
 * // Tip to avoid multiple awaits
 *  const a = manga.find({query: ""});
 *  const b = manga.list({});
 *  const [A, B] = await Promise.all([a, b]);
 * }
 *
 * ```
 * @since 1.0.2
 */
declare class MangaKitsu<AT extends string = ""> {
  private defaultHandleError: TKitsuHandleError;
  private headers: {
    "Content-Type": "application/vnd.api+json";
    Accept: "application/vnd.api+json";
    Authorization?: `Bearer ${string}`;
  };

  constructor(accessToken?: AT);

  // Methods
  /**
   * @method
   * @param params - The parameters for the request. (query required.)
   * @param handleError - Handling errors with an async function, you can access them with the first function parameter and the status as the second parameter.
   * @description The find method is used to find mangas with different parameters.
   * @returns Returns a Promise with the IKitsuManga interface.
   * @example
   * ```js
   * manga.find({ query: "Oshi no ko", offset: 0 }).then(a => console.log(a)); // offset is optional.
   * ```
   * @since 1.0.2
   */
  find(
    params: TKitsuMangaFind<AT>,
    handleError?: TKitsuHandleError
  ): Promise<Readonly<IKitsuManga> | undefined>;
  /**
   * @method
   * @param params - The ID for the request. (example: 1265)
   * @param handleError - Handling errors with an async function, you can access them with the first function parameter and the status as the second parameter.
   * @description The find method is used to find mangas with different parameters.
   * @returns Returns a Promise with the IKitsuManga interface.
   * @example
   * ```js
   * manga.find({ query: "Oshi no ko", offset: 0 }).then(a => console.log(a)); // offset is optional.
   * ```
   * @since 1.0.2
   */
  find(
    param: number,
    handleError?: TKitsuHandleError
  ): Promise<Readonly<IKitsuMangaSingle> | undefined>;
  /**
   * @method
   * @param params - The parameters for the request.
   * @param handleError - Handling errors with an async function, you can access them with the first function parameter and the status as the second parameter.
   * @description The find method is used to find mangas with different parameters.
   * @returns Returns a Promise with the IKitsuManga interface.
   * @example
   * ```js
   * manga.find({ query: "Oshi no ko", offset: 0 }).then(a => console.log(a)); // offset is optional.
   * ```
   * @since 1.0.2
   */
  find(
    params: TKitsuMangaFind<AT> | number,
    handleError?: TKitsuHandleError
  ): Promise<Readonly<IKitsuManga | IKitsuMangaSingle> | undefined>;
  /**
   * @method
   * @param id - The ID of the manga.
   * @param handleError - Handling errors with an async function, you can access them with the first function parameter and the status as the second parameter.
   * @description Get an Manga with the ID.
   * @returns Return a Promise.
   * @example
   * ```js
   * manga.findById(30).then(r => console.log(r.data.id));
   *
   * // Or
   * manga.findById("30").then(r => console.log(r.data.id));
   * ```
   * @since 1.3.0
   */
  findById(
    id: number | `${number}`,
    handleError?: TKitsuHandleError
  ): Promise<Readonly<IKitsuMangaSingle> | undefined>;
  /**
   *
   * @method
   * @param params - The parameters for the request.
   * @param handleError - Handling errors with an async function, you can access them with the first function parameter and the status as the second parameter.
   * @description Get an list of Mangas, you can choose the page, and the number of Mangas per page.
   * @returns Return a Promise.
   * @example
   * ```js
   * manga.list({ offset: 0, limit: 10 }).then(a => console.log(a));
   * ```
   * @since 1.0.2
   *
   */
  list(
    params: TKitsuMangaList<AT>,
    handleError?: TKitsuHandleError
  ): Promise<Readonly<IKitsuManga> | undefined>;

  /**
   * @method
   * @param id - The parameters to find a specific chapter of a manga using the chapter ID.
   * @param handleError - Handling errors with an async function, you can access them with the first function parameter and the status as the second parameter.
   * @description Get an chapter with the ID.
   * @returns Return a IKitsuChapter Promise interface or undefined if it has no result.
   * @example
   * ```js
   * manga.chapter(30).then(r => console.log(r.data.attributes.titles.en));
   * ```
   * @since 1.3.0
   */
  chapter(
    id: number | `${number}`,
    handleError?: TKitsuHandleError
  ): Promise<Readonly<IKitsuChapter> | undefined>;
  /**
   * @method
   * @param mangaId - The parameters to find all chapters of an manga using its ID.
   * @param handleError - Handling errors with an async function, you can access them with the first function parameter and the status as the second parameter.
   * @returns Return a IKitsuChapters Promise interface or undefined if it has no result.
   * @example
   * ```js
   * manga.chapters(7442).then(r => console.log(r.data.attributes.titles.en));
   * ```
   * @since 1.3.5
   */
  chapters(
    mangaId: number | `${number}`,
    handleError?: TKitsuHandleError
  ): Promise<Readonly<IKitsuChapters> | undefined>;
}
export { AnimeKitsu, MangaKitsu };
export type {
  TKitsuAnimeAgeRating,
  TKitsuAnimeAgeRatingUR,
  TKitsuAnimeCategories,
  TKitsuAnimeFind,
  TKitsuAnimeList,
  TKitsuAnimeStreamers,
  TKitsuAnimeSubtypes,
  TKitsuHandleError,
  TKitsuMangaCategories,
  TKitsuMangaFind,
  TKitsuMangaList,
  TKitsuMangaSubtypes,
  TKitsuSeason,
  TKitsuStatus,
};
