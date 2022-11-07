# Shop3 Polaris Markdown

Polaris markdown component ready to use in Shopify applications.

## Installation

```bash
npm install --save @shop3/polaris-markdown
```

## Usage

```js
import PolarisMarkdown from '@shop3/polaris-markdown';

// import css
import '@shop3/polaris-markdown/styles/markdown.css';

const Page = () => {
    return (
        <PolarisMarkdown>
            {/* markdown content */}
        </PolarisMarkdown>
    )
}
```

## Storybook

Components are documented in Storybook at https://shop3.github.io/polaris-markdown/

# Development

## Installation

```bash
npm install

npm run husky:install
```

## Development

```bash
npm run develop
```
