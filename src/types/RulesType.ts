import { DungeonLayoutType, DungeonSquareType } from "./DungeonType"
import { PieceType } from "./PieceType"

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
  players: ReturnType<typeof setRule<PlayerType[]>>
  playersCanJoin: ReturnType<typeof setRule<boolean>>
  dungeonLayout: ReturnType<typeof setRule<DungeonLayoutType>>
  squares: ReturnType<typeof setRule<DungeonSquareType[]>>
  pieces: ReturnType<typeof setRule<PieceType[]>>
  movesPerTurn: ReturnType<typeof setRule<number>>
}
