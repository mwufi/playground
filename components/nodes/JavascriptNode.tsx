import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import {
    Card,
    CardHeader,
    CardContent
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Copy, Edit, ArrowUpCircle, Settings, Trash2 } from 'lucide-react';

const JavascriptNode = ({ data }) => {
    const [text, setText] = useState('')
    const showButtons = false;

    return (
        <div className="relative">
            <Card className="w-[250px]">
                <CardHeader className="flex flex-row items-center justify-start space-y-0 p-4 bg-yellow-100">
                    <Bell className='-ml-1' />
                    <div className="font-bold ml-2">Prompt AI</div>
                </CardHeader>
                <CardContent className='p-4'>
                    <Input
                        placeholder="Type some text here.."
                        className="w-full nodrag"
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value)
                        }}
                        onMouseMove={(e) => {
                            // Prevent dragging when interacting with the input
                            e.stopPropagation();
                        }}
                    />
                </CardContent>
            </Card>
            <Handle type="target" position={Position.Top} className="w-2 h-2" />
            <Handle type="source" position={Position.Bottom} className="w-2 h-2" />
        </div>
    );
};

export default JavascriptNode;