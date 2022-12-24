# Buffs & debuffs, status modifying
Buffs and debuffs are status modifying functions that affect a piece. To use them, we apply them on a `Piece()` instance like so:
`Piece.setStatus(<StatusModifierType | StatusModifierName>)`
## Types

### Modifiable value
```
type ModifiableValueListType = 'lives' | 'moves'
```
### Piece modifying function
```
type PieceModifyingFunctionType = <
  ModifiableValueType extends PieceModifiablesValueListType,
  ParamsType
>(modifiableValue: ModifiableValueType, params?: ParamsType) => PieceDescriptionType[ModifiableValueType]
```
### Status modifier
```
interface StatusModifierType {
  isBuff: boolean,
  modifyingFunction: PieceModifyingFunctionType
}
```
## Status modifying funciton
This is basically a function that sets an attribute of a piece to something. This means that the function can only return something that is a value type from the `<PieceDescriptionType>`. This works because we have this Record:
```
type PieceModifyingFunctionReturnType = PieceDescriptionType[keyof PieceDescriptionType]
```
