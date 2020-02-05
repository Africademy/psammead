# ⛔️ This is an alpha component ⛔️

This component is currently tagged as alpha and is not suitable for production use. Following the passing of an accessibility review this component will be marked as ready for production and the alpha tag removed.

# psammead-byline - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-byline%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-byline%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-byline)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-byline) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-byline)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-byline&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/byline--containing-image) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-byline.svg)](https://www.npmjs.com/package/@bbc/psammead-byline) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `Byline` component is designed to display an author's full name, role, and optional avatar.

## Installation

```
npm install @bbc/psammead-byline --save
```

## Props

| Argument          | Type      | Required | Default   | Example                        |
| ----------------- | --------- | -------- | --------- | ------------------------------ |
| service           | string    | Yes      | N/A       | `'news'`                       |
| [avatar](#Avatar) | object    | No       | `null`    |  _See below._                  |
| name              | string    | Yes      | N/A       | `'John Smith'`                 |
| title             | string    | Yes      | N/A       | `'Art editor'`                 |

### Avatar

| Argument          | Type      | Required | Default   | Example                          |
| ----------------- | --------- | -------- | --------- | -------------------------------- |
| src               | string    | Yes      | N/A       | `'http://www.bbc.co.uk/img.jpg'` |
| alt               | string    | No       | `null`    | `'A person wearing glasses.'`    |

## Usage

<!-- Description of the component usage -->

```
import Byline from "@bbc/psammead-byline"
```

### When to use this component

<!-- Description of the where the component can be used -->

### When not to use this component

<!-- Description of the where the component shouldn't can be used -->

### Accessibility notes

<!-- Information about accessibility for this component -->

### Roadmap

<!-- Known future changes of the component -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead repository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
