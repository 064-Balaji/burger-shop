import { Button, Flex, Table, Text } from "@radix-ui/themes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breads from "../Components/Breads";
import Meat from "../Components/Meat";
import Vegetables from "../Components/Vegetables";
import { breads, meats, vegetables } from "../utils/consts";

const BurgerBuilder = () => {
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
      setBill(prev => ({...prev, breads: updated}));
    } else if (type == "vegetable") {
      const updated = bill.vegetables.map((vegetable) =>
        vegetable.name == name
          ? { ...vegetable, count: (vegetable.count = count) }
          : { ...vegetable }
      );
      setBill(prev => ({...prev, vegetables: updated}));
    } else if (type == "meat") {
      const updated = bill.meat.map((meat) =>
        meat.name == name
          ? { ...meat, count: (meat.count = count) }
          : { ...meat }
      );
      setBill(prev => ({...prev, meat: updated}));
    }
  };

  return (
    <div className="flex flex-col bg-[#f1e8d4] p-4 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-red-600 mb-8">
        Build Your Perfect Burger
      </h1>

      {/* Ingredients Sections */}
      <div className="space-y-8 mb-8">
        {/* Breads Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Choose Your Bread
          </h2>
          <div className="flex flex-col gap-4 items-center">
            <Breads handleBillChange={handleBillChange} />
          </div>
        </div>

        {/* Vegetables Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Select Your Vegetables
          </h2>
          <div className="flex items-center justify-center w-full">
            <Vegetables handleBillChange={handleBillChange} />
          </div>
        </div>

        {/* Meat Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Pick Your Meat
          </h2>
          <Flex direction="column" align="center" gap="4">
            <Meat handleBillChange={handleBillChange} />
          </Flex>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Order Summary
        </h2>
        <div className="overflow-x-auto">
          <Table.Root className="w-full">
            <Table.Header>
              <Table.ColumnHeaderCell className="text-gray-700">Item</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="text-gray-700">Quantity</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="text-gray-700">Total</Table.ColumnHeaderCell>
            </Table.Header>
            {bill.breads.map((item) => (
              <Table.Row key={item.name} className="hover:bg-gray-50">
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.count}</Table.Cell>
                <Table.Cell>${(item.price * item.count).toFixed(2)}</Table.Cell>
              </Table.Row>
            ))}
            {bill.vegetables.map((item) => (
              <Table.Row key={item.name} className="hover:bg-gray-50">
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.count}</Table.Cell>
                <Table.Cell>${(item.price * item.count).toFixed(2)}</Table.Cell>
              </Table.Row>
            ))}
            {bill.meat.map((item) => (
              <Table.Row key={item.name} className="hover:bg-gray-50">
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.count}</Table.Cell>
                <Table.Cell>${(item.price * item.count).toFixed(2)}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Root>
        </div>

        {/* Totals */}
        <div className="mt-6 space-y-2 border-t pt-4">
          <Text className="flex justify-between items-center text-gray-600">
            <span>Bread Total:</span>
            <span className="font-medium">${breadTotal.toFixed(2)}</span>
          </Text>
          <Text className="flex justify-between items-center text-gray-600">
            <span>Vegetables Total:</span>
            <span className="font-medium">${vegTotal.toFixed(2)}</span>
          </Text>
          <Text className="flex justify-between items-center text-gray-600">
            <span>Meat Total:</span>
            <span className="font-medium">${meatTotal.toFixed(2)}</span>
          </Text>
          <Text className="flex justify-between items-center text-xl font-bold text-gray-800 border-t pt-2">
            <span>Grand Total:</span>
            <span>${(breadTotal + vegTotal + meatTotal).toFixed(2)}</span>
          </Text>
        </div>

        {/* Checkout Button */}
        <Button
          onClick={() =>
            navigate("pay", {
              state: { total: breadTotal + vegTotal + meatTotal },
            })
          }
          className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg text-lg font-semibold transition-colors"
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default BurgerBuilder; 