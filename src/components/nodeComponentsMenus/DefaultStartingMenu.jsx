import { DoubleRightOutlined } from '@ant-design/icons'
import React from 'react'
import TextNode from '../nodeComponents/TextNode'
import ResultNode from '../nodeComponents/ResultNode'
import ImageNode from '../nodeComponents/ImageNode'
import DelayNode from '../nodeComponents/DelayNode'
import ListNode from '../nodeComponents/ListNode'
import AudioNode from '../nodeComponents/AudioNode'
import FileNode from '../nodeComponents/FileNode'
import VideoNode from '../nodeComponents/VideoNode'
import ReplyNodeButton from '../nodeComponents/ReplyButtonNode'

const DefaultStartingMenu = () => {
    return (
        <>
            <div className='mt-6'>
                <div className='text-xl font-semibold'>
                    <div className=''>
                        <DoubleRightOutlined style={{ color: '#575755', fontSize: "18px" }} />
                    </div>
                    <h1 className='mt-4'>Build</h1>
                </div>

                <div className='text-xs text-[#575755] mt-2'>
                    <p>
                        Drag and drop the following elements to build and define your chatbot interactions:
                    </p>
                </div>
            </div>

            <div className='nodes-section mt-10'>

                <div className='font-semibold'>
                    <h2>Chatbot Sends</h2>
                </div>

                <div className='grid grid-cols-4 gap-2 mt-3'>
                {/* <div className='flex gap-2 mt-3'> */}

                    <TextNode />
                    <ListNode />
                    <ImageNode />
                    <AudioNode />
                    <FileNode />
                    <VideoNode />
                    <ReplyNodeButton />
                </div>
            </div>

            <div className='nodes-section mt-6'>

                <div className='font-semibold'>
                    <h2>Chatbot Recieves</h2>
                </div>

                <div className='flex gap-2 mt-3'>

                    <ResultNode />

                </div>
            </div>

            <div className='nodes-section mt-6'>

                <div className='font-semibold'>
                    <h2>Chatbot actions</h2>
                </div>

                <div className='flex gap-2 mt-3'>

                    <DelayNode />

                </div>
            </div>

            <div className='nodes-section mt-6'>

                <div className='font-semibold'>
                    <h2>Chatbot actions</h2>
                </div>

                <div className='flex gap-2 mt-3'>

                    <DelayNode />

                </div>
            </div>

            <div className='nodes-section mt-6'>

                <div className='font-semibold'>
                    <h2>Chatbot actions</h2>
                </div>

                <div className='flex gap-2 mt-3'>

                    <DelayNode />

                </div>
            </div>

            <div className='nodes-section mt-6'>

                <div className='font-semibold'>
                    <h2>Chatbot actions</h2>
                </div>

                <div className='flex gap-2 mt-3'>

                    <DelayNode />

                </div>
            </div>
        </>
    )
}

export default DefaultStartingMenu