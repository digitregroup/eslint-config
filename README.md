# DigitRE group's ESLint configuration for all javascript environment.

[![NPM Badge](https://img.shields.io/npm/v/@digitregroup/eslint-config.svg)](https://www.npmjs.com/package/@digitregroup/eslint-config)
[![CircleCI](https://circleci.com/bb/digitregroup/eslint-config.svg?style=shield)](https://circleci.com/bb/digitregroup/eslint-config)

The ESLint rules are strucured by development environment, the default configuration entry point extends what we call "common" rules, that's the rules that can be applied in any javascript environment (browser, server, etc). Additionally, we have a bunch of specific rules by development environment. You will find rules for the browser, node but also for es6, Amazon Lambda service and many others in the future.

## Rules

| Name  | Description      |
|---------------------|-----------------------------------------------|
| common | It stands for the global rules that can be applied on any javascript environment. It is included by default in the eslint configuration entry point. (default) |
| browser | It stands for the configuration related to the client development, it defines a specific environment and specific rules. |
| node | It stands for the configuration related to the server development. It can contains environment information as node, mocha, jest and many others but also specific rules that applies to the node.js runtine. |
| es6 | It contains ES6 rules and sets the environment to ECMAScript 6. |
| lambda | It stands for the configuration related to a node 4.3 environment on Amazon AWS and specific rules. |
| prettier | It stand for the configuration related to prettier usage, disabling conflicting rules. ([Documentation](https://github.com/prettier/eslint-config-prettier)) |

The details of the rules defined can be found on the [ESLint website](http://eslint.org/docs/rules/).


## Install

First, install developement dependencies using npm.

```shell
npm install --save-dev eslint eslint-config-prettier @digitregroup/eslint-config
```
or
```shell
yarn add -D eslint eslint-config-prettier @digitregroup/eslint-config
```
## Usage

Once ESLint dependencies installed, simply extend the rules you need. For example, you can directly add eslint config in the package.json file as below.

```json
"eslintConfig": {
  "extends": [
    "@digitregroup/eslint-config",
    "@digitregroup/eslint-config/rules/es6",
    "@digitregroup/eslint-config/rules/node",
    "@digitregroup/eslint-config/rules/prettier"
  ]
}
```

Or create a dedicated "".eslintrc.json" file to store all the eslint configuration.

```json
{
  "extends": [
    "@digitregroup/eslint-config",
    "@digitregroup/eslint-config/rules/browser",
    "@digitregroup/eslint-config/rules/es6",
    "@digitregroup/eslint-config/rules/prettier"
  ]
}
```

## Contribution

Feel free to contribute to the rules trying to respect the structure applied to this configuration. We use Git flow to manage our feature and release process, you can get more information about the way to use it to be able to contribute to this project at the following [link](http://danielkummer.github.io/git-flow-cheatsheet/).

If you think that some rules should be removed or are missing, do not hesitate to open an [issue](https://bitbucket.org/digitregroup/eslint-config/issues) by describing the thing.
These rules are used internally in the DigitRE Group javascript projects but feel free to use it if you like it.
