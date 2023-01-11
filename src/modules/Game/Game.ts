import type { RulesType } from "../.."
import type { PieceType } from "../.."
import type { DungeonType } from "../.."
import type { GameActionType, GameStateType } from "../.."

export class Game {
	#rules: RulesType
	#pieces: PieceType[] = []
	#dungeons: DungeonType[] = []
	#initialState: GameStateType = {}
	#currentState: GameStateType = {}
	#stateChanges: GameActionType[] = []
  
	constructor (rules: RulesType) {
		this.#rules = rules
	}

	get rules(): RulesType {
		return this.#rules
	}

	get pieces(): PieceType[] {
		return this.#pieces
	}
	set pieces(pieces: PieceType[]) {
		this.#pieces = [...this.pieces, ...pieces]
	}

	get dungeons(): DungeonType[] {
		return this.#dungeons
	}
	set dungeons(dungeons: DungeonType[]) {
		this.#dungeons = [...this.dungeons, ...dungeons]
	}

	get initialState(): GameStateType {
		return this.#initialState
	}
	set initialState(initialState: GameStateType) {
		this.#initialState = initialState
	}

	get currentState(): GameStateType {
		return this.#currentState
	}
	set currentState(currentState: GameStateType) {
		this.#currentState = currentState
	}
}
