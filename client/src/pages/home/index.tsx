import { Button, Flex } from "@usy-ui/base";
import { useCreateUser } from "src/apis";

export const Home = () => {
  const { mutate: createUser } = useCreateUser();

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      widthProps={{ width: "100%" }}
      heightProps={{ height: "100vh" }}
    >
      <Button
        onClick={() =>
          createUser({
            data: {
              email: "aaa@gmail.com",
              password: "aaa",
              name: "aaa",
            },
          })
        }
      >
        Home
      </Button>
    </Flex>
  );
};
