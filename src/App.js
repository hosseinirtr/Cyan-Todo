import React from "react";
import { AxiosInterceptor } from "./axiosInterceptor";
import List from "./pages/list";

function App() {
  return (
    <AxiosInterceptor>
      <List />
    </AxiosInterceptor>
  );
}

export default App;
