import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';

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
    commonjs(),
  ],
}));
