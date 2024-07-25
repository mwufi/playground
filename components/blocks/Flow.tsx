'use client'
import { useState, useCallback } from 'react';

import {
    ReactFlow, Background, BackgroundVariant, Controls,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
} from '@xyflow/react';
import { isNull } from 'util';

const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Start' },
        position: { x: 250, y: 0 },
    },
    {
        id: '2',
        data: { label: 'Prompt\ninput: text\noutput: text' },
        position: { x: 250, y: 100 },
    },
    {
        id: '3',
        data: { label: 'GetWebpage\ninput: url\noutput: html' },
        position: { x: 250, y: 200 },
    },
    {
        id: '4',
        type: 'output',
        data: { label: 'Generated News Article' },
        position: { x: 250, y: 300 },
    },
];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3' },
    { id: 'e3-4', source: '3', target: '4' },
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
                onNodesChange={onNodesChange}
                edges={edges}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeClick={onNodeClick}
                fitView>
                {/* <Background color="#abd" size={5} variant={BackgroundVariant.Lines} /> */}
                <Controls />
            </ReactFlow>
            {selectedNode && (
                <div className='absolute top-0' style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc'}}>
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