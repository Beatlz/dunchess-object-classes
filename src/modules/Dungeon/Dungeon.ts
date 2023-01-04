import type { CoordsType } from "../.."
import type { DungeonSquareType, DungeonLayoutType } from "../.."

import { COLORS } from "../.."
import { DUNGEON_SIZE } from "../.."

export const isEven = (num: number): boolean => !(num % 2)

export class Dungeon {
	layout: DungeonLayoutType

	constructor (layoutSize?: number) {
		this.layout = layoutSize
			? this.createLayout(layoutSize)
			: this.createLayout(DUNGEON_SIZE)
	}

	createLayout(layoutSize: number): DungeonLayoutType {
		const layout: DungeonLayoutType = {}

		const totalTiles = Math.pow(layoutSize, 2)
		const { LIGHT, DARK } = COLORS
		
		let isRightSquareLight = true

		for (let square = 0; square <= totalTiles; square++) {
			const x = square % layoutSize
			const y = layoutSize - Math.floor(square / layoutSize) - 1

			if (isEven(layoutSize)) {
				if (square % layoutSize) isRightSquareLight = !isRightSquareLight

				layout[`x${x}y${y}`] = {
					x, y,
					color: isRightSquareLight ? LIGHT : DARK,
					isActive: false,
				}
			} else {
				layout[`x${x}y${y}`] = {
					x, y,
					color: isRightSquareLight ? LIGHT : DARK,
					isActive: false,
				}
			}
		}

		return layout
	}

	clearLayout(): void {
		this.layout = {}
	}
	deleteSquare(coords: string): void {
		const descriptor = Object.getOwnPropertyDescriptor(this.layout, coords)

		if (descriptor) {
			delete descriptor.value
		}
	}
	getSquare(coords: CoordsType): DungeonSquareType | undefined {
		return this.layout[`x${coords.x}y${coords.y}`]
	}
	hasSquare(coords: CoordsType): boolean {
		return !!this.layout[`x${coords.x}y${coords.y}`]
	}
	setSquare(coords: CoordsType, square: DungeonSquareType): void {
		this.layout[`x${coords.x}y${coords.y}`] = square
	}
	activateSquare(coords: CoordsType): void {
		if (!this.getSquare(coords)) return

		this.setSquare(coords, { ...this.getSquare(coords)!, isActive: true })
	}
	getLayoutSize(as2D?: `2D`): number | string {
		const totalSquares = Object.keys(this.layout).length

		return as2D === `2D`
			? `${Math.sqrt(totalSquares)} x ${Math.sqrt(totalSquares)}` 
			: totalSquares
	}
	getLayout() {
		return this.layout
	}
	setLayout(layout?: DungeonLayoutType | number) {
		if (!layout) {
			this.layout = this.createLayout(DUNGEON_SIZE)
		} else if (typeof layout === `number`) {
			this.layout = this.createLayout(layout)
		} else {
			this.layout = layout
		}
	}
}
