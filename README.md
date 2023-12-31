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
- Zero Install! No `yarn install` required.
- When using Visual Code, everything will be auto formatted on save.
- Automatic reload when changing files running in `dev` mode.
- Jest as test tool and coverage.
- Docker for development and production.
- Pre-commit hooks.

## Commands

- `yarn dev` Running the application in 'watch' mode. Will reload the application on file change.
- `yarn build` Building the TypeScript project in the `./build` folder.
- `yarn lint` Lint the project with `eslint`.
- `yarn format` Format the files with `prettier`.
- `yarn test` Run all the `*.test.ts` files in the project.

## Docker

- To start the `development` environment, run `docker-compose -f ./docker/dev/docker-compose.dev.yaml up` in the root of the project.
- To build a production ready docker image, run `docker build -t yourname/appname -f docker/prod/Dockerfile .` in the root of the project.

## Known issues

- The VS Code extension for prettier is not working with Prettier v3 and Yarn's PnP.
