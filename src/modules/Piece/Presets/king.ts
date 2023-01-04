import type { PieceNameType, PiecePresetDescriptionType } from "../../.."

import { Piece } from "../../.."
import { kingMove } from "../../.."
import { PIECE_KING } from "../../.."

export class King extends Piece {
	readonly name: PieceNameType = PIECE_KING

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [kingMove] })
	}
}
