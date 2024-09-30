import { Flex, Heading } from "@radix-ui/themes";
import CardComp from "./CardComp";
import { vegetables } from "../utils/consts";

const Vegetables = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading className="bg-[#0D7C66] text-white max-w-fit px-4 py-1 rounded-2xl">Vegetables</Heading>
      <div className="grid grid-cols-5 items-center justify-center gap-4">
        {vegetables.map((item) => (
          <CardComp name={item.name} image={item.image} count={item.count} />
        ))}
      </div>
    </div>
  );
};

export default Vegetables;
