import { Button, Flex, Table, Text } from "@radix-ui/themes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breads from "../Components/Breads";
import Meat from "../Components/Meat";
import Vegetables from "../Components/Vegetables";
import { breads, meats, vegetables } from "../utils/consts";

const Home = () => {
  const [bill, setBill] = useState({
    breads: breads,
    vegetables: vegetables,
    meat: meats,
  });

  const navigate = useNavigate();

  let breadTotal = 0;
  let vegTotal = 0;
  let meatTotal = 0;

  bill.breads.map((bread) => {
    breadTotal += bread.price * bread.count;
  });

  bill.vegetables.map((veg) => {
    vegTotal += veg.price * veg.count;
  });

  bill.meat.map((meat) => {
    meatTotal += meat.price * meat.count;
  });

  const handleBillChange = (name: string, count: number, type: string) => {
    if (type == "bread") {
      const updated = bill.breads.map((bread) =>
        bread.name == name
          ? { ...bread, count: (bread.count = count) }
          : { ...bread }
      );
      // setBill((prev) => {breads: updated, vegetables: ,meats: ,});
    } else if (type == "vegetable") {
      bill.vegetables.map((vegtable) =>
        vegtable.name == name
          ? { ...vegtable, count: (vegtable.count = count) }
          : { ...vegtable }
      );
      console.log(bill);
    } else if (type == "meat") {
      bill.meat.map((meat) =>
        meat.name == name
          ? { ...meat, count: (meat.count = count) }
          : { ...meat }
      );
    }
  };
  return (
    <div className="flex flex-col justify-center bg-[#f1e8d4] p-4 ">
      <div className="flex flex-col gap-4 items-center">
        <Breads handleBillChange={handleBillChange} />
      </div>
      <div className="flex items-center justify-center w-full">
        <Vegetables handleBillChange={handleBillChange} />
      </div>
      <Flex direction="column" align="center" gap="4">
        <Meat handleBillChange={handleBillChange} />
      </Flex>
      <Table.Root>
        <Table.Header>
          <Table.ColumnHeaderCell>Name: </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Quantity: </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Total: </Table.ColumnHeaderCell>
        </Table.Header>
        {bill.breads.map((bill) => (
          <Table.Row>
            <Table.Cell>{bill.name}</Table.Cell>
            <Table.Cell>{bill.count}</Table.Cell>
            <Table.Cell>{bill.price * bill.count}</Table.Cell>
          </Table.Row>
        ))}
        {bill.vegetables.map((bill) => (
          <Table.Row>
            <Table.Cell>{bill.name}</Table.Cell>
            <Table.Cell>{bill.count}</Table.Cell>
            <Table.Cell>{bill.price * bill.count}</Table.Cell>
          </Table.Row>
        ))}
        {bill.meat.map((bill) => (
          <Table.Row>
            <Table.Cell>{bill.name}</Table.Cell>
            <Table.Cell>{bill.count}</Table.Cell>
            <Table.Cell>{bill.price * bill.count}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Root>
      <Text>{breadTotal}</Text>
      <Text>{vegTotal}</Text>
      <Text>{meatTotal}</Text>
      <Text>{breadTotal + vegTotal + meatTotal}</Text>
      <Button
        onClick={() =>
          navigate("pay", {
            state: { total: breadTotal + vegTotal + meatTotal },
          })
        }
      >
        Checkout
      </Button>
    </div>
  );
};

export default Home;
