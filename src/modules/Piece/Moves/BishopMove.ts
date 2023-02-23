import type { CoordsType } from "../../../types/CoordsType"
import type { GetMovesType } from "../../../types/PieceTypes"
import { diagonalMove } from "../Moves/GenericMoves"

export const bishopMove: GetMovesType = (initCoords: CoordsType, layoutSize: number): CoordsType[] => {
	return diagonalMove(initCoords, layoutSize)
}
