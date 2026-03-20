/**
 * This interface is the JSON response of Kitsu.app errors.
 * @since 1.3.0
 */
interface IKitsuError {
  /**
   * The error list.
   */
  errors: [
    {
      /**
       * The error title.
       */
      title: string;
      /**
       * The error detail.
       */
      detail?: string;
      /**
       * The error code.
       */
      code?: string;
      /**
       * The status code of the error (404, 500, ...)
       */
      status: string;
    },
  ];
}

// Types for parameters and results

/**
 * Type based on the season of publications.
 *
 * - `spring` : *April*, *May*, *June*
 * - `summer` : *July*, *August*, *September*
 * - `fall` : *October*, *November*, *December*
 * - `winter` : *January*, *February*, *March*
 * @since 1.4.0
 */
type TKitsuSeason = "winter" | "spring" | "summer" | "fall";

/**
 * This type contain all of Kitsu.app anime categories.
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
 * This type contain all of Kitsu.app anime categories including R18. (UR = **U**n**R**estricted)
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
 * This type contain all of available streamers that Kitsu.app is referencing.
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
 * This type contain a few age rating category.
 * - `G` : *General Audiences*
 * - `PG` : *Parental Guidance Suggested*
 * - `R` : *Restricted*
 * @since 1.4.0
 */
type TKitsuAnimeAgeRating = "G" | "PG" | "R";

/**
 * This type contain all of the rating categories. (including **R18**)
 * - `G` : *General Audiences*
 * - `PG` : *Parental Guidance Suggested*
 * - `R` : *Restricted*
 * - `R18` : *Restricted for 18 years old or older*
 * @since 1.4.0
 */
type TKitsuAnimeAgeRatingUR = "G" | "PG" | "R" | "R18";

/**
 * This type contain all of the subtypes.
 * @since 1.4.0
 */
type TKitsuAnimeSubtypes = "ONA" | "OVA" | "TV" | "movie" | "music" | "special";

/**
 * This type contain all of the basic anime statues.
 *
 * tba = **T**o **B**e **A**nnounced.
 * @since 1.4.0
 */
type TKitsuStatus = "current" | "finished" | "tba" | "unreleased" | "upcoming";

/**
 * Used as array parameter for the `MangaKitsu#find` and `MangaKitsu#list` methods. (params.categories)
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
 * Used as array parameter for the `MangaKitsu#find` and `MangaKitsu#list` methods. (params.categories)
 *
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
 * This type contain a few subtypes.
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
 * The parameters for the AnimeKitsu#find method.
 * @template AT The AT generic type is to verify if there is an Access Token in the AnimeKitsu constructor and change the appropriate properties.
 * @since 1.3.0
 */
type TKitsuAnimeFind<AT extends string = ""> = {
  /**
   * Finding animes based on a query.
   */
  query?: string;

  /**
   * Using the offset for pagination.
   * - `0` : First page
   * - `1` : Second page
   * - `2` : Third page
   * - . . .
   */
  offset?: number | `${number}`;

  /**
   * Finding and limiting the results.
   * - Default : `10`
   * - Maximum : `20`
   */
  limit?: number | `${number}`;

  /**
   * Finding animes based on the season of publication.
   *
   * - `spring` : *April*, *May*, *June*
   * - `summer` : *July*, *August*, *September*
   * - `fall` : *October*, *November*, *December*
   * - `winter` : *January*, *February*, *March*
   */
  season?: TKitsuSeason[];

  /**
   * Finding animes based on the year of publication.
   *
   * - Minimum : `1907`
   * - Maximum : `2027`
   */
  year?: [number, number?];

  /**
   * Finding animes based on the streamer of publication. (better using AnimeKitsu#list method)me.find({ streamers: ["Funanimation", "Hulu"] });
   */
  streamers?: TKitsuAnimeStreamers[];

  /**
   * Finding animes based on the age rating category.
   * - `G`: *General Audiences*
   * - `PG`: *Parental Guidance Suggested*
   * - `R`: *Restricted*
   * - `R18`: *Restricted for 18 years old or older*
   *
   * Using an access token in the AnimeKitsu constructor will allow you to use the R18 rating.
   */
  ageRating?: AT extends "" ? TKitsuAnimeAgeRating[] : TKitsuAnimeAgeRatingUR[];

  /**
   * Finding animes based on the average rating. (min `5`%, max `100`%)
   */
  averageRating?: [number, number?];

  /**
   * Finding animes based on any categories.
   */
  categories?: AT extends ""
    ? TKitsuAnimeCategories[]
    : TKitsuAnimeCategoriesUR[];

  /**
   * Finding animes based on subtypes.
   */
  subtype?: TKitsuAnimeSubtypes[];
};

