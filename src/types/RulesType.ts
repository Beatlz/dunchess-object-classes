export enum rulePresetNames {
  DUNCHESS_STANDARD = `DUNCHESS_STANDARD`,
  CHESS_STANDARD = `STANDARD_CHESS`,
}

export type RulePresetNamesType = keyof typeof rulePresetNames

export interface RulesType {
  dungeonSize: number
  players: PlayerType[]
  dungeonLayout: DungeonLayoutType
  squares: SquareType[] // initial dungeon layout?
  pieces: PieceType[] // initial dungeon layout?
  powerUps: PowerUpType[] // initial dungeon layout?
  movesPerTurn: number

  playersCanJoin: boolean
  dungeonLayoutCanChange: boolean
  squaresCanChange: boolean
  piecesCanChange: boolean
  powerUpsCanChange: boolean
  movesPerTurnCanChange: boolean
}
