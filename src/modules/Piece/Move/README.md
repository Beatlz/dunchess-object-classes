# MOVE folder
Moves folder contains two things:
- Move.ts (a class that creates new moves)
- Moves folder (a folder with a list of preset moves)

## Move function
This is a function of type `GetMovesType` that returns an array of possible square positions (`coords <CoordsType[]>`) given a starting square's coord. It's also possible to pass the name of a move or the name of a piece. We can dinamically create a new moves type with the Move class.

## Examples

### The chancellor

In chess, a chancellor is a special piece (not part of the standard rules) that can move like a knight and a rook. In this example we will create this new possible move by combining two existing ones

```
import { knightMove } from "@modules/Piece/Moves/knightMove"
import { rookMove } from "@modules/Piece/Moves/rookMove"
import Move from "@modules/Piece/Moves/Move"

const chancellorMove = new Move([knightMove, rookMove])
const possibleSquares = chancellorMove.getPossibleSquares(<CoordsType>) // Pass the initial square coords
```

Instantiating a new Move:
`new Move(baseMoves?: GetMovesType[])`

The move method type:
`Move.getPossibleSquares(<CoordsType>initialSquare): <CoordsType[]>`
