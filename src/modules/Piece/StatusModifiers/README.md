# Buffs & debuffs, status modifying
Buffs and debuffs are status modifying functions that affect a piece. To use them, we apply them on a `Piece()` instance like so:
`Piece.addStatusModifier(<StatusModifierType | StatusModifierName>)`
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
>(modifiableValue: ModifiableValueType, params?: ParamsType) => void
```
### Status modifier
```
interface StatusModifierType {
  isBuff: boolean,
  modifyingFunction: PieceModifyingFunctionType
}
```
## Status modifying funciton
This is basically a function that sets an attribute of a piece to something. Let's say we want to add a permanent buff that gives a piece an extra life:

First, we create the function.
```
const knight = new Piece(`KNIGHT`)

knight.addStatusModifier(`ONE_UP`)
```
