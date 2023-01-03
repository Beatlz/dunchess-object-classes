import type { PieceNameType, PiecePresetDescriptionType } from "@/types/PieceType"

import Piece from "../Piece"
import queenMove from "../Moves/QueenMove"
import { PIECE_QUEEN } from "@/types/constants"

class Queen extends Piece {
	readonly name: PieceNameType = PIECE_QUEEN

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [queenMove] })
	}
}

export default Queen
