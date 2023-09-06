// import vue from 'rollup-plugin-vue'
// import css from 'rollup-plugin-css-only'
// import { name } from '../package.json'
// import typescript from 'rollup-plugin-typescript2'
// import { nodeResolve } from '@rollup/plugin-node-resolve'
// const file = type => `dist/${name}.${type}.js`
//   const overrides = {
//   compilerOptions: { declaration: true },
//     exclude: [
//       "node_modules",
//       // "src/App.vue",
//       // "src/main.ts"
//     ]
//   // include: ['src/main.ts']
// }
// export default {
//   // input: 'src/App.vue',
//   input: 'src/index.ts',
//
//   output: {
//     name,
//     file: file('esm'),
//     format: 'es'
//   },
//   plugins: [
//     nodeResolve(),
//     typescript({ tsconfigOverride: overrides}),
//     vue(),
//     css({ output: 'bundle.css' })
//   ],
//   external: ['vue', 'lodash-es']
// }


import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser';

import {name} from '../package.json'

const file = type => `dist/${name}.${type}.js`
const overrides = {
  compilerOptions: {declaration: true},
  exclude: ["node_modules"]
}
export {name, file}


export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    // xxx(),
    // terser(),
    nodeResolve(),
    typescript({tsconfigOverride: overrides}),
    vue(),
    css({output: 'bundle.css'})
  ],
  external: ['vue', 'lodash-es']
}
