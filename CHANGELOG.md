<div align="center">
<h1>Aniki</h1>
<h2>Change Logs</h2>
All updates (mostly patches) from the recent minor update (0.**1**.0) can be found in this file.
</div>

## Bugs?

I am sorry for any minor errors I might make in the future.
Please let me know if there are any **mistakes**/**bugs** by using the [Issues](https://github.com/Normioffi/Aniki/issues).

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
