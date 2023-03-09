import { Piece } from "../../Piece/Piece"
import { rookMove } from "../Moves/RookMove"
import { PIECE_NAMES } from "../../../types/constants"
import type { ColorType } from "@/types/DungeonTypes"

export class Rook extends Piece {
	constructor (color: ColorType) {
		super({
			color,
			name: PIECE_NAMES.ROOK,
			moves: [rookMove],
		})
	}
}
