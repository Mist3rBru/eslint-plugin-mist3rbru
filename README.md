# `@mist3rbru/eslint-config`

Is an ESLint config that provides comprehensive configurations for various environments, streamlining the linting process for Node.js, React, Jest, Jest-DOM, Vitest, and more. Each environment has its own preset configuration that can be easily applied in your project.

## Installation

To install `@mist3rbru/eslint-config`, use the following command:

```bash
pnpm add -D eslint @mist3rbru/eslint-config
```

## Usage

To use the plugin, create one of these config files in your project and extend the desired environment configuration. For example, to use Node.js with Jest configuration:

```js
// Recommended
// eslint.config.mjs
import config from '@mist3rbru/eslint-config'

export default config('node', 'jest', {
  // Overwrite rules
  rules: {},
})
```

Replace "node" and "jest" with the appropriate preset name for your project.

### Available Presets

- `node`: Node.js environment
- `react`: React environment
- `next`: Next environment
- `jest`: Jest environment
- `jest-dom`: Jest-DOM environment
- `vitest`: Vitest environment

## Included Configurations and Plugins

`@mist3rbru/eslint-config` includes opinionated configuration for popular ESLint plugins to enhance your linting experience. The following configurations and plugins are included:

- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier?tab=readme-ov-file#readme)
- [`eslint-plugin-promise`](https://github.com/eslint-community/eslint-plugin-promise?tab=readme-ov-file#readme)
- [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn?tab=readme-ov-file#readme)
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import?tab=readme-ov-file#readme)
- [`eslint-plugin-security`](https://github.com/eslint-community/eslint-plugin-security?tab=readme-ov-file#readme)
- [`eslint-plugin-no-secrets`](https://github.com/nickdeis/eslint-plugin-no-secrets?tab=readme-ov-file#readme)
- [`eslint-plugin-deprecation`](https://github.com/gund/eslint-plugin-deprecation?tab=readme-ov-file#readme)
- [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#readme)
- [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks#readme)
- [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y?tab=readme-ov-file#readme)
- [`@next/eslint-plugin-next`](https://nextjs.org/docs/pages/building-your-application/configuring/eslint#eslint-plugin)
- [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest?tab=readme-ov-file#readme)
- [`eslint-plugin-jest-dom`](https://github.com/testing-library/eslint-plugin-jest-dom?tab=readme-ov-file#readme)
- [`eslint-plugin-vitest`](https://github.com/veritem/eslint-plugin-vitest?tab=readme-ov-file#readme)

## License

This project is licensed under the MIT License.
