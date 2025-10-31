/**
 * Namespace of all constants of Kitsu.
 */
declare namespace kitsu {
  // Anime
  /**
   * Array of all anime categories.
   */
  const KACategories: Readonly<string[]>;

  /**
   * Array of all anime categories. (UR = **U**n**R**estricted.)
   */
  const KACategoriesUR: Readonly<string[]>;

  /**
   * Array of all anime streamers.
   */
  const KStreamers: Readonly<string[]>;

  /**
   * Array of all anime subtypes.
   */
  const KASubtypes: Readonly<string[]>;

  /**
   * Array of all age ratings.
   *
   * (**G**: *General Audiences*, **PG**: *Parental Guidance Suggested*, **R**: *Restricted*)
   */
  const KAgeRating: Readonly<string[]>;

  /**
   * Array of all age ratings. (UR = **U**n**R**estricted.)
   *
   * (**G**: *General Audiences*, **PG**: *Parental Guidance Suggested*, **R**: *Restricted*, **R18**: *Restricted for 18 years old or older*)
   */
  const KAgeRatingUR: Readonly<string[]>;

  // Manga
  /**
   * Array of all manga categories.
   */
  const KMCategories: Readonly<string[]>;

  /**
   * Array of all manga categories. (UR = **U**n**R**estricted.)
   */
  const KMCategoriesUR: Readonly<string[]>;

  /**
   * Array of all manga subtypes.
   */
  const KMSubtypes: Readonly<string[]>;

  // Main
  /**
   * Array of all seasons.
   */
  const KSeason: Readonly<string[]>;
  /**
   * Main url for Kitsu.app
   */
  const KUrl: Readonly<"https://kitsu.app/api/edge">;
  /**
   * Main headers for Kitsu.app
   */
  const KHeaders: Readonly<{
    "Content-Type": "application/vnd.api+json";
    Accept: "application/vnd.api+json";
  }>;

  export {
    KACategories,
    KACategoriesUR,
    KASubtypes,
    KAgeRating,
    KAgeRatingUR,
    KMCategories,
    KMCategoriesUR,
    KMSubtypes,
    KSeason,
    KStreamers,
    KHeaders,
    KUrl,
  };
}
/**
 * Namespace of all constants of MyAnimeList.
 */
declare namespace myanimelist {
  /**
   * Main URL for api.myanimelist.net
   */
  const MALUrl: Readonly<"https://api.myanimelist.net/v2">;

  /**
   * Array of all available anime fields.
   */
  const MALFields: Readonly<string[]>;

  /**
   * Main headers for api.myanimelist.net
   */
  const MALHeaders: Readonly<{
    "Content-Type": "application/json";
    Accept: "application/json";
  }>;

  export { MALFields, MALHeaders, MALUrl };
}

export { kitsu, myanimelist };
