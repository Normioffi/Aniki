// interfaces

/**
 * @interface
 * @description This interface is the JSON response of the MangaKitsu#find and MangaKitsu#list Promise.
 */
interface IKitsuManga {
  /**
   * @property Get the content of the request (starting only with data)
   * @example
   * ```js
   * manga.find({ query: "oshi no ko", offset: 0 }).then(r => console.log(r.data[0])) // Calling the first result with [0].
   * ```
   */
  data: [
    {
      /**
       * @property The identifiant (ID) of the manga.
       */
      id: string;
      /**
       * @property The type of the requested content (in logic: manga)
       */
      type: string;
      links: {
        self: string;
      };
      /**
       * @property The main attributes (manga informations)
       * @example
       * ```js
       * manga.find({ query: "oshi no ko", offset: 0}).then(r=> console.log(r.data[0].attributes)) // { ... }
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
         * @property The synopsis (description) of the manga
         */
        synopsis: string;
        /**
         * @property The description of the manga.
         */
        description: string;
        /**
         * @property The top offset of the cover image.
         * Seems deprecated in docs but some mangas have it so...
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
           * @property Title in japanese. (like "推しの子")
           */
          ja_jp: string;
          /**
           * @property Title in Thai. (like "เกิดใหม่เป็นลูกโอชิ")
           */
          th_th?: string;
          /**
           * @property Title in Korean.
           */
          ko_kr?: string;
          /**
           * @property Title in Russian.
           */
          ru_ru?: string;
        };
        /**
         * @property Canonical title. (mostly used for SEO)
         */
        canonicalTitle: string;
        /**
         * @property Abbreviated titles. (like Roshidere)
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
         * @property The official manga start date.
         */
        startDate: string;
        /**
         * @property The official manga end date.
         */
        endDate: string;
        /**
         * @property The approximate date of the next release.
         */
        nextRelease: string | null;
        /**
         * @property The popularity rank of the manga. (used for Kitsu.app)
         */
        popularityRank: number;
        ratingRank: number;
        /**
         * @property Age rating of the manga. (**G**: *General Audiences*, **PG**: *Parental Guidance Suggested*, **R**: *Restricted*, **R18**: *Restricted for 18 years old or older*.)
         */
        ageRating: "G" | "PG" | "R";
        ageRatingGuide: string | null;
        subtype:
          | "manga"
          | "manhwa"
          | "manhua"
          | "novel"
          | "oneshot"
          | "doujin"
          | "oel";
        /**
         * @property the actual status of the manga.
         */
        status: "current" | "finished" | "tba" | "unreleased" | "upcoming";
        /**
         * @property If the manga is **t**o **b**e **a**nnounced.
         */
        tba: string | null;
        /**
         * @property the poster image (aka main image) of the manga. Available in different sizes.
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
         * @property The cover image of the manga, mostly used as background image. Available in different sizes.
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
        /**
         * @property Number of chapters planned.
         */
        chapterCount: number;
        /**
         * @property Number of volumes planned.
         */
        volumeCount: number;
        serialization: string;
      };
      relationships: {
        categories: {
          data: Array<{
            id: string;
            type: string;
          }>;
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
        mappings: {
          data: Array<{
            id: string;
            type: string;
          }>;
          links: {
            self: string;
            related: string;
          };
        };
        mediaRelationships: {
          data: Array<{
            id: string;
            type: string;
          }>;
          links: {
            self: string;
            related: string;
          };
        };
        characters: {
          data: Array<{
            id: string;
            type: string;
          }>;
          links: {
            self: string;
            related: string;
          };
        };
        staff: {
          data: Array<{
            id: string;
            type: string;
          }>;
          links: {
            self: string;
            related: string;
          };
        };
        productions: {
          data: Array<{
            id: string;
            type: string;
          }>;
          links: {
            self: string;
            related: string;
          };
        };
        quotes: {
          data: Array<{
            id: string;
            type: string;
          }>;
          links: {
            self: string;
            related: string;
          };
        };
        chapters: {
          data: Array<{
            id: string;
            type: string;
          }>;
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
 * @description This interface is the JSON response of the MangaKitsu#findById Promise (single object).
 */

interface IKitsuMangaSingle {
  /**
   * @property Get the content of the request (starting only with data)
   * @example
   * ```js
   * manga.find({ query: "oshi no ko", offset: 0 }).then(r => console.log(r.data[0])) // Calling the first result with [0].
   * ```
   */
  data: {
    /**
     * @property The identifiant (ID) of the manga.
     */
    id: string;
    /**
     * @property The type of the requested content (in logic: manga)
     */
    type: string;
    links: {
      self: string;
    };
    /**
     * @property The main attributes (manga informations)
     * @example
     * ```js
     * manga.find({ query: "oshi no ko", offset: 0}).then(r=> console.log(r.data[0].attributes)) // { ... }
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
       * @property The synopsis (description) of the manga
       */
      synopsis: string;
      /**
       * @property The description of the manga.
       */
      description: string;
      /**
       * @property The top offset of the cover image.
       * Seems deprecated in docs but some mangas have it so...
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
         * @property Title in japanese. (like "推しの子")
         */
        ja_jp: string;
        /**
         * @property Title in Thai. (like "เกิดใหม่เป็นลูกโอชิ")
         */
        th_th?: string;
        /**
         * @property Title in Korean.
         */
        ko_kr?: string;
        /**
         * @property Title in Russian.
         */
        ru_ru?: string;
      };
      /**
       * @property Canonical title. (mostly used for SEO)
       */
      canonicalTitle: string;
      /**
       * @property Abbreviated titles. (like Roshidere)
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
       * @property The official manga start date.
       */
      startDate: string;
      /**
       * @property The official manga end date.
       */
      endDate: string;
      /**
       * @property The approximate date of the next release.
       */
      nextRelease: string | null;
      /**
       * @property The popularity rank of the manga. (used for Kitsu.app)
       */
      popularityRank: number;
      ratingRank: number;
      /**
       * @property Age rating of the manga. (**G**: *General Audiences*, **PG**: *Parental Guidance Suggested*, **R**: *Restricted*, **R18**: *Restricted for 18 years old or older*.)
       */
      ageRating: "G" | "PG" | "R";
      ageRatingGuide: string | null;
      subtype:
        | "manga"
        | "manhwa"
        | "manhua"
        | "novel"
        | "oneshot"
        | "doujin"
        | "oel";
      status: "current" | "finished" | "tba" | "unreleased" | "upcoming";
      tba: string | null;
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
      chapterCount: number;
      volumeCount: number;
      serialization: string;
    };
    relationships: {
      categories: {
        data: Array<{
          id: string;
          type: string;
        }>;
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
      mappings: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
      mediaRelationships: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
      characters: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
      staff: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
      productions: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
      quotes: {
        data: Array<{
          id: string;
          type: string;
        }>;
        links: {
          self: string;
          related: string;
        };
      };
      chapters: {
        data: Array<{
          id: string;
          type: string;
        }>;
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
 * @description The JSON response of the request from MangaKitsu#chapter
 * @since 1.3.0
 */
interface IKitsuChapter {
  data: {
    /**
     * @property The identifiant (ID) of the manga.
     */
    id: string;
    /**
     * @property The type of the requested content (in logic: manga)
     */
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

/**
 * @interface
 * @description The JSON response of the request from MangaKitsu#chapter
 * @since 1.3.0
 */
interface IKitsuChapters {
  data: [
    {
      /**
       * @property The identifiant (ID) of the manga.
       */
      id: string;
      /**
       * @property The type of the requested content (in logic: manga)
       */
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
    }
  ];
}

export { IKitsuChapter, IKitsuChapters, IKitsuManga, IKitsuMangaSingle };
