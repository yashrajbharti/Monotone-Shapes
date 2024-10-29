# Monotone-Shapes

Abstract Icons to be used as a Design File from Figma or an NPM package as web components.  ⬛️⬜️

## Figma Abstract Shapes Icon Pack
This is the [Figma link for Monotone Shapes](https://www.figma.com/community/file/1433176090789013552/monotone-shapes).


## Features:

- Aesthetic and easy to use.
- Multi-purpose abstract shapes.
- Also comes as a Figma Design file, for your design needs.

## Usage:

```html
<monotone-shape shape-id="" text=""></monotone-shape>
<monotone-shape shape-id="1" text=""></monotone-shape>
<monotone-shape shape-id="" text="Some cool text"></monotone-shape>
```

It takes in the shape number or any string as an input, which then shows up the given shape as an svg. If shape id (any number between 1 to 24 is given), it will show the SVG at that number. For string input in text attribute, it will generate a value from the given text and always show the same SVG for the same text. 

> ❗ Note: If both shape-id and text are given, text has the preference.
