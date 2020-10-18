import fs from 'fs'
import crypto from 'crypto'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-scss'
import sass from 'sass'
const config = require('./config.js')

const outputDir = `${config.dir.dist}/${config.dir.assets}`
const production = process.env.NODE_ENV === 'production'
const sourcemap = !production ? 'inline' : false

// Prepare `css` output directory for `writeFileSync`
fs.mkdirSync(`${outputDir}/css`, { recursive: true })

export default {
  input: `${config.dir.assets}/js/main.js`,
  output: {
    dir: `${outputDir}/js`,
    entryFileNames: production ? '[name].[hash].js' : '[name].js',
    format: 'es',
    sourcemap
  },
  preserveEntrySignatures: false,
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    resolve(),
    commonjs(),
    production && babel({ babelHelpers: 'bundled' }),
    production && terser(),
    scss({
      sass: sass,
      output: styles => {
        const hash = crypto.createHash('sha256').update(styles).digest('hex')
        const filename = `main${production ? '.' + hash.substr(0, 6) : ''}.css`
        fs.writeFileSync(`${outputDir}/css/${filename}`, styles)
      },
      outputStyle: 'compressed',
      watch: `${config.dir.assets}/sass`
    })
  ]
}
