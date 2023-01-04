import type { PieceNameType, PiecePresetDescriptionType } from "../../.."

import { Piece } from "../../.."
import { PIECE_BISHOP } from "../../.."
import { bishopMove } from "../../.."

export class Bishop extends Piece {
	readonly name: PieceNameType = PIECE_BISHOP

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [bishopMove] })
	}
}
