# Piece object class
`Piece()` is a super class that gets extended by a `PieceType` class. It holds properties and methods that all pieces should have.
## Constructor (`new Piece(<PieceNameType> | <PieceDescriptionType>)`)
To instantiate a `Piece()`, we need to provide either a `<PieceName>` or a `<PieceDescription>`
### Example with piece name
```
const knight = new Piece('KNIGHT')
```
### Example with piece description
```
import { knightMove } from "@modules/Piece/Moves/knightMove"
import { rookMove } from "@modules/Piece/Moves/rookMove"

const chancellor = new Piece({
  lives: 1,
  moves: [knightMove, rookMove]
})
```
## Status
Status are functions that change the default properties of a `Piece()` for a certain amount of time / moves (this includes indefinitely).
### Items
Class that has the description as a function that tells how to affect a piece.
### Buffs / debuffs
List of functions that describe how a piece properties and methods are affected
## Types
### Buff type (same for debuffs)
```
interface BuffType {
  isBuff: boolean
  name?: BuffDebuffNameType
}
```
### Item type

### Piece description type
```
interface PieceDescription {
  lives: number
  moves: (GetMovesType | string)[]
  inventory?: ItemsType[]
  buffs?: BuffType[]
}
```
## Properties
The properties of a `Piece()` are the same as the attributes from a `PieceDescription`
### Lives (`<number? = 1>Piece.remainingLives`)
Number with the total remaining lives of a piece
### Buffs (`<BuffType[]? = []>Piece.buffs`)
List with all buffs affecting a piece
### Debuffs (`<BuffType[]? = []>Piece.debuffs`)
List with all debuffs affecting a piece
### Inventory (`<ItemType[]? = []>Piece.inventory`)
List with all the items a piece is holding
## Methods
### Set lives (`Piece.setLives(<number>) => void`)
Sets total lives of a piece given an integer
### Get lives (`Piece.getLives() => number`)
Gets total lives of a piece
### Set buffs (`Piece.setBuffs(<BuffType[]>) => void`)
Sets a list of buffs to a piece
### Get buffs (`Piece.getBuffs() => BuffType[]`)
Gets a list of buffs from a piece
### Set inventory (`Piece.setInventory(<ItemType[]>) => void`)
Sets a list of items to a piece's inventory
### Get inventory (`Piece.getInventory() => ItemType[]`)
Gets a list of items held by the piece
### Kill (`Piece.kill() => void`)
Sets the lives of a piece to 0
### Revive (`Piece.revive(<number? = 1>) => void`)
Sets the lives of a piece to a given parameter (defaults as 1)
### Piece is alive (`Piece.isAlive() => boolean`)
Returns false if the piece has 0 lives left (true if opposite)