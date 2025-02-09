import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ReactFlowProvider } from '@xyflow/react'
import { DragProvider } from './ContextApi/DragDropContext.jsx'

createRoot(document.getElementById('root')).render(
  <DragProvider>
    <ReactFlowProvider>
      <App />
    </ReactFlowProvider>
  </DragProvider>
)
