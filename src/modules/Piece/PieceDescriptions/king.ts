import type { PieceDescriptionType, PieceNameType } from "@/types/PieceType"

import Piece from "../Piece"
import kingMove from "../Move/KingMove.ts"
import { pieceNames } from "@/types/PieceType"

class King extends Piece {
	readonly name: PieceNameType = pieceNames.KING

	constructor (pieceDescription: PieceDescriptionType) {
		super(pieceDescription)

		this.moves = [kingMove]
	}
}

export default King
