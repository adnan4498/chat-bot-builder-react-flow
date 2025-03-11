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

import React, { useCallback, useEffect, useState, useRef } from 'react'
import CustomNode from './CustomNode';
import CustomStateNode from './CustomStateNode';
import ResultNode from './ResultNodeFunctionality';
import { onDrop } from './modules/NodeDrop';
import { useCopyNodeContext, useDeletingNodeIdContext, useDragContext, useIsDraggableContext, useSelectedNodeContext } from './ContextApi/DragDropContext';
import DefaultStartingNode from './utilityNodes/DefaultStartingNode';
import CustomEdge from './DelayEdge';
import Dailogs from './layout/Dailogs';
import NodesMenu from './layout/NodesMenu';
import ListInput from './components/nodeComponents/ListInput';
import InputNode2 from './components/nodeComponents/InputNode2';
import ResultParent from './ResultParent';
import AddElement from './AddElement';
import ImageInputNode from './components/nodeComponents/ImageInputNode';
import TextInputNode from './components/nodeComponents/TextInputNode';
import AudioInputNode from './components/nodeComponents/AudioInputNode';
import FileInputNode from './components/nodeComponents/FileInputNode';
import VideoInputNode from './components/nodeComponents/VideoInputNode';
import ReplyButtonInputNode from './components/nodeComponents/ReplyButtonInputNode';
import UrlButtonInputNode from './components/nodeComponents/UrlButtonInputNode';
import StickerInputNode from './components/nodeComponents/StickerInputNode';
import DropHereNode from './utilityNodes/DropHereNode';
import { HandleURNodeCode } from './modules/HandleURNodeCode';

const Home = () => {
  const { draggedItemData } = useDragContext();
  const { selectedNode, setSelectedNode } = useSelectedNodeContext();
  const { deletingNodeId, setDeletingNodeId } = useDeletingNodeIdContext();
  const { isDraggable } = useIsDraggableContext()
  const { copyNode } = useCopyNodeContext()

  // console.log(copyNode, "copyNode")

  const { setViewport, fitView } = useReactFlow();

  const [customRightClickMenu, setCustomRightClickMenu] = useState(null);
  const canvasRef = useRef(null);

  const handleRightClickMenu = (event) => {
    event.preventDefault()

    setCustomRightClickMenu({
      x: event.clientX - 290,
      y: event.clientY - 10,
    });
  };

  const handleClickOutside = () => {
    setCustomRightClickMenu(null);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

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

    // all nodes gets back to proper position after any node is deleted
    setNodes((nds,) => {
      return nds.map((item, index, arr) => {
        if (item.id == "0") {
          return item
        }
        else {
          let lastNode = arr[index - 1];
          const newY = lastNode?.position?.y + (lastNode?.measured?.height || 28) + 20

          return {
            ...item, position: {
              x: lastNode?.position?.x || 0,
              y: newY,
            },
          }
        }
      })
    })

  }, [deletingNodeId])

  // centers everything by zomming in
  useEffect(() => {
    fitView({ duration: 0, padding: 1.5 });
  }, []);

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

  // user response / condition node code
  // this code centers conditions in ur-parent code
  const [topBot, seTtopBot] = useState({ x: 0, y: 0 });
  const [getLen, setGetLen] = useState(2)
  const [dragNodeStart, setDragNodeStart] = useState('')

  let getResultNodeType = nodes.filter(item => item.id == "ur-parent-1")[0]
  let getChildCNodes = nodes.filter((items) => items?.id?.includes("-condition"));
  let getChildXPos = getChildCNodes.map(item => item.position.x)
  let getLastChildPos = getChildXPos.slice(-1)[0]

  useEffect(() => {
    HandleURNodeCode(topBot, seTtopBot, getLen, setGetLen, getResultNodeType, getLastChildPos, selectedNode, nodes, setNodes)
  }, [selectedNode, nodes.length])

  const handleDrop = (e) => {
    onDrop(e, nodes, setNodes, edges, setEdges, draggedItemData, selectedNode, initialNodeWidth, initialNodeHeight)

    setTimeout(() => {
      fitView({ duration: 0, padding: 1.5 });
    }, 0);

  }

  // const [isDragStart,setIsDragStart] = useState(true)
  // const handleNodeDragStart = (e, node) => {
  //   setNodes((nds) => {
  //     return nds.map(item => {
  //       if (item.id === node.id) {
  //         return {
  //           ...item,
  //           position: { x: 396, y: node.position.y }
  //         };
  //       }
  //       return item;
  //     });
  //   });
  //   if(isDragStart) {
  //     setDragNodeStart(node)

  //   }
  //   setIsDragStart(false)

  //   console.log(dragNodeStart, 'dragNodeStart')
  // };

  // // Find the closest node in Y-axis
  // const findClosestNode = (draggingNode) => {
  //   return nodes
  //     .filter((n) => n.id !== draggingNode.id) // Exclude the dragged node
  //     .reduce((closest, n) => {
  //       const distance = Math.abs(n.position.y - draggingNode.position.y);
  //       return distance < (closest?.distance || Infinity) ? { node: n, distance } : closest;
  //     }, null)?.node;
  // };

  // const handleNodeDragStop = (e, node) => {
  //   setNodes((nds) => {
  //     return nds.map(item => {
  //       if (item.id === node.id) {
  //         return {
  //           ...item,
  //           position: { x: 396, y: node.position.y }
  //         };
  //       }
  //       return item;
  //     });
  //   });

  //   // handleSortingNodes()

  //   const closest = findClosestNode(node);


  //   console.log('closet', closest)
  //   if (closest) {
  //     setNodes((nds) =>
  //       nds.map((n) => {
  //         if (n.id === node.id) return { ...n, position: { ...n.position, y: closest.position.y } };
  //         if (n.id === closest.id) return { ...n, position: { ...n.position, y: dragNodeStart.position.y } };
  //         return n;
  //       })
  //     );
  //   }
  //   setIsDragStart(true)
  // };


  // NEW TEMP HANDLER COPY FROM GPT
  // const [dragNodeStart, setDragNodeStart] = useState(null);
  const [isDragStart, setIsDragStart] = useState(true);
 // **Ensure nodes have width & height defined**


