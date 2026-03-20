/**
 * Namespace of all constants of Kitsu.
 * @since 1.4.0
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
   * - `G` : *General Audiences*
   * - `PG` : *Parental Guidance Suggested*
   * - `R` : *Restricted*
   */
  const KAgeRating: Readonly<string[]>;

  /**
   * Array of all age ratings. (UR = **U**n**R**estricted.)
   *
   * - `G` : *General Audiences*
   * - `PG` : *Parental Guidance Suggested*
   * - `R` : *Restricted*
   * - `R18` : *Restricted for 18 years old or older*
   * */
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
   * Array of all anime and manga year seasons.
   *
   * - `spring` : *April*, *May*, *June*
   * - `summer` : *July*, *August*, *September*
   * - `fall` : *October*, *November*, *December*
   * - `winter` : *January*, *February*, *March*
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
 * @since 1.4.0
 */
declare namespace myanimelist {
  /**
   * Array of all available anime fields.
   */
  const MALFields: Readonly<string[]>;

  /**
   * Array of all available manga fields.
   */
  const MMLFields: Readonly<string[]>;

  /**
   * Array of all anime ranking type.
   *
   * - `all` :	*Top Anime Series*
   * - `airing` :	*Top Airing Anime*
   * - `upcoming` :	*Top Upcoming Anime*
   * - `tv` :	*Top Anime TV Series*
   * - `ova` : *Top Anime OVA Series*
   * - `movie` : *Top Anime Movies*
   * - `special` : *Top Anime Specials*
   * - `bypopularity` :	*Top Anime by Popularity*
   * - `favorite` :	*Top Favorited Anime*
   */
  const MALRankingType: Readonly<string[]>;

  /**
   * Array of all manga ranking type.
   *
   * - `all`: *All*
   * - `manga` :	*Top Manga*
   * - `novels` :	*Top Novels*
   * - `oneshots`: *Top One-shots*
   * - `doujin`	: *Top Doujinshi*
   * - `manhwa`	: *Top Manhwa*
   * - `manhua`	: *Top Manhua*
   * - `bypopularity` :	*Most Popular*
   * - `favorite`	: *Most Favorited*
   */
  const MMLRankingType: Readonly<string[]>;

  /**
   * Array of all anime and manga year seasons.
   *
   * - `spring` : *April*, *May*, *June*
   * - `summer` : *July*, *August*, *September*
   * - `fall` : *October*, *November*, *December*
   * - `winter` : *January*, *February*, *March*
   */
  const MALSeason: Readonly<string[]>;

  // Main

  /**
   * Main URL for api.myanimelist.net
   */
  const MALUrl: Readonly<"https://api.myanimelist.net/v2">;

  /**
   * Main headers for api.myanimelist.net
   */
  const MALHeaders: Readonly<{
    "Content-Type": "application/json";
    Accept: "application/json";
  }>;

  export {
    MALUrl,
    MALHeaders,
    MALFields,
    MALSeason,
    MMLFields,
    MALRankingType,
    MMLRankingType,
  };
}

/**
 * Namespace for all Waifu.Im constants.
 * @since 2.0.0-beta.1
 */
declare namespace waifuim {
  /**
   * Main url for waifu.im
   * @since 2.0.0-beta.1
   */
  const WIMUrl: Readonly<"https://api.waifu.im">;

  const WIMTags: Readonly<string[]>;

  export { WIMTags, WIMUrl };
}

/**
 * Namespace for all Waifu.It constants.
 * @since 2.0.0-beta.1
 */
declare namespace waifuit {
  /**
   * Main url for waifu.it
   * @since 2.0.0-beta.1
   */
  const WITUrl: Readonly<"https://waifu.it/api/v4/waifu">;

  export { WITUrl };
}

export { kitsu, myanimelist, waifuim, waifuit };
