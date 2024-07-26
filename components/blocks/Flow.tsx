'use client'
import { useState, useCallback } from 'react';

import JavascriptNode from "@/components/nodes/JavascriptNode"

const nodeTypes = { javascriptNode: JavascriptNode };

import {
    ReactFlow, Background, BackgroundVariant, Controls,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
} from '@xyflow/react';

const initialNodes = [{
    id: '1',
    type: 'javascriptNode',
    position: { x: 0, y: 0 },
    data: {
        label: 'Custom Node',
        inputs: ['input1', 'input2', 'input3'],
        text: 'be a pirate',
        onFormatChange: (e) => {
            console.log("text changed", e)
        }
    }
},
{
    id: '2',
    type: 'javascriptNode',
    position: { x: 250, y: 200 },
    data: {
        label: 'Prompt',
        inputs: ['text'],
        outputs: ['text'],
        text: 'Prompt\ninput: text\noutput: text',
        onFormatChange: (e) => {
            console.log("text changed", e)
        }
    }
},
{
    id: '3',
    type: 'javascriptNode',
    position: { x: 250, y: 450 },
    data: {
        label: 'GetWebpage',
        inputs: ['url'],
        outputs: ['html'],
        text: 'GetWebpage\ninput: url\noutput: html',
        onFormatChange: (e) => {
            console.log("text changed", e)
        }
    }
},
{
    id: '4',
    type: 'javascriptNode',
    position: { x: 250, y: 700 },
    data: {
        label: 'Generated News Article',
        inputs: [],
        outputs: [],
        text: 'Generated News Article',
        onFormatChange: (e) => {
            console.log("text changed", e)
        }
    }
},
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
                {/* <Background color="#abd" size={5} variant={BackgroundVariant.Lines} /> */}
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