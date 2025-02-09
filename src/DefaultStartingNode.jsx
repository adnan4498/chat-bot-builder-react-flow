import React from 'react'

const DefaultStartingNode = ({data}) => {
    return (
        <div className="p-4 bg-white border-2 border-gray-400 rounded-lg shadow-md text-lg font-bold">
            {data.label}
        </div>
    )
}

export default DefaultStartingNode