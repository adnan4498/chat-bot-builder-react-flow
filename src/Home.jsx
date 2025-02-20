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
import InputNode2 from './nodeComponents/InputNode2';
import DummyNode2 from './DummyNode2';
import { WarningOutlined } from '@ant-design/icons';

const Home = () => {
  const { draggedItemData } = useDragContext();
  const { selectedNode, setSelectedNode } = useSelectedNodeContext();
  const { deletingNodeId, setDeletingNodeId } = useDeletingNodeIdContext();

  const initialNodes = [
    { id: '0', position: { x: 450, y: 200 }, data: { label: "Default" }, type: "defaultStarting" },
  ];

  const initialEdges = [
    { id: "conditionNode-resultNode", hidden: false, source: "user-conditional-input-1", target: "parent-1", },
    // { id: "e-child1", source: "child-1", target: "child-1-condition", data: { label: 'Add Delay' }, type: "customEdge" },
    // { id: "e-child1", source: "child-1", target: "child-1-condition" },
    // { id: "e-child2", source: "child-2", target: "child-2-condition" },
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
    inputNode2: InputNode2,
    result: ResultNode,
    listNode: ListInput,
    defaultStarting: DefaultStartingNode,
    dummyNode2: DummyNode2
  };

  const edgeTypes = {
    customEdge: CustomEdge,
  };

  const { setViewport } = useReactFlow();

  const [topBot, seTtopBot] = useState({ x: 0, y: 0 });

  useEffect(() => {
    
  }, [])
  

  useEffect(() => {
    setViewport({ x: 0, y: 0, zoom: 1 }); 

    if (selectedNode && selectedNode.length > 0) {
      const getTopBot = {
        x: selectedNode[0]?.position?.x + 30 || 0,
        y: selectedNode[0]?.position?.y + 190 || 0,
      };
      seTtopBot(getTopBot);
    }

    if(selectedNode != undefined && selectedNode[0]?.type == "dummyNode2"){

      let getId = nodes.filter(item => item.id == "10")[0]?.id      

      if(getId != "10"){
        setNodes((e) => [
          ...e,
          {
            id: "10",
            // position: { x: event.screenX - 100, y: event.screenY - 100 },
            position: { left: `${topBot.x}px`, top: `${topBot.y}px`},
            data: { label: "" },
            type: "defaultStarting",
            selected: true,
          },
        ]);
      }

      console.log(nodes, "nn")
    }

  }, [selectedNode]);

  return (
    <>
      <div className='flex w-full h-[100vh]'>
        <Dailogs />
        <div className='react-flow-class !h-[0vw] mt-[100px]'>
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
            >
              <Background />
              <Controls />
              {/* <MiniMap maskColor="#cfcfcf" /> */}
              {/* <div className={`border-dotted border-red-500 border-2 w-[250px] h-[30px] absolute gap-2 px-2 justify-center ${topBot.x == 0 ? "hidden" : "flex"}`} style={{ left: `${topBot.x}px`, top: `${topBot.y}px`}}>
                <div>
                  Add an element here
                </div>
                <div>
                  <WarningOutlined color='red' />
                </div>
              </div> */}
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