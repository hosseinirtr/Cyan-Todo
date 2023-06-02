import React, { useEffect } from "react";
import { AxiosInterceptor } from "./axiosInterceptor";
import List from "./pages/list";
import { ChakraProvider } from "@chakra-ui/react";
import { shallowEqual, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { errorMsg } from "./services/servicesError";

function App() {
  const error = useSelector((data) => data.error, shallowEqual);
  const toast = useToast();

  useEffect(() => {
    if (error.error) {
      toast({
        title: errorMsg[error.error.code],
        description: "Could not add todo.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [error]);

  return (
    <ChakraProvider>
      <AxiosInterceptor>
        <List />
      </AxiosInterceptor>
    </ChakraProvider>
  );
}

export default App;
