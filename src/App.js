import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
          {console.log(store.getState())}
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
