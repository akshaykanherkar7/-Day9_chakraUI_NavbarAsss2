import logo from "./logo.svg";
import {
  Flex,
  Spacer,
  useColorModeValue,
  Text,
  useBreakpointValue,
  Stack,
  Button,
  PopoverContent,
  PopoverTrigger,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            fontSize="17px"
            fontWeight="700"
            color={useColorModeValue("gray.800", "white")}
          >
            Logo
          </Text>
        </Flex>
        <Stack direction="row" spacing={4} align="left" marginRight="600px">
          <Popover>
            <PopoverTrigger>
              <Button colorScheme="teal" borderRadius="0px" variant="ghost">
                Insprition
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>Explore Design Work</PopoverBody>
              <PopoverBody>New And Note Worthy</PopoverBody>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button colorScheme="teal" borderRadius="0px" variant="ghost">
                Find Work
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                Job Board
                <p>Find your dream design job</p>
              </PopoverBody>
              <PopoverBody>
                FreeLance Projects<p>An exclusive list of contract work</p>{" "}
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Button colorScheme="teal" borderRadius="0px" variant="ghost">
            Learn Design
          </Button>
          <Button colorScheme="teal" borderRadius="0px" variant="ghost">
            Hire Designers
          </Button>
        </Stack>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          >
            Sign In
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            href={"#"}
            _hover={{
              bg: "pink.300",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>
    </div>
  );
}

export default App;
