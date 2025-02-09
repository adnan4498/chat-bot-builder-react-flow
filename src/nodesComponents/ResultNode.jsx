import React from 'react'
import { useDragContext } from '../ContextApi/DragDropContext';
import InputNode from '../InputNode';

const ResultNode = () => {

    const { setDraggedItemData } = useDragContext();

    const handleDragStart = () => {
        setDraggedItemData(
            {
                draggedItemName: "resultNode",
                draggedItemType: "result",
                draggedItemLabel: "Result",
                initialResultNodes: [
                    {
                        id: 'parent-1',
                        type: 'result',
                        data: { label: null },
                        style: {
                            width: 800,
                            height: 280,
                            border: "1px solid black",
                            borderRadius: 5, 
                        },
                    },
                    {
                        id: 'user-conditional-input-1',
                        type: 'inputNode',
                        data: { label: "Type your condition"},
                        // position: { x: 100, y: 20 },
                    },
                    {
                        id: 'child-1',
                        type: 'inputNode',
                        data: { label: '1' },
                        position: { x: 100, y: 65 },
                        parentId: 'parent-1',
                        extent: 'parent',
                    },
                    {
                        id: 'child-2',
                        type: 'inputNode',
                        data: { label: '2' },
                        position: { x: 550, y: 65 },
                        parentId: 'parent-1',
                        extent: 'parent',
                    },
                    {
                        id: 'child-1-condition',
                        type: 'inputNode',
                        data: { label: 'this is company information' },
                        position: { x: 100, y: 155 },
                        parentId: 'parent-1',
                        extent: 'parent',
                    },
                    {
                        id: 'child-2-condition',
                        type: 'inputNode',
                        data: { label: 'this is product information' },
                        position: { x: 550, y: 155 },
                        parentId: 'parent-1',
                        extent: 'parent',
                    },
                ]
            }
        )
    }



    return (
        <div className='new-node flex items-center justify-center' onDragStart={handleDragStart} draggable>
            <div>
                Result <br></br> Node
            </div>
        </div>
    )
}

export default ResultNode