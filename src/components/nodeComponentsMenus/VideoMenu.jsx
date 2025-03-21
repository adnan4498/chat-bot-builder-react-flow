import React, { useEffect, useState } from 'react'
import { CheckOutlined, CloseOutlined, DoubleRightOutlined } from '@ant-design/icons'
import { useReactFlow } from '@xyflow/react'
import { useSelectedNodeContext } from '../../ContextApi/DragDropContext'
import TextArea from 'antd/es/input/TextArea'
import { Space, Switch } from 'antd'

import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import HandleMediaFileUploader from '../HandleMediaFileUploader'

const VideoMenu = () => {

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
        onRemove() {
            let fileData = {}
            updateNodeData(selectedNode[0]?.id, { fileData });
        },
    };

    const handleFileUpload = (file) => {
        console.log(file, "file")
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            console.log(reader, "reader")

            reader.onload = () => {
                const fileData = { name: file.name, data: file, src: reader.result };

                console.log(fileData, "data");

                updateNodeData(selectedNode[0]?.id, { fileData });
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

    let suppportedFileTypes = ".mp4"
    let fileAccepted = "video"

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
                        <div class="bepo-2-card__icon _1k89jp9_2271_9"><svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="bepo-pictogram-svg _2bvj2j0"><path fill-rule="evenodd" clip-rule="evenodd" d="M32.1344 15.4088C32.4454 15.0965 32.9506 15.0954 33.263 15.4063C34.3947 16.533 35.2928 17.8722 35.9056 19.3469C36.5184 20.8216 36.8338 22.4029 36.8338 23.9998C36.8338 25.5968 36.5184 27.178 35.9056 28.6528C35.2928 30.1275 34.3947 31.4667 33.263 32.5934C32.9506 32.9043 32.4454 32.9032 32.1344 32.5908C31.8235 32.2785 31.8246 31.7732 32.137 31.4623C33.1198 30.4839 33.8996 29.321 34.4317 28.0404C34.9639 26.7597 35.2378 25.3866 35.2378 23.9998C35.2378 22.613 34.9639 21.2399 34.4317 19.9593C33.8996 18.6787 33.1198 17.5158 32.137 16.5374C31.8246 16.2264 31.8235 15.7212 32.1344 15.4088ZM29.663 17.8802C29.9743 17.5682 30.4796 17.5676 30.7916 17.8789C31.5966 18.682 32.2353 19.636 32.6711 20.6864C33.1069 21.7367 33.3312 22.8627 33.3312 23.9998C33.3312 25.137 33.1069 26.263 32.6711 27.3133C32.2353 28.3636 31.5966 29.3176 30.7916 30.1208C30.4796 30.432 29.9743 30.4314 29.663 30.1194C29.3518 29.8074 29.3524 29.3021 29.6644 28.9909C30.3208 28.336 30.8416 27.5581 31.197 26.7016C31.5523 25.8452 31.7352 24.9271 31.7352 23.9998C31.7352 23.0726 31.5523 22.1545 31.197 21.298C30.8416 20.4416 30.3208 19.6636 29.6644 19.0088C29.3524 18.6975 29.3518 18.1922 29.663 17.8802ZM27.207 20.3363C27.5204 20.0265 28.0257 20.0294 28.3355 20.3428C29.2981 21.3166 29.8379 22.6306 29.8379 23.9998C29.8379 25.369 29.2981 26.683 28.3355 27.6568C28.0257 27.9703 27.5204 27.9732 27.207 27.6634C26.8935 27.3535 26.8906 26.8483 27.2004 26.5348C27.8677 25.8598 28.2419 24.949 28.2419 23.9998C28.2419 23.0507 27.8677 22.1398 27.2004 21.4648C26.8906 21.1514 26.8935 20.6461 27.207 20.3363Z" fill="#FC6423" class="bepo-2-pictogram--color-secondary" data-darkreader-inline-fill="" ></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.3506 13.6495C21.7208 13.6028 22.0966 13.6607 22.4356 13.8167C22.7746 13.9727 23.0631 14.2204 23.2685 14.5319C23.4739 14.8434 23.5879 15.2062 23.5978 15.5792L23.598 15.6002V32.2922C23.598 32.3078 23.5976 32.3233 23.5967 32.3389C23.5749 32.7106 23.4497 33.0689 23.2351 33.3732C23.0206 33.6776 22.7252 33.9159 22.3824 34.0614C22.0396 34.2068 21.663 34.2535 21.295 34.1963C20.9271 34.1391 20.5824 33.9802 20.3 33.7375C20.2934 33.7318 20.2869 33.7261 20.2806 33.7202L13.9694 27.9302H9.60003C9.15931 27.9302 8.80203 27.5729 8.80203 27.1322V20.4002C8.80203 19.9595 9.15931 19.6022 9.60003 19.6022H14.0283L20.3186 14.0996C20.326 14.0932 20.3334 14.0869 20.341 14.0807C20.6307 13.8455 20.9804 13.6961 21.3506 13.6495ZM21.7685 15.2666C21.7003 15.2352 21.6247 15.2236 21.5502 15.2329C21.4793 15.2419 21.4121 15.2696 21.3555 15.3131L14.8534 21.0008C14.708 21.1281 14.5213 21.1982 14.328 21.1982H10.398V26.3342H14.28C14.4798 26.3342 14.6723 26.4091 14.8195 26.5442L21.3474 32.5331C21.4028 32.5785 21.4694 32.6082 21.5403 32.6193C21.6143 32.6308 21.6901 32.6214 21.7591 32.5921C21.8281 32.5629 21.8875 32.5149 21.9307 32.4537C21.9705 32.3971 21.9951 32.3313 22.002 32.2626V15.6135C21.9987 15.5412 21.976 15.471 21.9361 15.4105C21.8947 15.3478 21.8367 15.298 21.7685 15.2666Z" fill="#1B1B1A" class="bepo-2-pictogram--color-primary" data-darkreader-inline-fill=""></path></svg></div>

                    </div>
                    <div className='text-2xl font-semibold'>
                        <h2>Video</h2>
                    </div>
                </div>
            </div>

            <div className='text-xs text-gray-500 mt-6'>
                <p>
                    Chatbot sends a video to the user. You can upload a video (max 16MB) or provide an existing URL. Supported formats: .mp4  </p>          </div>

            <HandleMediaFileUploader suppportedFileTypes={suppportedFileTypes} fileAccepted={fileAccepted} />

            <div className='nodes-section mt-6 '>
                <div className='text-xs my-[3px] flex justify-between'>
                    <div className=''>
                        Video Caption (optional)
                    </div>
                    <div>
                        {maximumWords} / 1096
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

                        <TextArea rows={6} onChange={handleChange} value={inputVal} placeholder='Enter caption' />
                    </div>

                    {/* <div>
                        <button className='text-white text-sm bg-green-800 border-2 border-black rounded-lg px-2 py-2' onClick={handleSubmit}>Submit</button>
                    </div> */}
                </div>

            </div>
        </>
    )
}

export default VideoMenu