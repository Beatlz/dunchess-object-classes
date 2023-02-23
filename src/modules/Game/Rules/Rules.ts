import type { RulesType } from "../../../types/RulesTypes"

export class Rules {
	private rules: RulesType
  
	constructor(rules: RulesType) {
		this.rules = rules
	}

	getRules() {
		return this.rules
	}

	setRules(rules: RulesType) {
		this.rules = { ...this.rules, ...rules }
	}
}
