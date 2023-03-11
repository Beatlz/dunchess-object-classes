import { Piece } from "@/modules/Piece/Piece"
import { DungeonSquareType } from "@/types/DungeonTypes"
import { Tile } from "../Tile/Tile"

export class Square {
	private _description: DungeonSquareType

	constructor(description: DungeonSquareType) {
		this._description = description
	}

	get description(): DungeonSquareType {
		return this._description
	}
	set description(square: DungeonSquareType) {
		this._description = square
	}

	getProp<K extends keyof DungeonSquareType>(prop: K): DungeonSquareType[K] {
		return this.description[prop]
	}

	activateSquare(): void {
		this.description.isActive = true
	}

	deactivateSquare(): void {
		this.description.isActive = false
	}

	toggleSquare(): boolean {
		this.description.isActive = !this.description.isActive

		return this.description.isActive
	}
	addPiece(piece: Piece) {
		this.description.piece = piece
	}

	removePiece() {
		delete this.description.piece
	}

	addTile(tile: Tile) {
		this.description.tile = tile
	}

	removeTile() {
		delete this.description.tile
	}
}
