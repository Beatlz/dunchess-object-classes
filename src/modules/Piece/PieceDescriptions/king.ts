import type { PieceNameType } from "@/types/PieceType"

import Piece from "../Piece"
import kingMove from "../Move/KingMove.ts"
import { PIECE_KING } from "@/types/constants"

class King extends Piece {
	readonly name: PieceNameType = PIECE_KING

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [kingMove] })
	}
}

export default King
