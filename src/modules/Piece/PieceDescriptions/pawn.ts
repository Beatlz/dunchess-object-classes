import type { PieceDescriptionType, PieceNameType } from "@/types/PieceType"

import Piece from "../Piece"
import pawnMove from "../Move/PawnMove.ts"
import { pieceNames } from "@/types/PieceType"

class Pawn extends Piece {
	readonly name: PieceNameType = pieceNames.PAWN

	constructor (pieceDescription: PieceDescriptionType) {
		super(pieceDescription)

		this.moves = [pawnMove]
	}
}

export default Pawn
