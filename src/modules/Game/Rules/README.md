# Rules object/dictionary
`Rules()` is a class object that's constructed from the rules `CONSTANTS` file. It defines the way the API is to be used to instantiate a new `Game()`. There are several things that we can modify in a game, as well as a set of fundamentals that Dunchess has. The modifiables are:

1. Dungeon layout
2. Tiles/squares (spawners, frozen squares, etc.)
3. Initial pieces
4. Pieces' movement
5. Power ups
6. Turns (movements per piece, movements per player, etc.)
7. End of game rules
8. Fog of war

So, basically, what `Rules.setRules(<RulesType>rules)` does is modify all the defaults from the list.

## Modify some rules of an existing preset
We can also use a preset but change some of the rules within it (the order of the destructuring matters):

`Rules.setRules({ ...rulesPreset, ...customRules })`

## Modify one or more rules of an existing preset
We can modify just some rules of an existing preset too.

### Example: change the max number of players
```
import { setRule } from "@/types/RulesType"
import { somePresetRules } from "@modules/Game/Rules/Presets"
import Rules from "@modules/Game/Rules/Rules"

const rules = new Rules(somePresetRules)

rules.setRules({ ...somePresetRules, players: setRule(4, true) })
```
You can skip the second step where you set rules and instantiate like that from the beginning
`const rules = new Rules({ ...somePresetRules, players: setRule(4, true) })`
Or ...
`Rules.setRules({ ...somePresetRules, players: { value: 4, modifiable: true } })`


Since the rule `Rules.rules.players` is defined in the `RulesTypes` as `players: ReturnType<typeof setRule<PlayerType[]>>`, the program understands that 
## The `RuleType` interface
This type refers to a single rule, not to be confused with `RulesType`, which is basically the parent of `RuleType`. This interface contains two properties: `ReturnType<typeof setRule<number>>value` and `<boolean>modifiable`

### How to set the type of `value` for a rule? Example: players rule
In `@/types/RulesType.ts`, first import the type of the rule you need (in case it's a custom type/interface)
```
import PlayerType from "./PlayerType"

interface RulesType {
  ...
  players: ReturnType<typeof setRule<PlayerType[]>>
  ...
}

// (property) RulesType.players: {
//     value: PlayerType[];
//     modifiable: boolean;
// }
```
The `modifiable` property is taken care of by `function setRule()`. The `value` property type has to be passed down as a type argument for this function.
