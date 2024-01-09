<div align="center">
Aniki is a module using APIs to obtain information about an anime or manga.
</div>

# Installation
With NPM:
```npm
npm i aniki
```
# Alpha
An alpha version (1.3.0) will be released soon as possible (i really work a long time in...), the module has been restructured in TypeScript, you can still use it in JavaScript ESM.

# Api used
~~Konet Anime DB~~ For now this api is deprecated for missing all animes, use Kitsu api instead.

Kitsu.io

# Helping
Do you have an anime/manga api to suggest? Tell me in [X](https://twitter.com/Normioffi)! (The api must not have an access key.)

# Usage

With Kitsu:

```javascript
const { AnimeKitsu } = require("aniki/kitsu");

const anime = new AnimeKitsu(false); // Set the api to kitsu.io and set the parameter for developpement to false.


// Find anime.
anime.search("name").then(results => {
	console.log(results.data[0]) // The 0 is the first result, data are required.
});

// All list from the page, 
anime.list(0).then(animes => { // 0 is the offset (first page)
  console.log(animes)
});

// Other function are not working with this api.
```

With Kitsu for manga:

```js
const { MangaKitsu } = require("aniki/kitsu");

const manga = new MangaKitsu(false); // Set the api to kitsu (Only Kitsu.io api are used.) and set the dev mode to false.

// Find anime.
manga.search("name", 0).then(results => {
    console.log(results.data[0]);
});

// Get a list.
manga.list(0).then(mangas => {
    console.log(mangas);
});
```
# Important

If you use all function at one time, use asynchronous function:

```js
async function yourFunc() {
  await anime.search("name", 0).then(results => {
	  console.log(results.data[0]);
  });
 
  await anime.list(0).then(animes => {
	  console.log(animes.data[0]);
  });

  await manga.search("name", 0).then(results => {
    console.log(results.data[0]);
  });
  // ...
}
yourFunc()
```

# Kitsu Anime Response

|Attributes|Description|Type|
|---|---|---|
|`titles`|All type of title|object|
|`titles` > `en`|The english title|string|
|`titles` > `jp`|The japanese title|string|
|`titles` > `ja_jp`|The japanese character title|string|
|`canonicalTitle`|The canonical title|string|
|`abbreviatedTitles`|The abbreviated titles|array|
|`synopsis`|The synopsis of the anime (description)|string|
|`createdAt`|The creation date (ISO 8601)|string|
|`startAt`|The start date (YYYY-MM-DD)|string|
|`updatedAt`|The updated date (ISO 8601)|string|
|`endAt`|The end date (YYYY-MM-DD)|string|
|`posterImage`|The poster image|object|
|`posterImage` > `tiny`|The tiny poster image|string|
|`posterImage` > `small`|The small poster image|string|
|`posterImage` > `medium`|The medium poster image|string|
|`posterImage` > `large`|The large poster image|string|
|`posterImage` > `original`|The original poster image|string|
|`coverImage`|The poster image|object|
|`coverImage` > `tiny`|The tiny poster image|string|
|`coverImage` > `small`|The small poster image|string|
|`coverImage` > `large`|The large poster image|string|
|`posterImage` > `original`|The original poster image|string|
|`episodeCount`|The number of episodes|number|
|`episodeLength`|The approximative duration of the episode|number|
|`nsfw`|If the anime are NSFW content or not (must use authentication system.)|boolean|
|`youtubeVideoId`|The trailer video id|string|
|`ageRating`|The age rating|"enum"|
|`subtype`|The subtype|"enum"|

# Kitsu JSON Response

Example with an anime search

```json
{
    "data": [
        {
            "id": "",
            "type": "anime",
            "links": {
                "self": ""
            },
            "attributes": {
                "createdAt": "",
                "updatedAt": "",
                "slug": "",
                "synopsis": "",
                "description": "",
                "coverImageTopOffset": 0,
                "titles": {
                    "en_jp": "",
                    "ja_jp": ""
                },
                "canonicalTitle": "",
                "abbreviatedTitles": [
                    ""
                ],
                "averageRating": "",
                "ratingFrequencies": {
                    "2": "",
                    "3": "",
                    "4": "",
                    "5": "",
                    "6": "",
                    "7": "",
                    "8": "",
                    "9": "",
                    "10": "",
                    "11": "",
                    "12": "",
                    "13": "",
                    "14": "",
                    "15": "",
                    "16": "",
                    "17": "",
                    "18": "",
                    "19": "",
                    "20": ""
                },
                "userCount": 0,
                "favoritesCount": 0,
                "startDate": "0000-00-00",
                "endDate": "0000-00-00",
                "nextRelease": null,
                "popularityRank": 0,
                "ratingRank": 0,
                "ageRating": "",
                "ageRatingGuide": "",
                "subtype": "",
                "status": "",
                "tba": "",
                "posterImage": {
                    "tiny": "",
                    "large": "",
                    "small": "",
                    "medium": "",
                    "original": "",
                    "meta": {
                        "dimensions": {
                            "tiny": {
                                "width": 0,
                                "height": 0
                            },
                            "large": {
                                "width": 0,
                                "height": 0
                            },
                            "small": {
                                "width": 0,
                                "height": 0
                            },
                            "medium": {
                                "width": 0,
                                "height": 0
                            }
                        }
                    }
                },
                "coverImage": {
                    "tiny": "",
                    "large": "",
                    "small": "",
                    "original": "",
                    "meta": {
                        "dimensions": {
                            "tiny": {
                                "width": 0,
                                "height": 0
                            },
                            "large": {
                                "width": 0,
                                "height": 0
                            },
                            "small": {
                                "width": 0,
                                "height": 0
                            }
                        }
                    }
                },
                "episodeCount": 0,
                "episodeLength": 0,
                "totalLength": 0,
                "youtubeVideoId": "",
                "showType": "",
                "nsfw": false
            },
            "relationships": {
                "genres": {
                    "links": {
                        "self": "",
                        "related": ""
                    }
                },
                "categories": {
                    "links": {
                        "self": "",
                        "related": ""
                    }
                },
                "castings": {
                    "links": {
                        "self": "",
                        "related": ""
                    }
                },
                "installments": {
                    "links": {
                        "self": "",
                        "related": ""
                    }
                },
                "mappings": {
                    "links": {
                        "self": "",
                        "related": ""
                    }
                },
                "reviews": {
                    "links": {
                        "self": "",
                        "related": ""
                    }
                },
                "mediaRelationships": {
                    "links": {
                        "self": "",
                        "related": ""
                    }
                },
                "characters": {
                    "links": {
                        "self": "",
                        "related": ""
                    }
                },
                "staff": {
                    "links": {
                        "self": "",
                        "related": ""
                    }
                },
                "productions": {
                    "links": {
                        "self": "",
                        "related": ""
                    }
                },
                "quotes": {
                    "links": {
                        "self": "",
                        "related": ""
                    }
                },
                "episodes": {
                    "links": {
                        "self": "",
                        "related": ""
                    }
                },
                "streamingLinks": {
                    "links": {
                        "self": "",
                        "related": ""
                    }
                },
                "animeProductions": {
                    "links": {
                        "self": "",
                        "related": ""
                    }
                },
                "animeCharacters": {
                    "links": {
                        "self": "",
                        "related": ""
                    }
                },
                "animeStaff": {
                    "links": {
                        "self": "",
                        "related": ""
                    }
                }
            }
        }
    ],
    "meta": {
        "count": 0
    },
    "links": {
        "first": "",
        "last": ""
    }
}
```
