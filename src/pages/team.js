import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  Heading,
  Stack,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import mati from "../assets/Content/Mati Mukono.jpg";
import brian from "../assets/Content/Brian.jpg";

const TeamMemberCard = ({ imgSrc, name, title, qualifications, description }) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    bg="white"
    boxShadow="md"
    p={4}
    paddingBottom={10}
    textAlign="center"
  >
    <Image
      src={imgSrc}
      alt={name}
      mx="auto"
      borderRadius="md"
      objectFit="cover"
      maxH="300px"
      mb={4}
    />
    <Heading size="lg" color="#E67E22">{name}</Heading>
    <Text
      textTransform="uppercase"
      color="#4A2900"
      fontWeight={600}
      fontSize="md"
      bg={useColorModeValue("#f4e6cd", "#f4e6cd")}
      p={1}
      mt={2}
      rounded="md"
      display="inline-block"
    >
      {title}
    </Text>
    <Text fontWeight="bold" fontSize="xl" mt={3} color="#111111">
      {qualifications}
    </Text>
    <Text fontSize="xl" color="#111111" mt={2}>
      {description}
    </Text>
  </Box>
);

export default function Teams() {
  return (
    <Box py={10}>
      <Container maxW="90%">
        <Stack spacing={5} textAlign="center" mb={10}>
          <Text
            textTransform={"uppercase"}
            mx={'auto'}
            color={"#4A2900"}
            fontWeight={600}
            fontSize={"2xl"}
            bg={useColorModeValue("#f4e6cd", "#f4e6cd")}
            p={2}
            rounded={"md"}
            alignSelf={"flex-start"}
            textAlign={'center'}
          >
            Meet The Board
          </Text>
          <Heading color="#E67E22" fontSize="4xl">
            Leadership with Integrity and Expertise
          </Heading>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <TeamMemberCard
            imgSrc={mati}
            name="Maitirwa Mukonoweshuro"
            title="Managing Consultant"
            qualifications="Chartered Accountant | Certified Behavioural Analyst | MBL Candidate (UNISA)"
            description="With experience from Deloitte Zimbabwe, Merrill Lynch UK, and BancABC, Maitirwa leads our team with a passion for sustainable financial development and organizational growth."
          />
          <TeamMemberCard
            imgSrc={brian}
            name="Dr. Brian Maguranyanga"
            title="Consultant"
            qualifications="PhD, University of Michigan | Former UN & Wits University Consultant"
            description="Dr. Maguranyanga brings deep experience in public sector transformation, governance, and strategic advisory."
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
