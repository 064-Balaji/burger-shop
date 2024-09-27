import { Flex, Heading } from "@radix-ui/themes";
import CardComp from "./CardComp";

const Breads = () => {
  // Create some predefined breads data for filling the component
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

        {/* Here we have used the map property the map will just iterate over the array defined before the map function 
            here it is breads so we will be accessign each element in the array with the variable bread 
            then use a callback function and make an immediately return () a Component called CardComp and pass the datas 
            as the parameters to the component constructor 
        */}
        {breads.map((bread) => (
          <CardComp name={bread.name} image={bread.image} count={bread.count} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Breads;
