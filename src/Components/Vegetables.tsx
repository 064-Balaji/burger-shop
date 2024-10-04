import { Flex, Grid, Heading, Table } from "@radix-ui/themes";
import CardComp from "./CardComp";
import { vegetables } from "../utils/consts";
import { useState } from "react";
const Vegetables = () => {
  const [vegBill, setVegBill] = useState(vegetables);
  
  const handleBillChange = (name: string, count: number) => {
    const updated = vegBill.map((bread) =>
      bread.name == name
        ? { ...bread, count: (bread.count = count) }
        : { ...bread }
    );
    setVegBill(updated);
  };

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
        {vegBill.map((bill) => (
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

export default Vegetables;
