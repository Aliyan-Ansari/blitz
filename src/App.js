import "./App.css";
import Home from "./pages/Home/Home";
import Overlays from "./pages/Overlays/Overlays";
import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="App">
          <Home />
        </div>
      ),
    },
    {
      path: "overlays",
      element: (
        <div className="App">
          <Overlays />
        </div>
      ),
    },
  ]);
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
      {/* <div className="App">
      <Overlays />
    </div> */}
    </ChakraProvider>
  );
}

export default App;
