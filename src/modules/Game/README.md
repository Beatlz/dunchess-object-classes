# Game class
It holds the state of a dunchess session. It contains the usage of all the other main classes in project:
- `Rules()`
- `Piece()`
- `Player()`
- `Dungeon()`
## Constructor
To instantiate a `new Game(<RulesType>rules)` object, we must provide dunchess of a game mode, which is described by the rules. 
```
import standardChess from `./Rules/Presets/standardChass`

const dunchess = new Game(standardChess)
```

This means that a `Game()` object holds:
## Types
### Rules:
`<RulesType>Game.rules()`
### Players:
`<PlayerType[]>Game.players()`
### Pieces:
`<PieceType[]>Game.pieces()`
### Dungeons:
`<DungeonType[]>Game.dungeons()`
## Properties
```
#rules: RulesType
#pieces: PieceType[] = []
#dungeons: DungeonType[] = []
#initialState: GameStateType = {}
#currentState: GameStateType = {}
#stateChanges: GameActionType[] = []
```
### Rules
### Initial state
### Current state
## Methods