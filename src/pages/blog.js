'use client'

import {
  Box,
  Stack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

const Feature = ({ heading, text, link }) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="2xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p fontSize={'xl'}>{text}</chakra.p>
      <br/>
      <chakra.p fontSize={'xl'}>{link}</chakra.p>
    </GridItem>
  )
}

export default function Blog() {
return (
    <Box color={'black'} as={Container} maxW={"90%"} p={4}>
        <Stack alignItems="flex-start" spacing="20px">
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
                Blog & Insights
            </Text>
            <Heading color={"#E67E22"} fontSize={"4xl"}>
                Empowering Your Financial Knowledge
            </Heading>
        </Stack>
        <Divider mt={2} mb={5} />
        <Grid
            templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
            }}
            gap={{ base: '8', sm: '12', md: '16' }}>
            <Feature
                heading={'Startup Budgeting Basics'}
                text={'Build a solid financial foundation from day one.'}
                link={<a href="/blog/startup-budgeting-basics" style={{ color: "#E67E22" }}>Read More &gt; &gt; &gt; </a>}
            />
            <Feature
                heading={'ZIMRA Compliance Made Simple'}
                text={'Understand your tax obligations and avoid penalties.'}
                link={<a href="/blog/zimra-compliance" style={{ color: "#E67E22" }}>Read More &gt; &gt; &gt; </a>}
            />
            <Feature
                heading={'Top Tools for Diaspora Accounting'}
                text={'Tools that make remote financial management easier.'}
                link={<a href="/blog/diaspora-accounting-tools" style={{ color: "#E67E22" }}>Read More &gt; &gt; &gt;</a>}
            />
            <Feature
                heading={'Remote Accounting Saves You'}
                text={'Discover the benefits of outsourcing your accounting from abroad.'}
                link={<a href="/blog/remote-accounting-benefits" style={{ color: "#E67E22" }}>Read More &gt; &gt; &gt;</a>}
            />
        </Grid>
    </Box>
)
}