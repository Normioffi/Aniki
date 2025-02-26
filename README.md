<div align="center">
<h1>Aniki</h1>
Aniki is a NPM module using different website APIs to get anime and manga informations.

See [CHANGELOG](/CHANGELOG.md) for new content.

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

# Usage

With Kitsu:

```javascript
const aniki = require("aniki");
// ESM/TS
import aniki from "aniki";

const anime = new aniki.AnimeKitsu();

// Find anime in a simple way:
anime
  .find({ query: "Oshi no ko", offset: 0 })
  .then((r) => console.log(r.data[0]));

// All list from the first page (limited by 10 result)
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
const aniki = require("aniki");
const { EKitsuAnimeCategories } = require("aniki/kitsu/enums");

const anime = new aniki.AnimeKitsu();

// finding a specific category with the EKitsuAnimeCategories enum.

anime
  .list({ categories: EKitsuAnimeCategories.ACTION })
  .then((r) => console.log(r.data));
```

# Available parameters

Anime/Manga > find:
| Property | Description | Type | Required | Default value |
|:-------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------:|:-------------:|
| query | The query to find an anime. | string | Yes | None |
| offset | The offset pagination to skip pages (default is 0) | number | No | 0 |
| perPage | The number of animes that must be returned by the function (default: 10, max: **30**) | number | No | 10 |
| season | The season of the anime | "winter" \| "spring" \| "summer" \| "fall" \| EKitsuSeasons (Enum) | No | None |
| year | The year of the anime. | `${number}..` \| `${number}..${number}` | No | None |
| streamers | The available streaming platforms. | "Crunchyroll" \| "Hulu" \| "Funanimation" \| "CONtv" \| "Netflix" \| "HIDIVE" \| "TubiTV" \| "Amazon" \| "Youtube" \| "AnimeLab" \| "VRV" (Array too) | No | None |
| ageRating | Age rating of the anime (**G**: _General Audiences_, **PG**: _Parental Guidance Suggested_, **R**: _Restricted_, **R18**: _Restricted for 18 years old or older_.) | "G" \| "R18" \| "PG" \| "R" \| Array<"G" \| "R18" \| "PG" \| "R"> \| EKitsuAgeRating (Enum) | No | None |
| averageRating | The average rating of the anime | `${number}..` \| `${number}..${number}` | No | None |
| categories | The categories of the anime. | "comedy" \| "anti-war" \| "coming-of-age" \| "epidemic" \| "post-apocalypse" \| EKitsuAnimeCategories (Enum) | No | None |
