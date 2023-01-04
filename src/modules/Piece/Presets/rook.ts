import type { PiecePresetDescriptionType, PieceNameType } from "../../.."

import { Piece } from "../../.."
import { rookMove } from "../../.."
import { PIECE_ROOK } from "../../.."

export class Rook extends Piece {
	readonly name: PieceNameType = PIECE_ROOK

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [rookMove] })
	}
}
