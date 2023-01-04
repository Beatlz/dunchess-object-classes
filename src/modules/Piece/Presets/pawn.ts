import type { PieceNameType, PiecePresetDescriptionType } from "../../../index"

import { Piece } from "../../../index"
import { pawnMove } from "../../../index"
import { PIECE_PAWN } from "../../../index"

export class Pawn extends Piece {
	readonly name: PieceNameType = PIECE_PAWN

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [pawnMove] })
	}
}
