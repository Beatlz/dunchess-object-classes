import type { PieceNameType, PiecePresetDescriptionType } from "../../../index"

import { Piece } from "../../../index"
import { kingMove } from "../../../index"
import { PIECE_KING } from "../../../index"

export class King extends Piece {
	readonly name: PieceNameType = PIECE_KING

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [kingMove] })
	}
}
