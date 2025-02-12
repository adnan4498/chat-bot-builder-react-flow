import { createContext, useState, useContext } from "react";

const DragDropContext = createContext();
const SelectedNodeContext = createContext();
const DeletingNodeIdContext = createContext();

export const DragProvider = ({ children }) => {
  const [draggedItemData, setDraggedItemData] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [deletingNodeId, setDeletingNodeId] = useState(null);

  return (
    <DragDropContext.Provider value={{ draggedItemData, setDraggedItemData }}>
      <SelectedNodeContext.Provider value={{ selectedNode, setSelectedNode }}>
        <DeletingNodeIdContext.Provider value={{ deletingNodeId, setDeletingNodeId }}>
          {children}
        </DeletingNodeIdContext.Provider>
      </SelectedNodeContext.Provider>
    </DragDropContext.Provider>
  );
};

export const useDragContext = () => useContext(DragDropContext);
export const useSelectedNodeContext = () => useContext(SelectedNodeContext);
export const useDeletingNodeIdContext = () => useContext(DeletingNodeIdContext);
