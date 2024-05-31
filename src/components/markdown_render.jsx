import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export default function RenderMarkdown(content) {
    return (
        <>
            <ReactMarkdown children={content.content} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}/>
        </>
    )
}

