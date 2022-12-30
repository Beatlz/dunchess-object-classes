import type { PieceDescriptionType, PieceNameType } from "@/types/PieceType"

import Piece from "../Piece"
import kingMove from "../Move/KingMove.ts"
import { PIECE_KING } from "@/types/constants"

class King extends Piece {
	readonly name: PieceNameType = PIECE_KING

	constructor (pieceDescription: PieceDescriptionType) {
		super(pieceDescription)

		this.moves = [kingMove]
	}
}

export default King
