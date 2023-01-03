import type { PieceNameType, PiecePresetDescriptionType } from "@/types/PieceType"

import Piece from "../Piece"
import kingMove from "../Move/MoveFunctions/KingMove"
import { PIECE_KING } from "@/types/constants"

class King extends Piece {
	readonly name: PieceNameType = PIECE_KING

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [kingMove] })
	}
}

export default King
