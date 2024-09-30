import { Flex, Grid, Heading } from "@radix-ui/themes";
import CardComp from "./CardComp";
import { vegetables } from "../utils/consts";
const Vegetables = () => {
  return (
    <Flex direction={"column"} gap={"6"} p={"6"}>
      <Heading className="bg-[#0D7C66] text-white max-w-fit px-4 py-1 rounded-2xl">Vegetables</Heading>
      <Flex wrap='wrap' gap="5">
        {vegetables.map((item) => (
          <CardComp name={item.name} image={item.image} count={item.count} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Vegetables;
