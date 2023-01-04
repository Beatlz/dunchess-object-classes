import type { PieceNameType, PiecePresetDescriptionType } from "../../../index"

import { Piece } from "../../../index"
import { queenMove } from "../../../index"
import { PIECE_QUEEN } from "../../../index"

export class Queen extends Piece {
	readonly name: PieceNameType = PIECE_QUEEN

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [queenMove] })
	}
}
