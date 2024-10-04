import { Flex, Heading, Text } from "@radix-ui/themes";
import { useLocation } from "react-router-dom";

const Pay = () => {
  const location = useLocation();
  const total = location.state.total;
  return (
    <Flex direction="column" className="h-48">
      <Heading align="center">Payment</Heading>
      <Text>You have to pay: {total}</Text>
    </Flex>
  );
};

export default Pay;
