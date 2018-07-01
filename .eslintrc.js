module.exports = {
    "extends": "airbnb",
    "globals": {
        "it": false,
        "describe": false,
        "beforeEach": false,
        "afterEach": false
    },
    "plugins": [
        "standard",
        "promise"
    ],
     "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "newIsCap": false,
        "capIsNew": false
    },
    "rules": {
 		"indent": ["error", 4],
        "semi": 2,
        "new-cap": 0
    }
};