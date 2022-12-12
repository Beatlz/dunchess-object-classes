// export interface RulesType {
//   dungeonSize: ReturnType<typeof setRule<number>>
//   players: ReturnType<typeof setRule<PlayerType[]>>
//   dungeon: ReturnType<typeof setRule<DungeonType>>
//   squares: ReturnType<typeof setRule<SquareType[]>>
//   pieces: ReturnType<typeof setRule<PieceType[]>>
//   powerUps: ReturnType<typeof setRule<PowerUpType[]>>
//   movesPerTurn: ReturnType<typeof setRule<number>>
//   playersCanJoin: ReturnType<typeof setRule<boolean>>
// }
import PlayerType from "./PlayerType"
import DungeonType from "./DungeonType"
import SquareType from "./SquareType"
import PieceType from "./PieceType"
import PowerUpType from "./PowerUpType"

type DunchessTypesType = PlayerType |
  DungeonType |
  SquareType |
  PieceType |
  PowerUpType

export default DunchessTypesType
