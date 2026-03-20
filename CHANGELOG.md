<div align="center">
<h1>Aniki</h1>
<h2>Change Logs</h2>
All updates (mostly patches) from the recent beta update (-beta.<i><b>1</b></i>) can be found in this file.
</div>

## Bugs/Suggestions?

Please let me know if there are any **mistakes**/**bugs** by using the [Issues](https://github.com/Normioffi/Aniki/issues).

If you want to suggest me anything, please also make an issue with the "enhancement" label.

# 2.0.0-beta.1

1. New classes:

- WaifuIm
- WaifuIt
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
