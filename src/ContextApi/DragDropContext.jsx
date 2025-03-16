import { createContext, useState, useContext } from "react";

const DragDropContext = createContext();
const SelectedNodeContext = createContext();
const DeletingNodeIdContext = createContext();
const IsDraggableContext = createContext()
const CopyNodeContext = createContext()
const ReplyBtnTypeContext = createContext()

export const DragProvider = ({ children }) => {
  const [draggedItemData, setDraggedItemData] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [deletingNodeId, setDeletingNodeId] = useState(null);
  const [isDraggable, setIsDraggable] = useState(null)
  const [copyNode, setCopyNode] = useState(null)
  const [replyBtnType, setReplyBtnType] = useState(null)

  return (
    <DragDropContext.Provider value={{ draggedItemData, setDraggedItemData }}>
      <SelectedNodeContext.Provider value={{ selectedNode, setSelectedNode }}>
        <DeletingNodeIdContext.Provider value={{ deletingNodeId, setDeletingNodeId }}>
          <IsDraggableContext.Provider value={{ isDraggable, setIsDraggable }}>
            <CopyNodeContext.Provider value={{ copyNode, setCopyNode }}>
              <ReplyBtnTypeContext.Provider value={{ replyBtnType, setReplyBtnType }}>
                {children}
              </ReplyBtnTypeContext.Provider>
            </CopyNodeContext.Provider>
          </IsDraggableContext.Provider>
        </DeletingNodeIdContext.Provider>
      </SelectedNodeContext.Provider>
    </DragDropContext.Provider>
  );
};

export const useDragContext = () => useContext(DragDropContext);
export const useSelectedNodeContext = () => useContext(SelectedNodeContext);
export const useDeletingNodeIdContext = () => useContext(DeletingNodeIdContext);
export const useIsDraggableContext = () => useContext(IsDraggableContext);
export const useCopyNodeContext = () => useContext(CopyNodeContext);
export const useReplyBtnTypeContext = () => useContext(ReplyBtnTypeContext);
