# Rules object/dictionary
Rules() is a class object that's constructed from the rules `CONSTANTS` file. It defines the way the API is to be used to instantiate a new `Game()`. There are several things that we can modify in a game, as well as a set of fundamentals that Dunchess has. The modifiables are:

1. Dungeon layout
2. Tiles/squares (spawners, frozen squares, etc.)
3. Initial pieces
4. Pieces' movement
5. Power ups
6. Turns (movements per piece, movements per player, etc.)
7. End of game rules
8. Fog of war

So, basically, what `Dunchess.setRules(<RulesType>rules)` does is modify all the defaults from the list.

## Modify some rules of an existing preset
We can also use a preset but change some of the rules within it (the order of the destructuring matters):

`Dunchess.setRules({ ...rulesPreset, ...customRules })`
