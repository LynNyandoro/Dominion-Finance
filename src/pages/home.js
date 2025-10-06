"use client";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import home from "../assets/Content/home.png"

export default function Home({serviceRef}) {
  const handleScroll = (e) => {
    e.preventDefault();
    serviceRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <Container maxW={"90%"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 8, md: 18 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 4, md: 8 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={700}
            fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
            color={"#E67E22"}
          > Empowering Africa, Supporting the World
            <br />
          </Heading>
          <Text fontSize={'xl'} color={"#111111"}>
            Welcome to Dominion Financial Management Services, your trusted partner in professional accounting, tax advisory, and business consulting.
Since 2002, we’ve been helping Zimbabwean and international businesses streamline their finances, improve decision-making, and stay compliant — all at competitive, Zimbabwe-based rates. <br/> <br/>
            <b>Accurate Reporting. Timely Advice. Global Reach.</b>
          </Text>
          <Button width={'40%'} onClick={handleScroll}
            display={{ base: "none", md: "inline-flex" }}  // Hide button on mobile
            fontSize={"m"}
            fontWeight={600}
            color={"white"}
            bg={"#E67E22"}
            _hover={{
              bg: "#F39C12"
            }}>Explore Our Services</Button>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue(
              "rgba(54, 55, 149, 0.1)",
              "rgba(35, 33, 93, 0.1)"
            )}
          />
          <Box
            position={"relative"}
            height={"full"}
            width={"full"}
            overflow={"hidden"}
          >
            <img src={home} alt="logo" style={{ borderRadius: '1px', width: '100%' }} />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

const Blob = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
