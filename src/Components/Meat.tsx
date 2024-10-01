import { Flex, Heading, Table } from "@radix-ui/themes";
import CardComp from "./CardComp";
import { meats } from "../utils/consts";
import { useState } from "react";
const Meat = () => {
  const [meatBil, setmeatBil] = useState(meats);
  const handleBillChange = (name: string, count: number) => {
    const updated = meatBil.map((bread) =>
      bread.name == name
        ? { ...bread, count: (bread.count = count) }
        : { ...bread }
    );
    setmeatBil(updated);
  };
  return (
    <Flex direction={"column"} gap={"6"} p={"6"}>
      <Heading className="bg-[#0D7C66] text-white max-w-fit px-4 py-1 rounded-2xl">
        Meat
      </Heading>
      <Flex gap="5" wrap="wrap">
        {meats.map((meat) => (
          <CardComp
            name={meat.name}
            image={meat.image}
            count={meat.count}
            price={meat.price}
            handleChange={handleBillChange}
          />
        ))}
      </Flex>
      <Table.Root>
        <Table.Header>
          <Table.ColumnHeaderCell>Name: </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Quantity: </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Total: </Table.ColumnHeaderCell>
        </Table.Header>
        {meatBil.map((bill) => (
          <Table.Row>
            <Table.Cell>{bill.name}</Table.Cell>
            <Table.Cell>{bill.count}</Table.Cell>
            <Table.Cell>{bill.price * bill.count}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Root>
    </Flex>
  );
};

export default Meat;
