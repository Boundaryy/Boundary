import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import terser from '@rollup/plugin-terser';  // 기본 임포트
import css from 'rollup-plugin-css-only';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js'  // output file path
  },
  plugins: [
    svelte({
      compilerOptions: {
        dev: !production
      }
    }),
    css({ output: 'public/build/bundle.css' }),  // output path for CSS

    resolve({
      browser: true,
      dedupe: ['svelte']
    }),
    commonjs(),

    !production && livereload('public/build'),  // livereload path

    production && terser()  // 플러그인 사용
  ],
  watch: {
    clearScreen: false
  }
};
