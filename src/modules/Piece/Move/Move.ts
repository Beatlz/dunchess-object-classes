import { CoordsType } from "@/types/CoordsType"
import { GetMovesType, MovesType } from "@/types/MovesType"

class Move {
	moves: GetMovesType[]
  
	constructor(moves: GetMovesType[]) {
		this.moves = moves
	}

	getPossibleSquares(initialSquare: CoordsType): MovesType {
		return this.moves.map((move) => {
			return move(initialSquare)
		}).flat()
	}
}

export default Move
