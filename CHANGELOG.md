<div align="center">
<h1>Change Logs</h1>
In this file, you can see everything got changed.
</div>

# 1.3.4

<small>Nooby things come back... AGAIN AND AGAIN, AHH! Just because i forgot to compile i'd just made 3 updates... YES.</small>

1. Fixed offset/perPage isNaN errors!

# 1.3.1

<small>I'm sorry for some easy mistakes that i made.. Btw MyAnimeList support will be available in the 1.4.0@beta.1 version soon!</small>

1. Fixed createdAt and updatedAt types! (`string` to `Date`)
2. Fixed AnimeKitsu#findById(id) description that showed a way to use the method with a string with an number inside (like "456") without the ability to do so, now should work properly with `"${number}"` and `number`.
3. Fixed some import/export classes and interfaces?
4. Modified some interfaces informations
5. Fixed `year` parameters that used normal dates (such as "1907", etc...) instead of `number` | `${number}` | `${number}..` | `${number}..${number}`.
6. Fixed some `number` only types on parameters, now able to use `number` or `"${number}"`. (Checking if value is number isn't required, the method will do so by itself.)
7. Changed `@property` to `@param` for the parameters of methods.
8. Fixed a mistake on the module description (added "[...] also for anime waifus." by error.) <small>(Well it was a future possible API to add for waifus, but due to the type of content... It will not.)</small>)
9. Added better descriptions for some parameters.

# 1.3.0

1. Full support for **CJS**/**ESM** and **TS**.

2. Created new following methods in:

- AnimeKitsu: findById(id), episode(id)
- MangaKitsu: findById(id), chapter(id)

3. Created new interfaces for individuals methods parameters and **Promise** response! (Some properties may not have any description, i'll add them later!).
4. There is a new way to handle errors, from now on, methods will have a new parameter named _handleError_, by using this parameter as a asynchronous function, you can now get errors with the corresponding type! Here is an example:

```js
anime
  .find({ query: "Oshi no ko" }, async ({ apiError, moduleError }, status) => {
    if (apiError) console.error(await apiError);
    if (moduleError) console.error(await moduleError);
  })
  .then((r) => console.log(r));
```

It's not required but useful if you want to handle errors by yourself, if you're not using it at all, it will console unhandled errors.

5. For TS users, i made some enums table for seasons, categories, AgeRating (anime only), subtypes

Example:

```ts
import aniki from "aniki";
import { EKitsuSeason } from "aniki/kitsu/enums";

const anime = new aniki.AnimeKitsu();

anime
  .find({ query: "Oshi no ko", season: EKitsuSeason.Fall }) // EKitsuSeason.Fall = "fall";
  .then((r) => console.log(r.data));
// ...
```

<b>Available enums</b>

- EKitsuAnimeAgeRating,
- EKitsuAnimeCategories,
- EKitsuAnimeStreamers,
- EKitsuAnimeSubTypes,
- EKitsuMangaCategories,
- EKitsuMangaSubTypes,
- EKitsuSeason,
