import type { CoordsType } from "../../../index"
import type { GetMovesType } from "../../../index"
import { diagonalMove } from "../../../index"

export const bishopMove: GetMovesType = (initCoords: CoordsType, layoutSize: number): CoordsType[] => {
	return diagonalMove(initCoords, layoutSize)
}
