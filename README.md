# Boilerplate Node.js Typescript project

## Contents

- [Prerequisites](#prerequisites)
- [Installed Packages](#installed-packages)
- [Features](#features)
- [Commands](#commands)

## Prerequisites

Please install `yarn`. See documentation [here](https://yarnpkg.com/getting-started/install).

## Installed Packages

- TypeScript 5
- ESLint
- Prettier
- Jest

## Features

- Using Yarn's Plug'n'Play.
- When using Visual Code, everything will be auto formatted on save.
- Automatic reload when changing files running in `dev` mode.
- Jest as test tool and coverage.

## Commands

- `yarn dev` Running the application in 'watch' mode. Will reload the application on file change.
- `yarn build` Building the TypeScript project in the `./build` folder.
- `yarn lint` Lint the project with `eslint`.
- `yarn format` Format the files with `prettier`.
- `yarn test` Run all the `*.test.ts` files in the project.

## Known issues

- The VS Code extension for prettier is not working with Prettier v3 and Yarn's PnP.
