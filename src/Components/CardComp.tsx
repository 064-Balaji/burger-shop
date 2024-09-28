import { Flex, Heading, Button, Text } from "@radix-ui/themes";
import { useState } from "react";
// Acccess all the parameters passed from the constructor and destruct it
const CardComp = ({
  name,
  image,
  count,
}: {
  name: string;
  image: string;
  count: number;
}) => {
  // Use a state to set the count of each selected items in the lise
  const [num, setNum] = useState(count);
  
  return (
    <Flex
      gap="4"
      direction={"column"}
      className="max-w-[300px] min-w-[150px] bg-red-400 rounded-lg"
    >
      <img
        src={image}
        className="w-[350px] h-[200px] rounded-t-lg object-cover"
      />
      {/* object-fit: fill */}
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
