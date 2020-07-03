import { createStore } from "redux"
import { ConfirmCheck } from "./confirmCheck"

const configureStore = () => {
    const store = createStore(ConfirmCheck)

    return store
}

export default configureStore
