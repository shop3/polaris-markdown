# Strapify Polaris Common

Collection of Polaris components ready to use in your applications.

## Installation

```bash
npm install --save @strapify/polaris-markdown
```

## Usage

```js
import PolarisMarkdown from '@strapify/polaris-markdown';

// import css
import '@strapify/polaris-markdown/styles/markdown.css';

const Page = () => {
    return (
        <PolarisMarkdown>
            {/* markdown content */}
        </PolarisMarkdown>
    )
}
```

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
