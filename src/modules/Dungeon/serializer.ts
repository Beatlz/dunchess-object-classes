import { filterMap } from "../../utility/filterMap"
import { DungeonLayoutType, DungeonSimplifiedSquareType } from "../../types/DungeonTypes"
import { serializeKey } from "../../utility/serializeKey"
import { Square } from "./Square/Square"
import { Tile } from "./Tile/Tile"
import { Piece } from "../Piece/Piece"
import PresetMoves from "../Piece/Moves/PresetMoves"
import { Dungeon } from "./Dungeon"
import { createLayout } from "./createLayout"

export const serializeLayout = (layout: DungeonLayoutType, optimize = true): DungeonSimplifiedSquareType[] => {
	if (!optimize) {
		return Object.values(layout).map((square) => {
			const simplifiedSquare: DungeonSimplifiedSquareType = {
				x: square.description.x,
				y: square.description.y,
				color: square.description.color,
				isActive: square.description.isActive,
			}

			if (square.description.piece) {
				simplifiedSquare.piece = {
					name: square.description.piece?.description.name,
					color: square.description.piece?.description.color,
				}
			}
			if (square.description.tile) simplifiedSquare.tile = {
				name: square.description.tile?.name
			}

			return simplifiedSquare
		})
	}

	return filterMap(
		Object.values(layout),
		square => square.description.isActive,
		square => {
			const simplifiedSquare: DungeonSimplifiedSquareType = {
				x: square.description.x,
				y: square.description.y,
				color: square.description.color,
				isActive: square.description.isActive,
			}

			if (square.description.piece) {
				simplifiedSquare.piece = {
					name: square.description.piece?.description.name,
					color: square.description.piece?.description.color,
				}
			}
			if (square.description.tile) simplifiedSquare.tile = {
				name: square.description.tile?.name
			}

			return simplifiedSquare
		}
	)
}

export const deserializeLayout = (simplifiedLayout: DungeonSimplifiedSquareType[], layoutSize: number): DungeonLayoutType => {
	const dungeon = new Dungeon(createLayout(layoutSize))
	const layout = dungeon.layout
  
	simplifiedLayout.forEach(simplifiedSquare => {
		const { x, y, isActive, color, tile, piece } = simplifiedSquare
		const key = serializeKey({ x, y })
    
		layout[key] = new Square({
			x,
			y,
			isActive,
			color,
		})

		if (tile) layout[key].description.tile = new Tile(tile.name)
		if (piece) layout[key].description.piece = new Piece({ ...piece, moves: [PresetMoves[piece.name]] })
	})

	return layout
}

export const layoutToJSON = (layout: DungeonLayoutType, optimize = true): string => {
	return JSON.stringify(serializeLayout(layout, optimize))
}
