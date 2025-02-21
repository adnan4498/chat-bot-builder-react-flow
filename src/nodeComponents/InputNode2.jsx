import React from 'react'
import { Handle, Position, useReactFlow } from '@xyflow/react';
import EditDeleteMove from '../shared/EditDeleteMove';

const InputNode2 = ({ id, data, selected }) => {
    const { getNodes, updateNodeData, getEdges } = useReactFlow()


    let getAllNodes = getNodes().filter(item => item.id == "ur-input-1")


    return (
        <div className='flex gap-[2px]'>
            <div className={` !border-[1px] bg-[#f8f8f8] w-full rounded-sm min-w-[284px] `}
                style={{ border: !data?.label && selected == false ? "1px solid red" : "1px solid #333" }}
            >
                <div className='cursor-pointer text-xs text-center text-[#b9b3a9] mt-4 pl-2 pb-2'>
                    {data.label || "Text send to user..."}
                </div>

                <Handle type="target" position={Position.Top} />
                <Handle type="source" position={Position.Bottom} />
            </div>


            {/* {selected &&
                    <EditDeleteMove id={id} />
                } */}

        </div>

    )
}

export default InputNode2