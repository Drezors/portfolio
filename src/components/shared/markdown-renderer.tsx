'use client';

import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
  content: string;
  className?: string;
};

export default function MarkdownRenderer({ content, className }: Props) {
  return (
    <div className={cn(className, 'flex flex-col gap-2 text-foreground')}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h3: ({ children }) => <h3 className='text-lg font-semibold underline'>{children}</h3>,
          ul: ({ children }) => <ul className='list-disc ml-6 flex flex-col gap-0'>{children}</ul>,
          ol: ({ children }) => <ol className='flex flex-col gap-1 underline font-semibold'>{children}</ol>,
          li: ({ children }) => <li>{children}</li>,
          a: ({ href, children }) => (
            <a href={href} rel='noopener noreferrer' className='inline-flex gap-2 items-center underline text-primary'>
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
