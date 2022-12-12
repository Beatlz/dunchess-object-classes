import type { FeatureNameType, TileFeatureType, TileFeaturesListType } from "@/types/TileType"

class Tile {
	tilesFeaturesList: TileFeaturesListType

	constructor(tilesFeaturesList?: TileFeaturesListType) {
		this.tilesFeaturesList = tilesFeaturesList || [{
			name: `SPAWNER`,
			isActive: true,
			action: (params: any): any => `any`, // To do: rework
		}]
	}

	setFeatures(tileFeaturesList: TileFeaturesListType): void {
		this.tilesFeaturesList = tileFeaturesList
	}

	getFeatures(): TileFeaturesListType {
		return this.tilesFeaturesList
	}

	addFeature(tileFeature: TileFeatureType): void {
		this.tilesFeaturesList.push(tileFeature)
	}

	activateFeature(featureName: FeatureNameType, isActive?: boolean): void {
		const index = this.tilesFeaturesList.findIndex((feature) => feature.name === featureName)
    
		this.tilesFeaturesList[index].isActive = isActive ?? !this.tilesFeaturesList[index].isActive
	}
  
	toggleAllFeatures(isActive: boolean): void {
		this.tilesFeaturesList.forEach((feature): void => {
			feature.isActive = isActive
		})
	}
}

export default Tile
