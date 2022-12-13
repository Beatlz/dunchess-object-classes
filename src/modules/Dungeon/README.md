# The `Dungeon()` class
Allows us to add a new dungeon to our Dunchess game.
## Types
### Coords
Coordinates for the dungeon layout
`interface coords { x: number, y: number }`
### TileType
```
enum featuresList {
  TELEPORT,
  FREEZE,
  LADDER,
  SPAWNER,
  ARMOR,
  ADD_MOVE
}

type FeatureNameType = keyof typeof featuresList
```
### DungeonSquareType
Square underlying properties (before they hold any entities). Used to instantiate the layout.
```
interface DungeonSquareType {
  x: number,
  y: number,
  color: 'LIGHT' | 'DARK',
  isActive: boolean,
  tile?: TileType
}
```
### DungeonLayoutType
A list (array) of dungeon squares
`type DungeonLayoutType = DungeonSquareType[]`
## Instantiation
Needs one parameter. It can be an already set layout or an integer. If an integer N is passed, it will initialize an empty layout of N x N.
```
import Dungeon from "@/modules/Dungeon/Dungeon"

const dungeon = new Dungeon(<DungeonLayoutType> | <number>)
```
## Properties
### Size (`Dungeon.size | <number>`)
Stores the linear dimension of the dungeons (all dungeons are N x N).
### Layout (`Dungeon.layout | <DungeonLayoutType>`)
Stores the location and color of each square.
## Methods
### Create layout (`Dungeon.createLayout(<number>) => DungeonLayoutType`)
Creates an empty layout for a dungeon given a size number
### Size getter (`Dungeon.getSize() => number`)
Returns the size of the Dungeon side
### Layout setter (`Dugeon.setLayout(<DungeonLayoutType>) => void | error`)
Sets a layout for the dungeon.
### Layout getter (`Dungeon.getLayout() => DungeonLayoutType`)
Returns the layout of the dungeon
### Square setter (`Dungeon.setSquare(<DungeonSquareType>) => void | error`)
Sets a specific square for the dungeon. Returns an error if the type is incorrect or the square coords `{ x: number, y: number }` are out of range.
### Square getter (`Dungeon.getSquare(<CoordsType>) => <DungeonSquareType> | error`)
Returns the state of the square in a set of given coords or returns an error if the coords are out of range.
### Tile setter (`Dungeon.setTile(<CoordsType>, <TileType?>) => void | error`)
Sets a tile in a square given the coords. If no second argument is given, it'll simply instantiate an empty `Tile()`.

Throws an `error` if the coords are out of range.
### Square activation (`Dungeon.activateSquare(<CoordsType>, <TileType?>) => void | error`)
Sets a square's `isActive` property as `true`. If a second argument `<TileType>tile` is passed, it will run `Dungeon.setTile(<CoordsType>)` with that parameter. 

Throws an error if the square coords are out of range.
