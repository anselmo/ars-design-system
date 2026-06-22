# ARS Icons

68 curated Iconoir icons for the ARS Design System, distributed as an SVG sprite.

## Setup

1. Copy the contents of `sprite.svg`
2. Paste into your HTML `<body>` (typically in root layout/template):

```html
<body>
  <svg style="display: none" xmlns="http://www.w3.org/2000/svg">
    <!-- sprite contents here -->
  </svg>
</body>
```

## Usage

```html
<svg class="icon icon-lg">
  <use href="#icon-search"/>
</svg>
```

See the [full documentation](https://ars-design-system.dev/icons) for examples, size variants, and the complete icon reference.

## License

Icons from [Iconoir](https://iconoir.com/) (MIT License).
