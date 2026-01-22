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

<small style="font-size: 12.5px">I'm still wondering why some of you guys are still using the 1.3.5 version....</small>

## New beta soon

I'm actually working on a new **beta** version that may come _in the next few weeks_, _stay tuned!!_

# API used

- Kitsu.app
- MyAnimeList.net (Need a client ID? Check [here](https://myanimelist.net/apiconfig))

## Authentification

If you need to authenticate with the APIs, you have to make **your own** authentification system, and use the basic `fetch` to use the auth, once you have made your system, you can use the `access_token`s in the classes to make unrestricted requests.

Otherwise, for the `MyAnimeList` and `MyMangaList`, you can still use the `client_id` but it is recommended for tests only if requests appears in the client side.

## Bugs/Suggestions?

Please let me know if there are any **mistakes**/**bugs** by using the [Issues](https://github.com/Normioffi/Aniki/issues).

If you want to suggest me anything, please also make an issue with the "enhancement" label.

# Usage

Kitsu:

```js
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
  .find({ query: "Oshi no ko" }, async (apiError, res) => {
    if (apiError) console.error(await apiError);
  })
  .then((r) => console.log(r));
```

With MyAnimeList:

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
  .then((r) => console.log(r.id, r.title, r.created_at, r.updated_at)); // 52991, Sousou no Frieren, Date, Date

anime
  .details(52991, ["alternative_titles", "background"])
  .then((r) => console.log(r.id, r.title, r.mean)); // 52991, Sousou no Frieren, undefined.
```

## Best practices

Avoiding multiple awaits (only in **async**!!)

```js
async function getAnimes(query, offset, limit) {
  const a = anime.find({ query: query });
  const b = anime.list({ offset: offset, limit: limit });

  const [A, B] = await Promise.all([a, b]);
}
```
