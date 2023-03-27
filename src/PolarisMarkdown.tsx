import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Text, Link, List, LegacyStack, InlineCode } from '@shopify/polaris';

interface Props {
  children: string;
}

const PolarisMarkdown: React.FC<Props> = ({ children = '' }) => {
  const content = children.replace(/\n/g, '  \n');
  return (
    <LegacyStack vertical>
      <ReactMarkdown
        className={['Polaris-TextContainer', 'Markdown--container'].join(' ')}
        components={{
          h1: ({ children }) => (
            <Text variant="heading4xl" as="h1">
              {children}
            </Text>
          ),
          h2: ({ children }) => (
            <Text variant="heading3xl" as="h2">
              {children}
            </Text>
          ),
          h3: ({ children }) => (
            <Text variant="heading2xl" as="h3">
              {children}
            </Text>
          ),
          h4: ({ children }) => (
            <Text variant="headingXl" as="h4">
              {children}
            </Text>
          ),
          h5: ({ children }) => (
            <Text variant="headingLg" as="h5">
              {children}
            </Text>
          ),
          h6: ({ children }) => (
            <Text variant="headingMd" as="h6">
              {children}
            </Text>
          ),
          em: ({ children }) => <Text as="span" color="subdued">{children}</Text>,
          strong: ({ children }) => <Text as="span" fontWeight="semibold" >{children}</Text>,
          a: ({ children, href }) => <Link url={href}>{children}</Link>,
          ol: ({ children }) => <List type="number">{children}</List>,
          ul: ({ children }) => <List type="bullet">{children}</List>,
          li: ({ children }) => <List.Item>{children}</List.Item>,
          img: ({ src, alt }) => <img className="Markdown--img" src={src} alt={alt} />,
          hr: () => <hr className="Markdown--hr" />,
          code: ({ children }) => <Text as="span"><InlineCode>{children}</InlineCode></Text>,
          blockquote: ({ children }) => (
            <blockquote className="Markdown--blockquote">
              <LegacyStack spacing="tight">{children}</LegacyStack>
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </LegacyStack>
  );
};

export default PolarisMarkdown;
export type { Props as PolarisMarkdownProps };