/**
 * The parameters for the AnimeKitsu#list method.
 * @template AT The **A**ccess**T**oken generic type is to check if there is an Access Token in the AnimeKitsu constructor and modify the appropriate properties.
 * @since 1.3.0
 */
type TKitsuAnimeList<AT extends string = ""> = {
  /**
   * Using the offset for pagination.
   * - `0` : First page
   * - `1` : Second page
   * - `2` : Third page
   * - . . .
   */
  offset?: number | `${number}`;

  /**
   * Finding and limiting the results.
   * - Default : `10`
   * - Maximum : `20`
   */
  limit?: number | `${number}`;

  /**
   * Listing animes based on the season of publication.
   *
   * - `spring` : *April*, *May*, *June*
   * - `summer` : *July*, *August*, *September*
   * - `fall` : *October*, *November*, *December*
   * - `winter` : *January*, *February*, *March*
   */
  season?: TKitsuSeason[];

  /**
   * Listing animes based on the year of publication.
   *
   * - Minimum : `1907`
   * - Maximum : `2027`
   */
  year?: [number, number?];

  /**
   * Listing anime based on the average rating.
   * - Minimum : `5`
   * - Maximum : `100`
   */
  averageRating?: [number, number?];

  /**
   * Listing anime based on the streamer of publication. (using the `AnimeKitsu#list` method is recommended.)
   */
  streamers?: TKitsuAnimeStreamers[];

  /**
   * Listing animes based on the age rating category.
   * - `G`: *General Audiences*
   * - `PG`: *Parental Guidance Suggested*
   * - `R`: *Restricted*
   * - `R18`: *Restricted for 18 years old or older*
   *
   * Using an access token in the AnimeKitsu constructor will allow you to use the R18 rating.
   */
  ageRating?: AT extends "" ? TKitsuAnimeAgeRating[] : TKitsuAnimeAgeRatingUR[];

  /**
   * Listing anime based on any categories.
   */
  categories?: AT extends ""
    ? TKitsuAnimeCategories[]
    : TKitsuAnimeCategoriesUR[];

  /**
   * Listing anime based on subtypes.
   */
  subtype?: TKitsuAnimeSubtypes[];
};
// Manga
/**
 * The parameters for the `MangaKitsu#find` method.
 * @template AT The AT generic type is to verify if there is an Access Token in the `AnimeKitsu` constructor and modify the appropriate properties.
 * @since 1.3.0
 */
type TKitsuMangaFind<AT extends string = ""> = {
  /**
   * Finding manga based on a query.
   */
  query?: string;

  /**
   * Using the offset for pagination.
   * - `0` : First page
   * - `1` : Second page
   * - `2` : Third page
   * - . . .
   */
  offset?: number | `${number}`;

  /**
   * Finding and limiting the results.
   * - Default : `10`
   * - Maximum : `20`
   */
  limit?: number | `${number}`;

  /**
   * Finding manga based on the season of publication.
   *
   * - `spring` : *April*, *May*, *June*
   * - `summer` : *July*, *August*, *September*
   * - `fall` : *October*, *November*, *December*
   * - `winter` : *January*, *February*, *March*
   */
  season?: TKitsuSeason[];

  /**
   * Finding manga based on the year of publication.
   * - Minimum : `1862`
   * - Maximum : `2027`
   */
  year?: [number, number?];

  /**
   * Finding manga based on the average rating.
   * - Minimum : `5`
   * - Maximum : `100`
   */
  averageRating?: [number, number?];

  /**
   * Listing manga based on any categories.
   */
  categories?: AT extends ""
    ? TKitsuMangaCategories[]
    : TKitsuMangaCategoriesUR[];

  /**
   * Listing manga based on subtypes.
   */
  subtype?: TKitsuMangaSubtypes[];
};

/**
 * The parameters for the MangaKitsu#list method.
 * @template AT The AT generic type is to verify if there is an Access Token in the `v` constructor and modify the appropriate properties.
 * @since 1.3.0
 */
