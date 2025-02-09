import { applyNodeChanges, Background, Handle, Position, useNodeConnections, useNodesData, useNodesState, useReactFlow } from '@xyflow/react'
import React, { useEffect, useState } from 'react'

const ResultNodeFunctionality = ({ id, data }) => {
    const [resultData, setResultData] = useState()

    const { getNodes, updateNodeData, getEdges } = useReactFlow()

    let getNodesConnections = useNodeConnections({
        type: "target",
        handleId: "result-connection-handler",
    })

    let getAllSourceNodes = useNodesData(
        getNodesConnections.map((connections) => connections.source)
    )

    useEffect(() => {
        let getAllSourcesData = getAllSourceNodes.map((nodesData) => nodesData?.data?.label)
        setResultData(getAllSourcesData[0])
    }, [getAllSourceNodes])

    let getAllNodes = getNodes()
    let getAllEdges = getEdges()

    const [nodes, setNodes, onNodesChange] = useNodesState(getAllNodes);


    useEffect(() => {

        let getParentNode = getAllNodes.filter((item) => (
            item?.id == id
        ))

        let getParentId = getParentNode[0]?.id

        let getAllChildNodes = getAllNodes.filter((item) => (
            item?.parentId == getParentId
        ))



        getAllChildNodes.forEach((item) => {
            if (resultData == item.data.label) {
                console.log(item, "getAllChildNodes")
                console.log(getAllEdges, "eeee")

                let getConditionedChildEdge = getAllEdges.filter(edgNode => edgNode.source == item.id)

                const getConditionedChildNode = getNodes().find((node) => node.id === getConditionedChildEdge[0].target);


                console.log(getConditionedChildNode, "getConditionedChild")


                console.log(getConditionedChildNode.data.label, "condition printed")
                // updateNodeData(item.id,
                //     { label: "hello" }
                // )

                // setNodes((ndss) =>
                //     ndss.map((nds) =>
                //         nds.id === 'child-B' ? { ...nds, position: { x: 1, y: 1 } } : nds
                //         // nds.id === 'child-B' ? { ...nds, style: { backgroundColor: 'red', color: 'white' } } : nds
                //         // nds.id === 'child-B' ? { ...nds, data: { label: 'white' } } : nds
                //     )
                // );

                // applyNodeChanges(item.id,
                //     {position: { x: 1, y: 1 }}
                // )

                // setNodes((nds) =>
                //     nds.map((node) => ({ ...node, position: { x: 1, y: 1 } }))
                // );

                // nodes.forEach((nodesItem) => {
                //     if (getConditionedChildNode.id === nodesItem.id) {
                //         setNodes((nds) =>
                //             nds.map((node) =>
                //                 node.id === nodesItem.id ? { ...node, position: { x: 1, y: 1 } } : node
                //             )
                //         );
                //     } else {
                //         setNodes((nds) => [...nds, nodesItem]);
                //     }
                // });


            }
        })

        // updateNodeData(id, { label: e.target.value })
    }, [resultData])


    return (
        <>
            <Handle type='target' position={Position.Top} />
        </>
    )
}

export default ResultNodeFunctionality