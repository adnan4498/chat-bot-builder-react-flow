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

  let getAllNodes = nodes;
  let getHighestIdNum;

  if (initialResultNodes != undefined) {
    initialResultNodes.forEach((item) => {
      setNodes((e) => [
        ...e,
        {
          id: item.id,
          position: {
            x:
              item.id == "ur-input-1"
                ? event.pageX + 220
                : item?.position?.x || event.pageX - 100,
            y:
              item.id == "ur-input-1"
                ? event.pageY - 200
                : item?.position?.y || event.pageY - 100,
          },
          data: item.data,
          hidden : item.hidden,
          draggable : item.draggable,
          type: item.type,
          style: item.style,
          extent: item.extent,
          parentId: item.parentId,
          selected : true,
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
      let getChildCNodes = getAllNodes.filter((item) => item.parentId).filter((items) => !items.id.includes("-condition"));
      

      
      let getLastChildNodeId;
      getChildCNodes.forEach((item) => getLastChildNodeId = item.id.slice(-1));

      let getParentId = getChildCNodes.map(item => item.parentId)[0]

      let getLastChildNodeX = getChildCNodes.map(item => item.position.x).pop()
      let getLastChildNodeY = getChildCNodes.map(item => item.position.y).pop()


      let incrementedId = ++getLastChildNodeId;

      let createNewConditionedNode = [
        {
          id: `ur-child-${incrementedId}`,
          position: { x: getLastChildNodeX + 350, y: getLastChildNodeY },
          data: { label: "Condition" },
          type: "inputNode2",
          parentId: `${getParentId}`,
          selected: true,
          // draggable: false,
        },
        // {
        //   id: `ur-child-${incrementedId}-condition`,
        //   position: { x: getLastChildNodeX + 50, y: getLastChildNodeY + 165 },
        //   data: { label: "Your Message" },
        //   type: "addElement",
        //   selected: false,
        //   draggable: false,
        //   // parentId: `${getParentId}`,
        // },
      ];

      createNewConditionedNode.forEach((item) => {
        setNodes((e) => [
          ...e,
          {
            id: item.id,
            type: item.type,
            position: {
              // x: droppingItemX - getSelectedNodeX,
              // y: item.id.includes("-condition")
              //   ? droppingItemY - getSelectedNodeY + 100
              //   : droppingItemY - getSelectedNodeY,
              x : item.position.x,
              y : item.position.y,
            },
            data: { label: item.data.label },
            selected : item.selected,
            draggable : item.draggable,
            parentId: item.parentId,
            // extent: item.extent,
          },
        ]);
      });

      setEdges((oldEdges) => [
        ...oldEdges,
        {
          id: `e-child${incrementedId}`,
          source: `child-${incrementedId}`,
          target: `child-${incrementedId}-condition`,
        },
      ]);
    } else {
      alert("Drop outside parent is not allowed.");
    }
  } else {
    getAllNodes.forEach((item) => {
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

    if (draggedItemLabel == "List Node") {
      setNodes((e) => [
        ...e,
        {
          id: backToString,
          position: { x: event.pageX, y: event.pageY },
          data: {
            label: [
              {
                headerTextLabel: "",
                bodyTextLabel: "",
                footerTextLabel: "",
                listBtnTextLabel: "",
                listSection: [
                  {
                    listSectiontitle: "",
                    listSectionItems: [
                      // {
                      //   id : "",
                      //   title: "",
                      //   desc: "",
                      //   postBack: "",
                      // },
                    ],
                  },
                ],
              },
            ],
          },
          type: draggedItemType,
          selected: true,
        },
      ]);
    } else {
      setNodes((e) => [
        ...e,
        {
          id: backToString,
          position: { x: event.pageX, y: event.pageY },
          data: { label: "" },
          type: draggedItemType,
          selected: true,
        },
      ]);
    }
  }
};
