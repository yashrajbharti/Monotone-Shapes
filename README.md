# Monotone-Shapes

Abstract Icons to be used as a Design File from Figma or an NPM package as web components. ⬛️⬜️

## Homepage

[Landing page for Monotone Shapes](https://yashrajbharti.github.io/Monotone-Shapes/)

## Figma Abstract Shapes Icon Pack

[Figma link for Monotone Shapes](https://www.figma.com/community/file/1433176090789013552/monotone-shapes)

## NPM link

[NPM link for Monotone Shapes](https://www.npmjs.com/package/monotone-shapes)

## Features:

- Aesthetic and easy to use.
- Multi-purpose abstract shapes.
- Also comes as a Figma Design file, for your design needs 🎨.

## Installation:

Simply use npm or unpkg to install:

```bash
npm install monotone-shapes
```

```html
<script src="https://unpkg.com/monotone-shapes@1.0.5/src/app.js"></script>
```

then import using:

```js
import "monotone-shapes";
```

## Usage:

Simply use as web components:

```html
<monotone-shape shape-id="" text=""></monotone-shape>
<monotone-shape shape-id="1" text=""></monotone-shape>
<monotone-shape shape-id="" text="Some cool text"></monotone-shape>
<monotone-shape shape-id="1" text="" height="120px" width="120px"></monotone-shape>
```

It takes in the shape number or any string as input, which then shows the given shape as an SVG. If a shape id (any number between 1 to 24) is given, it will show the SVG for that shape. For string input in the `text` attribute, it will generate a unique SVG based on the text.

> [!CAUTION]
> Note: If both `shape-id` and `text` are given, `text` takes priority.

### Attributes:

| Attribute   | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| `shape-id`  | A number between 1 and 24 to specify a shape. This is an optional attribute. |
| `text`      | Any string of text that will be used to generate a random SVG. If provided, it takes priority over `shape-id`. |
| `height`    | Optional. Sets the height of the shape. Default is `24px`. Example: `height="120px"`. |
| `width`     | Optional. Sets the width of the shape. Default is `24px`. Example: `width="120px"`. |

For example:

```html
<monotone-shape shape-id="1" text="Some cool text" height="120px" width="120px"></monotone-shape>
```

## Shapes:

Just 24 shapes, keeping it unique, lightweight and simple:

![shapes](https://raw.githubusercontent.com/yashrajbharti/Monotone-Shapes/main/assets/Monotone%20Shapes.png)

## Contributing

Fill up issues, bugs or feature requests in our issue tracker. Please be very descriptive and clear so it is easier to help you. If you want to contribute to this project you can open a pull request at time you like.

## License

The Monotone Shapes project is licensed under the [MIT license](LICENSE).
