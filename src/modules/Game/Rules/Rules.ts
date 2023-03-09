import type { RulesType } from "../../../types/RulesTypes"

export class Rules {
	private _rules: RulesType
  
	constructor(rules: RulesType) {
		this._rules = rules
	}

	get rules() {
		return this._rules
	}

	set rules (rules: RulesType) {
		this._rules = { ...this._rules, ...rules }
	}
}
