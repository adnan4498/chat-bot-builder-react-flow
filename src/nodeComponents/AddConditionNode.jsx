import React from 'react'
import { useDragContext } from '../ContextApi/DragDropContext';

const AddConditionNode = () => {

    const { setDraggedItemData } = useDragContext();

    const handleDragStart = () => {
        setDraggedItemData(
            {
                draggedItemName: "textNode",
                draggedItemType: "inputNode2",
                draggedItemLabel: "Add Condition"
            }
        )
    }

    return (
        <div className='new-node flex flex-col gap-2 items-center justify-center ' onDragStart={handleDragStart} draggable>
            <div>
                <div class="bepo-2-card__icon _1k89jp9_2271_9"><svg width="35px" height="35px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="bepo-pictogram-svg _2bvj2j0"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0001 5.2636C24.6204 5.1402 25.2634 5.20353 25.8478 5.44558C26.4322 5.68763 26.9316 6.09753 27.283 6.62344C27.6344 7.14934 27.822 7.76765 27.822 8.40015C27.822 9.24831 27.485 10.0617 26.8853 10.6615C26.2856 11.2612 25.4721 11.5982 24.624 11.5982C23.9915 11.5982 23.3732 11.4106 22.8473 11.0592C22.3214 10.7078 21.9115 10.2083 21.6694 9.62397C21.4274 9.03961 21.364 8.3966 21.4874 7.77625C21.6108 7.1559 21.9154 6.58607 22.3626 6.13882C22.8099 5.69157 23.3797 5.38699 24.0001 5.2636ZM25.237 6.92009C24.9443 6.79884 24.6222 6.76712 24.3114 6.82893C24.0007 6.89075 23.7152 7.04332 23.4912 7.26736C23.2671 7.49141 23.1146 7.77686 23.0528 8.08762C22.9909 8.39837 23.0227 8.72048 23.1439 9.01321C23.2652 9.30594 23.4705 9.55613 23.734 9.73216C23.9974 9.90819 24.3071 10.0022 24.624 10.0022C25.0489 10.0022 25.4563 9.83337 25.7568 9.53293C26.0572 9.2325 26.226 8.82503 26.226 8.40015C26.226 8.0833 26.132 7.77357 25.956 7.51013C25.78 7.24668 25.5298 7.04135 25.237 6.92009ZM5.24984 32.226C5.64929 31.8266 6.19107 31.6022 6.75598 31.6022H13.692C13.9733 31.6021 14.2518 31.6579 14.5115 31.7661C14.7712 31.8743 15.0069 32.033 15.2049 32.2328C15.403 32.4326 15.5594 32.6697 15.6653 32.9303C15.7708 33.1897 15.824 33.4674 15.822 33.7474V40.6682C15.822 41.2331 15.5976 41.7748 15.1981 42.1743C14.7987 42.5737 14.2569 42.7982 13.692 42.7982H6.75601C6.19441 42.7982 5.65552 42.5764 5.25662 42.1811C4.85771 41.7858 4.63107 41.2489 4.62601 40.6873L4.62598 40.6802V33.7322C4.62598 33.1672 4.85039 32.6255 5.24984 32.226ZM6.75598 33.1982C6.61435 33.1982 6.47853 33.2544 6.37838 33.3546C6.27824 33.4547 6.22198 33.5905 6.22198 33.7322V40.6758C6.22397 40.8155 6.28069 40.949 6.38004 41.0475C6.48005 41.1466 6.61515 41.2022 6.75598 41.2022H13.692C13.8336 41.2022 13.9694 41.1459 14.0696 41.0457C14.1697 40.9456 14.226 40.8098 14.226 40.6682V33.737C14.2266 33.6664 14.2133 33.5965 14.1867 33.5311C14.1602 33.4658 14.121 33.4063 14.0713 33.3563C14.0217 33.3062 13.9626 33.2664 13.8975 33.2393C13.8324 33.2121 13.7625 33.1981 13.692 33.1982H6.75598ZM19.6498 32.226C20.0493 31.8266 20.5911 31.6022 21.156 31.6022H28.092C28.3733 31.6021 28.6518 31.6579 28.9115 31.7661C29.1712 31.8743 29.4069 32.033 29.6049 32.2328C29.803 32.4326 29.9594 32.6697 30.0653 32.9303C30.1707 33.1897 30.2239 33.4672 30.222 33.7471V40.6682C30.222 41.2331 29.9976 41.7748 29.5981 42.1743C29.1987 42.5737 28.6569 42.7982 28.092 42.7982H21.156C20.5944 42.7982 20.0555 42.5764 19.6566 42.1811C19.2577 41.7858 19.0311 41.2489 19.026 40.6873L19.026 40.6802V33.7322C19.026 33.1672 19.2504 32.6255 19.6498 32.226ZM21.156 33.1982C21.0143 33.1982 20.8785 33.2544 20.7784 33.3546C20.6782 33.4547 20.622 33.5905 20.622 33.7322V40.6757C20.624 40.8155 20.6807 40.949 20.78 41.0475C20.88 41.1466 21.0151 41.2022 21.156 41.2022H28.092C28.2336 41.2022 28.3694 41.1459 28.4696 41.0457C28.5697 40.9456 28.626 40.8098 28.626 40.6682V33.737C28.6266 33.6664 28.6133 33.5965 28.5868 33.5311C28.5602 33.4658 28.521 33.4063 28.4713 33.3563C28.4217 33.3062 28.3626 33.2664 28.2975 33.2393C28.2324 33.2121 28.1625 33.1981 28.092 33.1982H21.156ZM34.0498 32.226C34.4493 31.8266 34.9911 31.6022 35.556 31.6022H42.492C42.7733 31.6021 43.0518 31.6579 43.3115 31.7661C43.5712 31.8743 43.8069 32.033 44.0049 32.2328C44.2029 32.4326 44.3594 32.6697 44.4653 32.9303C44.5708 33.1897 44.624 33.4674 44.622 33.7474V40.6682C44.622 41.2331 44.3976 41.7748 43.9981 42.1743C43.5987 42.5737 43.0569 42.7982 42.492 42.7982H35.556C34.9944 42.7982 34.4555 42.5764 34.0566 42.1811C33.6577 41.7858 33.4311 41.2489 33.426 40.6873L33.426 40.6802V33.7322C33.426 33.1672 33.6504 32.6255 34.0498 32.226ZM35.556 33.1982C35.4143 33.1982 35.2785 33.2544 35.1784 33.3546C35.0782 33.4547 35.022 33.5905 35.022 33.7322V40.6759C35.024 40.8156 35.0807 40.949 35.18 41.0475C35.28 41.1466 35.4151 41.2022 35.556 41.2022H42.492C42.6336 41.2022 42.7694 41.1459 42.8696 41.0457C42.9697 40.9456 43.026 40.8098 43.026 40.6682V33.737C43.0266 33.6664 43.0133 33.5965 42.9867 33.5311C42.9602 33.4658 42.921 33.4063 42.8713 33.3563C42.8217 33.3062 42.7626 33.2664 42.6975 33.2393C42.6324 33.2121 42.5625 33.1981 42.492 33.1982H35.556Z" fill="#1B1B1A" class="bepo-2-pictogram--color-primary"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24.624 12.4019C25.0647 12.4019 25.422 12.7591 25.422 13.1999V19.703C25.9746 19.8454 26.4802 20.1335 26.8853 20.5385C27.2904 20.9436 27.5784 21.4492 27.7208 22.0019H39.024C39.4647 22.0019 39.822 22.3591 39.822 22.7999V28.7999C39.822 29.2406 39.4647 29.5979 39.024 29.5979C38.5833 29.5979 38.226 29.2406 38.226 28.7999V23.5979H27.7208C27.6836 23.7424 27.6361 23.8847 27.5785 24.0237C27.3365 24.608 26.9266 25.1075 26.4007 25.4589C26.0998 25.6599 25.7687 25.8073 25.422 25.8967V28.7999C25.422 29.2406 25.0647 29.5979 24.624 29.5979C24.1833 29.5979 23.826 29.2406 23.826 28.7999V25.8967C23.2769 25.7552 22.7704 25.4689 22.3627 25.0612C21.9549 24.6534 21.6686 24.1469 21.5271 23.5979H11.022V28.7999C11.022 29.2406 10.6647 29.5979 10.224 29.5979C9.78326 29.5979 9.42598 29.2406 9.42598 28.7999V22.7999C9.42598 22.3591 9.78326 22.0019 10.224 22.0019H21.5271C21.6165 21.6551 21.7639 21.324 21.9649 21.0231C22.3163 20.4972 22.8158 20.0873 23.4002 19.8453C23.5391 19.7877 23.6814 19.7403 23.826 19.703V13.1999C23.826 12.7591 24.1833 12.4019 24.624 12.4019ZM24.9365 21.2286C24.6258 21.1668 24.3036 21.1985 24.0109 21.3198C23.7182 21.441 23.468 21.6464 23.292 21.9098C23.1159 22.1733 23.022 22.483 23.022 22.7999C23.022 23.2247 23.1908 23.6322 23.4912 23.9326C23.7916 24.2331 24.1991 24.4019 24.624 24.4019C24.9408 24.4019 25.2506 24.3079 25.514 24.1319C25.7775 23.9558 25.9828 23.7056 26.104 23.4129C26.2253 23.1202 26.257 22.7981 26.1952 22.4873C26.1334 22.1766 25.9808 21.8911 25.7568 21.6671C25.5327 21.443 25.2473 21.2904 24.9365 21.2286Z" fill="#FC6423" class="bepo-2-pictogram--color-secondary"></path></svg>
                </div>
            </div>
            <div className='font-semibold'>Add Condition</div>
        </div>
    )
}

export default AddConditionNode