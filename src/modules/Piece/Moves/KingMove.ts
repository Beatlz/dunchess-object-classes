import type { CoordsType } from "../../.."
import type { GetMovesType } from "../../.."

export const kingMove: GetMovesType = (initCoords: CoordsType, layoutSize: number): CoordsType[] => {
	const { x, y } = initCoords
	const possibleMoves = [
		{ x: x - 1, y: y + 1 },
		{ x: x, y: y + 1 },
		{ x: x + 1, y: y + 1 },

		{ x: x - 1, y: y },
		{ x: x + 1, y: y },

		{ x: x - 1, y: y - 1 },
		{ x: x, y: y - 1 },
		{ x: x + 1, y: y - 1 },
	]
  
	return possibleMoves.filter((possibleMove: CoordsType) => {
		return possibleMove.x >= 0
      && possibleMove.y >= 0
      && possibleMove.x < layoutSize
      && possibleMove.y < layoutSize
	})
}
