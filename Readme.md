# React Card

This is an exploration journey from global styles to CSS-in-JS. It's meant to provide some introduction to the problems and potential solutions of creating and maintaining styles in a web application.

## Install and run

To install, just clone the repo and run:

```sh
yarn
```

To run it, simply:

```sh
yarn start:html
```

or

```sh
yarn start:react
```

### Steps

You can checkout a specific step at any point in time by changing the path to the included files.

#### For the HTML version

`index.html` should contain either `start/finish` CSS files.

- `<link rel="stylesheet" href="src/html-bem/01-global/style-finish.css">`
- `<link rel="stylesheet" href="src/html-bem/02-bem/style-finish.css">`

#### For the React version

`src/react/index.js` should contain either `start/finish` Card.js files.

- `import Card from './01-global/App-finish';`
- `import Card from './02-local/App-finish';`
- `import Card from './03-components/App-finish';`
- `import Card from './04-css-in-js/App-finish';`

You can code along with the `start` files.

## Slides

The Keynote slides are available [here](https://www.icloud.com/keynote/0fY6YnOqSmTO4L-V2lSeSSASg#ReactJS-Deadth-by-1000-selectors)
