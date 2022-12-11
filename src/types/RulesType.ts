import { DungeonType } from "./DungeonType"

export enum rulePresetNames {
  DUNCHESS_STANDARD = `DUNCHESS_STANDARD`,
  CHESS_STANDARD = `STANDARD_CHESS`,
}

export type RulePresetNamesType = keyof typeof rulePresetNames

export interface RulesType {
  dungeonSize: number
  players: PlayerType[] // Would have skins here
  dungeon: DungeonType
  squares: SquareType[] // initial dungeon?
  pieces: PieceType[] // initial dungeon?
  powerUps: PowerUpType[] // initial dungeon?
  movesPerTurn: number

  playersCanJoin: boolean
  dungeonLayoutCanChange: boolean
  squaresCanChange: boolean
  piecesCanChange: boolean
  powerUpsCanChange: boolean
  movesPerTurnCanChange: boolean
}
