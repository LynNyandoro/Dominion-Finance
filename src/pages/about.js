import React from 'react';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import main from '../assets/Content/Head.png';
import { SiFsecure } from "react-icons/si";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { HiOutlineLightBulb } from "react-icons/hi";

const Card = ({ heading, icon }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"100%"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"center"} justify={"center"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading color={"#363795"} size="sm">{heading}</Heading>
        </Box>
      </Stack>
    </Box>
  );
}

const About = () => {
  return (
    <Container maxW={"8xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={main}
            objectFit={"cover"}
            w="100%"
            h="auto"
          />
        </Flex>
        <Stack spacing={6}>
          <Text
            textTransform={"uppercase"}
            color={"#363795"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("rgba(54, 55, 149, 0.1)", "rgba(35, 33, 93, 0.1)")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text>
          <Heading color={"#363795"} fontSize={"3xl"}>Branding & Media Experts</Heading>
          <Text color={"gray.600"} >
            Eight2Eight Media is a branding company which specializes in Branding, Printing, Packaging and more. The name ‘Eight2Eight’ is influenced by the scripture Romans 8 vs 28 - “All things will work together for good, for those who love the Lord and are called to His Promise”.
          </Text>
          <Stack spacing={6}>
            <Box>
              <Heading fontSize={'2xl'} color={"#363795"} fontFamily={'body'}>
                Our Mission:
              </Heading>
              <Text color={'gray.600'}>
                To transform ideas into innovative brands which empower businesses to stand out and thrive.
              </Text>
            </Box>
            <Box>
              <Heading fontSize={'2xl'} color={"#363795"} fontFamily={'body'}>
                Our Vision
              </Heading>
              <Text color={'gray.600'}>
                To be the leading branding and media company in Zimbabwe - offering quality and affordable services for all businesses from Small & Medium Enterprises to Big Companies, elevating them to achieve enduring success and exposure.
              </Text>
            </Box>
            <Box>
              <Heading fontSize={'2xl'} color={"#363795"} fontFamily={'body'}>
                Our Values
              </Heading>
              <Container maxW={"7xl"} mt={12}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                  <Card
                    heading={"Reliability"}
                    icon={<Icon color={"#363795"} as={SiFsecure} w={'50%'} h={'50%'} />}
                  />
                  <Card
                    heading={"Integrity"}
                    icon={<Icon color={"#363795"} as={VscWorkspaceTrusted} w={'50%'} h={'50%'} />}
                  />
                  <Card
                    heading={"Quality"}
                    icon={<Icon color={"#363795"} as={HiOutlineBadgeCheck} w={'50%'} h={'50%'} />}
                  />
                  <Card
                    heading={"Creativity"}
                    icon={<Icon color={"#363795"} as={HiOutlineLightBulb} w={'50%'} h={'50%'} />}
                  />
                </SimpleGrid>
              </Container>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default About;
