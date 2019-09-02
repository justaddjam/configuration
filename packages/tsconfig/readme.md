# @justaddjam/tsconfig

A set of TypeScript compiler configurations.

```json
{
    "extends": "@justaddjam/tsconfig/node",
    "compilerOptions": {
        "outDir": "./dist"
    },
    "exclude": [
        "./node_modules"
    ],
    "include": [
        "./**/*.ts"
    ]
}

```

## base

Sensible general defaults (mainly used as a base for the following configuration files).

## browser

Sensible defaults for browser based applications.

## node

Sensible defaults for nodejs based applications.
