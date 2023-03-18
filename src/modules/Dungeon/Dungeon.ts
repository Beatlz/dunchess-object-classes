import type { CoordsType } from "../../types/CoordsType"
import type {
	SquareDescriptionType,
	DungeonLayoutType,
} from "../../types/DungeonTypes"
import { DUNGEON_SIZE } from "../../types/constants"
import { Square } from "./Square/Square"
import { deserializeKey, serializeKey } from "../../utility/serializeKey"
import { createLayout } from "./createLayout"

export class Dungeon {
	private _layout = createLayout(DUNGEON_SIZE)

	constructor (layout?: DungeonLayoutType) {
		if (layout) this._layout = layout
	}

	set layout(layout: DungeonLayoutType) {
		this._layout = layout
	}
	get layout(): DungeonLayoutType {
		return this._layout
	}

	clearLayout(): void {
		this.layout = {}
	}

	layoutSize(as2D?: `2D`): number {
		const totalSquares = Object.keys(this.layout).length

		return as2D === `2D`
			? totalSquares
			: Math.sqrt(totalSquares)
	}
	changeLayoutSize(size: number): void {
		const layout = createLayout(size)
		const layoutSize = this.layoutSize()

		if (size > layoutSize) {
			this.layout = {
				...layout,
				...this.layout,
			}

			return
		}

		Object.keys(this.layout).forEach((key) => {
			const square = this.layout[key]
			const { x, y, piece, tile } = square.description

			if ((piece || tile) && x < layoutSize && y < layoutSize) {
				layout[key] = square
			}
		})

		this.layout = {
			...layout,
			...this.layout,
		}
	}
	cropLayout() {
		const coords = Object.keys(this.layout).map(key => deserializeKey(key))
		const X = coords.map(coord => coord?.x) as number[]
		const Y = coords.map(coord => coord?.x) as number[]
		const xMin = Math.min(...X)
		const xMax = Math.max(...X)
		const yMin = Math.min(...Y)
		const yMax = Math.max(...Y)
		const isXSmaller = xMax < this.layoutSize()
		const isYSmaller = yMax < this.layoutSize()
		// Layout size is not croppable
		// at least one dimension needs all space
		if (!isXSmaller && !isYSmaller) return
		
		const newSize = Math.max(xMax - xMin, yMax - yMin)
		const layout = createLayout(newSize)

		for (const coord of coords) {
			if (coord) {
				const { x, y } = coord
				const { color, isActive } = this.getSquare({ x, y }).description
				const newX = x - xMin
				const newY = y - yMin
				
				this.setSquare({ color, isActive, x: newX, y: newY })
			}
		}
	
		this.layout = layout
	}

	getSquare({ x, y }: CoordsType): Square {
		const key = serializeKey({ x, y })
		
		return this.layout[key]
	}
	setSquare(square: SquareDescriptionType) {
		const { x, y } = square
		const key = serializeKey({ x, y })
		
		this.layout[key] = new Square(square)
	}
	hasSquare({ x, y }: CoordsType): boolean {
		return !!this.getSquare({ x, y })
	}
}
