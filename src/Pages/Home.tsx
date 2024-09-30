import { Flex } from "@radix-ui/themes";
import Breads from "../Components/Breads";
import Vegetables from "../Components/Vegetables";
import Meat from "../Components/Meat";

const Home = () => {
  return (
    <div  className="flex flex-col items-start justify-center bg-[#f1e8d4]">
      <div className="flex flex-col gap-4 items-center">
        <Breads />
      </div>
      <div className="flex items-center justify-center w-full">
        <Vegetables />
      </div>
      <Flex direction="column" align="center" gap="4">
        <Meat />
      </Flex>
    </div>
  );
};

export default Home;
