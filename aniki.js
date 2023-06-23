const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const { apiEPP } = require("./endpointParams/EPP.js");


class AnikiApiType {
    constructor(api, isDev) {
        this.api = api;
        this.isDev = isDev;
    }
};
class Aniki extends AnikiApiType {
/**
 * 
 * @param {string} api - The api used for the request.
 * @param {boolean} isDev - If true: returns console server errors. If false: no returns console server errors.
 */
    constructor(api, isDev) {
        super()
        this.api = api
        if (api === "konet") {
            this.url = "https://konet-anime-db.normioffi.repl.co/"

        } else if (api === "kitsu") {
            this.url = "https://kitsu.io/api/edge/"
        }
        this.isDev = isDev
    }
    /**
     * @param {string} query - The query for research.
     * @param {number} offset - The offset for a certain result. (Optional)
     */
    
    search(query, offset) {
        if (query) {
            return fetch(this.url + apiEPP(this.api, query, offset).search, {
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
                        console.warn("No data or invalid EndPoint or parameter.")
                    } else if (r.status === 406) {
                        console.error("invalid data in Accept. " + r);
                    } else {
                        throw new Error(r)
                    }
                } else if (this.isDev === false) {
                    return null;
                } else {
                    console.error("The parameter isDev must be a boolean!")
                }
            });
        } else {
            console.error("No text entries.")
        }
    }
    /**
     * @param {string} name - The name of the anime
     */
    anime(name) {
        if (name) {
            return fetch(this.url + apiEPP(this.api, name).anime, {
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
                        console.warn("No data or invalid EndPoint or parameter.")
                    } else if (r.status === 406) {
                        console.error("invalid data in Accept. " + r);
                    } else {
                        throw new Error(r)
                    }
                } else if (this.isDev === false) {
                    return null;
                } else {
                    console.error("The parameter isDev must be a boolean!")
                }
            });
        } else {
            console.error("No text entries.")
        }
    }

    /**
     * 
     * @param {number} offset - The offset is a optionnal parameter for certain api.
     * @returns 
     */
    list(offset) {
        return fetch(this.url + apiEPP(this.api, ".", offset).list, {
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
                    console.warn("No data or invalid EndPoint or parameter.")
                 } else if (r.status === 406) {
                    console.error("invalid data in Accept. " + r);
                } else {
                    throw new Error(r)
                }
            } else if (this.isDev === false) {
                return null;
            } else {
                console.error("The parameter isDev must be a boolean!")
            }
        }).catch(e => {
            console.error('An error was occured', e);
        })
    }

    /**
     * @param {string} type - The theme of the list.
     * @param {number} offset - The offset for a specific result. (Optional)
     */

    theme(type, offset) {
        if (this.api === "kitsu") return console.warn("No theme endpoint for this api")
           
        if (type) {
            return fetch(this.url + apiEPP(this.api, type, offset).theme, {
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
                        console.warn("No data or invalid EndPoint or parameter.")
                    } else if (r.status === 406) {
                        console.error("invalid data in Accept. " + r);
                    } else {
                        throw new Error(r)
                    }
                } else if (this.isDev === false) {
                    return null;
                } else {
                    console.error("The parameter isDev must be a boolean!")
                }
            }).catch(e => {
                console.error('An error was occured', e);
            });
        } else {
            console.error("No text entries.");
        }
    }
    /**
     * @param {string} type - The gender for the list.
     * @param {number} offset - The offset for a specific result. (Optional)
     */

    gender(type, offset) {
        if (this.api === "kitsu") return console.warn("No gender endpoint for this api")
        if (type) {
            return fetch(this.url + apiEPP(this.api, type, offset).gender, {
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
                        console.warn("No data or invalid EndPoint or parameter.")
                    } else if (r.status === 406) {
                        console.error("invalid data in Accept. " + r);
                    } else {
                        throw new Error(r)
                    }
                } else if (this.isDev === false) {
                    return null;
                } else {
                    console.error("The parameter isDev must be a boolean!")
                }
            }).catch(e => {
                console.error('An error was occured:', e);
            });
        } else {
            console.error("No text entries.");
        };
    }
};

module.exports = { Aniki };
