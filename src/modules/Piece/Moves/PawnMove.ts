import type { CoordsType } from "../../.."
import type { GetMovesType } from "../../.."

export const pawnMove: GetMovesType = (initialSquare: CoordsType, layoutSize: number): CoordsType[] => {
	const { x, y } = initialSquare

	return x < layoutSize ? [{ x: x + 1, y }] : [{ x, y }]
}
