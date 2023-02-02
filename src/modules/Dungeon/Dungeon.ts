import type { CoordsType } from "../.."
import type { DungeonSquareType, DungeonLayoutType } from "../.."

import { COLORS } from "../.."
import { DUNGEON_SIZE } from "../.."

export const isEven = (num: number): boolean => !(num % 2)

export class Dungeon {
	private _layout: DungeonLayoutType

	constructor (layoutSize?: number) {
		this._layout = layoutSize
			? this.createLayout(layoutSize)
			: this.createLayout(DUNGEON_SIZE)
	}

	set layout(layout: DungeonLayoutType) {
		this._layout = layout
	}

	get layout(): DungeonLayoutType {
		return this._layout
	}

	createLayout(layoutSize: number): DungeonLayoutType {
		const layout: DungeonLayoutType = {}

		const totalTiles = Math.pow(layoutSize, 2)
		const { LIGHT, DARK } = COLORS
		
		let isRightSquareLight = true

		for (let square = 0; square < totalTiles; square++) {
			const x = square % layoutSize
			const y = Math.floor(square / layoutSize)

			if (isEven(layoutSize)) {
				if (square % layoutSize) isRightSquareLight = !isRightSquareLight

				layout[`x${x}y${y}`] = {
					x, y,
					color: !isRightSquareLight ? LIGHT : DARK,
					isActive: false,
				}
			} else {
				layout[`x${x}y${y}`] = {
					x, y,
					color: isEven(square) ? LIGHT : DARK,
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
		if (!this.getSquare(coords))
			throw TypeError(`Coords ${coords} are out of range`)

		return this.layout[`x${coords.x}y${coords.y}`]
	}
	hasSquare(coords: CoordsType): boolean {
		return !!this.layout[`x${coords.x}y${coords.y}`]
	}
	setSquare(coords: CoordsType, square: DungeonSquareType): void {
		this.layout[`x${coords.x}y${coords.y}`] = square
	}
	activateSquare(coords: CoordsType): void {
		if (!this.getSquare(coords))
			throw TypeError(`Coords ${coords} are out of range`)

		this.setSquare(coords, { ...(<DungeonSquareType>this.getSquare(coords)), isActive: true })
	}
	layoutSize(as2D?: `2D`): number {
		const totalSquares = Object.keys(this.layout).length

		return as2D === `2D`
			? Math.sqrt(totalSquares)
			: totalSquares
	}
}

export type DungeonType = Dungeon
