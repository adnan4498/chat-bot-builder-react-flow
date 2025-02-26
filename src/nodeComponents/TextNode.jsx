import React from 'react'
import { useDragContext } from '../ContextApi/DragDropContext';
import { FontSizeOutlined } from '@ant-design/icons';

const TextNode = () => {

    const { setDraggedItemData } = useDragContext();

    const handleDragStart = () => {
        setDraggedItemData(
            {
                draggedItemName: "textNode",
                draggedItemType: "textInputNode",
                draggedItemLabel: "Send Text"
            }
        )
    }

    return (
        <div className='new-node flex flex-col gap-2 items-center justify-center ' onDragStart={handleDragStart} draggable>
            <div>
                <div class="bepo-2-card__icon _1k89jp9_2271_9" ><svg width="35px" height="35px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="bepo-pictogram-svg _2bvj2j0"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.00195 7.19995C4.00195 5.43375 5.43375 4.00195 7.19995 4.00195H40.8C42.5662 4.00195 43.998 5.43375 43.998 7.19995V40.8C43.998 42.5662 42.5662 43.998 40.8 43.998H7.19995C5.43375 43.998 4.00195 42.5662 4.00195 40.8V7.19995ZM7.19995 5.59795C6.31519 5.59795 5.59795 6.31519 5.59795 7.19995V40.8C5.59795 41.6847 6.31519 42.402 7.19995 42.402H40.8C41.6847 42.402 42.402 41.6847 42.402 40.8V7.19995C42.402 6.31519 41.6847 5.59795 40.8 5.59795H7.19995Z" fill="#1B1B1A" class="bepo-2-pictogram--color-primary"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.202 11.9999C11.202 11.5592 11.5592 11.2019 12 11.2019H36C36.4407 11.2019 36.798 11.5592 36.798 11.9999V16.7999C36.798 17.2406 36.4407 17.5979 36 17.5979C35.5592 17.5979 35.202 17.2406 35.202 16.7999V12.7979H24.798V35.2019H28.8C29.2407 35.2019 29.5979 35.5592 29.5979 35.9999C29.5979 36.4406 29.2407 36.7979 28.8 36.7979H19.2C18.7592 36.7979 18.402 36.4406 18.402 35.9999C18.402 35.5592 18.7592 35.2019 19.2 35.2019H23.202V12.7979H12.798V16.7999C12.798 17.2406 12.4407 17.5979 12 17.5979C11.5592 17.5979 11.202 17.2406 11.202 16.7999V11.9999Z" fill="#FC6423" class="bepo-2-pictogram--color-secondary"></path></svg></div>
            </div>
            <div className='font-semibold'>Text</div>
        </div>
    )
}

export default TextNode