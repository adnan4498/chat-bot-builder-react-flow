export const onDrop = (
  event,
  nodes,
  setNodes,
  edges,
  setEdges,
  draggedItemData,
  selectedNode,
  initialNodeWidth,
  initialNodeHeight,
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
      setNodes((prevNodes ) => {

        const lastNode = prevNodes[prevNodes.length - 1]; 
        console.log(lastNode, "lastNode")
        // const newY = lastNode ? lastNode.position.y + lastNode?.style?.height + 20 : window.innerHeight / 3;

        let newY
        if(lastNode){
          if(lastNode?.style?.height != undefined){
            newY = lastNode.position.y + lastNode?.style?.height + 20
          }
          else if(lastNode?.measured?.height != undefined){
            newY = lastNode.position.y + lastNode?.measured?.height + 20
          }
          else{
            newY = window.innerHeight / 3;
          }
        } 

        return [
          ...prevNodes,
          {
            id: item.id,
            position: {
              x: window.innerWidth / 3.5 - initialNodeWidth / 3.5,
              y: newY,
            },
          data: item.data,
          hidden: item.hidden,
          draggable: item.draggable,
          type: item.type,
          style: item.style,
          extent: item.extent,
          parentId: item.parentId,
          selected: item.selected,
        },
      ]});
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
      let getChildCNodes = getAllNodes
        .filter((item) => item.parentId)
        .filter((items) => !items.id.includes("-condition"));

      let getLastChildNodeId;
      getChildCNodes.forEach(
        (item) => (getLastChildNodeId = item.id.slice(-1))
      );

      let getParentId = getChildCNodes.map((item) => item.parentId)[0];

      let getLastChildNodeX = getChildCNodes
        .map((item) => item.position.x)
        .pop();
      let getLastChildNodeY = getChildCNodes
        .map((item) => item.position.y)
        .pop();

      let incrementedId = ++getLastChildNodeId;
      setNodes((e) => [
        ...e,
        {
          id: `ur-child-${incrementedId}`,
          position: { x: getLastChildNodeX + 310, y: getLastChildNodeY },
          data: { label: "Add Condition" },
          type: "inputNode2",
          parentId: `${getParentId}`,
          selected: true,
          draggable: false,
        },
      ]);

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

    if (draggedItemLabel == "List Node" || draggedItemLabel == "Reply Button") {
      setNodes((prevNodes ) => {

        const lastNode = prevNodes[prevNodes.length - 1]; 
        const newY = lastNode ? lastNode.position.y + lastNode.measured.height + 20 : window.innerHeight / 3;
        
        return [
        ...prevNodes,
        {
          id: backToString,
          position: {
            x: window.innerWidth / 3.5 - initialNodeWidth / 3.5,
            y: newY,
          },
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
      ]});
    } else if (draggedItemLabel == "Url Button") {
      setNodes((prevNodes) => 
        
        {

        const lastNode = prevNodes[prevNodes.length - 1]; 
        const newY = lastNode ? lastNode.position.y + lastNode.measured.height + 20 : window.innerHeight / 3;

        console.log(lastNode, "lastNode")
        
        return [
        ...prevNodes,
        {
          id: backToString,
          position: {
            x: window.innerWidth / 3.5 - initialNodeWidth / 3.5,
            y: newY,
          },
          data: {
            label: [
              {
                headerTextLabel: "",
                bodyTextLabel: "",
                footerTextLabel: "",
                listBtnTextLabel: "",
                btnSection: [
                  {
                    btnText: "",
                    url: "",
                  },
                ],
              },
            ],
          },
          type: draggedItemType,
          selected: true,
        },
      ]});
    }
    // else if(draggedItemLabel == "Reply Button"){
    //   setNodes((e) => [
    //     ...e,
    //     {
    //       id: backToString,
    //       position: { x: event.pageX, y: event.pageY },
    //       data: {
    //         label: [
    //           {
    //             headerTextLabel: "",
    //             bodyTextLabel: "",
    //             footerTextLabel: "",
    //             buttonSection: [
    //               {
    //                 addNewButton: [
    //                   {
    //                     buttonTitle : "",
    //                     buttonPostback: "",
    //                   },
    //                 ],
    //                 addButtonFromListAtr : [
    //                   {
    //                     atr : "",
    //                     iterationLabel : "",
    //                     buttonTitle: "",
    //                     postback : "",
    //                   },
    //                 ]
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //       type: draggedItemType,
    //       selected: true,
    //     },
    //   ]);
    // }
    else {
      setNodes((prevNodes) => {

        const lastNode = prevNodes[prevNodes.length - 1]; 
        const newY = lastNode ? lastNode.position.y + lastNode.measured.height + 20 : window.innerHeight / 3;

        return [
          ...prevNodes,
          {
            id: backToString,
            position: {
              x: window.innerWidth / 3.5 - initialNodeWidth / 3.5,
              y: newY,
            },
            data: { label: "" },
            type: draggedItemType,
            selected: true,
          },
        ];
      });
    }
  }
};
