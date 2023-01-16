import type { PieceNameType, PiecePresetDescriptionType } from "../../.."

import { Piece } from "../../.."
import { PIECE_NAMES } from "../../.."
import { bishopMove } from "../../.."

export class Bishop extends Piece {
	readonly name: PieceNameType = PIECE_NAMES.BISHOP

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, name: PIECE_NAMES.BISHOP, moves: [bishopMove] })
	}
}
