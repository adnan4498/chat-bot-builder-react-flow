import React, { useState } from 'react'
import { message, Upload } from 'antd';
import { useReactFlow } from '@xyflow/react';
import { useSelectedNodeContext } from '../ContextApi/DragDropContext';

const HandleMediaFileUploader = ({ suppportedFileTypes, fileAccepted }) => {

    const { selectedNode } = useSelectedNodeContext();
    const { updateNodeData } = useReactFlow();
    const { Dragger } = Upload;

    const [uploadOrLink, setUploadOrLink] = useState()

    const uploadingFileData = {
        name: '',
        multiple: false,
        beforeUpload: () => false, // Prevent auto-upload
        onDrop(e) {
            console.log("hiii 1")
            e.preventDefault();
            handleFileUpload(e.dataTransfer.files[0]);
        },
        onChange(e) {
            console.log("hiii 2")
            handleFileUpload(e.file); // browse and add image
        },
        onRemove() {
            console.log("hiii 3")
            let fileData = {}
            updateNodeData(selectedNode[0]?.id, { fileData });
        },
    };

    const handleFileUpload = (file) => {
        console.log(file, "file")

        const checkFileType = (fileType) => {
            let validFileTypes = ["image/", "audio/", "video/", "mp4/" ,"/pdf", "/msword", ".webp/"]
            // return validFileTypes.some(types => fileType.includes(types))
            return fileType.includes(fileAccepted)
        }
        
        if (file && checkFileType(file.type)) {

            const checkFileSubType = () => {
                
            }

            const reader = new FileReader();
            reader.readAsDataURL(file);

            console.log(file, "file")
            console.log(reader, "reader")

            reader.onload = () => {
                const imageData = { name: file.name, data: file, src: reader.result };
                updateNodeData(selectedNode[0]?.id, { imageData });
                message.success(`${file.name} uploaded to node.`);
            };

            reader.onerror = () => {
                message.error(`${file.name} failed to load.`);
            };
        } else {
            console.log("hiii")
            alert("Please upload a valid file.")
            message.error("Please upload a valid file.");
        }
    };

    return (
        <div>
            <div className='flex mt-6 text-sm font-semibold cursor-pointer'>
                <div onClick={() => setUploadOrLink("upload")} className={`border-1 border-gray-500 ${uploadOrLink == "upload" ? "bg-[#e5e5e3]" : "bg-white"}  py-2 px-2 text-center w-1/2 rounded-l-sm`}>
                    Upload
                </div>
                <div onClick={() => setUploadOrLink("link")} className={`border-1 border-gray-500 ${uploadOrLink == "link" ? "bg-[#e5e5e3]" : "bg-white"}  py-2 px-2 text-center w-1/2 rounded-r-sm`}>
                    Link
                </div>
            </div>

            <div className='my-5'>
                <Dragger {...uploadingFileData}>
                    <div className='flex items-center justify-between '>
                        <div>
                            <span class="bepo-2-file-upload__icon _1x8n4wo_2271_d"><svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="bepo-pictogram-svg _2bvj2j0"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.0357 4.83578C21.1853 4.68613 21.3883 4.60205 21.6 4.60205H34.8C35.6481 4.60205 36.4615 4.93898 37.0613 5.53872C37.661 6.13846 37.998 6.95189 37.998 7.80005V40.8001C37.998 41.6482 37.661 42.4616 37.0613 43.0614C36.4615 43.6611 35.6481 43.9981 34.8 43.9981H28.8C28.3592 43.9981 28.002 43.6408 28.002 43.2001C28.002 42.7593 28.3592 42.4021 28.8 42.4021H34.8C35.2248 42.4021 35.6323 42.2333 35.9327 41.9328C36.2332 41.6324 36.402 41.2249 36.402 40.8001V7.80005C36.402 7.37517 36.2332 6.9677 35.9327 6.66727C35.6323 6.36683 35.2248 6.19805 34.8 6.19805H22.398V16.2001C22.398 16.6408 22.0407 16.9981 21.6 16.9981H11.598V40.8001C11.598 41.2249 11.7667 41.6324 12.0672 41.9328C12.3676 42.2333 12.7751 42.4021 13.2 42.4021H20.4C20.8407 42.4021 21.198 42.7593 21.198 43.2001C21.198 43.6408 20.8407 43.9981 20.4 43.9981H13.2C12.3518 43.9981 11.5384 43.6611 10.9386 43.0614C10.3389 42.4616 10.002 41.6482 10.002 40.8001V16.2001C10.002 15.9884 10.086 15.7854 10.2357 15.6358L21.0357 4.83578ZM12.7265 15.4021H20.802V7.32659L12.7265 15.4021Z" fill="#1B1B1A" class="bepo-2-pictogram--color-primary" data-darkreader-inline-fill="" ></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.9757 22.2357C24.2871 21.9243 24.7918 21.924 25.1036 22.235L30.4556 27.5751C30.7676 27.8863 30.7681 28.3916 30.4569 28.7036C30.1456 29.0156 29.6403 29.0161 29.3283 28.7049L25.3379 24.7234V43.2C25.3379 43.6407 24.9807 43.998 24.5399 43.998C24.0992 43.998 23.7419 43.6407 23.7419 43.2V24.7265L19.7642 28.7042C19.4526 29.0159 18.9473 29.0159 18.6357 28.7042C18.324 28.3926 18.324 27.8873 18.6357 27.5757L23.9757 22.2357Z" fill="#FC6423" class="bepo-2-pictogram--color-secondary" data-darkreader-inline-fill=""></path></svg></span>
                        </div>
                        <div className='w-[50%] text-left'>Click or drag and drop a file to this area to upload</div>
                        <div className='border-1 border-blue-500 px-3 py-3 text-blue-300 text-xs'>BROWSE</div>
                    </div>
                </Dragger>

                <div className='flex items-center gap-2 text-xs pt-[2px] mt-2'>
                    <div class="bepo-2-file-upload__helper-message _1x8n4wo_2271_n"><div class="bepo-2-form-helper__wrapper _1y3qbf7_2271_c"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="bepo-icon-svg _1ixx0vi0"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11.8077 8.92308C12.4449 8.92308 12.9615 8.40648 12.9615 7.76923C12.9615 7.13198 12.4449 6.61539 11.8077 6.61539C11.1704 6.61539 10.6538 7.13198 10.6538 7.76923C10.6538 8.40648 11.1704 8.92308 11.8077 8.92308ZM10.4615 11.2308C10.4615 10.8059 10.8059 10.4615 11.2308 10.4615H12C12.4248 10.4615 12.7692 10.8059 12.7692 11.2308V15.8462C13.1941 15.8462 13.5385 16.1906 13.5385 16.6154C13.5385 17.0402 13.1941 17.3846 12.7692 17.3846H12C11.5752 17.3846 11.2308 17.0402 11.2308 16.6154V12C10.8059 12 10.4615 11.6556 10.4615 11.2308Z" fill="var(--theme-color-icon-info, #3950ad)" data-darkreader-inline-fill=""></path></svg><span class="bepo-2-form-helper _1y3qbf7_2271_0 _1y3qbf7_2271_3 _1calqf5_2271_5"><span></span></span></div></div>
                    <div className='text-[#5f9ccf]'>
                        Supported file types : {suppportedFileTypes}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HandleMediaFileUploader