![Aniki Logo](https://ik.imagekit.io/TheNormidb/Aniki.png)

Aniki is a module using APIs to obtain information about an anime or manga.


# Installation
With NPM:
```npm
npm i aniki
```

# Api used
Konet Anime DB: French api (this one are incompleted, use other api instead.)

Kitsu.io

# Helping
Do you have an anime/manga api to suggest? Make a pull request!

Are you french? Join the [Konet](https://twitter.com/KonetOrigin) community now and help the api grow!

# Usage

With Konet anime db (Anime):

```javascript
const { Aniki } = require("aniki");

const aniki = new Aniki("konet", false); // Set the api to konet and set the parameter for developpement to false. (you can set it true to get console server error.)

// Find one anime.
aniki.anime("name").then(anime => {
  console.log(anime)
});

// All list from the database.
aniki.list().then(animes => {
  console.log(animes)
});

// Find anime.
aniki.search("name").then(results => {
	console.log(results[0]) // The 0 is the first result.
});

// List by gender.
aniki.gender("gender").then(animes => {
	console.log(animes);
});

// List by theme.
aniki.theme("theme").then(animes => {
	console.log(animes);
});
```

With Kitsu:

```javascript
const { Aniki } = require("aniki");

const aniki = new Aniki("kitsu", false); // Set the api to kitsu.io and set the parameter for developpement to false.


// Find anime.
aniki.search("name").then(results => {
	console.log(results.data[0]) // The 0 is the first result, data are required.
});

// All list from the page, 
aniki.list(0).then(animes => { // 0 is the offset (first page)
  console.log(animes)
});

// Other function are not working with this api.
```

With Kitsu for manga:

```js
const { Manga } = require("aniki");

const manga = new Manga("kitsu", false); // Set the api to kitsu (Only Kitsu.io api are used.) and set the dev mode to false.

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
await aniki.search("name").then(results => {
	console.log(results.data[0])
});
 
await aniki.list(0).then(animes => {
	console.log(animes)
});
}
yourFunc()
```

# Konet anime data
|Attributes|Description|Type|
|---|---|---|
|`title`|Normal title|String|
|`title_jp`|Title in japanese character|String|
|`title_en`|Title in english|String|
|`title_fr`|Title in french|String|
|`title_url`|Title used for urls (https://example.com/showbyrock1)|String|
|`synopsis`|The synopsis (The description)|String|
|`image`|Image correspondent with the anime|String|
|`start`|The start date|String|
|`end`|The end date|String|
|`keywords`|Keywords|Array|
|`studio`|The animation studio|String|
|`studio_3d`|The 3D animation studio|String|
|`genre`|The gender of the anime|Array|
|`theme`|The theme of the anime|Array|

# Konet JSON

```json
{
  "title": "",
  "title_jp": "",
  "title_url": "",
  "synopsis": "",
  "image": "https://",
  "start": "00-00-0000",
  "end": "00-00-0000",
  "studio": "",
  "keywords": ["", ""],
  "genre":["", ""],
  "theme": ["", ""]
}
```
# Kitsu anime data
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

# Kitsu JSON format

Example with an anime search

See the [Github](https://github.com/Normioffi/Aniki/blob/main/json-example/kitsu.json) for the example (The data are too long to fit here.)
