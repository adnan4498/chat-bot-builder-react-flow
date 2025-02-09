import React, { useState } from 'react'
import { Handle, Position, useReactFlow } from '@xyflow/react';

const InputNode = ({ id, data }) => {
    const { updateNodeData } = useReactFlow();

    const [isInput, setIsInput] = useState(false)
    const [inputVal, setInputVal] = useState(data.label)

    const handleChange = (e) => {
        setInputVal(e.target.value);
        updateNodeData(id, { label: e.target.value })
    };

    const handleSubmit = (e) => {
        setIsInput(false)
        setInputVal(inputVal)
    };

    return (
        <div className='p-3 bg-white w-full rounded-sm min-w-[150px] text-center' style={{
            border: '1px solid #333',
        }}>
            {!isInput ?
                <div >
                    <div className='cursor-pointer text-xs' onClick={() => setIsInput(!isInput)}>
                        {data.label}
                    </div>
                </div>
                :
                <div className='min-w-[150px] flex gap-4 items-center'>
                    <div>
                        <input
                            type="text"
                            onChange={handleChange}
                            value={inputVal}
                            className='min-w-[250px] min-h-[100px]'
                        />
                    </div>

                    <div>
                        <button className='text-white text-sm bg-green-800 border-2 border-black rounded-lg px-2 py-2' onClick={handleSubmit}>Submit</button>
                    </div>
                </div>

            }

            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Bottom} />

        </div>
    )
}

export default InputNode