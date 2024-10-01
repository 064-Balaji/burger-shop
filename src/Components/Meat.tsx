import { Flex,  Heading } from "@radix-ui/themes";
import CardComp from "./CardComp";
import { meats } from "../utils/consts";
const Meat = () => {
  return (
    <Flex direction={"column"} gap={"6"} p={"6"}>
      <Heading className="bg-[#0D7C66] text-white max-w-fit px-4 py-1 rounded-2xl">Meat</Heading>
      <Flex gap="5" wrap='wrap'>
        {meats.map((meat) => (
          <CardComp
            name={meat.name}
            image={meat.image}
            count={meat.count}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Meat;
