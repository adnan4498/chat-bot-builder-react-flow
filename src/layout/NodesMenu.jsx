import React from 'react'
import TextNode from '../nodeComponents/TextNode'
import ImageNode from '../nodeComponents/ImageNode'
import ResultNode from '../nodeComponents/ResultNode'
import { DoubleRightOutlined } from '@ant-design/icons'
import DelayNode from '../nodeComponents/DelayNode'
import { useSelectedNodeContext } from '../ContextApi/DragDropContext'
import AddConditionNode from '../nodeComponents/AddConditionNode'
import DefaultStartingMenu from '../nodeComponentsMenus/DefaultStartingMenu'
import ResultMenu from '../nodeComponentsMenus/ResultMenu'
import InputMenu from '../nodeComponentsMenus/InputMenu'
import ListMenu from '../nodeComponentsMenus/ListMenu'

const NodesMenu = () => {

  const { selectedNode } = useSelectedNodeContext();

  let getType
  if (selectedNode != null) {
    getType = selectedNode[0]?.type
  }

  return (
    <div className="w-[40%] bg-[#fafafa] pl-8 pr-2 border-left-class overflow-y-scroll h-full pt-[125px]">
      {getType == "defaultStarting" || getType == undefined ? <DefaultStartingMenu /> : getType == "resultParent" ? <ResultMenu /> : getType == "inputNode" ? <InputMenu /> : getType == "listNode" ? <ListMenu /> : ""}
    </div>
  )
}

export default NodesMenu