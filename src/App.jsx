import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
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
    { id: '0', position: { x: 500, y: 100 }, data: { label: "Hi im your assistant bot. Please mention your name for assistance" }, type: "defaultStarting" },
    { id: '1', position: { x: 500, y: 200 }, data: { label: "Hi Adnan. Press 1 for company information. Press 2 for product information" }, type: "defaultStarting" }
  ];

  const initialEdges = [
    { id: "conditionNode-resultNode", source: "user-conditional-input-1", target: "parent-1" }, 
    { id: "e-child1", source: "child-1", target: "child-1-condition" }, 
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
  

  // getting and setting selected node data in contextHook
  useEffect(() => {
    let getSelectedNode = nodes.filter(item => item.selected)
    setSelectedNode(getSelectedNode)
  }, [nodes])
  

  return (
    <div className='flex w-full h-full'>

      <div className='react-flow-class'>
        <div style={{ width: '100%', height: '100%' }} onDragOver={(e) => e.preventDefault()} onDrop={(e) => onDrop(e, nodes, setNodes, edges, setEdges, draggedItemData, selectedNode)}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            // onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
          />
        </div>

      </div>
      {isResultNodeSelected ? <ResultMenu /> : <NodesMenu />}
      <div>
      </div>
    </div>
  )
}

export default App
