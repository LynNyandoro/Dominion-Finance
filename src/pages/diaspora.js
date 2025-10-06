import React from 'react';
import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import diaspora from "../assets/Content/Diaspora.jpg";

const Diaspora = () => {

  return (
    <Container maxW={"90%"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={5}>
          <Text
            textTransform={"uppercase"}
            color={"#4A2900"}
            fontWeight={600}
            fontSize={"2xl"}
            bg={useColorModeValue("#f4e6cd", "#f4e6cd")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Work With Us Remotely
          </Text>
          <Heading color={"#E67E22"} fontSize={"4xl"}>
            Affordable, Professional Accounting — Wherever You Are
          </Heading>
          <Text fontSize={'xl'} color={"#111111"} >
            Based outside Zimbabwe? We specialize in working with clients across:<br/>
            <b>UK | USA | South Africa | Sweden | Ireland | Canada</b>
            <br/><br/>
            Our team delivers remote accounting, reporting, and compliance services at competitive Zimbabwean rates — without compromising quality or accuracy.
          </Text>
          <Text color={"#E67E22"} fontSize={'3xl'}><b><i>Why Diaspora Clients Choose Us:</i></b></Text>
          <Text fontSize={'xl'} color={"#111111"}>
            <ul style={{ marginLeft: "1em" }}>
              <li>Lower cost vs. international firms</li>
              <li>Full support for QuickBooks, Xero, Sage, and more</li>
              <li>Timely financial reports in line with IFRS / GAAP</li>
              <li>Seamless communication via Zoom, WhatsApp & Email</li>
              <li>Dedicated Account Manager for every client</li>
            </ul>
          </Text>
        </Stack>
        <Flex>
          <img src={diaspora} alt="logo" style={{ borderRadius: '1px', width: '70%' }} />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default Diaspora;
