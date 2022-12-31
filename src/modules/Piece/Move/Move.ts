import CoordsType from "@/types/CoordsType"
import { GetMovesType, MoveType } from "@/types/PieceType"

class Move {
	moves: GetMovesType[]
  
	constructor(moves: GetMovesType[]) {
		this.moves = moves
	}

	getPossibleSquares(initialSquare: CoordsType, layoutSize: number): MoveType {
		return this.moves.map((move) => {
			return move(initialSquare, layoutSize)
		}).flat()
	}
}

export default Move
