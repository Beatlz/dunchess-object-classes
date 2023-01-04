import type { CoordsType } from "../../.."
import type { GetMovesType } from "../../.."

import { bishopMove } from "./BishopMove"
import { verticalMove, horizontalMove } from "./GenericMoves"

export const queenMove: GetMovesType = (initialSquare: CoordsType, layoutSize: number): CoordsType[] => {
	return [...verticalMove(initialSquare, layoutSize), ...horizontalMove(initialSquare, layoutSize), ...bishopMove(initialSquare, layoutSize)]
}
