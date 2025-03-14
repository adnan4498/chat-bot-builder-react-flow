import { CopyOutlined, DeleteOutlined, DragOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { useCopyNodeContext, useDeletingNodeIdContext, useIsDraggableContext } from '../ContextApi/DragDropContext';
import { useReactFlow } from '@xyflow/react';

const EditDeleteMove = (id) => {
    const { setDeletingNodeId } = useDeletingNodeIdContext();
    const { setIsDraggable } = useIsDraggableContext()
    const { setCopyNode } = useCopyNodeContext()

    const { getNodes } = useReactFlow()

    let nodeId = id.id

    const handleCopyNode = () => {
        let nodes = getNodes()
        let getCopiedNode = nodes.filter(item => item.id == nodeId)

        setCopyNode(getCopiedNode[0])
    }

    return (
        <div className='flex flex-col gap-[2px] mt-[1px] cursor-pointer'>
            <div
                onMouseDown={() => {
                    setIsDraggable(true);
                }}
                className='bg-white py-[5px] px-[5px] flex items-center justify-center border-[1px] border-gray-300 rounded-sm'>
                <DragOutlined />
            </div>
            <div onClick={() => setDeletingNodeId(nodeId)} className='bg-white py-[5px] px-[5px] flex items-center justify-center border-[1px] border-gray-300 rounded-sm'>
                <div>
                    <DeleteOutlined style={{ fontSize: "16px" }} />
                </div>
            </div>
            <div onClick={() => handleCopyNode()} className='bg-white py-[5px] px-[5px] flex items-center justify-center border-[1px] border-gray-300 rounded-sm'>
                <CopyOutlined style={{ fontSize: "16px" }} />
            </div>
        </div>
    )
}

export default EditDeleteMove
