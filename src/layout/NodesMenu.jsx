import React from 'react'
import TextNode from '../nodesComponents/TextNode'
import ImageNode from '../nodesComponents/ImageNode'
import ResultNode from '../nodesComponents/ResultNode'
import { DoubleRightOutlined } from '@ant-design/icons'
import DelayNode from '../nodesComponents/DelayNode'

const NodesMenu = () => {
  return (
    <div className="w-[25%] bg-[#fafafa] pl-8 pr-2 border-left-class overflow-y-scroll h-full">
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

        <div className='flex gap-2 mt-3'>

          <TextNode />
          <ImageNode />
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

    </div>
  )
}

export default NodesMenu