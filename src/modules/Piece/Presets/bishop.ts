import { Piece } from "../../Piece/Piece"
import { PIECE_NAMES } from "../../../types/constants"
import { bishopMove } from "../Moves/BishopMove"
import type { ColorType } from "@/types/DungeonTypes"

export class Bishop extends Piece {
	constructor (color: ColorType) {
		super({
			color,
			name: PIECE_NAMES.BISHOP,
			moves: [bishopMove],
		})
	}
}
