'use client'

import { useState, useCallback } from 'react';

import {
    ReactFlow, Background, Controls
} from '@xyflow/react';

import PopupMenu from './ContextMenu';
import ActionNav from './ActionNav';
import ChatWidget from './ChatWidget';

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
const nodeTypes = { colorChooser: ColorChooserNode }

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

    useHotkeys('b', () => alert('hi'))

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