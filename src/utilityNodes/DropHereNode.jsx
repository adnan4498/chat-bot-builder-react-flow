import { WarningOutlined } from '@ant-design/icons'
import React from 'react'

const DropHereNode = () => {
    return (
        <div className='flex gap-2 text-xs justify-center items-center w-[253px] h-7 border-1 border-dotted border-green-500 rounded-sm'>
            <div>
                <WarningOutlined color='green' />
            </div>
            <div>
                Drop here to add selected node
            </div>
        </div>
    )
}

export default DropHereNode