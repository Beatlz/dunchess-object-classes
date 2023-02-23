import type { CoordsType } from "../../../types/CoordsType"
import type { GetMovesType } from "../../../types/PieceTypes"

export const pawnMove: GetMovesType = (initialSquare: CoordsType, layoutSize: number): CoordsType[] => {
	const { x, y } = initialSquare

	return x < layoutSize ? [{ x: x + 1, y }] : [{ x, y }]
}
