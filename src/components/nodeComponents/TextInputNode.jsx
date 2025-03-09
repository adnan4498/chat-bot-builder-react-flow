import React from 'react'
import { Handle, Position, useReactFlow } from '@xyflow/react';
import EditDeleteMove from '../../shared/EditDeleteMove';

const TextInputNode = ({ id, data, selected }) => {
    const { getNodes, updateNodeData, getEdges } = useReactFlow()

    let getAllNodes = getNodes().filter(item => item.id == "ur-input-1")

    return (
        <div>
            <div className='flex gap-[2px]'>
                <div className={`p-3 !border-[1px] bg-white w-full rounded-sm min-w-[257px] `}
                    style={{ border: !data?.label && selected == false ? "1px solid red" : "1px solid #333" }}
                >
                    <div class="bot-action-preview__header flex items-center w-full gap-2 h-14">
                        <div>
                            <svg width="32px" height="32px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="bepo-pictogram-svg _2bvj2j0 icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.4058 5.39967C28.8805 5.20303 29.4029 5.15158 29.9069 5.25183C30.4108 5.35207 30.8738 5.59951 31.2371 5.96284C31.6004 6.32618 31.8479 6.7891 31.9481 7.29306C32.0484 7.79703 31.9969 8.3194 31.8003 8.79412C31.6036 9.26884 31.2706 9.67459 30.8434 9.96006C30.4162 10.2455 29.9139 10.3979 29.4 10.3979C28.9845 10.3979 28.5792 10.2984 28.2161 10.1125L24.5643 13.7643C24.253 14.0756 23.7484 14.076 23.4366 13.7651L19.7769 10.1161C19.4136 10.3007 19.0105 10.3979 18.6 10.3979C17.911 10.3979 17.2502 10.1242 16.763 9.63697C16.2757 9.14975 16.002 8.48894 16.002 7.79991C16.002 7.28607 16.1544 6.78377 16.4399 6.35653C16.7253 5.92929 17.1311 5.5963 17.6058 5.39967C18.0805 5.20303 18.6029 5.15158 19.1069 5.25183C19.6108 5.35207 20.0738 5.59951 20.4371 5.96284C20.8004 6.32618 21.0479 6.7891 21.1481 7.29306C21.2484 7.79703 21.1969 8.3194 21.0003 8.79412C20.9725 8.86116 20.942 8.92683 20.9089 8.99099L23.9992 12.0723L27.0875 8.98396C26.9016 8.6208 26.802 8.21549 26.802 7.79991C26.802 7.28607 26.9544 6.78377 27.2399 6.35653C27.5253 5.92929 27.9311 5.5963 28.4058 5.39967ZM29.5955 6.81716C29.4011 6.7785 29.1997 6.79834 29.0166 6.87418C28.8335 6.95002 28.677 7.07845 28.5669 7.24322C28.4568 7.408 28.398 7.60173 28.398 7.79991C28.398 8.06565 28.5036 8.32051 28.6915 8.50843C28.8794 8.69634 29.1343 8.80191 29.4 8.80191C29.5982 8.80191 29.7919 8.74314 29.9567 8.63304C30.1215 8.52294 30.2499 8.36645 30.3258 8.18335C30.4016 8.00026 30.4214 7.79879 30.3828 7.60443C30.3441 7.41006 30.2487 7.23152 30.1086 7.09138C29.9684 6.95125 29.7899 6.85582 29.5955 6.81716ZM19.1567 8.63304C18.9919 8.74314 18.7982 8.80191 18.6 8.80191C18.3343 8.80191 18.0794 8.69634 17.8915 8.50843C17.7036 8.32052 17.598 8.06565 17.598 7.79991C17.598 7.60173 17.6568 7.408 17.7669 7.24322C17.877 7.07845 18.0335 6.95002 18.2166 6.87418C18.3997 6.79834 18.6011 6.7785 18.7955 6.81716C18.9899 6.85582 19.1684 6.95125 19.3086 7.09138C19.4487 7.23152 19.5441 7.41006 19.5828 7.60443C19.6214 7.79879 19.6016 8.00026 19.5258 8.18335C19.4499 8.36645 19.3215 8.52294 19.1567 8.63304Z" fill="#1B1B1A" class="bepo-2-pictogram--color-primary" data-darkreader-inline-fill=""></path><path d="M15.024 14.1779H33.024C33.0344 14.1779 33.0447 14.1781 33.0551 14.1785C33.7329 14.2049 34.3747 14.4906 34.8479 14.9766C35.3212 15.4626 35.5897 16.1118 35.598 16.7901L35.5981 16.7999L35.598 19.1999C35.598 19.6406 35.2408 19.9979 34.8 19.9979C34.3593 19.9979 34.002 19.6406 34.002 19.1999V16.8053C33.9977 16.5377 33.8912 16.2818 33.7045 16.09C33.5198 15.9003 33.2704 15.7875 33.0063 15.7739H15.0299C14.7577 15.7785 14.498 15.8887 14.3054 16.0813C14.1129 16.2738 14.0027 16.5336 13.998 16.8058V20.3966L13.998 20.3999L13.998 20.4032V31.194C14.0027 31.4662 14.1129 31.7259 14.3054 31.9185C14.498 32.111 14.7577 32.2212 15.0299 32.2259H32.9611C33.2352 32.2236 33.4977 32.1141 33.6922 31.9208C33.8862 31.7281 33.9973 31.4674 34.002 31.1941V27.5999C34.002 27.1592 34.3593 26.8019 34.8 26.8019C35.2408 26.8019 35.598 27.1592 35.598 27.5999V31.2102C35.589 31.9031 35.3086 32.5647 34.817 33.053C34.3255 33.5414 33.662 33.8174 32.9691 33.8219L32.964 33.8219H30.198V42C30.198 42.4407 29.8408 42.798 29.4 42.798C28.9593 42.798 28.602 42.4407 28.602 42V33.8219H19.398V42C19.398 42.4407 19.0408 42.798 18.6 42.798C18.1593 42.798 17.802 42.4407 17.802 42V33.8219H15.0137C14.3238 33.813 13.6647 33.5349 13.1769 33.047C12.689 32.5592 12.411 31.9001 12.4021 31.2102L12.402 31.1999L12.402 21.1979H11.0081C10.8461 21.2 10.6913 21.2656 10.5772 21.3807C10.4624 21.4965 10.398 21.6529 10.398 21.8159V31.1999C10.398 31.6406 10.0408 31.9979 9.60003 31.9979C9.15931 31.9979 8.80203 31.6406 8.80203 31.1999V21.8159C8.80202 21.232 9.0327 20.6717 9.44385 20.257C9.85501 19.8423 10.4133 19.6069 10.9973 19.6019L11.004 19.6019H12.402L12.402 16.7896C12.4109 16.0997 12.689 15.4406 13.1769 14.9527C13.6647 14.4649 14.3238 14.1868 15.0137 14.1779L15.024 14.1779Z" fill="#1B1B1A" class="bepo-2-pictogram--color-primary" data-darkreader-inline-fill="" ></path><path d="M38.4249 17.6522C38.1136 17.3402 37.6084 17.3397 37.2964 17.6509C36.9844 17.9622 36.9838 18.4675 37.2951 18.7795L41.2765 22.7698H26.4C25.9593 22.7698 25.602 23.1271 25.602 23.5678C25.602 24.0085 25.9593 24.3658 26.4 24.3658H41.2735L37.2957 28.3435C36.9841 28.6552 36.9841 29.1604 37.2957 29.4721C37.6074 29.7837 38.1126 29.7837 38.4243 29.4721L43.7592 24.1372L43.7636 24.1327C43.8806 24.016 43.9538 23.872 43.9832 23.7211C44.0028 23.6208 44.0029 23.5175 43.9837 23.4172C43.9547 23.2656 43.8816 23.1209 43.7643 23.0035L43.7597 22.999L38.4249 17.6522Z" fill="#FC6423" class="bepo-2-pictogram--color-secondary" data-darkreader-inline-fill="" ></path></svg>
                        </div>
                        <div class="title">
                            Send Text</div>
                    </div>

                    <div className='cursor-pointer text-xs text-[#b9b3a9] mt-4 pl-2 pb-2'>
                        {data.label || "Text send to user..."}
                    </div>

                    <Handle type="target" position={Position.Top} />
                    <Handle type="source" position={Position.Bottom} />
                </div>

                {selected &&
                    <EditDeleteMove id={id} />
                }

            </div>
        </div>

    )
}

export default TextInputNode