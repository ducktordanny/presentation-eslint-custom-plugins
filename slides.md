# ESLint: Custom plugins

----

## What is ESLint?

Statically analyzes your code to quickly find problems.

- Find issues
- Fix automatically
- Stricten code style

----

## Custom plugins?

An extension for ESLint that adds additional rules and configuration options.

!["This is custom" GIF](assets/this-is-custom.gif)

---

## Create you own plugin

!["Plugin" GIF](assets/plugin.gif)

----

## Create folder & naming

Create you folder with the following naming convention:

- `eslint-plugin-<plugin-name>`
- `@<scope>/eslint-plugin-<plugin-name>`
- `@<scope>/eslint-plugin`

Note: Creating a folder is important because Yeoman won't... But details in the next slide

----

## Generate files

Install [Yeoman generator](https://www.npmjs.com/package/generator-eslint), then use it inside your previously created folder:

- `yo eslint:plugin`
- `yo eslint:rule`

!["ESLint plugin and rule structure" PNG](assets/eslint-plugin-and-rule-structure.png)

----

## You're good to go!!!

Now you can:

- Configure your rules -> `meta` object
- Write you logic -> `create` function

!["Meta" PNG](assets/meta.png)

---

## Meta object?

```js
const meta = {
  type: 'problem', // `problem`, `suggestion`, or `layout`
  docs: {
    description: 'Finds configured words, bad words... ¯\\_(ツ)_/¯',
    recommended: false,
    url: null, // URL to the documentation page for this rule
  },
  messages: {badThingyHappened: 'How dare you???'},
  fixable: 'code', // Or `code` or `whitespace`
  schema: [], // Add a schema if the rule has options
};
```

----

## Create function?

Alma? yea...

---

## Sooo, that's it ¯\\\_(ツ)\_/¯

!["K, Bye" GIF](assets/k-bye.gif)
