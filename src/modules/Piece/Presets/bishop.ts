import type { PieceNameType, PiecePresetDescriptionType } from "../../../index"

import { Piece } from "../../../index"
import { PIECE_BISHOP } from "../../../index"
import { bishopMove } from "../../../index"

export class Bishop extends Piece {
	readonly name: PieceNameType = PIECE_BISHOP

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [bishopMove] })
	}
}
