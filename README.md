# Jest Training Repo

This repository is intended to introduce developers to the [JestJS](https://jestjs.io/) and [React Testing Library](https://testing-library.com/) frameworks. This repository accompanies a [slide deck](https://docs.google.com/presentation/d/1P2c1r0UFNFSu63X7iaM97pWjkRQ4VrwIdpKcZ-A6-8Q/edit?usp=sharing) and is intended to be forked and filled in while following along with the presentation.

The repository is organized into three main sections within the `/src` directory, as described below:

* **exercises** - A folder containing activity files intended to be completed by the user. These files are referenced in the accompanying presentation (see link above) and have prompts that can be filled in. Answers to these activities are in the directories below.
* **intro** - An introduction to JestJS (see link above) using functions, arrays, and objects. References the `intro.test.ts` file in the `/exercises` directory
* **app** - An introduction to React Training Library (see link above) in combination with JestJS. References the `react.test.tsx` file in the `/exercises` directory.

## Requirements

This repository is built using Microsoft's [Typescript](https://www.typescriptlang.org/) language and the [Yarn Package Manager](https://yarnpkg.com/), and requires an installation of the [typescript npm package](https://www.npmjs.com/package/typescript). This is included in this repository's `package.json` file, and can be installed using the `yarn` or `yarn install` commands. The Typescript project options can be configured using the `tsconfig.json` file.

This app is additionally configured with the [BabelJS](https://babeljs.io/), [ESLint](https://eslint.org/), and [Webpack](https://webpack.js.org/) frameworks. These can be configured with the `babel.config.js`, `.eslintrc.js`, and `webpack.config.js` files, respectively.

## Usage

This app is based on the `JestJS CLI`, and all test files can be run through the `yarn test` command as specified in the `package.json` file. The `package.json` file also specifies `yarn start` which runs the files contained within the `/app` directory, and `yarn lint` which runs the `ESLint CLI` to check the project for errors.

To compile the project to native JS which can be run in the browser, run the Typescript compiler with the `tsc` command. This will take configuration options from the `tsconfig.json` file and compile the project's `*.ts` files into `*.js` files within a created `/dist` directory.

## License

This repository is licensed under the MIT license.

## Credits

This repository was created by Adam McQuilkin, Dartmouth '22, 7/31/2020.
