import "./App.css";
import Home from "./pages/Home/Home";
import Overlays from "./pages/Overlays/Overlays";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <Overlays />
    </div>
    </ChakraProvider>
  );
}

export default App;
