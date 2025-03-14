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
  const { isDraggable, setIsDraggable } = useIsDraggableContext()
  const { copyNode } = useCopyNodeContext()

  // console.log(copyNode, "copyNode")

  const { setViewport, fitView } = useReactFlow();

  const [customRightClickMenu, setCustomRightClickMenu] = useState(null);
  const canvasRef = useRef(null);

  const handleRightClickMenu = (event) => {
    event.preventDefault()

    setCustomRightClickMenu({
      x: event.clientX,
      y: event.clientY,
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

  useEffect(() => {
    HandleURNodeCode(topBot, seTtopBot, getLen, setGetLen, selectedNode, nodes, setNodes)
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
  // *Ensure nodes have width & height defined*


  // *Detect if two nodes are overlapping*
  const isOverlapping = (nodeA, nodeB) => {
    const nodeASize = nodeA?.measured;
    const nodeBSize = nodeB?.measured;

    return (
      nodeA.position.y < nodeB.position.y + nodeBSize.height &&
      nodeA.position.y + nodeASize.height > nodeB.position.y
    );
  };

  // *Find the overlapping node*
  const findOverlappingNode = (draggingNode) => {
    return nodes.find((n) => n.id !== draggingNode.id && isOverlapping(draggingNode, n));
  };

  // *Handle node drag start*
  const handleNodeDragStart = (event, node) => {
    // Save the starting position of the node being dragged
    setDragNodeStart(node);
    setIsDragStart(false);
    
    // Get the x position from the first node (usually node with id "0")
    const firstNode = nodes.find(n => n.id === "0");
    const fixedXPosition = firstNode ? firstNode.position.x : 396;
    
    // Keep nodes aligned at the same x position as the first node
    setNodes((nds) =>
      nds.map((item) =>
        item.id === node.id ? { ...item, position: { x: fixedXPosition, y: node.position.y } } : item
      )
    );
  };

  // *Handle node drag stop (swap only if overlapping)*
  const handleNodeDragStop = (event, draggedNode) => {
    setIsDragStart(true);
    
    // Get the x position from the first node
    const firstNode = nodes.find(n => n.id === "0");
    const fixedXPosition = firstNode ? firstNode.position.x : 396;
    
    // Keep nodes aligned at the same x position as the first node
    setNodes((nds) =>
      nds.map((item) =>
        item.id === draggedNode.id ? { ...item, position: { x: fixedXPosition, y: draggedNode.position.y } } : item
      )
    );

    // Find the node that should be swapped (closest node to where the dragged node was dropped)
    const targetNode = findNodeToSwap(draggedNode, nodes);
    
    if (targetNode && dragNodeStart) {
      // Swap the positions of the dragged node and the target node
      swapNodePositions(draggedNode.id, targetNode.id);
    } else {
      // If no swap occurred, still reorder to ensure proper spacing
      reorderAllNodes();
    }
    
    setDragNodeStart(null);
  };

  // Helper function to find the node to swap with
  const findNodeToSwap = (draggedNode, allNodes) => {
    // Filter out the dragged node and any special nodes (like the default starting node)
    const swappableNodes = allNodes.filter(n => 
      n.id !== draggedNode.id && 
      n.id !== "0" && 
      !n.id.includes("-condition") &&
      !n.id.includes("parent")
    );
    
    if (swappableNodes.length === 0) return null;
    
    // Find the node closest to the dragged node's current position
    return swappableNodes.reduce((closest, node) => {
      const distance = Math.abs(node.position.y - draggedNode.position.y);
      if (!closest || distance < closest.distance) {
        return { node, distance };
      }
      return closest;
    }, null)?.node;
  };

  // Helper function to swap node positions
  const swapNodePositions = (draggedId, targetId) => {
    // First, swap the nodes in the array to change their order
    setNodes(nds => {
      const draggedIndex = nds.findIndex(n => n.id === draggedId);
      const targetIndex = nds.findIndex(n => n.id === targetId);
      
      if (draggedIndex === -1 || targetIndex === -1) return nds;
      
      // Create a new array with the nodes in the swapped order
      const newNodes = [...nds];
      const temp = newNodes[draggedIndex];
      newNodes[draggedIndex] = newNodes[targetIndex];
      newNodes[targetIndex] = temp;
      
      return newNodes;
    });
    
    // Then immediately reorder all nodes to ensure proper spacing
    setTimeout(() => {
      reorderAllNodes();
    }, 10);
  };

  // Helper function to reorder all nodes with proper spacing
  const reorderAllNodes = () => {
    setNodes(nds => {
      // Get the x position from the first node
      const firstNode = nds.find(n => n.id === "0");
      const fixedXPosition = firstNode ? firstNode.position.x : 396;
      
      // Sort nodes by their current vertical position
      const sortedNodes = [...nds].sort((a, b) => {
        if (a.id === "0") return -1;
        if (b.id === "0") return 1;
        return a.position.y - b.position.y;
      });
      
      // Reposition nodes with proper spacing based on their heights
      const updatedNodes = [];
      let currentY = sortedNodes[0].position.y;
      
      sortedNodes.forEach((node, index) => {
        if (index === 0) {
          // Keep the first node position unchanged
          updatedNodes.push(node);
          currentY = node.position.y + (node.measured?.height || 28);
        } else {
          const spacing = 20; // Space between nodes
          currentY += spacing; // Add spacing after the previous node
          
          // Create updated node with new position
          updatedNodes.push({
            ...node,
            position: {
              x: fixedXPosition,
              y: currentY
            }
          });
          
          // Update currentY for the next node
          currentY += (node.measured?.height || 28);
        }
      });
      
      return updatedNodes;
    });
  };

  function handleSortingNodes() {
  }

  const handlePastingNode = () => {
    setNodes((nds) => [...nds, { ...copyNode, id: `${Date.now()}` }])
  }


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
              nodesDraggable={true}
              onContextMenu={handleRightClickMenu} /* enables custom right click menu */
              onNodeDragStart={handleNodeDragStart}
              onNodeDragStop={handleNodeDragStop}

              fitView
            >
              {/* right click menu options */}
              <Background />
              <Controls />
            </ ReactFlow>
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
