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
### LayoutType
A `Map Object` containing the square values (`<SquareType>`)

`LayoutType<CoordsType, DungeonSquareType>`
## Instantiation
Needs one parameter. It can be an already set layout or an integer. If an integer N is passed, it will initialize an empty layout of N x N.
```
import Dungeon from "@/modules/Dungeon/Dungeon"

const dungeon = new Dungeon(<DungeonLayoutType> | <number>)
```
## Properties
### Layout (`Dungeon.layout | <DungeonLayoutType>`)
Stores the location and color of each square.
## Methods
### Create layout (`Dungeon.createLayout(<number>) => DungeonLayoutType`)
Creates an empty layout for a dungeon given a size number
### Get layout size (`Dungeon.getLayoutSize(<'2D'?>) => number | string`)
Returns the total tiles of the dungeon. If a `<'2D?>` argument is passed down as a parameter as `2D`, it returns a string with the 2d description of the layout. For example, if the Dungeon Layout has 64 squares, `Dungeon.getLayoutSize('2D')` would return `8 x 8`. Accepted params: `'2D'`.
### Layout setter (`Dugeon.setLayout(<DungeonLayoutType> | number) => void | error`)
Sets a layout for the dungeon given a valid Dungeon Layout or size (1D).
### Layout getter (`Dungeon.getLayout() => DungeonLayoutType`)
Returns the layout of the dungeon
### Square setter (`Dungeon.setSquare(<DungeonSquareType>) => void | error`)
Sets a specific square for the dungeon. Returns an error if the type is incorrect or the square coords `{ x: number, y: number }` are out of range.
### Square getter (`Dungeon.getSquare(<CoordsType>) => <DungeonSquareType> | error`)
Returns the state of the square in a set of given coords or returns an error if the coords are out of range.
### Square activation/deactivation (`Dungeon.activateSquare(<CoordsType>) => void | error`)
Sets a square's `isActive` property as `true | false`. To set as inactive, we use `Dungeon.deactivateSquare(<CoordsType>)`
### Activate/deactivate all squares (`Dungeon.activateAllSquares()` | `Dungeon.deactivateAllSquares()`)
Sets all squares as active/inactive
## Toggle square (`Dungeon.toggleSquare(<CoordsType>) => void`)
Toggles a square from active => inactive (or viceversa)
## Toggle all squares (`Dungeon.toggleAllSquares() => void`)
Toggles all squares `isActive` state.

Throws an error if the square coords are out of range.
