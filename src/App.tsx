import { Flex } from "@radix-ui/themes";
import CardComp from "./CardComp";

function App() {
  return (
    // <div className="flex mx-4 gap-20">
    //   <button>Hello</button>
    //   <h1>Hello there</h1>
    // </div>

    // <div style="display: flex; flex-direction: column;"></div>
    <Flex gap={"3"}>
      <CardComp
        name={"Pizza"}
        image={
          "https://burger-shop-balajis-projects-85b24c63.vercel.app/assets/wheat-bread-HbRe4aux.webp"
        }
        count={0}
      />
      <CardComp
        name={"Burger"}
        image={
          "https://burger-shop-balajis-projects-85b24c63.vercel.app/assets/sesame-5Vt_e6Cg.jpg"
        }
        count={1}
      />
      <CardComp
        name={"Mutton"}
        image={
          "https://burger-shop-balajis-projects-85b24c63.vercel.app/assets/english-muffin-oj0MrpHZ.jpg"
        }
        count={3}
      />
      <CardComp
        name={"Chicken"}
        image={
          "https://burger-shop-balajis-projects-85b24c63.vercel.app/assets/pretzel-QJ82-ZHH.jpg"
        }
        count={2}
      />
    </Flex>
  );
}

export default App;
