import React from 'react'
import TextNode from '../nodesComponents/TextNode'
import ImageNode from '../nodesComponents/ImageNode'
import ResultNode from '../nodesComponents/ResultNode'

const NodesMenu = () => {
  return (
    <div className="border-left-class w-[20%]">
      <div className='pl-3 mt-6'>
        <div className='text-xl font-semibold'>
          <h1>Build</h1>
        </div>

        <div className='text-xs text-gray-500 mt-2'>
          <p>
            Drag and drop the following elements to build and define your chatbot interactions:
          </p>
        </div>
      </div>

      <div className='nodes-section pl-3 mt-6'>

        <div>
          <h2>Chatbot Sends</h2>
        </div>

        <div className='flex gap-2'>

          <TextNode />
          <ImageNode />
        </div>
      </div>

      <div className='nodes-section pl-3 mt-6'>

        <div>
          <h2>Chatbot Recieves</h2>
        </div>

        <div className='flex gap-2'>

          <ResultNode />

        </div>
      </div>
    </div>
  )
}

export default NodesMenu