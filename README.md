# 61040-fa23-lec-vue

This repository contains the Vue.js code we worked through in lecture on Wed Oct 4. The `main` branch contains the codebase as we left it at the end of lecture (with one [minor addition](https://github.com/61040-fa23/lec-vue/commit/2d7c44f5495e75881eb8b1412848d55345c333de) to programmatically route the app based on the user's authenticated state). 

You can find the starting state of the codebase (i.e., the codebase we began lecture with) in the [`start` branch](https://github.com/61040-fa23/lec-vue/tree/start).

And, you can find a screen recording of the way we worked through the codebase in lecture [here](https://mit.zoom.us/rec/share/F0SmAZUuUWYkjfBoIYwfv1H9xceZRO6vCq9_Fw49zknCUEE7mmUGtdLtFUSqyXWb.b9i1rl5bzwK_2vNF). 

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
