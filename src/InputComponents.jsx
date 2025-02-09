import React, { useCallback, useState } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';

import "./InputComponents.css" 
import "@xyflow/react/dist/style.css";

const InputComponents = () => {

  const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  ];

  const dummyNode = [
    { id: 'dummyNode1', position: { x: 0, y: 0 }, data: { label: 'Node' } },
  ];

  const initialEdges = [{ id: '', source: '', target: '' }];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [dummyNodeState, setDummyNodeState, onDummyNodesChange] = useNodesState(dummyNode);

  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div style={{width: '95vw', height: '95vh', display: "flex"}}>
      <div className="react-flow-class">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
        </ReactFlow>
      </div>

      <div className="node-bank">
        <ReactFlow
          nodes={dummyNodeState}
          // onNodesChange={onDummyNodesChange}
        >
        </ReactFlow>
      </div>
    </div>
  );
};

export default InputComponents;
