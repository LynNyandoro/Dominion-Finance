'use client'

import {
  Box,
  Container,
  Flex,
  Text,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import Action from '../assets/icons/action.png';
import Econet from '../assets/icons/econet.png';
import Barclays from '../assets/icons/barclays.png';
import FAO from '../assets/icons/fao.png';
import Sida from '../assets/icons/sida.png';
import MOH from '../assets/icons/moh.png';
import Mimosa from '../assets/icons/mimosa.png';
import AfriConnect from '../assets/icons/africonnect.png';
import DFID from '../assets/icons/dfid.png';
import PACT from '../assets/icons/pact.png';

const Card = ({ src, alt }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '200px' }}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      textAlign="center"
      bg="white"
    >
      <Flex
        align="center"
        justify="center"
        h="100px"
      >
        <Image
          src={src}
          alt={alt}
          maxH="200px"
          objectFit="contain"
        />
      </Flex>
    </Box>
  );
};

export default function Clients() {
  return (
    <Box p={4}>
      <Container maxW={"90%"} mt={12} textAlign={"center"}>
        <Text
          textTransform={"uppercase"}
          color={"#4A2900"}
          fontWeight={600}
          fontSize={"2xl"}
          bg={useColorModeValue("#f4e6cd", "#f4e6cd")}
          p={2}
          rounded={"md"}
          display={'inline-block'}
          textAlign={'center'}
        >
          Our Clients
        </Text>
        <Text fontSize={'xl'} mt={5} color={'#111111'}>
          Over the past two decades, we’ve proudly worked with organizations across sectors, including:
        </Text>
        <Flex flexWrap="wrap" gap={5} justify="center" mt={5}>
          <Card src={Econet} alt="Econet" />
          <Card src={Barclays} alt="Barclays" />
          <Card src={FAO} alt="FAO" />
          <Card src={Sida} alt="Sida" />
          <Card src={MOH} alt="Ministry of Health" />
          <Card src={Mimosa} alt="Mimosa" />
          <Card src={Action} alt="ActionAid" />
          <Card src={DFID} alt="DFID" />
          <Card src={PACT} alt="PACT" />
          <Card src={AfriConnect} alt="AfriConnect" />
        </Flex>
      </Container>
    </Box>
  );
}
