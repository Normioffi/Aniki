# Aniki BETA versions

## Changes Logs file

All updates from the recent $\color{Aquamarine}{beta}$ update (-beta.$\color{OrangeRed}{1}$) can be found in this file.

> [!NOTE]
> Mostly any changes is being mentionned here. If not, please check the commits.

## Bugs/Suggestions?

Please let me know if there are any $\color{Apricot}{mistakes}$/$\color{Bittersweet}{bugs}$ by using the [Issues](https://github.com/Normioffi/Aniki/issues).

If you want to suggest me anything, please also make an issue with the "$\color{Aquamarine}{enhancement}$" label.

# 2.0.0-beta.2

1. Removing `WaifuIt` content because of its deprecation.
2. `AnikiCore` has been renamed as `fetching` and now redefined as a function.
3. Fixing `isOperatorValid` type verification.
4. New `isOperatorValid` example.
5. Trying to freeze returned values.
6. New README.md style.

# 2.0.0-beta.1

1. New classes:

- WaifuIm
- ~~WaifuIt~~
- AnikiCore (especially used for this module, not really made for you guys)

2. All `handleError`s are being replaced by `hooks`! Which mean you can now do stuff before requests, after and get the error if there is actually one.
   Still optionnal.

```javascript
anime.find(
  { query: "Date a live", offset: 0 },
  {
    beforeRequest: (config) => {
      // ...
    },
    onError: (err, res) => {
      // ...
    },
    afterRequest: (res) => {
      // ...
    },
  },
);
```

3. Fixing some types and interfaces.
4. Moving api folders into the `apis` folder (including in the `types` directory.)
5. All classes are now extending and using the `AnikiCore` class.
6. New constants.
7. Renaming IMALList to TMALList (since it was a type from the beginning.)
8. New namespaces (waifuim and waifuit)
9. Renaming methods (list > findMany ; findById > findUnique
10. New `isOperatorValid` function.
