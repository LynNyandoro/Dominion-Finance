'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue,useColorModeValue } from '@chakra-ui/react'

export default function Sub() {
  return (
    <Flex
      w={'100%'}
      h={'70vh'}
      maxH={'7xl'}
      backgroundImage={
        'url(https://i.pinimg.com/564x/fb/3c/7f/fb3c7fd4a55f7fc629d5f0e52204000f.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgColor={useColorModeValue("rgba(54, 55, 149, 0.7)", "rgba(35, 33, 93, 0.9)")}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '6xl', md: '8xl' })}>
            Let's Create Magic Together!!!
          </Text>
        </Stack>
      </VStack>
    </Flex>
  )
}