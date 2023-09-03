const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

class MangaKitsu {
    /**
     * @param {boolean} isDev - If true: returns console server errors. If false: no returns console server errors.
     */
    constructor(isDev) {
        this.url = "https://kitsu.io/api/edge/";

        this.isDev = isDev;
    }
    /**
     * @param {string} query - The query for research.
     * @param {number} offset - The offset for a certain result. (Optional)
     * @returns Return a promise
     */

    search(query, offset) {
        if (query) {
            return fetch(this.url + `manga?filter[text]=${query}&page%5Boffset%5D=${offset}`, {
                headers: {
                    'Content-Type': 'application/vnd.api+json',
                    'Accept': 'application/vnd.api+json'
                }
            }).then(r => {
                if (r.status === 200) {
                    return r.json();
                }
                if (this.isDev === true) {
                    if (r.status === 404) {
                        console.warn("No data or invalid EndPoint or parameter.");
                    } else if (r.status === 406) {
                        console.error("invalid data in Accept. " + r);
                    } else {
                        throw new Error(r);
                    }
                } else if (this.isDev === false) {
                    return null;
                } else {
                    console.error("The parameter isDev must be a boolean!");
                }
            });
        } else {
            console.error("No text entries.");
        }
    }
    /**
     * 
     * @param {number} offset - The offset is a optionnal parameter for certain api.
     * @param {number} perPage - The number of animes need to be return
     * @returns Return a promise
     */
    list(offset, perPage) {
        return fetch(this.url + `manga?page%5Blimit%5D=${perPage}&page%5Boffset%5D=${offset}`, {
            headers: {
                'Content-Type': 'application/vnd.api+json',
                'Accept': 'application/vnd.api+json'
            }
        }).then(r => {
            if (r.ok) {
                return r.json();
            }
            if (this.isDev === true) {
                if (r.status === 404) {
                    console.warn("No data or invalid EndPoint or parameter.");
                } else if (r.status === 406) {
                    console.error("invalid data in Accept. " + r);
                } else {
                    throw new Error(r);
                }
            } else if (this.isDev === false) {
                return null;
            } else if (!this.isDev) {
                return null
            } else {
                console.error("The parameter isDev must be a boolean!");
            }
        }).catch(e => {
            console.error('An error was occured', e);
        })
    }
};

module.exports = { MangaKitsu };
