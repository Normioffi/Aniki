/**
 * @file This file is used as interfaces library for Kitsu.app API response.
 */

// interfaces

/**
 * @type
 * @description This type returns errors from the Kitsu.app API and module.
 * @since 1.3.0
 */
type IKitsuHandleError = (
  /**
   * @param {object} errors
   * @param {Promise<IKitsuError>} [errors.apiError] - The API errors
   * @param {unknown} [errors.moduleError] - The module errors
   */
  errors: { apiError?: Promise<IKitsuError>; moduleError?: unknown },
  status: number
) => Promise<void>;

/**
 * @interface
 * @description
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
 * @interface
 * @description This interface is the JSON response of the AnimeKitsu#find Promise, can be d.
 * @since 1.3.0
 */

interface IKitsuAnime {
  /**
   * @property Get the content of the request (starting only with data)
   * @example
   * ```js
   * anime.find({ query: "oshi no ko", offset: 0 }).then(r => console.log(r.data[0])) // Calling the first result with [0].
   * ```
   */
  data: [
    {
      /**
       * @property The identifiant (ID) of the anime.
       */
      id: string;
      /**
       * @property The type of the requested content (in logic: anime)
       */
      type: string;
      links: {
        self: string;
      };
      /**
       * @property The main attributes (anime informations)
       * @example
       * ```js
       * anime.find({ query: "oshi no ko", offset: 0}).then(r=> console.log(r.data[0].attributes)) // { ... }
       * ```
       */
      attributes: {
        /**
         * @property The creation date of the data from Kitsu.io (ISO 8601)
         */
        createdAt: Date;
        /**
         * @property The update date of the data from Kitsu.io. (ISO 8601)
         */
        updatedAt: Date;
        /**
         * @property The title with - (oshi-no-ko)
         */
        slug: string;
        /**
         * @property The synopsis (description) of the anime
         */
        synopsis: string;
        /**
         * @property The description of the anime.
         */
        description: string;
        /**
         * @property The top offset of the cover image.
         * Seems deprecated but some animes have it so...
         */
        coverImageTopOffset: number;
        /**
         * @property Titles in different languages.
         */
        titles: {
          /**
           * @property Title in english version.
           */
          en: string;
          /**
           * @property Title in japanese but in readable version. (like "Oshi no ko")
           */
          en_jp: string;
          /**
           * @property TItle in japanese (like "推しの子")
           */
          ja_jp: string;
        };
        /**
         * @property Canonical title (mostly used for SEO)
         */
        canonicalTitle: string;
        /**
         * @property Abbreviated titles (like Roshidere)
         */
        abbreviatedTitles: string[];
        averageRating: string | null;
        ratingFrequencies: {
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
        };
        userCount: number;
        favoritesCount: number;
        /**
         * @property The official anime start date.
         */
        startDate: string;
        /**
         * @property The official anime end date.
         */
        endDate: string;
        nextRelease: string;
        /**
         * @property The popularity rank of the anime. (used for Kitsu.app)
         */
        popularityRank: number;
        ratingRank: number;
        /**
         * @property Age rating of the anime. (**G**: *General Audiences*, **PG**: *Parental Guidance Suggested*, **R**: *Restricted*, **R18**: *Restricted for 18 years old or older*.)
         */
        ageRating: "G" | "PG" | "R" | "R18";
        ageRatingGuide: string | null;
        /**
         * @property The type of the anime (can be a movie, a TV serie or OVA episode, etc...)
         */
        subtype: "ONA" | "OVA" | "TV" | "movie" | "music" | "special";
        /**
         * @property the actual status of the anime.
         */
        status: "current" | "finished" | "tba" | "unreleased" | "upcoming";
        /**
         * @property If the anime is **t**o **b**e **a**nnounced.
         */
        tba: string | null;
        /**
         * @property the poster image (aka main image) of the anime. Available in different sizes.
         */
        posterImage: {
          tiny: string;
          large: string;
          small: string;
          medium: string;
          original: string;
          meta: {
            dimensions: {
              tiny: {
                width: number;
                height: number;
              };
              large: {
                width: number;
                height: number;
              };
              small: {
                width: number;
                height: number;
              };
              medium: {
                width: number;
                height: number;
              };
            };
          };
        };
        /**
         * @property The cover image of the anime, mostly used as background image. Available in different sizes.
         */
        coverImage: {
          tiny: string;
          large: string;
          small: string;
          original: string;
          meta: {
            dimensions: {
              tiny: {
                width: number;
                height: number;
              };
              large: {
                width: number;
                height: number;
              };
              small: {
                width: number;
                height: number;
              };
            };
          };
        };
        episodeCount: number;
        /**
         * @property Approximative episode length. (such as 24 mins)
         */
        episodeLength: number;
        /**
         * @property Total length of all episodes.
         */
        totalLength: number;
        /**
         * @property Official (or unofficial) Youtube video ID of the trailer/presentation
         */
        youtubeVideoId: string;
        showType: string;
        nsfw: boolean;
      };
      relationships: {
        genres: {
          links: {
            self: string;
            related: string;
          };
        };
        categories: {
          links: {
            self: string;
            related: string;
          };
        };
        castings: {
          links: {
            self: string;
            related: string;
          };
        };
        installments: {
          links: {
            self: string;
            related: string;
          };
        };
        mappings: {
          links: {
            self: string;
            related: string;
          };
        };
        reviews: {
          links: {
            self: string;
            related: string;
          };
        };
        mediaRelationships: {
          links: {
            self: string;
            related: string;
          };
        };
        characters: {
          links: {
            self: string;
            related: string;
          };
        };
        staff: {
          links: {
            self: string;
            related: string;
          };
        };
        productions: {
          links: {
            self: string;
            related: string;
          };
        };
        quotes: {
          links: {
            self: string;
            related: string;
          };
        };
        episodes: {
          links: {
            self: string;
            related: string;
          };
        };
        streamingLinks: {
          links: {
            self: string;
            related: string;
          };
        };
        animeProductions: {
          links: {
            self: string;
            related: string;
          };
        };
        animeCharacters: {
          links: {
            self: string;
            related: string;
          };
        };
        animeStaff: {
          links: {
            self: string;
            related: string;
          };
        };
      };
    }
  ];
}
/**
 * @interface
 * @description This interface is the JSON response of the AnimeKitsu#findById Promise (single object)
 * @since 1.3.0
 */
