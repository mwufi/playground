import {
    Edge,
    Node,
    OnNodesChange,
    OnEdgesChange,
    OnConnect,
    BuiltInNode,
} from '@xyflow/react';

export type ColorNode = Node<{ color: string }, 'colorChooser'>;
export type TextNode = Node<{ content: string }, 'textDisplayNode'>;
export type ImageNode = Node<{ content: string, width?: number, height?: number }, 'imageDisplayNode'>;

export type AppNode = ColorNode | BuiltInNode | TextNode | ImageNode;

export type AppState = {
    nodes: AppNode[];
    edges: Edge[];
    onNodesChange: OnNodesChange<AppNode>;
    onEdgesChange: OnEdgesChange;
    onConnect: OnConnect;
    setNodes: (nodes: AppNode[]) => void;
    setEdges: (edges: Edge[]) => void;
    updateNodeColor: (nodeId: string, color: string) => void;
};
