import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import React, { useCallback, useEffect } from 'react'
import CustomNode from './CustomNode';
import CustomStateNode from './CustomStateNode';
import InputNode from './InputNode';
import ResultNode from './ResultNodeFunctionality';
import NodesMenu from './layout/NodesMenu';
import { onDrop } from './NodeDrop';
import { useDragContext, useSelectedNodeContext } from './ContextApi/DragDropContext';
import DefaultStartingNode from './DefaultStartingNode';
import ResultMenu from './layout/ResultMenu';
import CustomEdge from './DelayEdge';
import Navbar from './Navbar';
import Dailogs from './layout/Dailogs';

const App = () => {
  const { draggedItemData } = useDragContext();
  const { selectedNode, setSelectedNode } = useSelectedNodeContext();

  const nodeTypes = {
    custom: CustomNode,
    stateNode: CustomStateNode,
    inputNode: InputNode,
    result: ResultNode,
    defaultStarting: DefaultStartingNode,
  };

  const initialNodes = [
    { id: '0', position: { x: 150, y: 100 }, data: { label: "Hi im your assistant bot. Please mention your name for assistance" }, type: "defaultStarting" },
    { id: '1', position: { x: 150, y: 200 }, data: { label: "Hi Adnan. Press 1 for company information. Press 2 for product information" }, type: "defaultStarting" }
  ];

  const initialEdges = [
    { id: "conditionNode-resultNode", source: "user-conditional-input-1", target: "parent-1" },
    { id: "e-child1", source: "child-1", target: "child-1-condition", data: { label: 'Add Delay' }, type: "customEdge" },
    { id: "e-child2", source: "child-2", target: "child-2-condition" },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

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

  let handleResultMenu = () => {
    let getResultNode = nodes.filter(item => item.type == "result")
    let isSelected = getResultNode[0]?.selected ? true : false

    return isSelected
  }

  let isResultNodeSelected = handleResultMenu()

  console.log(nodes, "nn")
  console.log(edges, "edges")


  // getting and setting selected node data in contextHook
  useEffect(() => {
    let getSelectedNode = nodes.filter(item => item.selected)
    setSelectedNode(getSelectedNode)
  }, [nodes])

  const edgeTypes = {
    customEdge: CustomEdge,
  };

  return (
    <>
      <Navbar />
      
      
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
              style={{ backgroundColor: "#ededed" }}
            >
              <Background />
            </ ReactFlow>
          </div>

        </div>
        {isResultNodeSelected ? <ResultMenu /> : <NodesMenu />}
      </div>
    </>
  )
}

export default App
