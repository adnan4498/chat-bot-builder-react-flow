import { CopyOutlined, DeleteOutlined, DragOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { useDeletingNodeIdContext, useIsDraggableContext } from '../ContextApi/DragDropContext';

const EditDeleteMove = (id) => {
    const { setDeletingNodeId } = useDeletingNodeIdContext();
    const { setIsDraggable } = useIsDraggableContext()

    let nodeId = id.id
    
    return (
        <div className='flex flex-col gap-[2px] mt-[1px] cursor-pointer'>
            <div
                onMouseEnter={() => setIsDraggable(true)}
                onMouseLeave={() => setIsDraggable(false)}
                className='bg-white py-[5px] px-[5px] flex items-center justify-center border-[1px] border-gray-300 rounded-sm'>
                <DragOutlined />
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