import type { PieceNameType, PiecePresetDescriptionType } from "@/types/PieceType"

import Piece from "../Piece"
import knightMove from "../Move/MoveFunctions/KnightMove"
import { PIECE_KNIGHT } from "@/types/constants"

class Knight extends Piece {
	readonly name: PieceNameType = PIECE_KNIGHT

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [knightMove] })
	}
}

export default Knight
