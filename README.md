# eslint-config-exaprint

[![NPM](https://nodei.co/npm/eslint-config-exaprint.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/eslint-config-exaprint)

The ESLint rules are strucured by development environment, the default configuration entry point extends what we call "common" rules, that's the rules that can be applied in any javascript environment (browser, server, etc). Additionally, we have a bunch of specific rules by development environment. You will find rules for the browser, node but also for es6, Amazon Lambda service and many others in the future.

## Rules

| Name  | Description      |
|---------------------|-----------------------------------------------|
| common | It stands for the global rules that can be applied on any javascript environment. It is included by default in the exaprint eslint configuration entry point. (default) |
| browser | It stands for the configuration related to the client development, it defines a specific environment and specific rules. |
| node | It stands for the configuration related to the server development. It can contains environment information as node, mocha, jest and many others but also specific rules that applies to the node.js runtine. |
| es6 | It contains ES6 rules and sets the environment to ECMAScript 6. |
| lambda | It stands for the configuration related to a node 4.3 environment on Amazon AWS and specific rules. |

The details of the rules defined can be found on the [ESLint website](http://eslint.org/docs/rules/).


## Install

First, install developement dependencies using npm.

```shell
npm install --save-dev eslint eslint-config-exaprint
```
## Usage

Once ESLint dependencies installed, simply extend the exaprint rules you need. For example, you can directly add eslint config in the package.json file as below.

```json
"eslintConfig": {
  "extends": [
    "exaprint",
    "exaprint/rules/es6",
    "exaprint/rules/node"
  ]
}
```

Or create a dedicated "".eslintrc.json" file to store all the eslint configuration.

```json
{
  "extends": [
    "exaprint",
    "exaprint/rules/browser",
    "exaprint/rules/es6"
  ]
}
```

## Contribution

Feel free to contribute to the rules trying to respect the structure applied to this configuration. We use Git flow to manage our feature and release process, you can get more information about the way to use it to be able to contribute to this project at the following [link](http://danielkummer.github.io/git-flow-cheatsheet/).

If you think that some rules should be removed or are missing, do not hesitate to open an [issue](https://github.com/exaprint/eslint-config-exaprint/issues) by describing the thing.
These rules are used internally in the Exaprint javascript project but feel free to use it if you like it.
