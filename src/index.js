import React from 'react'
import { Provider } from "react-redux"
import ReactDOM from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'
import App from './App'
import { store, persister } from './redux'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate loading={null} persistor={persister}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>
)

reportWebVitals()
