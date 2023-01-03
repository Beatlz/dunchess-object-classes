# MOVE folder
Move folder contains two things:
- Move.ts (a class that creates new moves)
- Moves folder (a folder with a list of preset moves)

## Move function
This is a function of type `GetMovesType` that returns an array of possible square positions (`coords <CoordsType[]>`) given a starting square's coord. It's also possible to pass the name of a move or the name of a piece. We can dinamically create a new moves type with the Move class.

## Examples

### The chancellor

In chess, a chancellor is a special piece (not part of the standard rules) that can move like a knight and a rook. In this example we will create this new possible move by combining two existing ones. This means you can take two piece functions and merge them into one.
```
import { LIGHT_COLOR } from "@/types/constants"
import knightMove from "./KnightMove"
import rookMove from "./RookMove"

const chancellorMove: GetMoveType = (initialSquare: CoordsType, layoutSize: number): CoordsType[] => {
  return [...knightMove(initialSquare, layoutSize), ...rookMove(initialSquare, layoutSize)]
}

export default chancellorMove
```
We can now use this new move to declare a `new Piece()` object.
```
const chancellor = new Piece({
  name: 'Chancellor',
  moves: [chancellorMove],
  color: LIGHT_COLOR
})
```
If we only want a temporary piece and not a preset that would be reused, you can skip the first part and just combine the moves in the new piece instantiation:
```
const chancellor = new Piece({
  name: 'Chancellor',
  moves: [knightMove, bishopMove],
  color: LIGHT_COLOR
})
```


