import { Button, Flex, Heading } from "@radix-ui/themes";

function App() {
  return (
    // <div className="flex mx-4 gap-20">
    //   <button>Hello</button>
    //   <h1>Hello there</h1>
    // </div>
    <Flex gap="4">
      <Button color="plum" variant="surface">
        Hello
      </Button>
      <Heading>Hi There</Heading>
    </Flex>
  );
}

export default App;
