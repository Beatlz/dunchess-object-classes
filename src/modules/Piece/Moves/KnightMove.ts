import type { CoordsType } from "../../../index"
import type { GetMovesType } from "../../../index"

export const knightMove: GetMovesType = (initialSquare: CoordsType, layoutSize: number): CoordsType[] => {
	const fx = (X: number) => Math.sqrt(5 - Math.pow(X, 2))
	const { x, y } = initialSquare
	const positive = [-2, -1, 2, 1].map(X => ({ x: X + x, y: fx(X) + y }))
	const negative = [-2, -1, 2, 1].map(X => ({ x: X + x, y: -1 * fx(X) + y }))
	const moves = [...positive, ...negative]
	const legalMoves = moves.filter((move: CoordsType) => move.x >= 0 && move.y >= 0 && move.x < layoutSize && move.y < layoutSize)
  
	return legalMoves
}
