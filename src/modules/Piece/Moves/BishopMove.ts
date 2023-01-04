import type { CoordsType } from "../../.."
import type { GetMovesType } from "../../.."
import { diagonalMove } from "../../.."

export const bishopMove: GetMovesType = (initCoords: CoordsType, layoutSize: number): CoordsType[] => {
	return diagonalMove(initCoords, layoutSize)
}
