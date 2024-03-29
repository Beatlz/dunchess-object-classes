import typescript from '@rollup/plugin-typescript'
import dts from "rollup-plugin-dts"

const config = [
	{
		input: `src/index.ts`,
		output: {
			file: `build/index.js`,
			format: `cjs`,
			sourcemap: true,
		},
		external: [],
		plugins: [typescript()],
	},
	{
		input: `build/index.d.ts`,
		output: {
			file: `build/index.d.ts`,
			format: `es`,
		},
		plugins: [dts()],
	},
]

export default config
