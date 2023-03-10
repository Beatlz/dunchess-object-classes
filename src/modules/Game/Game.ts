import type { RulesType } from "../../types/RulesTypes"
import { Dungeon } from "../Dungeon/Dungeon"

export class Game {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private _rules: any = []
	private _dungeon: Dungeon
	private _initialState: Dungeon

	constructor(dungeon: Dungeon) {
		this._dungeon = dungeon
		this._initialState = dungeon
	}

	get rules(): RulesType {
		return this._rules
	}
	set rules(rules: RulesType) {
		this._rules = rules
	}

	get dungeon(): Dungeon {
		return this._dungeon
	}
	set dungeon(dungeon: Dungeon) {
		this._dungeon = dungeon
	}

	get initialState(): Dungeon {
		return this._initialState
	}
}
