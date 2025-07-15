'use client'

import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Sub() {
  const overlayBg = useColorModeValue('rgba(230, 126, 34, 0.8)', 'rgba(230, 126, 34, 0.8)')

  return (
    <Flex
      maxW="90%"
      mx="auto"
      h={'30vh'}
      mt={10}
      backgroundImage="url(https://i.pinimg.com/564x/fb/3c/7f/fb3c7fd4a55f7fc629d5f0e52204000f.jpg)"
      backgroundSize="cover"
      backgroundPosition="center">
      <VStack
        w="full"
        h="full"
        justify="center"
        px={useBreakpointValue({ base: 4, md: 8 })}
        bg={overlayBg}>
        <Stack maxW="2xl" >
          <Text
            color="white"
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '4xl', md: '6xl' })}>
            Professional Accounting Services!!!
          </Text>
        </Stack>
      </VStack>
    </Flex>
  )
}
