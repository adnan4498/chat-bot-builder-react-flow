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
import UrlButtonMenu from '../components/nodeComponentsMenus/UrlButtonMenu'
import StickerMenu from '../components/nodeComponentsMenus/StickerMenu'

const NodesMenu = () => {

  const { selectedNode } = useSelectedNodeContext();

  let getType
  selectedNode != null && (getType = selectedNode[0]?.type)

  return (
    <div className="w-[45%] bg-[#fafafa] pl-8 pr-2 border-left-class overflow-y-scroll h-full pt-[125px]">
      {getType == "defaultStarting" || getType == undefined ? <DefaultStartingMenu /> : getType == "resultParent" ? <ResultMenu /> : getType == "textInputNode" || getType == "inputNode2" ? <InputMenu /> : getType == "listNode" ? <ListMenu /> : getType == "imageInputNode" ? <ImageMenu /> : getType == "audioInputNode" ? <AudioMenu /> : getType == "fileInputNode" ? <FileMenu /> : getType == "videoInputNode" ? <VideoMenu /> : getType == "replyButtonInputNode" ? <ReplyButtonMenu /> : getType == "urlButtonInputNode" ? <UrlButtonMenu /> : getType == "stickerInputNode" ? <StickerMenu /> : ""}
    </div>
  )
}

export default NodesMenu