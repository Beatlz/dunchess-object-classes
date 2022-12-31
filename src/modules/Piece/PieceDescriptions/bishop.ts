import type { PieceNameType } from "@/types/PieceType"

import Piece from "../Piece"
import { PIECE_BISHOP } from "@/types/constants"
import bishopMove from "../Move/BishopMove.ts"

class Bishop extends Piece {
	readonly name: PieceNameType = PIECE_BISHOP

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [bishopMove] })
	}
}

export default Bishop
