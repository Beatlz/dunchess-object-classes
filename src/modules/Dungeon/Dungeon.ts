import type { CoordsType } from "../../types/CoordsType"
import type {
	SquareDescriptionType,
	DungeonLayoutType,
} from "../../types/DungeonTypes"
import { DUNGEON_SIZE } from "../../types/constants"
import { Square } from "./Square/Square"
import { serializeKey } from "../../utility/serializeKey"
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
