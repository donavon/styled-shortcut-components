# Styled Shortcut Components 💅
[![Build Status](https://travis-ci.org/donavon/styled-shortcut-components.svg?branch=master)](https://travis-ci.org/donavon/styled-shortcut-components)
[![npm version](https://img.shields.io/npm/v/styled-shortcut-components.svg)](https://www.npmjs.com/package/styled-shortcut-components)
[![Coverage Status](https://coveralls.io/repos/github/donavon/styled-shortcut-components/badge.svg?branch=master)](https://coveralls.io/github/donavon/styled-shortcut-components?branch=master)

TL;DR

* A convenience package that wraps
[Styled Components](https://www.npmjs.com/package/styled-components) 💅
with
[Styled Shortcuts](https://www.npmjs.com/package/styled-shortcuts)
so you can do this:
  ```js
  font-size: ${'fontSize:px'};
  ```
  instead of this:
  ```js
  font-size: ${({ fontSize }) => `${fontSize}px`};
  ```

## Install
```bash
$ npm i --save styled-shortcut-components
```

## Usage
All you need to do to get the power of Styled Shortcuts is change your `import` from this:
```js
import styled from 'styled-components';
```
to this:
```js
import styled from 'styled-shortcut-components';
```

See
[Styled Components](https://www.styled-components.com/)
and [Styled Shortcuts](https://www.npmjs.com/package/styled-shortcuts)
for complete details.
