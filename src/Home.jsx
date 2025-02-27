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
import NodesMenu from './layout/NodesMenu';
import ListInput from './components/nodeComponents/ListInput';
import InputNode2 from './components/nodeComponents/InputNode2';
import { WarningOutlined } from '@ant-design/icons';
import ResultParent from './ResultParent';
import AddElement from './AddElement';
import ImageNode from './components/nodeComponents/ImageNode';
import ImageInputNode from './components/nodeComponents/ImageInputNode';
import TextInputNode from './components/nodeComponents/TextInputNode';
import AudioInputNode from './components/nodeComponents/AudioInputNode';
import FileInputNode from './components/nodeComponents/FileInputNode';
import VideoInputNode from './components/nodeComponents/VideoInputNode';
import ReplyButtonInputNode from './components/nodeComponents/ReplyButtonInputNode';

const Home = () => {
  const { draggedItemData } = useDragContext();
  const { selectedNode, setSelectedNode } = useSelectedNodeContext();
  const { deletingNodeId, setDeletingNodeId } = useDeletingNodeIdContext();

  const initialNodes = [
    { id: '0', position: { x: 450, y: 200 }, data: { label: "Default" }, type: "defaultStarting" },
  ];

  const initialEdges = [
    { id: "conditionNode-resultNode", hidden: false, source: "ur-input-1", target: "ur-parent-1", },
    { id: "e-child1", source: "child-1", target: "child-1-condition", data: { label: 'Add Delay' }, type: "customEdge" },
    // { id: "e-child1", source: "child-1", target: "child-1-condition" },
    // { id: "e-child2", source: "child-2", target: "child-2-condition" },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

  useEffect(() => {
    setNodes((nds) => nds.filter(item => item.id != deletingNodeId))
    setDeletingNodeId("")

  }, [deletingNodeId])

  // get/set selected node in setSelected contextHook
  useEffect(() => {

    let getSelectedNode = nodes.filter(items => items.selected)

    let checkAddConditionNode = getSelectedNode.filter(item => item.data.label == draggedItemData?.draggedItemLabel)

    if (checkAddConditionNode[0]?.data.label == "Add Condition") {

      setNodes((e) => {
        let isChanged = false

        let changedArr = e.map((item) => {
          if (item?.id?.includes("parent") && item.selected == true) {
            isChanged = true
            return { ...item, selected: false }
          }
          return item
        })

        return isChanged ? changedArr : e
      })

      // deleting node is not selected, to prevent opening its menu
      if (checkAddConditionNode[0]?.id != deletingNodeId) {
        setSelectedNode(checkAddConditionNode)
      }

    }
    else {
      if (getSelectedNode[0]?.id != deletingNodeId) {
        setSelectedNode(getSelectedNode)
      }

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

  const nodeTypes = {
    custom: CustomNode,
    stateNode: CustomStateNode,
    textInputNode: TextInputNode,
    inputNode2: InputNode2,
    imageInputNode: ImageInputNode,
    audioInputNode: AudioInputNode,
    fileInputNode: FileInputNode,
    videoInputNode: VideoInputNode,
    replyButtonInputNode: ReplyButtonInputNode,
    result: ResultNode,
    listNode: ListInput,
    defaultStarting: DefaultStartingNode,
    resultParent: ResultParent,
    addElement: AddElement,
  };

  const edgeTypes = {
    customEdge: CustomEdge,
  };

  const { setViewport } = useReactFlow();

  useEffect(() => {
    setViewport({ x: 0, y: 0, zoom: 1 });
  }, [])

  const [topBot, seTtopBot] = useState({ x: 0, y: 0 });

  const [getLen, setGetLen] = useState(2)

  let getResultNodeType = nodes.filter(item => item.id == "ur-parent-1")[0]

  let getChildCNodes = nodes.filter((items) => items.id.includes("-condition"));
  let getChildXPos = getChildCNodes.map(item => item.position.x)

  let getLastChildPos = getChildXPos.slice(-1)[0]

  useEffect(() => {
    seTtopBot({ x: getResultNodeType?.position?.x, y: getResultNodeType?.position?.y })

    let getX = getResultNodeType?.position?.x
    let getY = getResultNodeType?.position?.y

    // current div positions against useState positions
    // useState positions are 1 render behind
    let checkY = topBot.y == getResultNodeType?.position?.y
    let checkX = topBot.x == getResultNodeType?.position?.x

    let getChilds
    if (selectedNode != undefined) {
      getChilds = nodes.filter(item => item.parentId == selectedNode[0]?.id)
    }
    if (selectedNode != undefined && selectedNode[0]?.type == "resultParent") {

      getChilds.forEach((item, index) => {
        if (!nodes.some(nds => nds.id.match(new RegExp(`${item.id}-condition`, "i")))) {

          if (index == 0) {
            setNodes((e) => [
              ...e,
              {
                id: `${item.id}-condition`,
                position: { x: getX + 30, y: getY + 180 },
                data: { label: "" },
                type: "addElement",
                selected: false,
                draggable: false,
              },
            ]
            )
          }
          else if (index == 1) {
            // for (let i = 0; i < index; i++) {
            //   incre += 340
            // }

            setNodes((e) => [
              ...e,
              {
                id: `${item.id}-condition`,
                position: { x: getX + 340, y: getY + 180 },
                data: { label: "" },
                type: "addElement",
                selected: false,
                draggable: false,
              },
            ]
            )
          }
          else {
            setNodes((e) => [
              ...e,
              {
                id: `${item.id}-condition`,
                position: { x: getLastChildPos + 310, y: getY + 180 },
                data: { label: "" },
                type: "addElement",
                selected: false,
                draggable: false,
              },
            ]
            )
          }
        }
        else {
          if (!checkY || !checkX) {
            // retrieve; update positions; set back
            let lastXPos = getX + 30;
            let update_conditional_nodes_positions = nodes.filter(nds => nds.id?.includes("-condition")).map((item, index) => {
              let newXPos;
          
              if (index === 0) {
                newXPos = getX + 30;
              } else if (index === 1) {
                newXPos = getX + 340;
              } else {
                newXPos = lastXPos + 310;  // Use the dynamically updated last position
              }
          
              lastXPos = newXPos;  // Update lastXPos for the next iteration
          
              return { ...item, position: { x: newXPos, y: getY + 180 } };
            });

            let setConditionalNodes = (nodeItem) => {
              // returns single obj
              return update_conditional_nodes_positions.filter(item => item.id == nodeItem.id)[0]
            }

            setNodes((e) => e.map((item) => item.id.includes("-condition") ? setConditionalNodes(item) : item))
          }
        }
      })
    }

    // adds width on ur-parent for new conditioned node
    if (selectedNode?.length > 0) {

      let getParent = nodes.filter(item => item.id.includes("parent"))

      let getC = nodes.filter((item) => item?.parentId != undefined && item?.parentId == getParent[0]?.id)
      getC?.length != getLen && setGetLen(getC?.length)

      setNodes((e) => {
        let hasChanged = false;

        const updatedNodes = e.map((item, index) => {
          if (item.id.includes("parent") && getLen !== getC?.length) {
            hasChanged = true;
            return {
              ...item,
              style: { ...item.style, width: item.style.width += 310, height: 155 },
            };
          }
          return item;
        });

        return hasChanged ? updatedNodes : e;
      });

    }

  }, [selectedNode, nodes]);

  const handleDrop = (e) => {
    onDrop(e, nodes, setNodes, edges, setEdges, draggedItemData, selectedNode)
  }

  console.log(nodes, "nodes")

  return (
    <>
      <div className='flex w-full h-[100vh]'>
        {/* <Dailogs /> */}
        <div className='react-flow-class'>
          <div style={{ width: '100%', height: "100vh" }} onDragOver={(e) => [e.preventDefault()]} onDrop={(e) => handleDrop(e)}>
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
              {/* <div className={border-dotted border-red-500 border-2 w-[250px] h-[30px] absolute gap-2 px-2 justify-center ${topBot.x == 0 ? "hidden" : "flex"}} style={{ left: ${topBot.x}px, top: ${topBot.y}px}}>
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