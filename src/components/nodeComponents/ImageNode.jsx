import React from 'react'
import { useDragContext } from '../../ContextApi/DragDropContext';
import { FontSizeOutlined } from '@ant-design/icons';

const ImageNode = () => {

    const { setDraggedItemData } = useDragContext();

    const handleDragStart = () => {
        setDraggedItemData(
            {
                draggedItemName: "imageNode",
                draggedItemType: "imageInputNode",
                draggedItemLabel: "Send Image"
            }
        )
    }

    return (
        <div className='new-node flex flex-col gap-2 items-center justify-center' onDragStart={handleDragStart} draggable>
            <div>
                <div class="bepo-2-card__icon _1k89jp9_2271_9"><svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="bepo-pictogram-svg _2bvj2j0"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6 11.2021C13.171 11.2021 11.202 13.1712 11.202 15.6001C11.202 18.0291 13.171 19.9981 15.6 19.9981C18.0289 19.9981 19.998 18.0291 19.998 15.6001C19.998 13.1712 18.0289 11.2021 15.6 11.2021ZM12.798 15.6001C12.798 14.0526 14.0525 12.7981 15.6 12.7981C17.1475 12.7981 18.402 14.0526 18.402 15.6001C18.402 17.1477 17.1475 18.4021 15.6 18.4021C14.0525 18.4021 12.798 17.1477 12.798 15.6001Z" fill="#FC6423" class="bepo-2-pictogram--color-secondary" data-darkreader-inline-fill=""></path><path d="M34.1642 18.6359C34.0133 18.485 33.8083 18.4008 33.5949 18.4022C33.3815 18.4035 33.1776 18.4903 33.0286 18.6431L21.5635 30.4021H7.19995C6.75923 30.4021 6.40195 30.7594 6.40195 31.2001C6.40195 31.6409 6.75923 31.9981 7.19995 31.9981H21.9C22.1151 31.9981 22.3211 31.9113 22.4713 31.7572L33.6071 20.3359L40.2357 26.9644C40.5473 27.2761 41.0526 27.2761 41.3642 26.9644C41.6759 26.6528 41.6759 26.1475 41.3642 25.8359L34.1642 18.6359Z" fill="#FC6423" class="bepo-2-pictogram--color-secondary" data-darkreader-inline-fill=""></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.40195 8.39985C6.40195 7.29639 7.29649 6.40186 8.39995 6.40186H39.6C40.7034 6.40186 41.598 7.29639 41.598 8.39986V39.5999C41.598 40.7033 40.7034 41.5979 39.6 41.5979H8.39995C7.29649 41.5979 6.40195 40.7033 6.40195 39.5999V8.39985ZM8.39995 7.99786C8.17794 7.99786 7.99795 8.17784 7.99795 8.39985V39.5999C7.99795 39.8219 8.17794 40.0019 8.39995 40.0019H39.6C39.822 40.0019 40.002 39.8219 40.002 39.5999V8.39986C40.002 8.17784 39.822 7.99786 39.6 7.99786H8.39995Z" fill="#1B1B1A" class="bepo-2-pictogram--color-primary" data-darkreader-inline-fill="" ></path></svg></div>
            </div>
            <div className='font-semibold'>Image</div>
        </div>
    )
}

export default ImageNode