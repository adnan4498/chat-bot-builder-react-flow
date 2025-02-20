import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  Controls,
  MiniMap,
  BackgroundVariant,
  useReactFlow,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import React, { useCallback, useEffect, useState } from 'react'
import CustomNode from './CustomNode';
import CustomStateNode from './CustomStateNode';
import ResultNode from './ResultNodeFunctionality';
import { onDrop } from './NodeDrop';
import { useDeletingNodeIdContext, useDragContext, useSelectedNodeContext } from './ContextApi/DragDropContext';
import DefaultStartingNode from './DefaultStartingNode';
import CustomEdge from './DelayEdge';
import Dailogs from './layout/Dailogs';
import InputNode from './nodeComponents/InputNode';
import NodesMenu from './layout/NodesMenu';
import ListInput from './nodeComponents/ListInput';

const Home = () => {
  const { draggedItemData } = useDragContext();
  const { selectedNode, setSelectedNode } = useSelectedNodeContext();
  const { deletingNodeId, setDeletingNodeId } = useDeletingNodeIdContext();
  
  const initialNodes = [
    { id: '0', position: { x: 450, y: 200 } , data: { label: "Default" }, type: "defaultStarting" },
  ];

  const initialEdges = [
    { id: "conditionNode-resultNode", source: "user-conditional-input-1", target: "parent-1", },
    { id: "e-child2", source: "child-2", target: "child-2-condition" },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

  useEffect(() => {
    setNodes((nds) => nds.filter(item => item.id != deletingNodeId))
    setDeletingNodeId("")

  }, [deletingNodeId])

  // getting and setting selected node data in contextHook
  // if node is about to delete. do not set selected, to prevent opening its menu
  useEffect(() => {
    let getSelectedNode = nodes.filter(item => item.selected)
    if (getSelectedNode[0]?.id != deletingNodeId) {
      setSelectedNode(getSelectedNode)
    }

  }, [nodes])

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );


  // to remove edges by clicking on it
  // const onEdgesChange = useCallback(
  //   (changes) => {
  //     setEdges((eds) => eds.filter((edge) => !changes.find((ch) => ch.id === edge.id)));
  //   },
  //   []
  // );

  // console.log(nodes, "nodes")

  const nodeTypes = {
    custom: CustomNode,
    stateNode: CustomStateNode,
    inputNode: InputNode,    
    result: ResultNode,
    listNode: ListInput,
    defaultStarting: DefaultStartingNode,
  };

  const edgeTypes = {
    customEdge: CustomEdge,
  };

  const { setViewport } = useReactFlow();

  useEffect(() => {
      setViewport({ x: 0, y: 0, zoom: 1 }); // Set default zoom to 150%
  }, []);

  return (
    <>
      <div className='flex w-full h-[100vh]'>
        <Dailogs />
        <div className='react-flow-class !h-[0vw]'>
          <div style={{ width: '100%', height: "100vh" }} onDragOver={(e) => e.preventDefault()} onDrop={(e) => onDrop(e, nodes, setNodes, edges, setEdges, draggedItemData, selectedNode)}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              edgeTypes={edgeTypes}
              onNodesChange={onNodesChange}
              // onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              style={{ backgroundColor: "#e6e4e4" }}

            // panOnDrag={false}    // Disables panning when dragging
            // zoomOnScroll={false} // Disables zooming using scroll
            // zoomOnDoubleClick={false} // Disables zooming on double click
            // panOnScroll={false}  // Disables panning when scrolling
            // preventScrolling={false}
            >
              <Background />
              <Controls/>
              {/* <MiniMap maskColor="#cfcfcf" /> */}
            </ ReactFlow>
          </div>
        </div>
        {/* {isResultNodeSelected ? <ResultMenu /> : <NodesMenu />} */}
        <NodesMenu />

        {/* <RightSideBar /> */}
      </div>
    </>
  )
}

export default Home


// import React, { useEffect, useState } from 'react'

// const Home = () => {

//   const [numberState, setNumberState] = useState(1)

//   useEffect(() => {
//     setNumberState(5)
//     console.log(numberState, " inside ")
//   }, [numberState])

//   console.log(numberState, " outside ")

//   return (
//     <div onClick={() => setNumberState((e) => ++e)} className='bg-red-500 w-full h-20'>Home</div>
//   )
// }

// export default Home