import React from 'react'
import { useDragContext } from '../ContextApi/DragDropContext';

const ImageNode = () => {

    const { setDraggedItemData } = useDragContext();

    const handleDragStart = () => {
        setDraggedItemData(
            {
                draggedItemName : "textNode",
                draggedItemType : "inputNode",
                draggedItemLabel : "Send Text"
            }
        )
    }

    return (
        <div className='new-node flex items-center justify-center' onDragStart={handleDragStart} draggable>
            <div>
                Image
            </div>
        </div>
    )
}

export default ImageNode