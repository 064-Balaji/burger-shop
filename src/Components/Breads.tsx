import { Flex, Heading } from "@radix-ui/themes";
import { breads } from "../utils/consts";
import CardComp from "./CardComp";
const Breads = ({
  handleBillChange,
}: {
  handleBillChange: (name: string, count: number, type: string) => void;
}) => {
  // void add(int a, int b){
  // a ,b
  // }
  // add(num, num2)
  // const [breadBill, setBreadBill] = useState(breads);
  // const handleBillChange = (name: string, count: number) => {
  //   const updated = breadBill.map((bread) =>
  //     bread.name == name
  //       ? { ...bread, count: (bread.count = count) }
  //       : { ...bread }
  //   );
  //   setBreadBill(updated);
  // };
  return (
    <Flex direction={"column"} gap={"6"} p={"6"}>
      <Heading className="bg-[#0D7C66] text-white max-w-fit px-4 py-1 rounded-2xl">
        Breads
      </Heading>
      <Flex wrap={"wrap"} gap="5">
        {breads.map((bread) => (
          <CardComp
            name={bread.name}
            image={bread.image}
            count={bread.count}
            price={bread.price}
            type="bread"
            handleChange={handleBillChange}
          />
        ))}
      </Flex>
      {/* <Table.Root>
        <Table.Header>
          <Table.ColumnHeaderCell>Name: </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Quantity: </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Total: </Table.ColumnHeaderCell>
        </Table.Header>
        {breadBill.map((bill) => (
          <Table.Row>
            <Table.Cell>{bill.name}</Table.Cell>
            <Table.Cell>{bill.count}</Table.Cell>
            <Table.Cell>{bill.price * bill.count}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Root> */}
    </Flex>
  );
};

export default Breads;
