# eslint-plugin-example

Simple example for Pain Tech presentation.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-example`:

```sh
npm install eslint-plugin-example --save-dev
```

## Usage

Add `example` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "example"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "example/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


