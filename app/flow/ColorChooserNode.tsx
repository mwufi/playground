import { Handle, NodeProps, Position } from '@xyflow/react'
import { ColorNode } from './types';
import useStore from './store'

function ColorChooserNode({ id, data }: NodeProps<ColorNode>) {
    const updateNodeColor = useStore(state => state.updateNodeColor)

    return (
        <div style={{ backgroundColor: data.color, borderRadius: 10 }}>
            <Handle type="target" position={Position.Top} />
            <div className="p-4">
                <input type='color'
                    defaultValue={data.color}
                    onChange={e => updateNodeColor(id, e.target.value)}
                    className='nodrag' />
            </div>
            <Handle type="source" position={Position.Bottom} />

        </div>
    )

}
export default ColorChooserNode