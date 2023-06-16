module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
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
  },
  plugins: [
    'html', // Enable parsing of HTML within JavaScript source code
    'jquery' // Enable rules specific to jQuery
  ]
}
