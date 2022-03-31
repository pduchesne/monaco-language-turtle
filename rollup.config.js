import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const plugins = [
    resolve(),
    typescript({
        typescript: require('ttypescript'),
        tsconfigOverride: {
            // general tsconfig across packages uses CommonJS as loading scheme.
            // Rollup requires ES2015
            compilerOptions: { module: 'ES2015' },
        },
        //useTsconfigDeclarationDir: true,
    }),

    commonjs(),
];

export default [
    {
        input: 'src/monaco.ttl.ts',
        output: [
            {
                file: pkg.module,
                format: 'esm',
                sourcemap: true,
            },
            {
                file: pkg.main,
                format: 'cjs',
                sourcemap: true,
            },
        ],
        plugins,
        external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    },
];