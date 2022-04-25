import React from "react";

import RootNavigator from "./src/navigation/index";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigator />
    </QueryClientProvider>
  );
};

export default App;
