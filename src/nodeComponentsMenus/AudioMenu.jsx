import React, { useEffect, useState } from 'react'
import { CheckOutlined, CloseOutlined, DoubleRightOutlined } from '@ant-design/icons'
import { useReactFlow } from '@xyflow/react'
import { useSelectedNodeContext } from '../ContextApi/DragDropContext'
import TextArea from 'antd/es/input/TextArea'
import { Space, Switch } from 'antd'

import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const AudioMenu = () => {

    const [uploadOrLink, setUploadOrLink] = useState()
    const [multiImgData, setMultiImgData] = useState()

    const { selectedNode } = useSelectedNodeContext();
    const { Dragger } = Upload;

    let startingInputText = selectedNode[0]?.data.label == "Text send to user..." ? "" : selectedNode[0]?.data.label

    const [inputVal, setInputVal] = useState(startingInputText)
    const [maximumWords, setMaximumWords] = useState(0)

    const { updateNodeData } = useReactFlow();

    // show node text/label in input
    useEffect(() => {

        let startingInputText = selectedNode[0]?.data.label == "Text send to user..." ? "" : selectedNode[0]?.data.label


        setInputVal(startingInputText)
    }, [selectedNode])

    const handleChange = (e) => {
        setInputVal(e.target.value);
        updateNodeData(selectedNode[0]?.id, { label: e.target.value })
        let inputWordsLen = e.target.value.length

        setMaximumWords(inputWordsLen)
    };

    const props = {
        name: 'imagefile',
        multiple: false,
        beforeUpload: () => false, // Prevent auto-upload
        onDrop(e) {
            e.preventDefault();
            handleFileUpload(e.dataTransfer.files[0]);
        },
        onChange(e) {
            handleFileUpload(e.file); // browse and add image
        },
        onRemove(){
            let imageData = {}
            updateNodeData(selectedNode[0]?.id, { imageData });
        },
    };

    const handleFileUpload = (file) => {
        console.log(file, "file")
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            console.log(reader, "reader")

            reader.onload = () => {
                const imageData = { name: file.name, data: file, src: reader.result };

                console.log(imageData, "data");

                updateNodeData(selectedNode[0]?.id, { imageData });
                message.success(`${file.name} uploaded to node.`);
            };

            reader.onerror = () => {
                message.error(`${file.name} failed to load.`);
            };
        } else {
            message.error("Please upload a valid image file.");
        }
    };

    console.log(selectedNode[0], "selectedNode")

    return (
        <>
            <div className='mt-6'>
                <div className=''>
                    <DoubleRightOutlined style={{ color: '#575755', fontSize: "18px" }} />
                </div>
            </div>

            <div className='nodes-section  mt-6'>

                <div className='flex gap-2 items-center'>
                    <div>
                        <div class="bepo-2-card__icon _1k89jp9_2271_9"><svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="bepo-pictogram-svg _2bvj2j0"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6 11.2021C13.171 11.2021 11.202 13.1712 11.202 15.6001C11.202 18.0291 13.171 19.9981 15.6 19.9981C18.0289 19.9981 19.998 18.0291 19.998 15.6001C19.998 13.1712 18.0289 11.2021 15.6 11.2021ZM12.798 15.6001C12.798 14.0526 14.0525 12.7981 15.6 12.7981C17.1475 12.7981 18.402 14.0526 18.402 15.6001C18.402 17.1477 17.1475 18.4021 15.6 18.4021C14.0525 18.4021 12.798 17.1477 12.798 15.6001Z" fill="#FC6423" class="bepo-2-pictogram--color-secondary" data-darkreader-inline-fill=""></path><path d="M34.1642 18.6359C34.0133 18.485 33.8083 18.4008 33.5949 18.4022C33.3815 18.4035 33.1776 18.4903 33.0286 18.6431L21.5635 30.4021H7.19995C6.75923 30.4021 6.40195 30.7594 6.40195 31.2001C6.40195 31.6409 6.75923 31.9981 7.19995 31.9981H21.9C22.1151 31.9981 22.3211 31.9113 22.4713 31.7572L33.6071 20.3359L40.2357 26.9644C40.5473 27.2761 41.0526 27.2761 41.3642 26.9644C41.6759 26.6528 41.6759 26.1475 41.3642 25.8359L34.1642 18.6359Z" fill="#FC6423" class="bepo-2-pictogram--color-secondary" data-darkreader-inline-fill=""></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.40195 8.39985C6.40195 7.29639 7.29649 6.40186 8.39995 6.40186H39.6C40.7034 6.40186 41.598 7.29639 41.598 8.39986V39.5999C41.598 40.7033 40.7034 41.5979 39.6 41.5979H8.39995C7.29649 41.5979 6.40195 40.7033 6.40195 39.5999V8.39985ZM8.39995 7.99786C8.17794 7.99786 7.99795 8.17784 7.99795 8.39985V39.5999C7.99795 39.8219 8.17794 40.0019 8.39995 40.0019H39.6C39.822 40.0019 40.002 39.8219 40.002 39.5999V8.39986C40.002 8.17784 39.822 7.99786 39.6 7.99786H8.39995Z" fill="#1B1B1A" class="bepo-2-pictogram--color-primary" data-darkreader-inline-fill="" ></path></svg></div>

                    </div>
                    <div className='text-2xl font-semibold'>
                        <h2>Image</h2>
                    </div>
                </div>
            </div>

            <div className='text-xs text-gray-500 mt-6'>
                <p>
                    Chatbot sends an image to the user. You can upload an image (max 5MB) or provide an existing URL. Supported formats: .jpg, .png                </p>
            </div>

            <div className='flex mt-6 text-sm font-semibold cursor-pointer'>
                <div onClick={() => setUploadOrLink("upload")} className={`border-1 border-gray-500 ${uploadOrLink == "upload" ? "bg-[#e5e5e3]" : "bg-white"}  py-2 px-2 text-center w-1/2 rounded-l-sm`}>
                    Upload
                </div>
                <div onClick={() => setUploadOrLink("link")} className={`border-1 border-gray-500 ${uploadOrLink == "link" ? "bg-[#e5e5e3]" : "bg-white"}  py-2 px-2 text-center w-1/2 rounded-r-sm`}>
                    Link
                </div>
            </div>

            <div className='my-5'>
                <Dragger {...props}>
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
                        Supported file types : .jpg, .png
                    </div>
                </div>
            </div>

            <div className='nodes-section mt-6 '>
                <div className='text-xs my-[3px] flex justify-between'>
                    <div className=''>
                        Image Caption (optional)
                    </div>
                    <div>
                        {maximumWords} / 1  096
                    </div>
                </div>
                <div className='w-full'>
                    <div>
                        {/* <input
                            type="text"
                            onChange={handleChange}
                            value={inputVal}
                            className='w-full h-32 border-[1px] border-black'
                        /> */}

                        <TextArea rows={6} onChange={handleChange} value={inputVal} />
                    </div>

                    {/* <div>
                        <button className='text-white text-sm bg-green-800 border-2 border-black rounded-lg px-2 py-2' onClick={handleSubmit}>Submit</button>
                    </div> */}
                </div>

            </div>
        </>
    )
}

export default AudioMenu