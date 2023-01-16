import type { PieceNameType, PiecePresetDescriptionType } from "../../.."

import { Piece } from "../../.."
import { kingMove } from "../../.."
import { PIECE_NAMES } from "../../.."

export class King extends Piece {
	readonly name: PieceNameType = PIECE_NAMES.KING

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, name: PIECE_NAMES.KING, moves: [kingMove] })
	}
}
