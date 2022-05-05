import React from 'react';
import { Card, Page } from '@shopify/polaris';

import PolarisMarkdown from '../src';

export default {
  title: 'Markdown/Polaris Markdown',
  component: PolarisMarkdown,
};

const Template = (args: any) => (
  <Page narrowWidth>
    <Card sectioned>
      <PolarisMarkdown {...args} />
    </Card>
  </Page>
);

export const Example: any = Template.bind({});

Example.args = {
  children: `
# Markdown Text
---
This is a **markdown** component using **Polaris** components.

Link: [Go to Shopify](https://shopify.com)

Email: <fake@example.com>

Code: \`code\`

Strong: **Strong text**

Subdued: *Subdued text*

> ## Block Title
>
> This is a blockquote
>
![placeholder image](https://via.placeholder.com/1500)
`,
};
