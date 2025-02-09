import React from 'react'
import TextNode from '../nodesComponents/TextNode'
import ImageNode from '../nodesComponents/ImageNode'
import ResultNode from '../nodesComponents/ResultNode'
import AddConditionNode from '../nodesComponents/AddConditionNode'

const ResultMenu = () => {

    return (
        <div className="border-left-class w-[20%]">
            <div className='pl-3 mt-6'>
                <div className='text-xl font-semibold'>
                    <h1>Build</h1>
                </div>
            </div>

            <div className='nodes-section pl-3 mt-6'>

                <div>
                    <h2>User Response Result</h2>
                </div>

            </div>

            <div className='text-xs text-gray-500 pl-3 mt-6'>
                <p>
                    Use when the chatbot needs to collect input or react to something a customer sends as a response. Chatbot will process user input in the following order - keywords, NLP, fallback.
                </p>
            </div>

            <div className='nodes-section pl-3 mt-6'>

                <div>
                    <h2>Chatbot Sends</h2>
                </div>

                <div className='flex gap-2'>

                    <AddConditionNode />

                </div>
            </div>


        </div>
    )
}

export default ResultMenu