# Aniki

Node.js API wrapper for anime/manga related content.

See [CHANGELOG](https://github.com/Normioffi/Aniki/blob/beta/CHANGELOG.md) for new content.

<div class="tags">
  <img alt="NPM Beta Version" src="https://img.shields.io/npm/v/aniki/beta"/>
  <img alt="NPM Last update" src="https://img.shields.io/npm/last-update/aniki/beta"/>
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/aniki">
  <img alt="GIT Last commit" src="https://img.shields.io/github/last-commit/Normioffi/Aniki/beta">
  
</div>

# Table of contents

[Aniki](Aniki)

- [Table of Contents](#table-of-contents)
- [Install](#installation)
- [Beta](#beta)
- [Available APIs](#available-apis)

- [Bugs/suggestions?](#bugs-or-suggestions)
- [Authentification](#authentification)
  - [Usage](#usage)
    - [Kitsu](#kitsu)
    - [MyAnimeList](#myanimelist)
    - [Waifu.Im](#waifu.im)
    - [Danbooru](#danbooru)
  - [License](#license)

# Installation

With NPM:

```npm
npm i aniki@beta
```

With pnpm

```pnpm
pnpm i aniki@beta
```

## Beta

This version is currently being in beta, it may could contain more bugs than the main version. Updates may be more regular too!

# Available APIs

<div align="center">

  <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">

<div style="text-align: center;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/MyAnimeList_Logo.png" width="100" />
  <div><a href="https://myanimelist.net/apiconfig/references/api/v2">MyAnimeList</a></div>
</div>

<div style="text-align: center;">
  <img src="https://avatars.githubusercontent.com/u/7648832?s=280&v=4" width="100" />
  <div><a href="https://kitsu.docs.apiary.io/#">Kitsu.app</a></div>
</div>

<div style="text-align: center;">
  <img src="https://docs.waifu.im/img/favicon.png" width="100" />
  <div><a href="https://docs.waifu.im/">Waifu.Im</a></div>
</div>

<div style="text-align: center;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Danbooru_icon.png" width="100" />
  <div><a href="https://danbooru.donmai.us/wiki_pages/help:api">Danbooru</a></div>
</div>

  </div>

</div>

## Authentification

If you need to authenticate with the APIs, you have to make **your own** authentification system, and use the basic `fetch` to use the auth, once you have made your system, you can use the `access_token`s in the classes to make unrestricted requests.

Otherwise, for the `MyAnimeList` and `MyMangaList`, you can still use the `client_id` but it is recommended for tests only if requests appears in the client side.

## Bugs or suggestions

Please let me know if there are any **mistakes**/**bugs** by using the [Issues](https://github.com/Normioffi/Aniki/issues).

If you want to suggest me anything, please also make an issue with the "enhancement" label.

# Usage

## Kitsu

```js
const { AnimeKitsu } = require("aniki");
// ESM/TS
import { AnimeKitsu } from "aniki";

const anime = new AnimeKitsu();

// With an access_token
// If you have one, you'll be able to use the R18 rating category on the find and list age rating parameter.
// I do not take any responsibility for users who use the unrestricted content.
const anime = new AnimeKitsu("abCdEfgHiJK12345");

// Find anime in a simple way:
anime
  .find({ query: "Oshi no ko", offset: 0 })
  .then((r) => console.log(r.data[0]));

// All list from the first page (limited by 10 result)
anime.findMany({ offset: 0, limit: 10 }).then((results) => {
  console.log(results.data);
});

// Find anime with ID
anime.findUnique(2303).then((result) => {
  console.log(result.data);
});
// Alternative
anime.find(1733).then((result) => {
  console.log(result.data);
});

// Find an episode
anime.episode(2302).then((result) => {
  console.log(result.data);
});

// Using hooks
anime
  .find(
    { query: "Oshi no ko" },
    {
      beforeRequest: async (config) => {
        console.log("Before request with the url: " + config.url);
        // ...
      },
      onError: async (err, res) => {
        if (res.status === 404)
          console.error(`The requested content was not found!
    More details: ${(await err).errors[0].title}`);
        // ...
      },
      afterRequest: async (res) => {
        console.log("Request done!");
        // ...
      },
    },
  )
  .then((r) => console.log(r));
```

## MyAnimeList

```js
const { MyAnimeList } = require("aniki");

// ESM/TS
import { MyAnimeList } from "aniki";

// Using authentification
// Client ID.
const anime = new MyAnimeList({ client_id: "ClIENT_ID" });
// Access token
const anime = new MyAnimeList({ access_token: "ACCESS_TOKEN" });
// Both at the same time will not work.

// Fiding an anime
anime
  .find({ query: "Oshi no ko", offset: 0, limit: 10 })
  .then((r) => console.log(r.data[0])); // Return nodes.

// Getting the details of an anime
anime.details({ anime_id: 363 }).then((r) => console.log(r.id)); // Return anime details.
// Listing animes based on a specific rank
anime
  .ranking({ ranking_type: "tv", offset: 0, limit: 16 })
  .then((r) => console.log(r.data[0])); // Return nodes.

// Listing animes based on a year and a season of publication.
anime
  .seasonal({ year: 2009, season: "fall", offset: 0, limit: 16 })
  .then((r) => console.log(r.data[0])); // Return nodes.

// Almost the same for MyMangaList!
```

I recommend you to make sure to add your fields depending on your needs, if you don't use the proper fields, some properties that return the API and the Promise will be undefined.
Example:

```js
anime
  .details(52991, ["created_at", "updated_at"])
  .then((r) =>
    console.log(r.id, r.title, new Date(r.created_at), new Date(r.updated_at)),
  ); // 52991, Sousou no Frieren, Date, Date

anime
  .details(52991, ["alternative_titles", "background"])
  .then((r) => console.log(r.id, r.title, r.mean)); // 52991, Sousou no Frieren, undefined.
```

## Waifu.Im

```javascript
const { WaifuIm } = require("aniki");

const waifu = new WaifuIm();

waifu
  .find({ isNsfw: "False", IncludedTags: "maid" })
  .then((r) => console.log(r));
```

## Danbooru

```javascript
const { Danbooru } = require("aniki");
```

## Best practices

Avoiding multiple awaits (only in **async**!!)

```js
async function getAnimes(query, offset, limit) {
  const a = anime.find({ query: query });
  const b = anime.findMany({ offset: offset, limit: limit });

  const [A, B] = await Promise.all([a, b]);
}
```

# License

[MIT License](https://github.com/Normioffi/Aniki/blob/beta/LICENSE) - Normioffi
