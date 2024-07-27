'use client'

import { useState, useCallback } from 'react';

import {
    ReactFlow, Background, Controls
} from '@xyflow/react';

import PopupMenu from '../../components/blocks/ContextMenu';
import ActionNav from '../../components/blocks/ActionNav';
import ChatWidget from '../../components/blocks/ChatWidget';

import { useHotkeys } from 'react-hotkeys-hook'

import useStore from './store';
import { useShallow } from 'zustand/react/shallow'

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    onConnect: state.onConnect,
});

import ColorChooserNode from './ColorChooserNode';
import TextDisplay from './TextDisplayNode';
import ImageDisplay from './ImageDisplayNode'
import ApiFetchNode from './ApiFetchNode';
import HeaderNode from './nodes/HeaderNode';

const nodeTypes = {
    colorChooser: ColorChooserNode,
    textDisplayNode: TextDisplay,
    imageDisplayNode: ImageDisplay,
    apiFetch: ApiFetchNode,
    signIn: HeaderNode
}

const LeftPopup = ({ children }) => {
    return (
        <div className='absolute top-0 border p-4'>
            {children}
        </div>
    )
}

function Flow() {
    const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
        useShallow(selector),
    );

    useHotkeys('b', () => {
        const currentNodes = useStore.getState().nodes;
        const currentEdges = useStore.getState().edges;
        console.log('Current Nodes:', currentNodes);
        console.log('Current Edges:', currentEdges);
    })

    return (
        <div style={{ height: '100%' }} className='relative flex flex-col'>
            <ActionNav />

            <div className="h-full relative">
                <ReactFlow
                    nodes={nodes}
                    nodeTypes={nodeTypes}
                    onNodesChange={onNodesChange}
                    edges={edges}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    fitView>
                    <Background color="#554" />
                    <Controls />
                </ReactFlow>
                <LeftPopup>
                    <PopupMenu />
                </LeftPopup>
                <ChatWidget />
            </div>

        </div>
    );
}

export default Flow;