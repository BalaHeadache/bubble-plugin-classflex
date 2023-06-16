**⚠ Warning**

*This is a template for creating plugins for bubble.  It is not meant to be a plugin it self but provides a structure for creating Bubble.io plugins on.*

</br>

**Project Team**
| | |
|:-:|:-|
|<img src="https://s3.amazonaws.com/appforest_uf/f1589746075278x872742729420838900/ali-farahat-profile-square.jpg" alt="Ali Farahat" width="65px" height="65px" />|**Ali Farahat** </br> *Development Manager* </br> ali@theupstarters.com|
|<img src="#" alt="Nathaniel Smithies" width="65px" height="65px" />|**Nathaniel Smithies** </br> *Product Manager* </br> nathaniel@theupstarters.com|

</br>

</br>

# Prerequisite

Instruction below assume that you have already installed the following

- VSCode
  - [Eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Node.js
- Git

# Instructions

- Clone repo with git or github desktop

# VS Code Environment Setup

## VS Code Environment

Install eslint extension from the "Extensions" tab [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Initial Setup

*Using the VSCode terminal please complete the following steps*

Install eslint globally if you have **not done** so already ```npm install -g eslint```

Initialize this package and update corresponding data as needed by running ```npm init```

Initialize ESLint using ```eslint --init``` Follow the guide in the terminal with the following configurations

- **How would you like to use ESLint?**
  - To check syntax, find problems, and enforce code style
- **What type of modules does your project use?**
  - CommonJS (require/exports)
- **Which framework does your project use?**
  - None of these (you may select react if required)
- **Does your project use TypeScript?**
  - No
- **Where does your code run?**
  - Browser - Only for plugins that run in the browser
  - Node - If the plugin is meant to run in both the browser and server
- **How would you like to define a style for your project?**
  - Use a popular style guide
- **Which style guide do you want to follow?**
  - Standard: https://github.com/standard/standard
- **What format do you want your config file to be in?**
  - JavaScript

> If asked to install additional files please **Accept**

</br>

</br>

## Installing other ESLint dependencies & plugins

*Using the vs code terminal please complete the following steps*

- Install ESLint Import Plugin by running ```npm install eslint-plugin-import --save-dev```
- Install ESLint jQuery Plugin by running ```npm install eslint-plugin-jquery --save-dev``` [Docs](https://github.com/dgraham/eslint-plugin-jquery)
- Install ESLint HTML Plugin by running ```npm install eslint-plugin-html --save-dev``` [Docs](https://github.com/BenoitZugmeyer/eslint-plugin-html/)
- Open to edit the ```.eslintrc.js```
  - Please confirm that the following keys under ```env``` if not please add it to the end

    ```json
    env: {
        browser: true,
        commonjs: true,
        es2020: true,
        jquery: true,
    }
    ```

  - add the below snippet under the **globals** section.  If globals is not available please add it

    ```json
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        //Bubble.io Global Variables
        instance: 'readonly',
        properties:'readonly',
        context: 'readonly'
    }
    ```

  - Please add the following *rules* under ```rules```

    ```json
    rules: {
        'linebreak-style': 0,
        'func-names': 0,
        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always',
        }],
        'no-param-reassign': ['error', { props: false }],
        'consistent-return': 0,
    }
    ```

  - Please add the following *parserOptions* under ```parserOptions```

    ```json
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module'
    }
    ```

  - Add the following *plugins* at the end of the file or in the ```plugins``` object

    ```json
    plugins: [
        'html',
        'jquery'
    ]
    ```

So when completed the overall ```.eslintrc.js``` file should look like this.  After this initial setup your welcome to add/amend rules as needed and where required

```js
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jquery: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'linebreak-style': 0,
    'func-names': 0,
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    'no-param-reassign': ['error', { props: false }],
    'consistent-return': 0
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    // Bubble.io Global Variables
    instance: 'readonly',
    properties: 'readonly',
    context: 'readonly'
  },
  plugins: [
    'html',
    'jquery'
  ]
}
```

> Before proceeding please save all changes and restart VSCode

</br>

</br>

## Adding VSCode Autosave

- Create a directory called *.vscode* by running ```mkdir .vscode```
- Create a file called *settings.json* by running ```echo enter your text here > .vscode/settings.json```
- Copy and past the below code in the new *settings.json* 
  
  ```json
  {
    "editor.codeActionsOnSave": {"source.fixAll.eslint": true},
    "eslint.validate": ["javascript", "html"],
    "editor.bracketPairColorization.enabled": true,
    "editor.guides.bracketPairs":"active"
  }
  ```
