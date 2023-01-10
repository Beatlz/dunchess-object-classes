import type { RulesType } from "../.."
import type { PieceType } from "../.."
import type { DungeonType } from "../.."

export class Game {
	#rules: RulesType
	#pieces: PieceType[] = []
	#dungeons: DungeonType[] = []

	constructor (rules: RulesType) {
		this.#rules = rules
	}

	get pieces(): PieceType[] {
		return this.pieces
	}
	set pieces(pieces: PieceType[]) {
		this.pieces = [...this.pieces, ...pieces]
	}

	get dungeons(): DungeonType[] {
		return this.#dungeons
	}
	set dungeons(dungeons: DungeonType[]) {
		this.#dungeons = [...this.dungeons, ...dungeons]
	}
}
