import React from 'react'
import { useSelectedNodeContext } from '../ContextApi/DragDropContext'
import DefaultStartingMenu from '../components/nodeComponentsMenus/DefaultStartingMenu'
import ResultMenu from '../components/nodeComponentsMenus/ResultMenu'
import InputMenu from '../components/nodeComponentsMenus/InputMenu'
import ListMenu from '../components/nodeComponentsMenus/ListMenu'
import ImageMenu from '../components/nodeComponentsMenus/ImageMenu'
import AudioMenu from '../components/nodeComponentsMenus/AudioMenu'
import FileMenu from '../components/nodeComponentsMenus/FileMenu'
import VideoMenu from '../components/nodeComponentsMenus/VideoMenu'
import ReplyButtonMenu from '../components/nodeComponentsMenus/ReplyButtonMenu'

const NodesMenu = () => {

  const { selectedNode } = useSelectedNodeContext();

  let getType
  selectedNode != null && (getType = selectedNode[0]?.type)

  console.log(getType, "get Type")
  
  return (
    <div className="w-[40%] bg-[#fafafa] pl-8 pr-2 border-left-class overflow-y-scroll h-full pt-[125px]">
      {getType == "defaultStarting" || getType == undefined ? <DefaultStartingMenu /> : getType == "resultParent" ? <ResultMenu /> : getType == "textInputNode" || getType == "inputNode2" ? <InputMenu /> : getType == "listNode" ? <ListMenu /> : getType == "imageInputNode" ? <ImageMenu /> : getType == "audioInputNode" ? <AudioMenu /> : getType == "fileInputNode" ? <FileMenu /> : getType == "videoInputNode" ? <VideoMenu /> : getType == "replyButtonInputNode" ? <ReplyButtonMenu /> : "" }
    </div>
  )
}

export default NodesMenu