import type { PieceDescriptionType, PieceNameType } from "@/types/PieceType"

import Piece from "../Piece"
import rookMove from "../Move/RookMove.ts"
import { pieceNames } from "@/types/PieceType"

class Rook extends Piece {
	readonly name: PieceNameType = pieceNames.ROOK

	constructor (pieceDescription: PieceDescriptionType) {
		super(pieceDescription)

		this.moves = [rookMove]
	}
}

export default Rook
