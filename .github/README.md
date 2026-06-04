# Aniki

Node.js APIs wrapper for anime/manga related content.

<div>
  <div class="tags">
    <img alt="NPM Main Version" src="https://img.shields.io/npm/v/aniki"/>
    <img alt="NPM Last update" src="https://img.shields.io/npm/last-update/aniki"/>
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/aniki">
    <img alt="GIT Last commit" src="https://img.shields.io/github/last-commit/Normioffi/Aniki">
  </div>
  <h3>Last beta version and commit:</h3>
  <div class="tags">
    <img alt="NPM Beta Version" src="https://img.shields.io/npm/v/aniki/beta"/>
    <img alt="NPM Last update" src="https://img.shields.io/npm/last-update/aniki/beta"/>
    <img alt="GIT Last commit" src="https://img.shields.io/github/last-commit/Normioffi/Aniki/beta">

  </div>
</div>

See [CHANGELOG](https://github.com/Normioffi/Aniki/blob/CHANGELOG.md) for recent changes.

# Table of contents

[Aniki](Aniki)

- [Table of Contents](#table-of-contents)
- [Install](#installation)
- [Available APIs](#available-apis)
- [Bugs/suggestions?](#bugs-or-suggestions)
- [Authentification](#authentification)
- [Usage](#usage)
  - [Kitsu](#kitsu)
  - [MyAnimeList](#myanimelist)
  - [Waifu.Im](#waifu.im)
- [License](#license)

# Installation

With NPM:

```npm
npm i aniki@latest
```

With PNPM:

```pnpm
pnpm i aniki@latest
```

# Available APIs

<p align="center">
  <table>
    <tr>
    <td align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/MyAnimeList_Logo.png" width="100" />
  <div><a href="https://myanimelist.net/apiconfig/references/api/v2">MyAnimeList</a></div></td>
      <td align="center">
        <img src="https://avatars.githubusercontent.com/u/7648832?s=280&v=4" width="100" />
  <div><a href="https://kitsu.docs.apiary.io/#">Kitsu.app</a></div>
      </td>
      <td align="center">
        <img src="https://docs.waifu.im/img/favicon.png" width="100" />
  <div><a href="https://docs.waifu.im/">Waifu.Im</a></div>
      </td>
    </tr>
  </table>
</p>

## Bugs or suggestions

Please let me know if there are any mistakes / bugs by using the [Issues](https://github.com/Normioffi/Aniki/issues).

If you want to suggest me anything, please also make an issue with the enhancement label.

## Authentification

> [!IMPORTANT]
> If you need to authenticate with the APIs, you have to make **your own** authentification system, and use the basic `fetch` to use the auth, once you have made your system, you can use the `access_token`s in the classes to make unrestricted requests.

Otherwise, for the `MyAnimeList` and `MyMangaList`, you can still use the `client_id` but it is recommended for tests only if requests appears in the client side.

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

> [!WARNING]
> Using an `access_token` in the `AnimeKitsu`/`MangaKitsu` classes will unlock R18 (rule 18) features **_IN_** _the API_. <br>
> THIS MODULE CAN RETRIEVE R18 CONTENT FROM THE **_API_**, MISUSE OF THOSE FEATURES IS AT YOUR OWN RISK. <br>
> **I DO NOT TAKE ANY RESPONSABILITY**.

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

> [!NOTE]
> I recommend to add any fields depending on your needs, if you don't specify the proper fields, some properties returned by the API will be undefined.

Example:

```js
// Proper fields
anime
  .details(52991, ["created_at", "updated_at"])
  .then((r) =>
    console.log(r.id, r.title, new Date(r.created_at), new Date(r.updated_at)),
  ); // 52991, Sousou no Frieren, Date, Date

// Unproper fields
anime
  .details(52991, ["alternative_titles", "background"])
  .then((r) => console.log(r.id, r.title, r.mean)); // 52991, Sousou no Frieren, undefined.
```

## Waifu.Im

```javascript
const { WaifuIm } = require("aniki");

const waifu = new WaifuIm();

// Getting simple SFW maid images.
waifu
  .find({ isNsfw: "False", IncludedTags: "maid" })
  .then((r) => console.log(r));
```

> [!NOTE]
> The `isNsfw` parameter is `"False"` by default.

# License

[MIT License](https://github.com/Normioffi/Aniki/blob/LICENSE) - Normioffi
