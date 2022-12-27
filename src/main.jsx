import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContextProvider } from './contexts/ContextProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    
      <App />
    
  </ContextProvider>
  
)

/* 
<React.StrictMode>
</React.StrictMode>
*/
