import type { PieceDescriptionType, PieceNameType } from "@/types/PieceType"

import Piece from "../Piece"
import bishopMove from "../Move/BishopMove.ts"
import { pieceNames } from "@/types/PieceType"

class Bishop extends Piece {
	readonly name: PieceNameType = pieceNames.BISHOP

	constructor (pieceDescription: PieceDescriptionType) {
		super(pieceDescription)

		this.moves = [bishopMove]
	}
}

export default Bishop
