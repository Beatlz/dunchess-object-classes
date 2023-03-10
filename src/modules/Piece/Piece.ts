import { INIT_LIVES } from "../../types/constants"

import type { ColorType } from "../../types/DungeonTypes"
import type { PieceDescriptionType, GetMovesType, PieceModifyingFunctionType, PieceNameType } from "../../types/PieceTypes"
import { Preset } from "./Presets/Preset"

export class Piece {
	private _color: ColorType
	private _moves: GetMovesType[]
	private _lives: number
	private _statusModifiers: PieceModifyingFunctionType[]
	private _name: string

	constructor(pieceDescription: PieceDescriptionType, piecePresetName?: PieceNameType) {
		this._color = pieceDescription.color
		this._moves = pieceDescription.moves
		this._name = pieceDescription.name
		this._lives = pieceDescription.lives || INIT_LIVES
		this._statusModifiers = pieceDescription.statusModifiers || []
	
		if (piecePresetName) {
			const preset = new Preset(piecePresetName)

			this._name = preset.piece.name
			this._moves = preset.piece.moves
		}
	}

	get name(): string {
		return this._name
	}
	set name(name: string) {
		this._name = name
	}

	get color(): ColorType {
		return this._color
	}
	set color(color: ColorType) {
		this._color = color
	}

	get moves(): GetMovesType[] {
		return this._moves
	}
	set moves(moves: GetMovesType[]) {
		this._moves = moves
	}

	get lives(): number {
		return this._lives
	}
	set lives(lives: number) {
		this._lives = lives
	}

	get statusModifiers(): PieceModifyingFunctionType[] {
		return this._statusModifiers
	}
	set statusModifiers(statusModifiers: PieceModifyingFunctionType[]) {
		this._statusModifiers = statusModifiers
	}

	addMove(move: GetMovesType): void {
		this.moves.push(move)
	}

	kill(): void {
		this.lives = 0
	}

	revive(lives = 1): void {
		this.lives = lives
	}

	isAlive(): boolean {
		return !!this.lives
	}
}
