module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
          "files": ["*.js", "*.ts", "*.tsx"]
        }
      ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "import/no-unresolved":"off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "import/extensions": [
          "off",
          "ignorePackages",
          {
            "js": "never",
            "jsx": "never",
            "ts": "never",
            "tsx": "never"
          }
       ],
    }
};
