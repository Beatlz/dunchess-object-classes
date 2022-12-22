import Dungeon from "@modules/Dungeon/Dungeon"

export const enum rulesPresetNames {
  DUNCHESS_STANDARD,
  CHESS_STANDARD,
}

export type RulesPresetNamesType = keyof typeof rulesPresetNames

export type SetRuleType = <T>(value: T, modifiable: boolean) => { value: T, modifiable: boolean }

export const setRule: SetRuleType = <T>(value: T, modifiable: boolean) => {
	return { value, modifiable }
}

export interface RulesType {
  dungeonSize: ReturnType<typeof setRule<number>>
  players: ReturnType<typeof setRule<PlayerType[]>>
  playersCanJoin: ReturnType<typeof setRule<boolean>>
  dungeon: ReturnType<typeof setRule<DungeonType>>
  squares: ReturnType<typeof setRule<SquareType[]>>
  pieces: ReturnType<typeof setRule<PieceType[]>>
  powerUps: ReturnType<typeof setRule<PowerUpType[]>>
  movesPerTurn: ReturnType<typeof setRule<number>>
}
