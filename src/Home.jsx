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
import { WarningOutlined } from '@ant-design/icons';
import ResultParent from './ResultParent';
import AddElement from './AddElement';

const Home = () => {
  const { draggedItemData } = useDragContext();
  const { selectedNode, setSelectedNode } = useSelectedNodeContext();
  const { deletingNodeId, setDeletingNodeId } = useDeletingNodeIdContext();

  const initialNodes = [
    { id: '0', position: { x: 450, y: 200 }, data: { label: "Default" }, type: "defaultStarting" },
  ];

  const initialEdges = [
    { id: "conditionNode-resultNode", hidden: false, source: "ur-input-1", target: "ur-parent-1", },
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

  // get/set selected node in setSelected contextHook
  useEffect(() => {

    let getSelectedNode = nodes.filter(items => items.selected)

    let checkAddConditionNode = getSelectedNode.filter(item => item.data.label == draggedItemData?.draggedItemLabel)

    if (checkAddConditionNode[0]?.id == "ur-child-3") {

      setNodes((e) => {
        let isChanged = false

        let changedArr = e.map((item) => {
          if (item?.id == "ur-parent-1" && item.selected == true) {
            isChanged = true
            return { ...item, selected: false }
          }
          return item
        })

        return isChanged ? changedArr : e
      })

      if (checkAddConditionNode[0]?.id != deletingNodeId) {
        setSelectedNode(checkAddConditionNode)
      }

    }
    else {
      // deleting node is not selected, to prevent opening its menu
      if (getSelectedNode[0]?.id != deletingNodeId) {
        setSelectedNode(getSelectedNode)
      }

    }

    // if (getSelectedNode[0]?.id != deletingNodeId) {
    //   setSelectedNode(getSelectedNode)
    // }


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
    inputNode: InputNode,
    inputNode2: InputNode2,
    result: ResultNode,
    listNode: ListInput,
    defaultStarting: DefaultStartingNode,
    resultParent: ResultParent,
    addElement: AddElement
  };

  const edgeTypes = {
    customEdge: CustomEdge,
  };

  const { setViewport } = useReactFlow();

  const [topBot, seTtopBot] = useState({ x: 0, y: 0 });


  const [getLen, setGetLen] = useState(2)


  let getResultNodeType = nodes.filter(item => item.id == "ur-parent-1")[0]
  useEffect(() => {
    setViewport({ x: 0, y: 0, zoom: 1 });
    seTtopBot({ x: getResultNodeType?.position?.x, y: getResultNodeType?.position?.y })

    let getX = getResultNodeType?.position?.x
    let getY = getResultNodeType?.position?.y

    // current div positions vs useState positions
    // useState positions are 1 render behind
    let checkY = topBot.y == getResultNodeType?.position?.y
    let checkX = topBot.x == getResultNodeType?.position?.x

    let getChilds
    if (selectedNode != undefined) {
      getChilds = nodes.filter(item => item.parentId == selectedNode[0]?.id)
    }
    if (selectedNode != undefined && selectedNode[0]?.type == "resultParent") {

      if (!checkY || !checkX) {
        getChilds.forEach((item, index) => {
          if (!nodes.some(nds => nds.id.match(new RegExp(`${item.id}-condition`, "i")))) {
            let incre = getX

            if (index == 0) {
              setNodes((e) => [
                ...e,
                {
                  id: `${item.id}-condition`,
                  position: { x: getX + 20, y: getY + 180 },
                  data: { label: "" },
                  type: "addElement",
                  selected: false,
                  draggable: false,
                },
              ]
              )
            }
            else {
              for (let i = 0; i < index; i++) {
                incre += 350
              }

              setNodes((e) => [
                ...e,
                {
                  id: `${item.id}-condition`,
                  position: { x: incre + 20, y: getY + 180 },
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
            // retrieve; update positions; set back
            let update_conditional_nodes_positions = nodes.filter(nds => nds.id?.includes("-condition"))
              .map((item, index) => {
                let incre = getX
                if (index == 0) {
                  return { ...item, position: { x: getX + 20, y: getY + 180 } }
                }
                else {
                  for (let i = 0; i < index; i++) {
                    incre += 350
                  }

                  return { ...item, position: { x: incre, y: getY + 180 } }
                }
                // return { ...item, position: { x: index == 0 ? getX + 20 : index == 2 ? getX + 450 : getX + 370, y: getY + 180 } }
              })

            let setConditionalNodes = (nodeItem) => {
              // returns single obj
              return update_conditional_nodes_positions.filter(item => item.id == nodeItem.id)[0]
            }

            setNodes((e) => e.map((item) => item.id.includes("-condition") ? setConditionalNodes(item) : item))
          }
        })
      }
    }

    if (selectedNode?.length > 0) {

      let getC = nodes.filter((item) => item?.parentId != undefined && item?.parentId == selectedNode[0]?.id )
      getC?.length != getLen && setGetLen(getC?.length)

      setNodes((e) => {
        let hasChanged = false;

        const updatedNodes = e.map((item, index) => {
          if (item.id === "ur-parent-1" && getLen !== getC?.length) {
            hasChanged = true;
            return {
              ...item,
              style: { ...item.style, width: item.style.width += 340, height: 600 },
            };
          }
          return item;
        });

        return hasChanged ? updatedNodes : e;
      });

    }

  }, [selectedNode, nodes]);


  // useEffect(() => {

    

  //   console.log("hello")
  // }, [nodes, selectedNode])

  // console.log(nodes, "nodes")


  // }, [getResultNodeType])

  // let addWidth = () => {


  //   let getC = []

  //   if (selectedNode != undefined) {
  //     nodes.forEach((item) => {
  //       if (item.parentId) {
  //         item.parentId == selectedNode[0]?.id && getC.push(item)
  //       }
  //     })
  //   }
  //   // console.log(getChilds?.length, "get child length")

  //   console.log(getC, "get childs")
  //   console.log(getC?.length, " gc length ", getLen, " len state ")
  //   getC?.length != getLen && setGetLen(getC?.length)

  //   setNodes((e) => {
  //     let hasChanged = false;

  //     const updatedNodes = e.map((item, index) => {
  //       if (item.id === "ur-parent-1" && getLen !== getC?.length) {
  //         hasChanged = true;
  //         return {
  //           ...item,
  //           style: { ...item.style, width: item.style.width += 340, height: 600 },
  //         };
  //       }
  //       return item;
  //     });

  //     return hasChanged ? updatedNodes : e;
  //   });
  // }



  const handleDrop = (e) => {
    onDrop(e, nodes, setNodes, edges, setEdges, draggedItemData, selectedNode)
  }

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