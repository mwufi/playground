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
        data: { content: 'This is some markdown!' },
        position: { x: 250, y: 250 },
    },
] as AppNode[];
