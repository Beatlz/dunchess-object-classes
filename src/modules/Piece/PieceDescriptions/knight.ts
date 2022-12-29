import type { PieceDescriptionType, PieceNameType } from "@/types/PieceType"

import Piece from "../Piece"
import knightMove from "../Move/KnightMove.ts"
import { pieceNames } from "@/types/PieceType"

class Knight extends Piece {
	readonly name: PieceNameType = pieceNames.KNIGHT

	constructor (pieceDescription: PieceDescriptionType) {
		super(pieceDescription)

		this.moves = [knightMove]
	}
}

export default Knight
