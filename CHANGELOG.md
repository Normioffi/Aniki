<div align="center">
<h1>Aniki</h1>
<h2>Change Logs</h2>
All updates (mostly patches) from the recent minor update (0.<i><b>1</b></i>.0) can be found in this file.
</div>

## Bugs/Suggestions?

Please let me know if there are any **mistakes**/**bugs** by using the [Issues](https://github.com/Normioffi/Aniki/issues).

If you want to suggest me anything, please also make an issue with the "enhancement" label.

# 1.4.6

1. Adding a missing interface export.

# 1.4.4

1. Fixing missing Kitsu interfaces and types that are not being exported.
2. Fixing `isSameArray` TypeErrors messages.
3. Code readability improvements.
4. New Integer `TypeError`s in some properties that does use numbers.

# 1.4.3

1. Adding the `MyMangaList` class.
2. New methods on `MyAnimeList` and `MyMangaList`.
   - `ranking(params, handleError)`
   - `seasonal(params, handleError)` (only in MyAnimeList)
3. `MyAnimeList` and `MyMangaList` now support the `access_token` parameter, you must use either `access_token` or `client_id` (API KEY) to use it, both in the same time will not work.
4. All methods with a `fields` parameter will now return an adapted response depending on your choice.

```javascript
anime
  .details({ anime_id: 3022, fields: ["background"] })
  .then((r) => console.log(r.id, r.title, r.background, r.source)); // 3022, (insert_title), (insert_something), undefined

anime
  .details({ anime_id: 3022, fields: ["background", "source"] })
  .then((r) => console.log(r.id, r.title, r.background, r.source)); // 3022, (insert_title), (insert_something), manga
```

5. Fixing missing **:** in a TypeError and adding new `ReferenceError`s in the `isSameArray()` function.
6. Improvements on some types, interfaces, properties, methods and classes descriptions.
7. The `handleError` function now return the error using `res.json()` and the fetch basic `Response` interface.

```javascript
anime.find({ query: "Oshi no ko", offset: 0, limit: 2 }, async (error, res) => {
  if (res.status !== 200) throw new Error(await error);
  // ...
});
```

8. Improvements on some errors message.
9. Fixing a missing this.#headers in `AnimeKitsu` and `MangaKitsu`.
10. The `details` method parameters are inside of an object: `details({ anime_id: 2929, fields: ["..."] }, handleError)` instead of two separated parameters.
11. New types and interfaces.

<small>Some new interfaces and types may not have a description... Only because i don't know what to say. Please help.</small>

# 1.4.2

1. Fixing array type check.

# 1.4.0

1. Removed the use of the TS compiler.
2. Fixing package.json `exports`.
3. Types are now in `./types/`
4. New `MyAnimeList` class, requiring a **CLIENT_ID** parameter, you can find one [**here**](https://myanimelist.net/apiconfig)
5. New `.find()` overloads methods for `AnimeKitsu` and `MangaKitsu`.
6. You can now use **access token** in `AnimeKitsu` and `MangaKitsu` constructors.
7. `perPage` parameter is now `limit`.
8. All parameters that can receive a single `string, number` or an array are now only array.

```javascript
// Before
anime.list({ categories: "isekai" }); // or categories: ["isekai"]
// After
anime.list({ categories: ["isekai"] }); // Only categories: [...] is allowed.
```

9. New `isSameArray()` function
   It can be useful if you need to check if the values in an array are compatible with the valid one.

```javascript
const { isSameArray } = require("aniki");

let array1 = ["a", "b", "c"];
let array2 = ["x", "y", "z"];

isSameArray(array1, array2); // return false, because they are not the same.

isSameArray(array2, array2); // return true, because they are the same.

function getArray(array) {
  const validArray = ["blabla", "bleble"];
  if (!isSameArray(array, validArray)) throw new TypeError("Invalid value(s)!");

  return array;

  // ...
}
// ...
```

10. Error messages improvements.
11. New usable constants. (Replacing enums.)
12. Types descriptions improvements.
13. New internal type verification, for string, numbers and array (using the new `isSameArray()` function.)
14. Removed `@property` for all properties.
15. All returned promises are now **Readonly**.
16. Multiple little bug fixes.
17. Fixed school life category.
18. New interfaces.
19. Fixed most of the duplicated properties and types.
20. `@example` improvements.
