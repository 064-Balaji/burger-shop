import { Flex, Heading } from "@radix-ui/themes";
import CardComp from "./CardComp";
import { breads } from "../utils/consts";
const Breads = () => {
  return (
    <Flex direction={"column"} gap={"6"} p={"6"}>
      <Heading className="bg-[#0D7C66] text-white max-w-fit px-4 py-1 rounded-2xl">
        Breads
      </Heading>
      <Flex wrap={"wrap"} gap="5">
        {breads.map((bread) => (
          <CardComp name={bread.name} image={bread.image} count={bread.count} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Breads;
