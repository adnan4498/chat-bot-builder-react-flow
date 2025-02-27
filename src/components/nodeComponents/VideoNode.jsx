import React from 'react'
import { useDragContext } from '../../ContextApi/DragDropContext';
import { FontSizeOutlined } from '@ant-design/icons';

const VideoNode = () => {

    const { setDraggedItemData } = useDragContext();

    const handleDragStart = () => {
        setDraggedItemData(
            {
                draggedItemName: "videoNode",
                draggedItemType: "videoInputNode",
                draggedItemLabel: "Send Video"
            }
        )
    }

    return (
        <div className='new-node flex flex-col gap-2 items-center justify-center' onDragStart={handleDragStart} draggable>
            <div>
            <div class="bepo-2-tooltip__container _15b205j_2271_1 _15b205j_2271_2"><svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="bepo-pictogram-svg _2bvj2j0 bot-panel-header__icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.60211 13.2022C1.60211 10.7733 3.57116 8.8042 6.00011 8.8042H30.0001C32.4291 8.8042 34.3981 10.7733 34.3981 13.2022V16.8022C34.3981 17.2429 34.0408 17.6002 33.6001 17.6002C33.1594 17.6002 32.8021 17.2429 32.8021 16.8022V13.2022C32.8021 11.6547 31.5476 10.4002 30.0001 10.4002H6.00011C4.45261 10.4002 3.19811 11.6547 3.19811 13.2022V34.8022C3.19811 36.3497 4.45261 37.6042 6.00011 37.6042H30.0001C31.5476 37.6042 32.8021 36.3497 32.8021 34.8022V31.2022C32.8021 30.7615 33.1594 30.4042 33.6001 30.4042C34.0408 30.4042 34.3981 30.7615 34.3981 31.2022V34.8022C34.3981 37.2311 32.4291 39.2002 30.0001 39.2002H6.00011C3.57116 39.2002 1.60211 37.2311 1.60211 34.8022V13.2022Z" fill="#1B1B1A" class="bepo-2-pictogram--color-primary" data-darkreader-inline-fill="" ></path><path fill-rule="evenodd" clip-rule="evenodd" d="M44.8021 15.4978C44.8021 14.7582 43.9466 14.3471 43.3691 14.8091L35.9727 20.7262C34.9774 21.5224 34.3981 22.7278 34.3981 24.0023C34.3981 25.2769 34.9774 26.4823 35.9727 27.2785L43.3691 33.1956C43.9466 33.6576 44.8021 33.2465 44.8021 32.5069V15.4978ZM42.3721 13.5628C43.9946 12.2648 46.3981 13.42 46.3981 15.4978V32.5069C46.3981 34.5847 43.9946 35.7399 42.3721 34.4419L34.9757 28.5247C33.6018 27.4257 32.8021 25.7617 32.8021 24.0023C32.8021 22.243 33.6018 20.579 34.9757 19.4799L42.3721 13.5628Z" fill="#FC6423" class="bepo-2-pictogram--color-secondary" data-darkreader-inline-fill="" ></path></svg></div>            </div>
            <div className='font-semibold'>Video</div>
        </div>
    )
}

export default VideoNode