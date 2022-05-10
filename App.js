import React from "react";

import RootNavigator from "./src/navigation/index";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();
import {AuthContextProvider} from "./src/context/AuthContext";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <RootNavigator />
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
