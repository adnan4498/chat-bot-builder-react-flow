import { createContext, useState, useContext } from "react";

const DragDropContext = createContext();
const SelectedNodeContext = createContext();

export const DragProvider = ({ children }) => {
  const [draggedItemData, setDraggedItemData] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <DragDropContext.Provider value={{ draggedItemData, setDraggedItemData }}>
      <SelectedNodeContext.Provider value={{ selectedNode, setSelectedNode }}>
        {children}
      </SelectedNodeContext.Provider>
    </DragDropContext.Provider>
  );
};

export const useDragContext = () => useContext(DragDropContext);
export const useSelectedNodeContext = () => useContext(SelectedNodeContext);
