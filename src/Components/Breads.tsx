import { Flex, Heading } from "@radix-ui/themes";
import CardComp from "./CardComp";

const Breads = () => {
  const breads = [
    {
      name: "Pizza",
      image:
        "https://burger-shop-balajis-projects-85b24c63.vercel.app/assets/wheat-bread-HbRe4aux.webp",
      count: 2,
    },
    {
      name: "Burger",
      image:
        "https://burger-shop-balajis-projects-85b24c63.vercel.app/assets/sesame-5Vt_e6Cg.jpg",
      count: 1,
    },
  ];

  return (
    <Flex direction={"column"} gap={"3"}>
      <Heading>Breads: </Heading>
      <Flex gap={"3"}>
        {/* For Each Loop
        for(int i: arr)
          processing
        */}
        {breads.map((b) => (
          <CardComp name={b.name} image={b.image} count={b.count} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Breads;
