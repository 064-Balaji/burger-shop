import { Flex } from "@radix-ui/themes";
// Import Breads and the Vegetables from the Components Folder
import Breads from "./Components/Breads";
import Vegetables from "./Components/Vegetables";

function App() {
  return (
    <Flex gap={"3"} direction={"column"}>
      {/* The component Breads is used Here */}
      <Breads /> 
      {/* The component Vegetable is used Here */}
      <Vegetables />
    </Flex>
  );
}

export default App;
