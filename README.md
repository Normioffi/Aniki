<div align="center">
  <h1>Aniki</h1>
  <p style="font-size: 15px">Aniki is an easy-to-use NPM module that gets information about your favorite anime and manga.</p>

See [CHANGELOG](https://github.com/Normioffi/Aniki/blob/normal/CHANGELOG.md) for new content.

  <div class="tags">
    <img alt="NPM Main Version" src="https://img.shields.io/npm/v/aniki"/>
    <img alt="NPM Last update" src="https://img.shields.io/npm/last-update/aniki"/>
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/aniki">
    <img alt="GIT Last commit" src="https://img.shields.io/github/last-commit/Normioffi/Aniki">
  </div>
</div>

# Installation

With NPM:

```npm
npm i aniki@latest
```

With pnpm

```pnpm
pnpm i aniki@latest
```

# API used

- Kitsu.app
- MyAnimeList.net (Need a client ID? Check [here](https://myanimelist.net/apiconfig))

## Authentification

If you need to authenticate with the APIs, you have to make **your own** authentification system, and use the basic `fetch` to use the auth, once you have made your system, you can use the `access_token`s in the classes to make unrestricted requests.

Otherwise, for the `MyAnimeList` and `MyMangaList`, you can still use the `client_id` but it is recommended for tests only if requests appears in the client side.

# Usage

Kitsu:

```javascript
const { AnimeKitsu } = require("aniki");
// ESM/TS
import { AnimeKitsu } from "aniki";

const anime = new AnimeKitsu();

// With an accessToken
// If you have one, you'll be able to use the R18 rating category on the find and list age rating parameter.
// I do not take any responsibility for users who use the unrestricted content.
const anime = new AnimeKitsu("abCdEfgHiJK12345");

// Find anime in a simple way:
anime
  .find({ query: "Oshi no ko", offset: 0 })
  .then((r) => console.log(r.data[0]));

// All list from the first page (limited by 10 result)
anime.list({ offset: 0, limit: 10 }).then((results) => {
  console.log(results.data);
});

// Find anime with ID
anime.findById(2303).then((result) => {
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

// Handling API errors
anime
  .find({ query: "Oshi no ko" }, async (apiError, status) => {
    if (apiError) console.error(await apiError);
  })
  .then((r) => console.log(r));
```

With MyAnimeList:

```javascript
const { MyAnimeList } = require("aniki");

// ESM/TS
import { MyAnimeList } from "aniki";

const anime = new MyAnimeList("ClIENT_ID");
// Or
const anime = new MyAnimeList("ACCESS_TOKEN");
// Both at the same time will not work.

// Fiding an anime
anime
  .find({ query: "Oshi no ko", offset: 0, limit: 10 })
  .then((r) => console.log(r.data[0])); // Return nodes.

// Getting the details of an anime
anime.details(1200, ["id", "title"]).then((r) => console.log(r.id)); // Return anime details.
```

I recommend you to make sure to add your fields depending on your needs, if you don't use the proper fields, some properties that return the API and the Promise will be undefined.
Example:

```javascript
anime
  .details(52991, ["created_at", "updated_at"])
  .then((r) => console.log(r.id, r.title, r.created_at, r.updated_at)); // 52991, Sousou no Frieren, Date, Date
anime
  .details(52991, ["alternative_titles", "background"])
  .then((r) => console.log(r.id, r.title, r.mean)); // 52991, Sousou no Frieren, undefined.
```

## Best practices

Avoiding multiple awaits (only in **async** `functions`/`methods`!!)

```js
async function getAnimes(query, offset, limit) {
  const a = anime.find({ query: query });
  const b = anime.list({ offset: offset, limit: limit });

  const [A, B] = await Promise.all([a, b]);
}
```
