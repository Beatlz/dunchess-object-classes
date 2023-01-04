import type { PieceNameType, PiecePresetDescriptionType } from "../../.."

import { Piece } from "../../.."
import { knightMove } from "../../.."
import { PIECE_KNIGHT } from "../../.."

export class Knight extends Piece {
	readonly name: PieceNameType = PIECE_KNIGHT

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [knightMove] })
	}
}
