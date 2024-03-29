# The `Tile()` class
An object that describes a `Tile` entity. It's meant to be instantiated as an optional property of the `<DungeonLayoutType>Dungeon.layout`
## Types
### Feature name
```
enum featuresList {
  TELEPORT,
  FREEZE,
  LADDER,
  SPAWNER,
  ARMOR,
  ADD_MOVE
}

type FeatureNameType = keyof typeof featuresList
```
### Feature
```
interface TileFeatureType {
  name
}
```
### Features List
`type TileFeaturesListType = TileFeature[]`
## Instantiation
The `Tile()` object can receive parameters `<TileFeaturesListType>TileFeaturesList? <boolean>isActive?`. If no arguments are passed, it will be instantiated as a usable empty active tile.
```
import Tile from '@modules/Dungeon/Tile/Tile'

const tile = new Tile(<TileFeaturesListType>tileFeaturesList, <boolean>isActive)
```
## Properties
### Features (`<TileFeaturesListType>Tile.features`)
## Methods
### Active setter (`Tile.setIsActive(<boolean>isActive) => void`)
### Features setter (`Tile.setFeatures(<TileFeaturesListType>) => void`)
Sets the feature list of a tile
### Features getter (`Tile.getFeatures() => <TileFeaturesListType>`)
Gets the feature list of a tile
### Add feature (`Tile.addFeature(<TileFeatureType>) => void`)
Adds a feature to the list
### Remove all features (`Tile.removeAllFeatures() => void`)
Removes all features from the tile features list
### Activate feature (`Tile.activateFeature(featureName: <FeatureNameType>, isActive?: boolean) => void`)
Sets an existing feature from the list as active or inactive. If the `isActive` parameter isn't given, it will toggle it.
### Toggle all features (`Tile.toggleAllFeatures(isActive: <boolean>)`)
Sets all features as inactive
### Is normal type (`Tile.isNormalTile() => boolean`)
Returns true if the tile has no features
