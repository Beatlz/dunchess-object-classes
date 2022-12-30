import type { PieceDescriptionType, PieceNameType } from "@/types/PieceType"

import Piece from "../Piece"
import knightMove from "../Move/KnightMove.ts"
import { PIECE_KNIGHT } from "@/types/constants"

class Knight extends Piece {
	readonly name: PieceNameType = PIECE_KNIGHT

	constructor (pieceDescription: PieceDescriptionType) {
		super(pieceDescription)

		this.moves = [knightMove]
	}
}

export default Knight
