import React from 'react'
import { useDragContext } from '../ContextApi/DragDropContext';

const AddConditionNode = () => {

    const { setDraggedItemData } = useDragContext();

    const handleDragStart = () => {
        setDraggedItemData(
            {
                draggedItemName: "textNode",
                draggedItemType: "inputNode",
                draggedItemLabel: "Add Condition"
            }
        )
    }

    return (
        <div className='new-node flex items-center justify-center' onDragStart={handleDragStart} draggable>
            <div>
                Add Condition
            </div>
        </div>
    )
}

export default AddConditionNode