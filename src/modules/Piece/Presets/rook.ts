import type { PiecePresetDescriptionType, PieceNameType } from "../../.."

import { Piece } from "../../.."
import { rookMove } from "../../.."
import { PIECE_NAMES } from "../../.."

export class Rook extends Piece {
	readonly name: PieceNameType = PIECE_NAMES.ROOK

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [rookMove] })
	}
}
