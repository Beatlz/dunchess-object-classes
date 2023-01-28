import type { PieceNameType, PiecePresetDescriptionType } from "../../.."

import { Piece } from "../../.."
import { queenMove } from "../../.."
import { PIECE_NAMES } from "../../.."

export class Queen extends Piece {
	readonly name: PieceNameType = PIECE_NAMES.QUEEN

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, name: PIECE_NAMES.QUEEN, moves: [queenMove] })
	}
}
