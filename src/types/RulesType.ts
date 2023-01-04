import { DungeonLayoutType, DungeonSquareType } from "../index"
import { PieceDescriptionType } from "../index"

export enum rulesPresetNames {
  DUNCHESS_STANDARD,
  CHESS_STANDARD,
}

export type RulesPresetNamesType = keyof typeof rulesPresetNames

export type SetRuleType<T> = (value: T, modifiable: boolean) => { value: T, modifiable: boolean }

export interface RulesType {
  // players: ReturnType<typeof setRule<PlayerType[], boolean>>
  playersCanJoin: ReturnType<SetRuleType<boolean>>
  dungeonLayout: ReturnType<SetRuleType<DungeonLayoutType>>
  squares: ReturnType<SetRuleType<DungeonSquareType[]>>
  pieces: ReturnType<SetRuleType<PieceDescriptionType[]>>
  movesPerTurn: ReturnType<SetRuleType<number>>
}