interface IKitsuAnimeSingle {
  data: {
    /**
     * @property The identifiant (ID) of the anime.
     */
    id: string;
    /**
     * @property The type of the requested content (in logic: anime)
     */
    type: string;
    links: {
      self: string;
    };
    /**
     * @property The main attributes (anime informations)
     * @example
     * ```js
     * anime.findById(33).then(r=> console.log(r.data.attributes)) // { ... }
     * ```
     */
    attributes: {
      /**
       * @property The creation date of the data from Kitsu.io (ISO 8601)
       */
      createdAt: Date;
      /**
       * @property The update date of the data from Kitsu.io. (ISO 8601)
       */
      updatedAt: Date;
      /**
       * @property The title with - (oshi-no-ko)
       */
      slug: string;
      /**
       * @property The synopsis (description) of the anime
       */
      synopsis: string;
      /**
       * @property The description of the anime.
       */
      description: string;
      /**
       * @property The top offset of the cover image.
       * Seems deprecated but some animes have it so...
       */
      coverImageTopOffset: number;
      /**
       * @property Titles in different languages.
       */
      titles: {
        /**
         * @property Title in english version.
         */
        en: string;
        /**
         * @property Title in japanese but in readable version. (like "Oshi no ko")
         */
        en_jp: string;
        /**
         * @property TItle in japanese (like "推しの子")
         */
        ja_jp: string;
      };
      /**
       * @property Canonical title (mostly used for SEO)
       */
      canonicalTitle: string;
      /**
       * @property Abbreviated titles (like Roshidere)
       */
      abbreviatedTitles: string[];
      averageRating: string | null;
      ratingFrequencies: {
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
      };
      userCount: number;
      favoritesCount: number;
      /**
       * @property The official anime start date.
       */
      startDate: string;
      /**
       * @property The official anime end date.
       */
      endDate: string;
      nextRelease: string;
      /**
       * @property The popularity rank of the anime. (used for Kitsu.app)
       */
      popularityRank: number;
      ratingRank: number;
      /**
       * @property Age rating of the anime. (**G**: *General Audiences*, **PG**: *Parental Guidance Suggested*, **R**: *Restricted*, **R18**: *Restricted for 18 years old or older*.)
       */
      ageRating: "G" | "PG" | "R" | "R18";
      ageRatingGuide: string | null;
      /**
       * @property The type of the anime (can be a movie, a TV serie or OVA episode, etc...)
       */
      subtype: "ONA" | "OVA" | "TV" | "movie" | "music" | "special";
      /**
       * @property the actual status of the anime.
       */
      status: "current" | "finished" | "tba" | "unreleased" | "upcoming";
      /**
       * @property If the anime is **t**o **b**e **a**nnounced.
       */
      tba: string | null;
      /**
       * @property the poster image (aka main image) of the anime. Available in different sizes.
       */
      posterImage: {
        tiny: string;
        large: string;
        small: string;
        medium: string;
        original: string;
        meta: {
          dimensions: {
            tiny: {
              width: number;
              height: number;
            };
            large: {
              width: number;
              height: number;
            };
            small: {
              width: number;
              height: number;
            };
            medium: {
              width: number;
              height: number;
            };
          };
        };
      };
      /**
       * @property The cover image of the anime, mostly used as background image. Available in different sizes.
       */
      coverImage: {
        tiny: string;
        large: string;
        small: string;
        original: string;
        meta: {
          dimensions: {
            tiny: {
              width: number;
              height: number;
            };
            large: {
              width: number;
              height: number;
            };
            small: {
              width: number;
              height: number;
            };
          };
        };
      };
      episodeCount: number;
      /**
       * @property Approximative episode length. (such as 24 mins)
       */
      episodeLength: number;
      /**
       * @property Total length of all episodes.
       */
      totalLength: number;
      /**
       * @property Official (or unofficial) Youtube video ID of the trailer/presentation
       */
      youtubeVideoId: string;
      showType: string;
      nsfw: boolean;
    };
    relationships: {
      genres: {
        links: {
          self: string;
          related: string;
        };
      };
      categories: {
        links: {
          self: string;
          related: string;
        };
      };
      castings: {
        links: {
          self: string;
          related: string;
        };
      };
      installments: {
        links: {
          self: string;
          related: string;
        };
      };
      mappings: {
        links: {
          self: string;
          related: string;
        };
      };
      reviews: {
        links: {
          self: string;
          related: string;
        };
      };
      mediaRelationships: {
        links: {
          self: string;
          related: string;
        };
      };
      characters: {
        links: {
          self: string;
          related: string;
        };
      };
      staff: {
        links: {
          self: string;
          related: string;
        };
      };
      productions: {
        links: {
          self: string;
          related: string;
        };
      };
      quotes: {
        links: {
          self: string;
          related: string;
        };
      };
      episodes: {
        links: {
          self: string;
          related: string;
        };
      };
      streamingLinks: {
        links: {
          self: string;
          related: string;
        };
      };
      animeProductions: {
        links: {
          self: string;
          related: string;
        };
      };
      animeCharacters: {
        links: {
          self: string;
          related: string;
        };
      };
      animeStaff: {
        links: {
          self: string;
          related: string;
        };
      };
    };
  };
}
/**
 * @interface
 * @description This interface is the JSON response of the AnimeKitsu#episode Promise (only the property data changing into a single object and not an array).
 * @since 1.3.0
 */
interface IKitsuEpisode {
  data: {
    id: string;
    type: string;
    links: {
      self: string;
    };
    attributes: {
      createdAt: string;
      updatedAt: string;
      synopsis: string;
      description: string;
      titles: {
        en_jp: string;
        en_us: string;
        ja_jp: string;
      };
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
    };
    relationships: {
      media: {
        links: {
          self: string;
          related: string;
        };
      };
      videos: {
        links: {
          self: string;
          related: string;
        };
      };
    };
  };
}

export {
  IKitsuAnime,
  IKitsuAnimeSingle,
  IKitsuEpisode,
  IKitsuError,
  IKitsuHandleError,
};
