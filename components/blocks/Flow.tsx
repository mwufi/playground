'use client'
import { useState, useCallback } from 'react';

import JavascriptNode from "@/components/nodes/JavascriptNode"

const nodeTypes = { javascriptNode: JavascriptNode };

import {
    ReactFlow, Background, Controls,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
} from '@xyflow/react';

const createNode = (label: string, position: { x: number, y: number }, data: any) => {
    return {
        id: label,
        type: 'javascriptNode',
        position,
        data: {
            ...data,
            onFormatChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                console.log("text changed", e)
            }
        }
    };
};

const initialNodes = [
    createNode('Custom Node', { x: 0, y: 0 }, {
        label: 'Custom Node',
        inputs: ['input1', 'input2', 'input3'],
        text: 'be a pirate',
    }),
    createNode('Prompt', { x: 250, y: 200 }, {
        label: 'Prompt',
        inputs: ['text'],
        outputs: ['text'],
        text: 'Prompt\ninput: text\noutput: text',
    }),
    createNode('GetWebpage', { x: 250, y: 450 }, {
        label: 'GetWebpage',
        inputs: ['url'],
        outputs: ['html'],
        text: 'GetWebpage\ninput: url\noutput: html',
    }),
    createNode('Generated News Article', { x: 250, y: 700 }, {
        label: 'Generated News Article',
        inputs: [],
        outputs: [],
        text: 'Generated News Article',
    }),
];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
    { id: 'e3-4', source: '3', target: '4', animated: true },
];

type FlowProps = {
    onSelect?: (node: Node<NodeData> | null) => void;
};

function Flow({ onSelect = undefined }: FlowProps) {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const [selectedNode, setSelectedNode] = useState(null)

    const onNodeClick = useCallback((event, node) => {
        setSelectedNode(node);
        if (onSelect) {
            onSelect(node);
        }
    }, []);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) =>
            applyEdgeChanges(changes, eds)
        ),
        [],
    );

    const onConnect = useCallback(
        (params) => setEdges((eds) =>
            addEdge(params, eds)
        ),
        [],
    );
    return (
        <div style={{ height: '100%' }} className='relative'>
            <ReactFlow
                nodes={nodes}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                edges={edges}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeClick={onNodeClick}
                fitView>
                <Background color="#554" />
                <Controls />
            </ReactFlow>
            {selectedNode && (
                <div className='absolute top-0' style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
                    <h3>Selected Node:</h3>
                    <p>ID: {selectedNode.id}</p>
                    <p>Type: {selectedNode.type || 'default'}</p>
                    <p>Label: {selectedNode.data.label}</p>
                </div>
            )}
        </div>
    );
}

export default Flow;