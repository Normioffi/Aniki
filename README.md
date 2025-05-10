<div align="center">
<h1>Aniki</h1>
Aniki is an easy-to-use NPM module that gets information about your favorite anime and manga.

See [CHANGELOG](/CHANGELOG.md) for new content in each updates.

<div class="tags">
<img src="https://img.shields.io/npm/v/aniki" alt="NPM Version"/></div>
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

Kitsu.app: English API to get anime or manga informations.
In the next beta, MyAnimeList will be supported, only read-only informations will be returned, you will need your API Client ID.

# Usage

With Kitsu:

```javascript
const { AnimeKitsu } = require("aniki");
// ESM/TS
import { AnimeKitsu } from "aniki";

const anime = new AnimeKitsu();

// Find anime in a simple way:
anime
  .find({ query: "Oshi no ko", offset: 0 })
  .then((r) => console.log(r.data[0]));

// All list from the first page (limited by 10 result, max is 20)
anime.list({ offset: 0, perPage: 10 }).then((results) => {
  console.log(results.data);
});

// Find anime with ID
anime.findById(2303).then((result) => {
  console.log(result.data);
});

// Find an episode
anime.episode(2303).then((result) => {
  console.log(result.data);
});

// Using the new way to handle errors
anime
  .find({ query: "Oshi no ko" }, async ({ apiError, moduleError }, status) => {
    if (apiError) console.error(await apiError);
    if (moduleError) console.error(await moduleError);
  })
  .then((r) => console.log(r));
```

Also, some parameters supports Enums!

```javascript
const { AnimeKitsu } = require("aniki");

const anime = new AnimeKitsu();

// finding a specific category with the EKitsuAnimeCategories enum.

anime
  .list({ categories: EKitsuAnimeCategories.ACTION })
  .then((r) => console.log(r.data));
```

# Available parameters

See [interfaces](https://github.com/Normioffi/Aniki/tree/normal/src/kitsu/interfaces) (.../params.ts) for Kitsu.
