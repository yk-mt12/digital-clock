import { ChakraProvider } from "@chakra-ui/react";
import { Clock } from "./components/Clock";

function App() {
  return (
    <ChakraProvider>
      <Clock />
    </ChakraProvider>
  );
}

export default App;
