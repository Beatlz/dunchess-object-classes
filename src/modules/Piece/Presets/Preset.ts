import { ColorType } from "@/types/DungeonTypes"
import { PieceDescriptionType, PieceNameType } from "@/types/PieceTypes"
import { piecePresets } from "./PiecePresetList"

export class Preset {
	private _description: PieceDescriptionType

	constructor(color: ColorType, pieceName: PieceNameType) {
		this._description = { color, ...piecePresets[pieceName] }
	}

	get description(): PieceDescriptionType {
		return this._description
	}
}
