# VS Code Environment Setup

## VS Code Environment

Install eslint extension from the "Extensions" tab [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Initial Setup

* Using the VSCode terminal please complete the following steps*

Install eslint globally if you have **not done** so already ```npm install -g eslint```

Initialize this package and update corresponding data as needed by running ```npm init```

Initialize ESLint using ```eslint --init``` Follow the guide in the terminal with the following configurations

* **How would you like to use ESLint?**
  * To check syntax, find problems, and enforce code style
* **What type of modules does your project use?**
  * CommonJS (require/exports)
* **Which framework does your project use?**
  * None of these (you may select react if required)
* **Does your project use TypeScript?**
  * No
* **Where does your code run?**
  * Browser - Only for plugins that run in the browser
  * Node - If the plugin is meant to run in both the browser and server
* **How would you like to define a style for your project?**
  * Use a popular style guide
* **Which style guide do you want to follow?**
  * Standard: <https://github.com/standard/standard>
* **What format do you want your config file to be in?**
  * JavaScript

> If asked to install additional files please **Accept**

</br>

</br>

## Installing other ESLint dependencies & plugins

* Using the vs code terminal please complete the following steps*

* Install ESLint Import Plugin by running ```npm install eslint-plugin-import --save-dev```
* Install ESLint jQuery Plugin by running ```npm install eslint-plugin-jquery --save-dev``` [Docs](https://github.com/dgraham/eslint-plugin-jquery)
* Install ESLint HTML Plugin by running ```npm install eslint-plugin-html --save-dev``` [Docs](https://github.com/BenoitZugmeyer/eslint-plugin-html/)
* Open to edit the ```.eslintrc.js```

So when completed the overall ```.eslintrc.js``` file should look like this.  After this initial setup your welcome to add/amend rules as needed and where required

```js
module.exports = {
  env: {
    browser: true, // Define global variables exposed by modern browsers
    node: true, // Define global variables exposed by Node.js
    commonjs: true, // Specify environments which are CommonJS.
    es2021: true, // Enable all ECMAScript 2021 globals and set the ecmaVersion parser option to 12.
    jquery: true // Define global variables exposed by jQuery
  },
  extends: [
    'standard' // Use the standard preset which includes a number of good practices by default
  ],
  parserOptions: {
    ecmaVersion: 12, // Specify the version of ECMAScript syntax you want to use.
    sourceType: 'module' // Indicates the source code is in ECMAScript modules
  },
  rules: {
    'linebreak-style': 0, // Disable enforcing consistent linebreak style (Unix \n or Windows \r\n)
    'func-names': 0, // Disable requiring function expressions to have a name
    'space-before-function-paren': ['error', {
      anonymous: 'never', // Require no space before anonymous function parentheses
      named: 'never', // Require no space before named function parentheses
      asyncArrow: 'always' // Require space before async arrow function parentheses
    }],
    'no-param-reassign': ['error', { props: false }], // Disallow reassignment of function parameters but allows modification of properties of parameters
    'consistent-return': 0, // Disable requiring return statements to always specify values
    'prefer-const': 'off', // Turn off preferring const over let when variable is not reassigned
    semi: ['error', 'always'], // Require semicolons at the end of statements
    quotes: ['error', 'single'], // Require the use of single quotes
    eqeqeq: 'error' // Require the use of === and !==
  },
  globals: {
    Atomics: 'readonly', // Atomics object is read-only.
    SharedArrayBuffer: 'readonly', // SharedArrayBuffer object is read-only.
    // Bubble.io Global Variables
    instance: 'readonly', // 'instance' global variable is read-only.
    properties: 'readonly' // 'properties' global variable is read-only.
  },
  plugins: [
    'html', // Enable parsing of HTML within JavaScript source code
    'jquery' // Enable rules specific to jQuery
  ]
};

```

> Before proceeding please save all changes and restart VSCode

</br>

</br>

## Adding VSCode Autosave

* Create a directory called *.vscode* by running ```mkdir .vscode```
* Create a file called *settings.json* by running ```echo enter your text here > .vscode/settings.json```
* Copy and past the below code in the new *settings.json*
  
  ```JSON
  {
    "editor.codeActionsOnSave": {"source.fixAll.eslint": true},
    "eslint.validate": ["javascript", "html"]
  }
  ```
