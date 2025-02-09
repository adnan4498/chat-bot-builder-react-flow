import { Handle } from "@xyflow/react";

export const onDrop = (
  event,
  nodes,
  setNodes,
  edges,
  setEdges,
  draggedItemData,
  selectedNode
) => {
  event.preventDefault();

  const {
    draggedItemName,
    draggedItemType,
    draggedItemLabel,
    initialResultNodes,
  } = draggedItemData;

  let getNodesData = nodes;
  let getHighestIdNum;

  if (initialResultNodes != undefined) {
    initialResultNodes.forEach((item) => {
      setNodes((e) => [
        ...e,
        {
          id: item.id,
          position: {
            x:
              item.id == "user-conditional-input-1"
                ? event.screenX + 220
                : item?.position?.x || event.screenX - 100,
            y:
              item.id == "user-conditional-input-1"
                ? event.screenY - 200
                : item?.position?.y || event.screenY - 100,
          },
          data: { label: item.data.label },
          type: item.type,
          style: item.style,
          extent: item.extent,
          parentId: item.parentId,
        },
      ]);
    });
  } else if (draggedItemLabel == "Add Condition") {
    const getSelectedNodeX = selectedNode[0].position.x;
    const getSelectedNodeY = selectedNode[0].position.y;
    const getSelectedNodeId = selectedNode[0].id;
    const getSelectedNodeWidth = selectedNode[0].style.width;
    const getSelectedNodeHeight = selectedNode[0].style.height;

    const droppingItemX = event.clientX;
    const droppingItemY = event.clientY;

    const isInsideParent =
      droppingItemX >= getSelectedNodeX &&
      droppingItemX <= getSelectedNodeX + getSelectedNodeWidth &&
      droppingItemY >= getSelectedNodeY &&
      droppingItemY <= getSelectedNodeY + getSelectedNodeHeight;

    if (isInsideParent) {

      let getChildCNodes = getNodesData.filter(item => item.parentId).filter(items => !items.id.includes("-condition"))
      let getHighestChildNodeId 

      getChildCNodes.forEach(item => getHighestChildNodeId = item.id.slice(-1))

      let incrementedId = ++getHighestChildNodeId

      let createNewConditionedNode = [
        {
          id: `child-${incrementedId}`,
          type: "inputNode",
          data: { label: "Condition" },
          position: { x: 100, y: 65 },
          parentId: "parent-1",
          extent: "parent",
        },
        {
          id: `child-${incrementedId}-condition`,
          type: "inputNode",
          data: { label: "Your Message" },
          position: { x: 100, y: 165 },
          parentId: "parent-1",
          extent: "parent",
        },
      ];

      createNewConditionedNode.forEach((item) => {
        setNodes((e) => [
          ...e,
          {
            id: item.id,
            type: item.type,
            // position: {
            //   x: droppingItemX - getSelectedNodeX,
            //   y: droppingItemY - getSelectedNodeY, // Relative to parent
            // },

             position: {
              x: droppingItemX - getSelectedNodeX,
              y: item.id.includes("-condition") ? droppingItemY - getSelectedNodeY + 100 : droppingItemY - getSelectedNodeY, 
            },
            data: { label: item.data.label },
            parentId: item.parentId,
            extent : item.extent
          },
        ]);
      })

      setEdges((oldEdges) => [...oldEdges, {id: `e-child${incrementedId}`, source : `child-${incrementedId}`, target : `child-${incrementedId}-condition`}])
      

    } else {
      alert("Drop outside parent is not allowed.");
    }
  } else {
    getNodesData.forEach((item) => {
      if (getHighestIdNum == undefined) {
        getHighestIdNum = Number(item.id);
      } else {
        if (Number(getHighestIdNum) < Number(item.id)) {
          getHighestIdNum = Number(item.id);
        }
      }
    });

    let incrementingId = ++getHighestIdNum;
    let backToString = String(incrementingId);

    setNodes((e) => [
      ...e,
      {
        id: backToString,
        position: { x: event.screenX - 100, y: event.screenY - 100 },
        data: { label: "Send Text" },
        type: draggedItemType,
      },
    ]);
  }
};
