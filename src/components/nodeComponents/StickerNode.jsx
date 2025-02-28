import React from 'react'
import { useDragContext } from '../../ContextApi/DragDropContext';
import { FontSizeOutlined } from '@ant-design/icons';

const StickerNode = () => {

    const { setDraggedItemData } = useDragContext();

    const handleDragStart = () => {
        setDraggedItemData(
            {
                draggedItemName: "stickerNode",
                draggedItemType: "stickerInputNode",
                draggedItemLabel: "Sticker"
            }
        )
    }

    return (
        <div className='new-node flex flex-col gap-2 items-center justify-center ' onDragStart={handleDragStart} draggable>
            <div>
                <div class="bepo-2-card__icon _1k89jp9_2271_9"><svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="bepo-pictogram-svg _2bvj2j0"><path d="M39.6 23.3999C39.24 23.0399 38.76 23.0399 38.52 23.3999L37.68 24.2399H31.08C27.36 24.2399 24.36 27.2399 24.36 30.9599V37.5599L23.4 38.3999C23.04 38.7599 23.04 39.2399 23.4 39.4799C23.52 39.5999 23.76 39.7199 24 39.7199C24.24 39.7199 24.36 39.5999 24.6 39.4799L39.6 24.5999C39.84 24.2399 39.84 23.7599 39.6 23.3999ZM25.92 30.9599C25.92 28.1999 28.2 25.9199 30.96 25.9199H36L25.92 35.9999V30.9599Z" fill="#FC6423" class="bepo-2-pictogram--color-secondary" data-darkreader-inline-fill="" ></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.76 39.8402H19.44C19.92 39.8402 20.28 39.4802 20.28 39.0002C20.28 38.5202 19.92 38.1602 19.44 38.1602H14.76C12.12 38.1602 9.96 36.0002 9.96 33.3602V14.6402C9.96 12.0002 12.12 9.84016 14.76 9.84016H33.48C36.12 9.84016 38.28 12.0002 38.28 14.6402V19.4402C38.28 19.9202 38.64 20.2802 39.12 20.2802C39.6 20.2802 39.96 19.9202 39.96 19.4402V14.6402C39.96 11.0402 37.08 8.16016 33.48 8.16016H14.76C11.16 8.16016 8.28 11.0402 8.28 14.6402V33.3602C8.28 36.9602 11.16 39.8402 14.76 39.8402ZM19.56 19.5601C19.56 20.3554 18.9153 21.0001 18.12 21.0001C17.3247 21.0001 16.68 20.3554 16.68 19.5601C16.68 18.7649 17.3247 18.1201 18.12 18.1201C18.9153 18.1201 19.56 18.7649 19.56 19.5601ZM30 21.0001C30.7953 21.0001 31.44 20.3554 31.44 19.5601C31.44 18.7649 30.7953 18.1201 30 18.1201C29.2047 18.1201 28.56 18.7649 28.56 19.5601C28.56 20.3554 29.2047 21.0001 30 21.0001ZM21.36 31.8001H21.48C21.84 31.8001 22.2 31.4401 22.32 31.2001C22.44 30.7201 22.2 30.3601 21.72 30.2401C18.6 29.6401 18.24 27.1201 18.24 27.0001C18.24 26.5201 17.88 26.2801 17.4 26.2801C16.92 26.2801 16.68 26.6401 16.68 27.1201C16.8 28.4401 18 31.2001 21.36 31.8001Z" fill="#1B1B1A" class="bepo-2-pictogram--color-primary" data-darkreader-inline-fill="" ></path></svg></div>            </div>
            <div className='font-semibold'>Sticker</div>
        </div>
    )
}

export default StickerNode