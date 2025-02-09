import React from 'react';
import { Handle, Position } from '@xyflow/react';

const CustomNode = ({ data }) => {
    return (
        <div style={{
            padding: 10,
            border: '2px solid #333',
            borderRadius: 5,
            background: 'lightblue'
        }}>
            <div>{data.label}</div>
            <Handle type="source" position={Position.Right} />
            <Handle type="target" position={Position.Left} />
        </div>
    );

}

export default CustomNode