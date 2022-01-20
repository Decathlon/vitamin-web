import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

const TARGETS = [
  { format: 'cjs', dir: './dist', tsconfig: './tsconfig.cjs.json' },
  { format: 'es', file: pkg.module, tsconfig: './tsconfig.es.json' },
];

export default TARGETS.map((target) => ({
  input: 'src/index.ts',
  output: {
    file: target.file,
    format: target.format,
    exports: 'named',
    sourcemap: true,
    dir: target.dir,
  },
  plugins: [
    typescript({ tsconfig: target.tsconfig }),
    external(),
    resolve(),
    url({ exclude: ['**/*.svg'] }),
    svgr(),
    postcss({
      config: false,
    }),
    commonjs(),
  ],
}));
