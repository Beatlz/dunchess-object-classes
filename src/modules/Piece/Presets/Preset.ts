import { PieceNameType, PiecePresetType } from "@/types/PieceTypes"
import { piecePresets } from "./PiecePresetList"

export class Preset {
	private _preset: PiecePresetType

	constructor(pieceName: PieceNameType) {
		this._preset = piecePresets[pieceName]
	}

	get piece(): PiecePresetType {
		return this._preset
	}
}