type TKitsuMangaList<AT extends string = ""> = {
  /**
   * Using the offset for pagination.
   * - `0` : First page
   * - `1` : Second page
   * - `2` : Third page
   * - . . .
   */
  offset?: number | `${number}`;

  /**
   * Finding and limiting the results.
   * - Default : `10`
   * - Maximum : `20`
   */
  limit?: number | `${number}`;

  /**
   * Listing manga based on the season of publication.
   *
   * - `spring` : *April*, *May*, *June*
   * - `summer` : *July*, *August*, *September*
   * - `fall` : *October*, *November*, *December*
   * - `winter` : *January*, *February*, *March*
   */
  season?: TKitsuSeason[];

  /**
   * Listing manga based on the year of publication.
   * - Minimum : `1862`
   * - Maximum : `2027`
   */
  year?: [number, number?];

  /**
   * Listing manga based on the average rating.
   * - Minimum : `5`
   * - Maximum : `100`
   */
  averageRating?: [number, number?];

  /**
   * Listing manga based on any categories.
   */
  categories?: AT extends ""
    ? TKitsuMangaCategories[]
    : TKitsuMangaCategoriesUR[];

  /**
   * Listing manga based on subtypes.
   */
  subtype?: TKitsuMangaSubtypes[];
};

/**
 * Basic link interface.
 * @since 1.4.3
 */
interface IKitsuBasicLinks {
  self: string;
  related?: string;
  next?: string;
  prev?: string;
  first?: string;
  last?: string;
}
/**
 * This interface is the list of titles in different languages.
 * @since 1.4.0
 */
interface IKitsuTitles {
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
 * This interface is the list of titles in different languages for any manga.
 * @since 1.4.3
 */
interface IKitsuMangaTitles extends IKitsuTitles {
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
}
/**
 * This interface is the main attributes of the selected anime.
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
   *
   * Seems deprecated but some animes have it so...
   */
  coverImageTopOffset: number;

  /**
   * Titles in different languages.
   */
  titles: IKitsuTitles;

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
   * The age rating of the anime.
   * - `G`: *General Audiences*
   * - `PG`: *Parental Guidance Suggested*
   * - `R`: *Restricted*
   * - `R18`: *Restricted for 18 years old or older*
   */
  ageRating: TKitsuAnimeAgeRatingUR;

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

/**
 * @since 1.4.0
 */
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
 * This interface is the JSON response of the AnimeKitsu#find Promise.
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

    links: IKitsuBasicLinks;

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
 * This interface is the JSON response of the AnimeKitsu#findUnique Promise (single object)
 * @since 1.3.0
 */
interface IKitsuAnimeSingle {
  /**
   * Get the content of the request.
   * @example
   * ```js
   * anime.findUnique({ query: "oshi no ko", offset: 0 }).then(r => console.log(r.data)). { id: "...", type: "anime", links: { self: "..." } attributes: { ... }, ...}
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

    links: IKitsuBasicLinks;

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
 * This interface contain the attributes of the AnimeKitsu#episode response
 * @example
 * ```js
 * anime.find({ query: "oshi no ko", offset: 0}).then(r=> console.log(r.data[0].attributes)) // { data: { id: "3332", type: "episode", links: { self: "..." }, attributes: ... } }
 * ```
 * @since 1.4.0
 */
interface IKitsuEpisodeAttributes {
  createdAt: Date;
  updatedAt: Date;
  synopsis: string;
  description: string;
  titles: IKitsuTitles;
  canonicalTitle: string;
  seasonNumber: number;
  number: number;
  relativeNumber: number;
  airdate: string;
  length: number;
  thumbnail: IKitsuImages;
}
/**
 * @since 1.4.0
 * This interface is the main relationships of the anime, such as the videos and medias.
 */
interface IKitsuEpisodeRelationShips {
  media: IKitsuLinks;
  videos: IKitsuLinks;
}

/**
 
 * @since 1.3.0
 * This interface is the JSON response of the AnimeKitsu#episode Promise (data is a object!).
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

    links: IKitsuBasicLinks;

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
 * This interface is the main response of the AnimeKitsu#episodes API Promise.
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

      links: IKitsuBasicLinks;

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
    },
  ];
}
/**
 * This interface return the basic result of links, most of returned properties (relationships) uses this interface.
 * @since 1.4.0
 */
interface IKitsuLinks {
  links: IKitsuBasicLinks;
}

/**
 * Rating frequencies.
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
 * Basic image sizes object.
 * @since 1.4.3
 */
interface IKitsuBasicImages {
  width: number;
  height: number;
}
/**
 * This interface contain the different properties of images with different sizes.
 * @since 1.4.0
 */
interface IKitsuImages {
  tiny?: string;
  small?: string;
  medium?: string;
  large?: string;
  original: string;
  meta: {
    dimensions: {
      tiny?: IKitsuBasicImages;
      small?: IKitsuBasicImages;
      medium?: IKitsuBasicImages;
      large?: IKitsuBasicImages;
      original: IKitsuBasicImages;
    };
  };
}

// Manga
/**
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
  titles: IKitsuMangaTitles;

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
  ageRating: TKitsuAnimeAgeRatingUR;

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
 * @since 1.4.0
 */
interface IKitsuMangaLinks {
  data: {
    id: string;
    type: string;
  }[];
  links: IKitsuBasicLinks;
}

/**
 * The relationships of the manga.
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
 * This interface is the JSON response of the `MangaKitsu#find` and `MangaKitsu#list` Promise.
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
  data: {
    /**
     * The identifiant (ID) of the manga.
     */
    id: string;

