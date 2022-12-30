import type { PieceDescriptionType, PieceNameType } from "@/types/PieceType"

import Piece from "../Piece"
import rookMove from "../Move/RookMove.ts"
import { PIECE_ROOK } from "@/types/constants"

class Rook extends Piece {
	readonly name: PieceNameType = PIECE_ROOK

	constructor (pieceDescription: PieceDescriptionType) {
		super(pieceDescription)

		this.moves = [rookMove]
	}
}

export default Rook
