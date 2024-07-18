'use client'

import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import capcut from '../assets/icons/capcut.png';
import canva from '../assets/icons/canva.png'
import corel from '../assets/icons/corel.png'
import illustrator from '../assets/icons/illustrator.png'
import photoshop from '../assets/icons/photoshop.png'
import pre from '../assets/icons/prepro.png'
import reactjs from '../assets/icons/reactjs.png'

const Card = ({ icon }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      textAlign="center"
    >
      <Stack align={'center'} spacing={2}>
        <Flex
          w={24}
          h={24}
          align={'center'}
          justify={'center'}
        >
          {icon}
        </Flex>
      </Stack>
    </Box>
  );
}

export default function Experts() {
  return (
    <Box p={4}>
      <Container maxW={'5xl'} mt={12} textAlign={"center"}>
        <Text
          textTransform={"uppercase"}
          color={"#363795"}
          fontWeight={600}
          fontSize={"sm"}
          bg={useColorModeValue("rgba(54, 55, 149, 0.1)", "rgba(35, 33, 93, 0.1)")}
          p={2}
          rounded={"md"}
          display={'inline-block'}
          textAlign={'center'}
        >
          Expertise in:
        </Text>
        <Flex flexWrap="wrap" gridGap={6} justify="center" mt={4}>
          <Card
            icon={<img src={illustrator} alt="illustrator icon" width={96} height={96} />}
          />
          <Card
            icon={<img src={photoshop} alt="photoshop icon" width={96} height={96} />}
          />
          <Card
            icon={<img src={corel} alt="corel icon" width={96} height={96} />}
          />
          <Card
            icon={<img src={canva} alt="canva icon" width={96} height={96} />}
          />
          <Card
            icon={<img src={reactjs} alt="reactjs icon" width={96} height={96} />}
          />
          <Card
            icon={<img src={pre} alt="pre icon" width={96} height={96} />}
          />
          <Card
            icon={<img src={capcut} alt="capcut icon" width={96} height={96} />}
          />
        </Flex>
    
        <hr
      style={{
        border: 'none',
        height: '2px',
        backgroundColor: "#363795",
        marginTop: '6%',
      }}
    />
      </Container>
    </Box>
  );
}
