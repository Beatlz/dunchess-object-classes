import type CoordsType from "@/types/CoordsType"
import type { GetMovesType } from "@/types/PieceType"

import bishopMove from "./BishopMove"
import { verticalMove, horizontalMove } from "./GenericMoves"

const queenMove: GetMovesType = (initialSquare: CoordsType, layoutSize: number): CoordsType[] => {
	return [...verticalMove(initialSquare, layoutSize), ...horizontalMove(initialSquare, layoutSize), ...bishopMove(initialSquare, layoutSize)]
}

export default queenMove