    /**
     * The type of the requested content. (in logic: manga)
     */
    type: string;

    links: IKitsuBasicLinks;

    /**
     * The main attributes. (manga informations)
     */
    attributes: IKitsuMangaAttributes;

    /**
     * The relationships of the manga.
     */
    relationships: IKitsuMangaRelationShips;
  }[];
}

/**
 * This interface is the JSON response of the `MangaKitsu#findUnique` Promise (single object).
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
     * The type of the requested content. (in logic: manga)
     */
    type: string;

    links: IKitsuBasicLinks;

    /**
     * The main attributes. (manga informations)
     */
    attributes: IKitsuMangaAttributes;

    /**
     * The relationships of the manga.
     */
    relationships: IKitsuMangaRelationShips;
  };
}

/**
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
  titles: IKitsuTitles;

  /**
   * A title for refering the content.
   */
  canonicalTitle: string;

  seasonNumber: number;

  /**
   * The chapter number.
   */
  number: number;

  /**
   * A relative number?
   */
  relativeNumber: number;

  /**
   * The date of the publication.
   */
  airdate: string;

  /**
   * How long the chapter is.
   */
  length: number;

  /**
   * A thumbnail as a preview.
   */
  thumbnail: IKitsuImages;
}

/**
 * The basic Relationships for any chapter.
 * @since 1.4.0
 */
interface IKitsuChapterRelationShips {
  /**
   * Media related to the chapter.
   */
  media: IKitsuLinks;
  /**
   * Videos related to the chapter.
   */
  videos: IKitsuLinks;
}

/**
 * The JSON response of the request from `MangaKitsu#chapter`
 * @since 1.3.0
 */
interface IKitsuChapter {
  data: {
    /**
     * The identifiant (ID) of the chapter.
     */
    id: string;

    /**
     * The type of the requested content (in logic: chapter)
     */
    type: string;

    links: IKitsuBasicLinks;
    attributes: IKitsuChapterAttributes;
    relationships: IKitsuChapterRelationShips;
  };
}

/**
 * The JSON response of the request from `MangaKitsu#chapter`
 * @since 1.3.0
 */
interface IKitsuChapters {
  data: {
    /**
     * The identifiant (ID) of the chapter.
     */
    id: string;

    /**
     * The type of the requested content (in logic: chapter)
     */
    type: string;

    links: IKitsuBasicLinks;
    attributes: IKitsuChapterAttributes;
    relationships: IKitsuChapterRelationShips;
  }[];
}

export type {
  // Interfaces
  IKitsuAnime,
  IKitsuAnimeAttributes,
  IKitsuAnimeRelationShips,
  IKitsuAnimeSingle,
  IKitsuBasicImages,
  IKitsuBasicLinks,
  IKitsuChapter,
  IKitsuChapterAttributes,
  IKitsuChapterRelationShips,
  IKitsuChapters,
  IKitsuEpisode,
  IKitsuEpisodeAttributes,
  IKitsuEpisodeRelationShips,
  IKitsuEpisodes,
  IKitsuError,
  IKitsuImages,
  IKitsuLinks,
  IKitsuManga,
  IKitsuMangaAttributes,
  IKitsuMangaLinks,
  IKitsuMangaRelationShips,
  IKitsuMangaSingle,
  IKitsuMangaTitles,
  IKitsuRatingFrequencies,
  IKitsuTitles,

  // Types
  TKitsuAnimeAgeRating,
  TKitsuAnimeAgeRatingUR,
  TKitsuAnimeCategories,
  TKitsuAnimeCategoriesUR,
  TKitsuAnimeFind,
  TKitsuAnimeList,
  TKitsuAnimeStreamers,
  TKitsuAnimeSubtypes,
  TKitsuMangaCategories,
  TKitsuMangaCategoriesUR,
  TKitsuMangaFind,
  TKitsuMangaList,
  TKitsuMangaSubtypes,
  TKitsuSeason,
  TKitsuStatus,
};
