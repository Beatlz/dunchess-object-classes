import type { PieceNameType, PiecePresetDescriptionType } from "../../../index"

import { Piece } from "../../../index"
import { knightMove } from "../../../index"
import { PIECE_KNIGHT } from "../../../index"

export class Knight extends Piece {
	readonly name: PieceNameType = PIECE_KNIGHT

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [knightMove] })
	}
}
