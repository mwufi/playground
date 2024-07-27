
import { Handle, NodeProps, Position } from '@xyflow/react'

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { TextNode } from './types'
import SelectGenerator from '@/components/blocks/SelectGenerator';
import TextBoxGenerator from '@/components/blocks/TextboxGenerator';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';


function TextDisplayNode({ data }: NodeProps<TextNode>) {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md w-[330px]">
            <Handle type="target" position={Position.Top} />
            <div className="markdown-content">
                <ReactMarkdown>{data.content}</ReactMarkdown>
            </div>
            <div className="flex flex-col gap-4 mt-6 mb-4">
                <SelectGenerator
                    name="Country"
                    helpMessage="Select the country for keyword analysis"
                    choices={["Germany", "France", "Spain", "Italy"]}
                />
                <TextBoxGenerator
                    name="Country"
                    helpMessage="Select the country for keyword analysis"
                    placeholder="Type a country"
                />
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
            </div>
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
}

export default TextDisplayNode;
