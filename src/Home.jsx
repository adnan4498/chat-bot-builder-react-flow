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
import { onDrop } from './modules/NodeDrop';
import { useDeletingNodeIdContext, useDragContext, useSelectedNodeContext } from './ContextApi/DragDropContext';
import DefaultStartingNode from './utilityNodes/DefaultStartingNode';
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
import UrlButtonInputNode from './components/nodeComponents/UrlButtonInputNode';
import StickerInputNode from './components/nodeComponents/StickerInputNode';
import DropHereNode from './utilityNodes/DropHereNode';

const Home = () => {
  const { draggedItemData } = useDragContext();
  const { selectedNode, setSelectedNode } = useSelectedNodeContext();
  const { deletingNodeId, setDeletingNodeId } = useDeletingNodeIdContext();

  const { setViewport, fitView } = useReactFlow();

  // used to center initial node
  const initialNodeWidth = 150;
  const initialNodeHeight = 50;

  const initialNodes = [
    {
      id: '0',
      position: {
        x: (window.innerWidth / 3.5) - (initialNodeWidth / 3.5),
        y: (window.innerHeight / 2.2) - (initialNodeHeight / 2.2)
      },
      data: { label: "Default" },
      type: "defaultStarting"
    },
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

  // useEffect(() => {
  //   setViewport({ zoom : 1});
  // }, []);

  useEffect(() => {
    fitView({ duration: 0, padding: 1.5 });
  }, [fitView, nodes, setNodes]);

  const [afterDrop, setAfterDrop] = useState(false)

  const handleDrop = (e) => {

    onDrop(e, nodes, setNodes, edges, setEdges, draggedItemData, selectedNode, initialNodeWidth, initialNodeHeight)
    // setNodes((prevNodes) => {
    //   console.log("hi"); // Logging before returning

    //   return prevNodes
    //     .filter(item => !item.id.includes("greenId"))
    //     // .map((item, index) => ({
    //     //   ...item, 
    //     //   position: {
    //     //     ...item.position, 
    //     //     y: index == "0" ? item?.position?.y + 120 : item.position.y // Adjust y safely
    //     //   },
    //     // }));
    // });

    // setNodes((prevNodes) => prevNodes.map(item => (item.position.y -20)))


    // setNodes((prevNodes) => {
    //   const lastNode = prevNodes[prevNodes.length - 1]; // 
    //   const newY = lastNode ? lastNode.position.y + initialNodeHeight + 20 : window.innerHeight / 3;

    //   return [
    //     ...prevNodes,
    //     {
    //       id: (prevNodes.length + 1).toString(), // Increment ID
    //       position: {
    //         x: (window.innerWidth / 3.5) - (initialNodeWidth / 3.5),
    //         y: newY, // Place below the last node
    //       },
    //       data: { label: "" },
    //       type: "defaultStarting",
    //       selected: true,
    //     },
    //   ];
    // });
    setDragOverOnce(true)
    setAfterDrop(true)

    setTimeout(() => {
      fitView({ duration: 0, padding: 1.5 }); // Adjusts viewport to fit all nodes
    }, 0);


  }

  let handleAfterDrop = () => {
    // setNodes((nodeItem) => )

    setNodes((prevNodes) => {
      console.log("hi"); // Logging before returning

      // const lastNode = prevNodes[prevNodes.length - 1]; 
      // const newY = lastNode.position.y + 50

      return prevNodes
        .filter(item => !item.id.includes("greenId"))
        .map((item, index, arr) => ({
          ...item,
          position: {
            ...item.position,
            y: index == "0" ? item?.position?.y : ((arr[index - 1].position.y) + (arr[index - 1].measured.height + 20)) // Adjust y safely
          },
        }));
    });

    setAfterDrop(false)
  }

  afterDrop && handleAfterDrop()

  // console.log(nodes, "nodes outside")
  const [dragOverOnce, setDragOverOnce] = useState(true)

  const handleDragOver = (t) => {
    t.preventDefault()

    // setNodes((e) => e.map((ee) => {
    //   return {...ee, style : {backgroundColor : "red", color: "red"}}
    // }))

    if (dragOverOnce) {
      let bbb = []

      nodes.forEach((nodeItem, index, arr) => {

        const newY = nodeItem.position.y + (nodeItem?.measured?.height || 28) + 20

        let greenNode

        greenNode = {
          id: nodeItem.id + "greenId",
          position: {
            x: window.innerWidth / 3.5 - initialNodeWidth / 3.5,
            y: newY,
          },
          // style : {margin : "50px"},
          data: { label: "hi" },
          type: "dropHereNode",
          selected: true,
        }

        console.log(arr, "arrr")

        if (nodeItem.id != "0" && arr[index - 1].id.includes('greenId')) {
          console.log("hassan")
          nodeItem = {
            id: nodeItem.id,
            position: {
              x: window.innerWidth / 3.5 - initialNodeWidth / 3.5,
              y: arr[index - 1]?.position?.y + 40
            },
            // style : {margin : "50px"},
            // data: { label: nodeItem.data.label },
            data: { label: "hiii" },
            type: nodeItem.type,
            selected: true,
          }
        }

        // const newY2 = greenNode.position.y + (greenNode?.measured?.height || 28) + 20

        // nodeItem = {
        //   id: nodeItem.id,
        //   position: {
        //     x: window.innerWidth / 3.5 - initialNodeWidth / 3.5,
        //     y: newY2,
        //   },
        //   // style : {margin : "50px"},
        //   data: { label: "hi" },
        //   type: "dropHereNode",
        //   selected: true,
        // }

        // const lastNode = arr[arr.length - 1];
        // // let newY2 = lastNode.data.label != "Default" ? nodeItem.measured.height || 50 + nodeItem.position.y + 40 : window.innerHeight / 3;
        // // let newY2 =  greenNode?.measured?.height  + greenNode.position.y + 40 

        // nodeItem = {
        //   id: nodeItem.id,
        //   position: {
        //     x: window.innerWidth / 3.5 - initialNodeWidth / 3.5,
        //     y: greenNode.position.y + 40,
        //   },
        //   // style : {margin : "50px"},
        //   data: { label: nodeItem.data.label },
        //   type: nodeItem.type ,
        //   selected: true,
        // }

        // console.log(greenNode, "gg")
        // console.log(nodeItem, "nodeItem")

        bbb.push(nodeItem, greenNode)
      })
      setNodes(bbb)

      // console.log(bbb, "bbb")


      setDragOverOnce(false)

      // const newY = lastNode ? lastNode.position.y + lastNode.measured.height + 20 : window.innerHeight / 3;
      // const newY = lastNode ? lastNode.position.y + lastNode.measured.height + 20 : window.innerHeight / 3;

    }

  }
  console.log(nodes, "nodeItem")


  // const newY2 = lastNode?.data?.label != "Default" ? prevNodes.measured.height + prevNodes.position.y + 70 : window.innerHeight / 3;
  //  const newY2 = lastNode ? prevNodes.measured.height + prevNodes.position.y + 50 : window.innerHeight / 3;

  //  prevNodes = 
  //  {
  //    id: prevNodes.id,
  //    position: {
  //      x: window.innerWidth / 3.5 - initialNodeWidth / 3.5,
  //      y: newY2,
  //    },
  //    data: { label: "" },
  //    type: prevNodes.type,
  //    selected: true,
  //  },


  // selectedNode != undefined && console.log(selectedNode[0], "selectedNode")

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
    urlButtonInputNode: UrlButtonInputNode,
    stickerInputNode: StickerInputNode,
    result: ResultNode,
    listNode: ListInput,
    defaultStarting: DefaultStartingNode,
    resultParent: ResultParent,
    addElement: AddElement,
    dropHereNode: DropHereNode,
  };

  const edgeTypes = {
    customEdge: CustomEdge,
  };

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

  // console.log(nodes, "nodes")

  return (
    <>
      <div className='flex w-full h-[100vh]'>
        <Dailogs />
        <div className='react-flow-class'>
          <div style={{ width: '100%', height: "100vh" }} onDragOver={(e) => [handleDragOver(e)]} onDrop={(e) => handleDrop(e)}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              edgeTypes={edgeTypes}
              onNodesChange={onNodesChange}
              // onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              style={{ backgroundColor: "#e6e4e4" }}
              nodesDraggable={false} // Disable dragging globally
              fitView
            >
              <Background />
              <Controls />
            </ ReactFlow>
          </div>
        </div>
        <NodesMenu />

        {/* <RightSideBar /> */}
      </div>
    </>
  )
}

export default Home