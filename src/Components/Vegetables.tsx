import { Flex, Heading } from "@radix-ui/themes";
import CardComp from "./CardComp";

const Vegetables = () => {
  const vegetables = [
    {
      name: "Tomato",
      image:
        "https://burger-shop-balajis-projects-85b24c63.vercel.app/assets/tomato-casb8PiX.jpg",
      count: 2,
    },
    {
      name: "Spinach",
      image:
        "https://burger-shop-balajis-projects-85b24c63.vercel.app/assets/spinach-PznX8nFw.jpg",
      count: 1,
    },
    {
      name: "Cabbage",
      image:
        "https://burger-shop-balajis-projects-85b24c63.vercel.app/assets/cabbage-wlmKC9Xe.webp",
      count: 1,
    },
  ];

  return (
    <Flex direction={"column"}>
      <Heading>Vegetables</Heading>
      <Flex gap={"3"}>
        {vegetables.map((v) => (
          <CardComp name={v.name} image={v.image} count={v.count} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Vegetables;
