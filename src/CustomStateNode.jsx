import React, { useState } from 'react'
import { Handle, Position } from '@xyflow/react';

const CustomStateNode = ({ data }) => {

    const [adding, setAdding] = useState(data.lable || 0)

    return (
        <div style={{
            padding: 10,
            border: '2px solid #333',
            borderRadius: 5,
            background: 'lightblue',
            width: "100px"
        }}

        >
            Node {data.label}

            <div onClick={() => setAdding((e) => ++e)} style={{ cursor: "pointer" }}>
                Add Node
            </div>
            <div >
                Number {adding}
            </div>

            {/* <Handle type="target" position={Position.Right} /> */}
            <Handle type="target" position={Position.Right} />
        </div>
    )
}

export default CustomStateNode