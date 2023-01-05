import type { CoordsType } from "../.."
import type { DungeonSquareType } from "../.."

import { COLORS } from "../.."
import { DUNGEON_SIZE } from "../.."

export const isEven = (num: number): boolean => !(num % 2)

export class Dungeon {
	layout: DungeonSquareType[]

	constructor (layoutSize?: number) {
		this.layout = layoutSize
			? this.createLayout(layoutSize)
			: this.createLayout(DUNGEON_SIZE)
	}

	createLayout(layoutSize: number): DungeonSquareType[] {
		const layout: DungeonSquareType[] = []

		const totalTiles = Math.pow(layoutSize, 2)
		const { LIGHT, DARK } = COLORS
		
		let isRightSquareLight = true

		for (let tile = 0; tile < totalTiles; tile++) {
			const x = tile % layoutSize
			const y = layoutSize - Math.floor(tile / layoutSize) - 1

			if (isEven(layoutSize)) {
				if (tile % layoutSize) isRightSquareLight = !isRightSquareLight

				layout.push({
					x, y,
					color: isRightSquareLight ? LIGHT : DARK,
					isActive: false,
				})
			} else {
				layout.push({
					x, y,
					color: isEven(tile) ? LIGHT : DARK,
					isActive: false,
				})
			}
		}

		return layout
	}

	clearLayout(): void {
		this.layout = []
	}
	deleteSquare(coords: string): void {
		const descriptor = Object.getOwnPropertyDescriptor(this.layout, coords)

		if (descriptor) {
			delete descriptor.value
		}
	}
	getSquareIndex(coords: CoordsType): number {
		return this.layout.findIndex((square) => square.x === coords.x && square.y === coords.y)
	}
	getSquare(coords: CoordsType): DungeonSquareType | undefined {
		return this.layout[this.getSquareIndex(coords)]
	}
	hasSquare(coords: CoordsType): boolean {
		return !!this.layout[this.getSquareIndex(coords)]
	}
	setSquare(coords: CoordsType, square: DungeonSquareType): void {
		this.layout[this.getSquareIndex(coords)] = square
	}
	activateSquare(coords: CoordsType): void {
		this.layout[this.getSquareIndex(coords)].isActive = true
	}
	getLayoutSize(as2D?: `2D`): number | string {
		const totalSquares = this.layout.length

		return as2D === `2D`
			? Math.sqrt(totalSquares)
			: totalSquares
	}
	getLayout() {
		return this.layout
	}
	setLayout(layout?: DungeonSquareType[] | number) {
		if (!layout) {
			this.layout = this.createLayout(DUNGEON_SIZE)
		} else if (typeof layout === `number`) {
			this.layout = this.createLayout(layout)
		} else {
			this.layout = layout
		}
	}
}
