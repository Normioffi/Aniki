const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const url = "https://kitsu.io/api/edge/";

/**
     * @class
     * @since 1.1.0
     * @description Kitsu is an website to get Anime and Manga information, this module use the official API with the MangaKitsu class
     * @example
     * Basic usage:
     * ```js
     * const { MangaKitsu } = require("aniki/kitsu");
     * 
     * const manga = new MangaKitsu();
     * 
     * // Normal
     * manga.find({ query: "Oshi no Ko" }).then(a => console.log(a.data[0]));
     * 
     * // With offset (recommended if have multiple results.)
     * manga.find({ query: "Oshi no Ko", offset: 0 }).then(a => console.log(a.data[0]));
     * ```
     * **/
class MangaKitsu {
    /**
     * @method
     * @param {string} query - The query for research.
     * @param {number} offset - The offset for a certain result. (Optional) Default: 0
     * @returns {Promise | null} - Return a promise or a console error.
     */
    find(query, offset = 0) {
        if (query) {
            return fetch(url + `manga?filter[text]=${query}&page%5Boffset%5D=${offset}`, {
                headers: {
                    'Content-Type': 'application/vnd.api+json',
                    'Accept': 'application/vnd.api+json'
                }
            }).then(r => {
                if (r.ok) return r.json();
                if (r.status === 404) return null;
                throw new Error("An error has occured:" + r);
            }).catch(e => {
                throw new Error("An error has occured: " + e);
            });
        } else {
            console.error("No text entries.");
        };
    };
    /**
     * @method
     * @param {number} offset - The offset for a certain result. Default: 0
     * @param {number} perPage - The number of animes need to be return. Default: 10
     * @returns {Promise | null} - Return a Promise.
     */
    list(offset = 0, perPage = 10) {
        return fetch(url + `manga?page%5Blimit%5D=${perPage}&page%5Boffset%5D=${offset}`, {
            headers: {
                'Content-Type': 'application/vnd.api+json',
                'Accept': 'application/vnd.api+json'
            }
        }).then(r => {
            if (r.ok) return r.json();
            if (r.status === 404) return null;
            throw new Error("An error has occured:" + r);
        }).catch(e => {
            throw new Error("An error has occured:" + e);
        });
    };
};

module.exports = { MangaKitsu };