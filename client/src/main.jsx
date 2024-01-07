import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store,persistor } from './redux/store.js'
import { PersistGate } from 'redux-persist/lib/integration/react.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename='/ytdb-deploy-frontend.vercel.app'>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  
)
