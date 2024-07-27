import { Handle, NodeProps, Position } from '@xyflow/react'
import { ColorNode } from './types';
import useStore from './store'

function ColorChooserNode({ id, data }: NodeProps<ColorNode>) {
    const updateNodeColor = useStore(state => state.updateNodeColor)

    return (
        <div className='w-[100px]' style={{ backgroundColor: data.color, borderRadius: 10 }}>
            <Handle type="target" position={Position.Top} />
            <div className="p-4">
                <input type='color'
                    defaultValue={data.color}
                    onChange={e => updateNodeColor(id, e.target.value)}
                    className='nodrag' />
            </div>
            <Handle type="source" position={Position.Bottom} id="hello" style={{ left: 10 }} />
            <Handle type="source" position={Position.Bottom} id="goodbye" style={{ right: 10 }} />
        </div>
    )
}
export default ColorChooserNode