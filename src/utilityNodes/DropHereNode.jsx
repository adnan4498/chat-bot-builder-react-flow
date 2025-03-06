import { WarningOutlined } from '@ant-design/icons'
import React from 'react'

const DropHereNode = () => {
    return (
        // <div className='flex gap-2 text-xs justify-center items-center w-[253px] h-7 border-1 border-dotted border-green-500 rounded-sm'>
        <div className='flex gap-2 text-xs justify-center items-center w-[253px]'>
            {/* <div>
                <WarningOutlined color='green' />
            </div>
            <div>
                Drop here to add selected node
            </div> */}
        </div>
    )
}

export default DropHereNode


// AFTER DROP
//    setNodes((prevNodes) => {
//     return prevNodes
//       .filter(item => !item.id.includes("greenId"))
//       .map((item, index, arr) => ({
//         ...item,
//         position: {
//           ...item.position,
//           y: index == "0" ? item?.position?.y : ((arr[index - 1].position.y + 20) + (arr[index - 1].measured.height))
//         },
//       }));
//   });


//  const [dragOverOnce, setDragOverOnce] = useState(true)
//   const [afterDrag, setAfterDrag] = useState(false)

//   const handleDragOver = (t) => {
//     t.preventDefault()

//     if (dragOverOnce) {
//       let updatedNodes = []

//       nodes.forEach((nodeItem, index, arr) => {
//         // const newY = nodeItem.position.y + (nodeItem?.measured?.height || 8) + 20
//         const newY = (nodeItem.position.y + 5) + nodeItem?.measured?.height
//         console.log(nodeItem, "nodeItemnodeItem")
//         let greenNode

//         greenNode = {
//           id: nodeItem.id + "greenId",
//           position: {
//             x: window.innerWidth / 3.5 - initialNodeWidth / 3.5,
//             y: newY,
//           },
//           data: { label: "hi" },
//           type: "dropHereNode",
//           selected: true,
//         }

//         updatedNodes.push(nodeItem, greenNode)
//       })

//       setNodes(updatedNodes)
//       setDragOverOnce(false)
//       setAfterDrag(true)
//     }
//   }


//   const handleAfterDrag = () => {

//     setNodes((prevNodes) =>
//       prevNodes.map((nodeItem, index, arr) => {
//         const lastNode = prevNodes[prevNodes.length - 1];
//         if (nodeItem.id !== "0" && arr[index - 1].id.includes("greenId")) {
//           return {
//             ...nodeItem,
//             position: {
//               x: window.innerWidth / 3.5 - initialNodeWidth / 3.5,
//               y: arr[index - 1]?.position?.y + 40,
//             },
//             data: { label: "hiii" },
//             selected: true,
//           };
//         }
//           return nodeItem;
//       })
//     );


//     setNodes((nodeItem, index, arr) => )

//     setAfterDrag(false)
//   }


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