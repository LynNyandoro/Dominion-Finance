'use client'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Stack,
  Heading,
  Button,
  Container,
  Box,
  Icon,
} from '@chakra-ui/react'
import { PiQuestion } from "react-icons/pi";

import { ChevronDownIcon } from '@chakra-ui/icons'
import React from 'react'

export default function Faqs() {
  return (
    <Container maxW={"90%"}>
      <Stack
        align={"center"}
        mt={12}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 8, md: 18 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 4, md: 8 }}>
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
            FAQS
          </Text>
          <Heading color={"#E67E22"} fontSize={"4xl"}>
            Frequently Asked<br/>
            Questions
          </Heading>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"full"}
            width={"full"}
            overflow={"hidden"}
          >
            <Flex
            padding={1}  
            align={'center'}
            justify={'center'}
            color={'#111111'}>
            <Container>
                <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
                <AccordionItem>
                    <AccordionButton
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p={4}>
                    <Text color="#111111" fontSize={'xl'}>Do you work with international clients?</Text>
                    <ChevronDownIcon fontSize="24px" />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                    <Text color="#111111">
                        Yes — we serve clients globally using cloud accounting tools and digital communication.
                    </Text>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p={4}>
                    <Text color="#111111" fontSize={'xl'}>What accounting software do you support?</Text>
                    <ChevronDownIcon fontSize="24px" />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                    <Text color="#111111">
                        We support QuickBooks, Sage, Xero, Pastel, and Palladium.
                    </Text>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p={4}>
                    <Text color="#111111" fontSize={'xl'}>How do I get started with you remotely?</Text>
                    <ChevronDownIcon fontSize="24px" />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                    <Text color="#111111">
                        Simply book a discovery call or request a quote. We’ll walk you through onboarding.
                    </Text>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p={4}>
                    <Text color="#111111" fontSize={'xl'}>What industries do you serve?</Text>
                    <ChevronDownIcon fontSize="24px" />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                    <Text color="#111111">
                        SMEs, nonprofits, consultants, professional services, agri-businesses, and more.
                    </Text>
                    </AccordionPanel>
                </AccordionItem>
                </Accordion>
            </Container>
            </Flex>
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}