import type { RulesType } from "../../types/RulesTypes"
import type { DungeonType } from "../Dungeon/Dungeon"

export class Game {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private _rules: any = []
	private _dungeon: DungeonType
	private _initialState: DungeonType

	constructor(dungeon: DungeonType) {
		this._dungeon = dungeon
		this._initialState = dungeon
	}

	get rules(): RulesType {
		return this._rules
	}
	set rules(rules: RulesType) {
		this._rules = rules
	}

	get dungeon(): DungeonType {
		return this._dungeon
	}
	set dungeon(dungeon: DungeonType) {
		this._dungeon = dungeon
	}

	get initialState(): DungeonType {
		return this._initialState
	}
}

export type GameType = Game
