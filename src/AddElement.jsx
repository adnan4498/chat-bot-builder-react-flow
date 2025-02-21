import { WarningOutlined } from '@ant-design/icons'
import React from 'react'

const AddElement = () => {
    return (
        <div className='flex gap-2 justify-center items-center w-[254px] h-10 border-1 border-dotted border-red-500 rounded-sm'>
            <div>
                Add an element here
            </div>
            <div>
                <WarningOutlined color='red'/>
            </div>
        </div>
    )
}

export default AddElement