import { Flex, Heading } from "@radix-ui/themes";
import { vegetables } from "../utils/consts";
import CardComp from "./CardComp";
const Vegetables = ({
  handleBillChange,
}: {
  handleBillChange: (name: string, count: number, type: string) => void;
}) => {
  return (
    <Flex direction={"column"} gap={"6"} p={"6"}>
      <Heading className="bg-[#0D7C66] text-white max-w-fit px-4 py-1 rounded-2xl">
        Vegetables
      </Heading>
      <Flex wrap="wrap" gap="5">
        {vegetables.map((item) => (
          <CardComp
            name={item.name}
            image={item.image}
            count={item.count}
            price={item.price}
            type="vegetable"
            handleChange={handleBillChange}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Vegetables;
