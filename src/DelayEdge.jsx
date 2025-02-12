import React, { useState } from 'react';
import { getBezierPath, EdgeLabelRenderer, BaseEdge, useReactFlow, useEdgesState } from '@xyflow/react';
import { applyEdgeChanges } from "@xyflow/react";

const CustomEdge = ({ id, sourceX, sourceY, source, target, targetX, targetY, sourcePosition, targetPosition, data }) => {

    const [isInput, setIsInput] = useState(false)
    const [inputVal, setInputVal] = useState()

    const { getNodes, updateNodeData, getEdges } = useReactFlow()

    let getAllEdges = getEdges()

    const [edges, setEdges] = useEdgesState(getAllEdges);

    // let getSpecificEdges = getEdges().find(item => item.id == id)

    // console.log(getSpecificEdges, "eee")


    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    const handleChange = (e) => {
        setInputVal(e.target.value);
    };

    const handleSubmit = (e) => {
        setIsInput(false)
        // setInputVal(inputVal)

        // edges.forEach((item) => {
        //     if(item.id == id){
        //     } 
        // })

        // setEdges((oldEdges) => [...oldEdges, {id: id, source : source, target : target, data : {label : inputVal}}])

        console.log(edges, "edwwwwwges")
        // setEdges((edges) =>
        //     edges.map((edg) =>
        //       edg.id === id
        //         ? { ...edg, data: { ...edg.data, label: inputVal } } // Preserve existing edge properties
        //         : edg
        //     )
        //   );

        // setEdges((edg) => applyEdgeChanges([{ id, data : {label : inputVal} }], edg));

        setEdges((edges) =>
            edges.map((edge) =>
              edge.id === id
                ? { ...edge, data: { ...edge.data, label: inputVal } } // ✅ Correctly updates edge label
                : edge
            )
          );
          


    };
    // console.log(edges, "outside")

    // console.log(source, 'source')
    // console.log(target, 'target')
    // console.log(data, 'data')
    // console.log(id, 'id')

    // console.log(edges, 'edges')

    return (
        <>
            <BaseEdge id={id} path={edgePath} />
            <EdgeLabelRenderer >
                <div
                    style={{
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`, pointerEvents: "all"
                    }}
                    className="edge-label-renderer__custom-edge nodrag nopan"
                >

                    {isInput ?
                        <div className='flex items-center gap-2'>
                            <div>
                                <input
                                    type="number"
                                    onChange={handleChange}
                                    value={inputVal}
                                    className=''
                                />
                            </div>

                            <div>
                                <button className='text-white text-sm bg-green-800 border-2 border-black rounded-lg px-2 py-2' onClick={handleSubmit}>Submit</button>
                            </div>
                        </div> :
                        <div onClick={() => setIsInput(true)}>
                            {inputVal ? `Delay ${inputVal} sec` : data.label}
                        </div>}

                </div>
            </EdgeLabelRenderer>
        </>
    );
};

export default CustomEdge;
