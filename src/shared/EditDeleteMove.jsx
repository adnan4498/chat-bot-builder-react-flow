import { CopyOutlined, DeleteOutlined, DragOutlined } from '@ant-design/icons'
import React from 'react'
import { useDeletingNodeIdContext } from '../ContextApi/DragDropContext';

const EditDeleteMove = (id) => {
    const { setDeletingNodeId } = useDeletingNodeIdContext();

    let nodeId = id.id

    return (
        <div className='flex flex-col gap-[2px] mt-[1px] cursor-pointer'>
            <div className='bg-white py-[5px] px-[5px] flex items-center justify-center border-[1px] border-gray-300 rounded-sm'>
                <DragOutlined style={{ fontSize: "16px" }} />
            </div>
            <div onClick={() => setDeletingNodeId(nodeId)} className='bg-white py-[5px] px-[5px] flex items-center justify-center border-[1px] border-gray-300 rounded-sm'>
                <div>
                    <DeleteOutlined style={{ fontSize: "16px" }} />
                </div>
            </div>
            <div className='bg-white py-[5px] px-[5px] flex items-center justify-center border-[1px] border-gray-300 rounded-sm'>
                <CopyOutlined style={{ fontSize: "16px" }} />
            </div>
        </div>
    )
}

export default EditDeleteMove