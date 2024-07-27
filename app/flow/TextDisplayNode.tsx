
import { Handle, NodeProps, Position } from '@xyflow/react'

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { TextNode } from './types'

function TextDisplayNode({ data }: NodeProps<TextNode>) {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <Handle type="target" position={Position.Top} />
            <div className="markdown-content">
                <ReactMarkdown>{data.content}</ReactMarkdown>
            </div>
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
}

export default TextDisplayNode;
