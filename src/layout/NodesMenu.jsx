import React from 'react'
import { useSelectedNodeContext } from '../ContextApi/DragDropContext'
import DefaultStartingMenu from '../nodeComponentsMenus/DefaultStartingMenu'
import ResultMenu from '../nodeComponentsMenus/ResultMenu'
import InputMenu from '../nodeComponentsMenus/InputMenu'
import ListMenu from '../nodeComponentsMenus/ListMenu'
import ImageMenu from '../nodeComponentsMenus/ImageMenu'
import AudioMenu from '../nodeComponentsMenus/AudioMenu'

const NodesMenu = () => {

  const { selectedNode } = useSelectedNodeContext();

  let getType
  selectedNode != null && (getType = selectedNode[0]?.type)
  
  return (
    <div className="w-[40%] bg-[#fafafa] pl-8 pr-2 border-left-class overflow-y-scroll h-full pt-[125px]">
      {getType == "defaultStarting" || getType == undefined ? <DefaultStartingMenu /> : getType == "resultParent" ? <ResultMenu /> : getType == "textInputNode" || getType == "inputNode2" ? <InputMenu /> : getType == "listNode" ? <ListMenu /> : getType == "imageInputNode" ? <ImageMenu /> : getType == "audioNode" ? <AudioMenu /> : "" }
    </div>
  )
}

export default NodesMenu