import type { PieceNameType, PiecePresetDescriptionType } from "../../.."

import { Piece } from "../../.."
import { queenMove } from "../../.."
import { PIECE_QUEEN } from "../../.."

export class Queen extends Piece {
	readonly name: PieceNameType = PIECE_QUEEN

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [queenMove] })
	}
}
