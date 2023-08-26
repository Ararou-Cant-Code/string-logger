import { defineConfig } from 'tsup';
import { esbuildPluginFilePathExtensions } from 'esbuild-plugin-file-path-extensions';

export default defineConfig({
	target: 'esnext',
	clean: false,
	minify: true,
	shims: false,
	format: ['cjs'],
	entry: ['src/**/*.ts', '!src/**/*.d.ts'],
	tsconfig: 'tsconfig.json',
	bundle: true,
	keepNames: true,
	splitting: false,
	skipNodeModulesBundle: true,
	define: {
		this: 'global'
	},
});
