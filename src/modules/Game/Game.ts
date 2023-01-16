import type { RulesType } from "../.."
import type { PieceType } from "../.."
import type { DungeonType } from "../.."
import type { GameStateType } from "../.."

export class Game {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private _rules: any = []
	private _pieces: PieceType[] = []
	private _dungeons: DungeonType[] = []
	private _initialState: GameStateType[] = []
	private _currentState: GameStateType[] = []
	// _stateChanges: GameActionType[] = []

	get rules(): RulesType {
		return this._rules
	}
	set rules(rules: RulesType) {
		this._rules = rules
	}

	get pieces(): PieceType[] {
		return this._pieces
	}
	set pieces(pieces: PieceType[]) {
		this._pieces = [...this.pieces, ...pieces]
	}

	get dungeons(): DungeonType[] {
		return this._dungeons
	}
	set dungeons(dungeons: DungeonType[]) {
		this._dungeons = [...this.dungeons, ...dungeons]
	}

	get initialState(): GameStateType[] {
		return this._initialState
	}
	set initialState(initialState: GameStateType[]) {
		this._initialState = initialState
	}

	get currentState(): GameStateType[] {
		return this._currentState
	}
	set currentState(currentState: GameStateType[]) {
		this._currentState = currentState
	}
}

export type GameType = Game
