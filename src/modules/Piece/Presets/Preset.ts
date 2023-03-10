import { PieceNameType, PiecePresetType } from "@/types/PieceTypes"
import { presets } from "./PiecePresetList"

export class Preset {
	private _preset: PiecePresetType

	constructor(pieceName: PieceNameType) {
		this._preset = presets[pieceName]
	}

	get piece(): PiecePresetType {
		return this._preset
	}
}