import type { PieceNameType } from "@/types/PieceType"

import Piece from "../Piece"
import queenMove from "../Move/QueenMove.ts"
import { PIECE_QUEEN } from "@/types/constants"

class Queen extends Piece {
	readonly name: PieceNameType = PIECE_QUEEN

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [queenMove] })
	}
}

export default Queen
