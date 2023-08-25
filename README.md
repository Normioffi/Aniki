<div align="center">
<img src="https://ik.imagekit.io/TheNormidb/Aniki.png"/>
Aniki is a module using APIs to obtain information about an anime or manga.
</div>

# Installation
With NPM:
```npm
npm i aniki
```

# Api used
Konet Anime DB: French api (this one are incompleted, use other api instead.)

Kitsu.io

# Helping
Do you have an anime/manga api to suggest? Tell me in [X](https://twitter.com/Normioffi)! (The api must not have an access key.)

Are you <b>french</b>? Join the [Konet](https://twitter.com/KonetOrigin) community now and help the api grow!

# Usage

With Konet anime db (Anime):

```javascript
const { Anime } = require("aniki");

const anime = new Anime("konet", false); // Set the api to konet and set the parameter for developpement to false. (you can set it true to get console server error.)

// Find one anime.
anime.anime("name").then(anime => {
  console.log(anime)
});

// All list from the database.
anime.list().then(animes => {
  console.log(animes)
});

// Find anime.
anime.search("name").then(results => {
	console.log(results[0]) // The 0 is the first result.
});

// List by gender.
anime.gender("gender").then(animes => {
	console.log(animes);
});

// List by theme.
anime.theme("theme").then(animes => {
	console.log(animes);
});
```

With Kitsu:

```javascript
const { Anime } = require("aniki");

const anime = new Anime("kitsu", false); // Set the api to kitsu.io and set the parameter for developpement to false.


// Find anime.
anime.search("name").then(results => {
	console.log(results.data[0].attributes) // The 0 is the first result, "data" and "attributes" are required to get anime data (titles, synopsis...).
});

// All list from the page, 
anime.list(0).then(animes => { // 0 is the first page (offset)
  console.log(animes)
});

// Other function are not working with this api.
```

With Kitsu for manga:

```js
const { Manga } = require("aniki");

const manga = new Manga("kitsu", false); // Set the api to kitsu (Only Kitsu.io api are used.) and set the dev mode to false.

// Find anime.
manga.search("name", 0).then(results => { // The
    console.log(results.data[0].attributes);// The 0 is the first result, "data" and "attributes" are required to get manga data (titles, synopsis...).
});

// Get a list.
manga.list(0).then(mangas => {
    console.log(mangas);
});
```
# Important

If you use all function at one time, use asynchronous function:

```js
// For Kitsu.io
async function yourFunc() {
  await anime.search("name", 0).then(results => {
	  console.log(results.data[0].attributes);
  });
 
  await anime.list(0).then(animes => {
	  console.log(animes.data[0].attributes);
  });

  await manga.search("name", 0).then(results => {
    console.log(results.data[0].attributes);
  });
  // ...
}
yourFunc()
```

# Konet Response
|Attributes|Description|Type|
|---|---|---|
|`titles`|All types of titles|Object|
|`titles` > `main`|The main title|String|
|`titles` > `url`|Title used for urls (https://example.com/showbyrock1)|String|
|`titles` > `fr`|The french version|String|
|`titles` > `en`|The english version|String|
|`titles` > `jp`|The japanese (character) version|String|
|`synopsis`|The synopsis (The description)|String|
|`images`|Images correspondent with the anime|Object|
|`images` > `main`|The main image|String|
|`images` > `cover`|The second image|String|
|`status`|The status of the anime|String|
|`dates`|The release and end date|Object|
|`dates` > `start`|The start date|String|
|`dates` > `end`|The end date|String|
|`keywords`|Keywords|Array|
|`studios`|The studios that created the anime|Object|
|`studios` > `threeD`|The 3D animation studio|String|
|`studios` > `twoD`|The 2D animation studio|String|
|`genre`|The gender of the anime|Array|
|`theme`|The theme of the anime|Array|

# Konet JSON response

```json
{
    "titles": {
        "main": "",
        "url": "",
        "fr": "",
        "en": "",
        "jp": ""
    },
    "synopsis": "",
    "images": {
        "main": "https://",
        "cover": "https://"
    },
    "status": "",
    "dates": {
        "start": "00-00-0000",
        "end": "00-00-0000"
    },
    "studios": {
        "twoD": "",
        "threeD": ""
    },
    "keywords": ["", ""],
    "genre":["", ""],
    "theme": ["", ""]
  }
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
                "userCount": 7772,
                "favoritesCount": 44,
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
}```
