import { Flex, Heading, Button, Text } from "@radix-ui/themes";
import { useState } from "react";

const CardComp = ({
  name,
  image,
  count,
}: {
  name: string;
  image: string;
  count: number;
}) => {
  const [num, setNum] = useState(count);
  return (
    <Flex
      gap="4"
      direction={"column"}
      className="w-[300px] bg-red-400 rounded-lg"
    >
      <img src={image} alt="" className="w-[350px] h-[200px] rounded-t-lg" />
      <Flex direction={"column"} justify={"center"} align={"center"} gap={"3"}>
        <Heading>{name}</Heading>
        <Flex gap={"3"} align={"center"}>
          <Button color="red" onClick={() => setNum((n) => n - 1)}>
            -
          </Button>
          <Text>{num}</Text>
          <Button color="green" onClick={() => setNum((n) => n + 1)}>
            +
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardComp;
