import { Flex } from "@radix-ui/themes";
import Breads from "./Components/Breads";
import Vegetables from "./Components/Vegetables";

function App() {
  // [1, 2]
  return (
    // <div className="flex mx-4 gap-20">
    //   <button>Hello</button>
    //   <h1>Hello there</h1>
    // </div>

    // <div style="display: flex; flex-direction: column;"></div>
    <Flex gap={"3"} direction={"column"}>
      <Breads />
      <Vegetables />
    </Flex>
  );
}

export default App;
