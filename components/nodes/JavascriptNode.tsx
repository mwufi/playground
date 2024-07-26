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
                        className="w-full"
                        value={data.text || ''}
                        onChange={(e) => data.onFormatChange(e.target.value)}
                    />
                </CardContent>
            </Card>

            <div className="absolute top-0 right-[-50px] flex flex-col space-y-2">
                <Button variant="outline" size="icon">
                    <Copy className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                    <ArrowUpCircle className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                    <Settings className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="text-red-600">
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>

            <Handle type="target" position={Position.Top} className="w-2 h-2" />
            <Handle type="source" position={Position.Bottom} className="w-2 h-2" />
        </div>
    );
};

export default JavascriptNode;