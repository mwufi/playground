'use client'
import { useState, useCallback } from 'react';

import {
    ReactFlow, Background, BackgroundVariant, Controls,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
} from '@xyflow/react';

const initialNodes = [
    {
        id: '1',
        data: { label: 'Hello' },
        position: { x: 0, y: 0 },
        type: 'input',
    },
    {
        id: '2',
        data: { label: 'World' },
        position: { x: 100, y: 100 },
    },
];

const initialEdges = [];

function Flow() {

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

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
        <div style={{ height: '100%' }}>
            <ReactFlow
                nodes={nodes}
                onNodesChange={onNodesChange}
                edges={edges}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView>
                {/* <Background color="#abd" size={5} variant={BackgroundVariant.Lines} /> */}
                <Controls />
            </ReactFlow>
        </div>
    );
}

export default Flow;