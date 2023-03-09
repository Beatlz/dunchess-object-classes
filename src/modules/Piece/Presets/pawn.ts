import { Piece } from "../../Piece/Piece"
import { pawnMove } from "../Moves/PawnMove"
import { PIECE_NAMES } from "../../../types/constants"
import type { ColorType } from "@/types/DungeonTypes"

export class Pawn extends Piece {
	constructor (color: ColorType) {
		super({
			color,
			name: PIECE_NAMES.BISHOP,
			moves: [pawnMove],
		})
	}
}