// **Detect if two nodes are overlapping**
const isOverlapping = (nodeA, nodeB) => {
  const nodeASize = nodeA?.measured;
  const nodeBSize = nodeB?.measured;

  return (
    nodeA.position.y < nodeB.position.y + nodeBSize.height &&
    nodeA.position.y + nodeASize.height > nodeB.position.y
  );
};

// **Find the overlapping node**
const findOverlappingNode = (draggingNode) => {
  return nodes.find((n) => n.id !== draggingNode.id && isOverlapping(draggingNode, n));
};

// **Handle node drag start**
const handleNodeDragStart = (e, node) => {
  setNodes((nds) =>
    nds.map((item) =>
      item.id === node.id ? { ...item, position: { x: 396, y: node.position.y } } : item
    )
  );

  if (isDragStart) {
    setDragNodeStart(node);
  }
  setIsDragStart(false);
};

// **Handle node drag stop (swap only if overlapping)**
const handleNodeDragStop = (e, node) => {
  setNodes((nds) =>
    nds.map((item) =>
      item.id === node.id ? { ...item, position: { x: 396, y: node.position.y } } : item
    )
  );

  const overlappingNode = findOverlappingNode(node);
  console.log(overlappingNode,'overlapingNode')

  if (overlappingNode) {
    setNodes((nds) =>
      nds.map((n) => {
        if (n.id === node.id) return { ...n, position: { ...n.position, y: overlappingNode.position.y  } };
        if (n.id === overlappingNode.id) return { ...n, position: { ...n.position, y: dragNodeStart.position.y } };
        return n;
      })
    );
  }

  setIsDragStart(true);
};

  function handleSortingNodes() {
  }

  const handlePastingNode = () => {
    console.log("hi")
    setNodes((nds) => {
      return { ...nds, copyNode }
    })
  }

  console.log(nodes, "nnnd")

  return (
    <>
      <div className='flex w-full h-[100vh]'>
        <Dailogs />
        <div className='react-flow-class'>
          <div ref={canvasRef} style={{ width: '100%', height: "100vh" }} onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleDrop(e)}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              edgeTypes={edgeTypes}
              onNodesChange={onNodesChange}
              // onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              style={{ backgroundColor: "#e6e4e4" }}
              nodesDraggable={isDraggable}
              onContextMenu={handleRightClickMenu} /* enables custom right click menu */
              onNodeDrag={handleNodeDragStart}
              onNodeDragStop={handleNodeDragStop}

              fitView
            >
              {/* right click menu options */}
              {customRightClickMenu && (
                <ul
                  className="fixed bg-white shadow-md p-2 list-none py-3 px-3 w-48 text-center cursor-pointer"
                  style={{
                    top: customRightClickMenu.y,
                    left: customRightClickMenu.x,
                  }}
                  onClick={() => handlePastingNode()}
                >
                  <li className=' cursor-pointer'>Paste element</li>
                </ul>
              )}
              <Background />
              <Controls />
            </ ReactFlow>
          </div>
        </div>
        <NodesMenu />
      </div>
    </>
  )
}

export default Home











// setNodes((nds,) => {
//   return nds.map((item, index, arr) => {
//     if (item.id == "0") {
//       return item
//     }
//     else {
//       let lastNode = arr[index - 1];
//       const newY = lastNode?.position?.y + (lastNode?.measured?.height || 28) + 20

//       return {
//         ...item, position: {
//           x: lastNode?.position?.x || 0,
//           y: newY,
//         },
//       }
//     }
//   })
// })