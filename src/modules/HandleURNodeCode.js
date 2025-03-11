export const HandleURNodeCode = function (topBot, seTtopBot, getLen, setGetLen,  selectedNode, nodes, setNodes) {

  let getResultNodeType = nodes.filter(item => item.id == "ur-parent-1")[0]
  let getChildCNodes = nodes.filter((items) => items?.id?.includes("-condition"));
  let getChildXPos = getChildCNodes.map(item => item.position.x)
  let getLastChildPos = getChildXPos.slice(-1)[0]

  seTtopBot({
    x: getResultNodeType?.position?.x,
    y: getResultNodeType?.position?.y,
  });

  let getX = getResultNodeType?.position?.x;
  let getY = getResultNodeType?.position?.y;

  // current div positions against useState positions
  // useState positions are 1 render behind
  let checkY = topBot.y == getResultNodeType?.position?.y;
  let checkX = topBot.x == getResultNodeType?.position?.x;

  let getChilds;
  if (selectedNode != undefined) {
    getChilds = nodes.filter((item) => item.parentId == selectedNode[0]?.id);
  }
  if (selectedNode != undefined && selectedNode[0]?.type == "resultParent") {
    getChilds.forEach((item, index) => {
      if (
        !nodes.some((nds) =>
          nds.id.match(new RegExp(`${item.id}-condition`, "i"))
        )
      ) {
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
          ]);
        } else if (index == 1) {
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
          ]);
        } else {
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
          ]);
        }
      } else {
        if (!checkY || !checkX) {
          // retrieve; update positions; set back
          let lastXPos = getX + 30;
          let update_conditional_nodes_positions = nodes
            .filter((nds) => nds.id?.includes("-condition"))
            .map((item, index) => {
              let newXPos;

              if (index === 0) {
                newXPos = getX + 30;
              } else if (index === 1) {
                newXPos = getX + 340;
              } else {
                newXPos = lastXPos + 310; // Use the dynamically updated last position
              }

              lastXPos = newXPos; // Update lastXPos for the next iteration

              return { ...item, position: { x: newXPos, y: getY + 180 } };
            });

          let setConditionalNodes = (nodeItem) => {
            return update_conditional_nodes_positions.filter(
              (item) => item.id == nodeItem.id
            )[0];
          };

          setNodes((e) =>
            e.map((item) =>
              item.id.includes("-condition") ? setConditionalNodes(item) : item
            )
          );
        }
      }
    });
  }

  // adds width on ur-parent for new conditioned node
  if (selectedNode?.length > 0) {
    let getParent = nodes.filter((item) => item?.id?.includes("parent"));

    let getC = nodes.filter(
      (item) =>
        item?.parentId != undefined && item?.parentId == getParent[0]?.id
    );
    getC?.length != getLen && setGetLen(getC?.length);

    setNodes((e) => {
      let hasChanged = false;

      const updatedNodes = e.map((item, index) => {
        if (item?.id?.includes("parent") && getLen !== getC?.length) {
          hasChanged = true;
          return {
            ...item,
            style: {
              ...item.style,
              width: (item.style.width += 310),
              height: 155,
            },
          };
        }
        return item;
      });

      return hasChanged ? updatedNodes : e;
    });
  }
};
