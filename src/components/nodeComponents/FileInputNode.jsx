import React from 'react'
import { Handle, Position, useReactFlow } from '@xyflow/react';
import EditDeleteMove from '../../shared/EditDeleteMove';

const FileInputNode = ({ id, data, selected }) => {
    const { getNodes, updateNodeData, getEdges } = useReactFlow()


    let getAllNodes = getNodes().filter(item => item.id == "ur-input-1")

    return (
        <div>
            <div className='flex gap-[2px]'>
                <div className={`p-3 !border-[1px] bg-white w-full rounded-sm min-w-[257px] `}
                    style={{ border: !data?.label && selected == false ? "1px solid red" : "1px solid #333" }}
                >
                    <div class="bot-action-preview__header flex items-center w-full gap-2 h-14 pl-2">
                        <div>
                        <div class="bepo-2-card__icon _1k89jp9_2271_9"><svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="bepo-pictogram-svg _2bvj2j0"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.0357 4.83578C21.1853 4.68613 21.3883 4.60205 21.6 4.60205H34.8C35.6481 4.60205 36.4615 4.93898 37.0613 5.53872C37.661 6.13846 37.998 6.95189 37.998 7.80005V40.8001C37.998 41.6482 37.661 42.4616 37.0613 43.0614C36.4615 43.6611 35.6481 43.9981 34.8 43.9981H28.8C28.3592 43.9981 28.002 43.6408 28.002 43.2001C28.002 42.7593 28.3592 42.4021 28.8 42.4021H34.8C35.2248 42.4021 35.6323 42.2333 35.9327 41.9328C36.2332 41.6324 36.402 41.2249 36.402 40.8001V7.80005C36.402 7.37517 36.2332 6.9677 35.9327 6.66727C35.6323 6.36683 35.2248 6.19805 34.8 6.19805H22.398V16.2001C22.398 16.6408 22.0407 16.9981 21.6 16.9981H11.598V40.8001C11.598 41.2249 11.7667 41.6324 12.0672 41.9328C12.3676 42.2333 12.7751 42.4021 13.2 42.4021H20.4C20.8407 42.4021 21.198 42.7593 21.198 43.2001C21.198 43.6408 20.8407 43.9981 20.4 43.9981H13.2C12.3518 43.9981 11.5384 43.6611 10.9386 43.0614C10.3389 42.4616 10.002 41.6482 10.002 40.8001V16.2001C10.002 15.9884 10.086 15.7854 10.2357 15.6358L21.0357 4.83578ZM12.7265 15.4021H20.802V7.32659L12.7265 15.4021Z" fill="#1B1B1A" class="bepo-2-pictogram--color-primary" data-darkreader-inline-fill=""></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.9757 22.2357C24.2871 21.9243 24.7918 21.924 25.1036 22.235L30.4556 27.5751C30.7676 27.8863 30.7681 28.3916 30.4569 28.7036C30.1456 29.0156 29.6403 29.0161 29.3283 28.7049L25.3379 24.7234V43.2C25.3379 43.6407 24.9807 43.998 24.5399 43.998C24.0992 43.998 23.7419 43.6407 23.7419 43.2V24.7265L19.7642 28.7042C19.4526 29.0159 18.9473 29.0159 18.6357 28.7042C18.324 28.3926 18.324 27.8873 18.6357 27.5757L23.9757 22.2357Z" fill="#FC6423" class="bepo-2-pictogram--color-secondary" data-darkreader-inline-fill="" ></path></svg></div>
                        </div>
                        <div class="title">
                            File
                        </div>
                    </div>

                    {data?.fileData?.src
                        ?
                        <div className='my-1 w-[300px]'>
                            {/* <input type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx" /> */}
                            {data.fileData.file.name}
                        </div>
                        :
                        <div className='cursor-pointer text-xs text-[#b9b3a9] mt-4 pl-2 pb-2'>
                            <div class="bot-action-preview__header flex items-center w-full gap-2 h-14">
                                <div>
                                <div class="bepo-2-card__icon _1k89jp9_2271_9"><svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="bepo-pictogram-svg _2bvj2j0"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.0357 4.83578C21.1853 4.68613 21.3883 4.60205 21.6 4.60205H34.8C35.6481 4.60205 36.4615 4.93898 37.0613 5.53872C37.661 6.13846 37.998 6.95189 37.998 7.80005V40.8001C37.998 41.6482 37.661 42.4616 37.0613 43.0614C36.4615 43.6611 35.6481 43.9981 34.8 43.9981H28.8C28.3592 43.9981 28.002 43.6408 28.002 43.2001C28.002 42.7593 28.3592 42.4021 28.8 42.4021H34.8C35.2248 42.4021 35.6323 42.2333 35.9327 41.9328C36.2332 41.6324 36.402 41.2249 36.402 40.8001V7.80005C36.402 7.37517 36.2332 6.9677 35.9327 6.66727C35.6323 6.36683 35.2248 6.19805 34.8 6.19805H22.398V16.2001C22.398 16.6408 22.0407 16.9981 21.6 16.9981H11.598V40.8001C11.598 41.2249 11.7667 41.6324 12.0672 41.9328C12.3676 42.2333 12.7751 42.4021 13.2 42.4021H20.4C20.8407 42.4021 21.198 42.7593 21.198 43.2001C21.198 43.6408 20.8407 43.9981 20.4 43.9981H13.2C12.3518 43.9981 11.5384 43.6611 10.9386 43.0614C10.3389 42.4616 10.002 41.6482 10.002 40.8001V16.2001C10.002 15.9884 10.086 15.7854 10.2357 15.6358L21.0357 4.83578ZM12.7265 15.4021H20.802V7.32659L12.7265 15.4021Z" fill="#1B1B1A" class="bepo-2-pictogram--color-primary" data-darkreader-inline-fill=""></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.9757 22.2357C24.2871 21.9243 24.7918 21.924 25.1036 22.235L30.4556 27.5751C30.7676 27.8863 30.7681 28.3916 30.4569 28.7036C30.1456 29.0156 29.6403 29.0161 29.3283 28.7049L25.3379 24.7234V43.2C25.3379 43.6407 24.9807 43.998 24.5399 43.998C24.0992 43.998 23.7419 43.6407 23.7419 43.2V24.7265L19.7642 28.7042C19.4526 29.0159 18.9473 29.0159 18.6357 28.7042C18.324 28.3926 18.324 27.8873 18.6357 27.5757L23.9757 22.2357Z" fill="#FC6423" class="bepo-2-pictogram--color-secondary" data-darkreader-inline-fill="" ></path></svg></div>
                                </div>
                                Missing file...
                            </div>
                        </div>
                    }


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

export default FileInputNode