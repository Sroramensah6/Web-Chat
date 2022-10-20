import store from "./store"
import { persistStore } from 'redux-persist'

let persister = persistStore(store)

export { store, persister }