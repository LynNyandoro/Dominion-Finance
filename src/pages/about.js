import React from 'react';
import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { PiHandFistLight } from "react-icons/pi";
import { LiaHandshake } from "react-icons/lia";
import { PiRecycle } from "react-icons/pi";
import about from "../assets/Content/about.png";

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
          border={"2px solid"}
          borderColor={useColorModeValue("#F39C12", "#F39C12")}
          bg={useColorModeValue("white")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading color={"#4A2900"} fontSize={{ base: "md", md: "lg", lg: "xl" }}>{heading}</Heading>
        </Box>
      </Stack>
    </Box>
  );
}

const About = () => {

  return (
    <Container maxW={"90%"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <img src={about} alt="logo" style={{ borderRadius: '1px', width: '90%' }} />
        </Flex>
        <Stack spacing={5}>
          <Text
            textTransform={"uppercase"}
            color={"#4A2900"}
            fontWeight={600}
            fontSize={'2xl'}
            bg={useColorModeValue("#f4e6cd", "#f4e6cd")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text>
          <Heading color={"#E67E22"} fontSize={"4xl"}>
            Local Expertise, Global Vision
          </Heading>
          <Text fontSize={'xl'} color={"#111111"} >
            Dominion Financial Management Services is a division of Dominion Group, a Zimbabwean consultancy firm established in 2002. We deliver reliable, cost-effective accounting and advisory solutions to businesses across Africa and the diaspora.<br/><br/>
            We operate through two key entities:
            <ul style={{ marginLeft: "1em" }}>
              <li>Busy People Training Services (2006)</li>
              <li>Dominion Accounting Services (Pvt) Ltd (2006)</li>
            </ul>
          </Text>
          <Stack spacing={6}>
            <Box>
              <Heading fontSize={'3xl'} color={"#E67E22"} fontFamily={'body'}>
                Our Mission:
              </Heading>
              <Text fontSize={'xl'} color={'#111111'}>
                To provide world – class training and accounting services. To position our clients to form and manage trans-generational organizations. 
                To equip our clients to establish a dominant presence on the continent of Africa
              </Text>
            </Box>
            <Box>
              <Heading fontSize={'3xl'} color={"#E67E22"} fontFamily={'body'}>
                Our Vision
              </Heading>
              <Text fontSize={'xl'} color={'#111111'}>
                To empower Africa for sustainability.
              </Text>
            </Box>
            <Box>
              <Heading fontSize={'3xl'} color={"#E67E22"} fontFamily={'body'}>
                Our Values
              </Heading>
              <Container maxW={"100%"}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                  <Card
                    heading={"Integrity"}
                    icon={<Icon color={"#F39C12"} as={VscWorkspaceTrusted} w={'50%'} h={'50%'} />}
                  />
                  <Card
                    heading={"Empowerment"}
                    icon={<Icon color={"#F39C12"} as={PiHandFistLight} w={'70%'} h={'70%'} />}
                  />
                  <Card
                    heading={"Commitment"}
                    icon={<Icon color={"#F39C12"} as={LiaHandshake} w={'60%'} h={'60%'} />}
                  />
                  <Card
                    heading={"Sustainability"}
                    icon={<Icon color={"#F39C12"} as={PiRecycle} w={'50%'} h={'50%'} />}
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
