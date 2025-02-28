import React from 'react'
import { useDragContext } from '../../ContextApi/DragDropContext';
import { FontSizeOutlined } from '@ant-design/icons';

const UrlButtonNode = () => {

    const { setDraggedItemData } = useDragContext();

    const handleDragStart = () => {
        setDraggedItemData(
            {
                draggedItemName: "urlButtonNode",
                draggedItemType: "urlButtonInputNode",
                draggedItemLabel: "Url Button"
            }
        )
    }

    return (
        <div className='new-node flex flex-col gap-2 items-center justify-center ' onDragStart={handleDragStart} draggable>
            <div>
                <div class="bepo-2-card__icon _1k89jp9_2271_9"><svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="bepo-pictogram-svg _2bvj2j0"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.2835 23.2688L13.765 28.7874C13.0438 29.5106 12.6386 30.4904 12.6386 31.5118C12.6386 32.5329 13.0434 33.5124 13.7642 34.2355C14.4874 34.9564 15.4669 35.3612 16.488 35.3612C17.5091 35.3612 18.4885 34.9564 19.2117 34.2356L22.9548 30.4804C23.266 30.1683 23.7712 30.1675 24.0834 30.4786C24.3955 30.7898 24.3963 31.295 24.0852 31.6072L20.3412 35.3632L20.3395 35.3648C19.3171 36.3846 17.932 36.9572 16.488 36.9572C15.044 36.9572 13.6589 36.3846 12.6365 35.3648L12.635 35.3633C11.6152 34.3409 11.0426 32.9558 11.0426 31.5118C11.0426 30.0678 11.6152 28.6827 12.635 27.6603L18.1557 22.1395C19.1781 21.1198 20.564 20.5464 22.008 20.5464C23.452 20.5464 24.8371 21.1191 25.8595 22.1388L24.7325 23.2688C24.0092 22.5475 23.0295 22.1424 22.008 22.1424C20.9866 22.1424 20.0067 22.5476 19.2835 23.2688Z" fill="#FC6423" class="bepo-2-pictogram--color-secondary" data-darkreader-inline-fill="" ></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.6915 13.8611L24.7563 17.7964C24.4446 18.108 23.9394 18.108 23.6277 17.7964C23.3161 17.4847 23.3161 16.9795 23.6277 16.6678L27.5637 12.7318C28.5862 11.7121 29.972 11.1387 31.416 11.1387C32.86 11.1387 34.2451 11.7113 35.2675 12.7311L35.269 12.7326C36.2888 13.755 36.8614 15.1401 36.8614 16.5841C36.8614 18.0281 36.2888 19.4132 35.269 20.4356L29.2683 26.4364C28.2479 27.4557 26.8643 28.0285 25.422 28.0285C23.9797 28.0285 22.5965 27.456 21.576 26.4367L22.704 25.3075C23.4251 26.0279 24.4027 26.4325 25.422 26.4325C26.4412 26.4325 27.4186 26.028 28.1397 25.3078M28.1397 25.3078L34.139 19.3086C34.8601 18.5854 35.2654 17.6054 35.2654 16.5841C35.2654 15.563 34.8606 14.5835 34.1397 13.8604C33.4166 13.1395 32.4371 12.7347 31.416 12.7347C30.3946 12.7347 29.4148 13.1399 28.6915 13.8611" fill="#1B1B1A" class="bepo-2-pictogram--color-primary" data-darkreader-inline-fill="" ></path></svg></div>            </div>
            <div className='font-semibold'>Url Button</div>
        </div>
    )
}

export default UrlButtonNode