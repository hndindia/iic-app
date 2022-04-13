import React from "react";

import RootNavigator from "./src/navigation/index";
import {Provider} from "react-redux";
import {store} from "./src/store";

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
