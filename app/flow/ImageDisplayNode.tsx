
import { Handle, NodeProps, Position } from '@xyflow/react'

import React from 'react';
import { ImageNode } from './types'

function ImageDisplayNode({ data }: NodeProps<ImageNode>) {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <Handle type="target" position={Position.Top} />
            <div className="image-content">
                <img src={data.content} alt="" width={data.width || 400} height={data.height || 300} />
            </div>
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
}

export default ImageDisplayNode;
