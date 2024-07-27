import { AppNode } from './types';

export default [
    {
        id: '1',
        type: 'colorChooser',
        data: { color: '#4FD1C5' },
        position: { x: 250, y: 25 },
    },
    {
        id: '2',
        type: 'colorChooser',
        data: { color: '#F6E05E' },
        position: { x: 100, y: 125 },
    },
    {
        id: '3',
        type: 'textDisplayNode',
        data: { content: 'This is some markdown!\n## Hi there' },
        position: { x: 250, y: 250 },
    },
    {
        id: '4',
        type: 'imageDisplayNode',
        data: { content: 'https://images.unsplash.com/photo-1721777426117-9d528a3f3fd0?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        position: { x: 550, y: 220 },
    },
    {
        id: 'api-fetch-1',
        type: 'apiFetch',
        position: { x: 300, y: 100 },
        data: { autoFetch: true },
    }
] as AppNode[];
