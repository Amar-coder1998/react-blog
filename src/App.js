import React from "react";
import MainComponent from './components/MainComponet'
import { Provider } from "react-redux";
import store from "./redux/store/store";
function App() {
  return (
    <Provider store={store}>
  <MainComponent/>
  </Provider>
  )
}

export default App;
