# Ajax

A XMLHttpRequest wrapper.

## Use in your App

Using bower:

```sh
bower install https://gitlab.com/chialab/ajax-js.git
```

Using npm:

```sh
npm install https://gitlab.com/chialab/ajax-js.git
```

Or download [here](https://gitlab.com/chialab/ajax-js/repository/archive.zip?ref=master)

## Development

### Install dependencies

#### Quick-start

With Node.js and Babel installed, run the following one liner from the root of the project:

```sh
npm install -g grunt bower && npm install
```

#### Prerequisites

The project requires the following major dependencies:

- Node.js, used to run JavaScript tools from the command line.
- npm, the node package manager, installed with Node.js and used to install Node.js packages.
- babel, an EcmaScript 2015 transpiler.
- karma, a test runner for javascript.
- grunt, a Node.js-based task runner.
- bower, a Node.js-based package manager used to install front-end packages.

**To install dependencies:**

1)  Check your Node.js version.

```sh
node --version
```

The version should be at or above 0.12.x. 

2)  If you don't have Node.js installed, or you have a lower version, go to [nodejs.org](https://nodejs.org) and click on the big green Install button. 

3)  Install `grunt`, `karma`, `bower` and `babel` globally.

```sh
npm install -g grunt babel karma-cli bower
```

This lets you run `grunt`, `karma`, `bower` and `babel` from the command line.

4)  Install the project's local `npm` and `bower` dependencies.

```sh
npm install && bower install
```

### Build the module

Simply use grunt for compiling and building the module:

```sh
grunt build
```

### Build the documentation

Simply use grunt for compiling and building the module's documentation:

```sh
grunt docs
```

### Run tests

Simply use grunt for testing the module via karma:

```sh
grunt test
```