import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import logo from '../assets/logos/logo.png';

export default function Nav({ contactUsRef }) {

  const handleScroll = (e) => {
    e.preventDefault();
    contactUsRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <Box>
      <Flex
        maxW={"90%"}
        mx="auto" // Center the navbar horizontally
        bg={useColorModeValue("white")}
        color={useColorModeValue("#111111", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justify="space-between"
      >
        <Flex
          flex={{ base: 1 }}
          ml={{ base: 0 }}
          align="center"
        >
          <img src={logo} alt="logo" style={{ borderRadius: '1px', width: '40px' }} />
          <Text fontWeight='600' color="#4A2900" ml={'4%'} mt={'1%'} display={{ base: "inline", md: "block" }}>
            Dominion Financial Management Services
          </Text>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            onClick={handleScroll}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"m"}
            fontWeight={600}
            color={"white"}
            bg={"#E67E22"}
            _hover={{
              bg: "#F39C12"
            }}
          >
            Contact Us
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
