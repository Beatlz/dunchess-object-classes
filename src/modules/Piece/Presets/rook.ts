import type { PiecePresetDescriptionType, PieceNameType } from "../../../index"

import { Piece } from "../../../index"
import { rookMove } from "../../../index"
import { PIECE_ROOK } from "../../../index"

export class Rook extends Piece {
	readonly name: PieceNameType = PIECE_ROOK

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [rookMove] })
	}
}
