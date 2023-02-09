import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const formatOutput = (format) => ({
  format,
  exports: 'named',
  sourcemap: false,
  dir: 'dist',
  preserveModules: true,
  preserveModulesRoot: 'src',
  entryFileNames: `[name].${format === 'es' ? 'js' : 'cjs'}`,
});

export default {
  input: 'src/index.ts',
  output: [formatOutput('es'), formatOutput('cjs')],
  plugins: [
    typescript(),
    external(),
    resolve(),
    url({ exclude: ['**/*.svg'] }),
    svgr(),
    postcss({
      config: false,
    }),
    commonjs(),
  ],
};
