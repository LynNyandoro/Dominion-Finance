"use client"
import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Heading
} from "@chakra-ui/react"
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa"
import { TfiEmail } from "react-icons/tfi";
import logo from '../assets/logos/Hlogo.png'

const Logo = props => {
  return ( 
    <img src={logo} alt="logo" style={{ borderRadius: '1px', height: '40px' }}/>
  )
}

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200")
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={6}>
          <SimpleGrid ml={10} columns={{ base: 1, md: 2 }} spacing={20}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text color={'gray.600'} fontSize={"sm"}>
              © 2024 Eight2Eight Media. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Whatsapp"} href={"https://wa.me/263788638544?text=urlencodedtext"}>
                <FaWhatsapp />
              </SocialButton>
              <SocialButton label={"Facebook"} href={"https://www.facebook.com/profile.php?id=61551784531116&mibextid=LQQJ4d"}>
                <FaFacebook/>
              </SocialButton>
              <SocialButton label={"Instagram"} href={"https://www.instagram.com/eight2eightmedia_zw?igsh=MXI5dDB6M3p6enhsYw%3D%3D&utm_source=qr"}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={"Email"} href={"mailto:eight28mediazw@gmail.com"}>
                <TfiEmail />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading color={"#363795"}>Contact Us</Heading>
            <Box color={'gray.500'} as="a" href={"#"}>
            +263 78 863 8544
            </Box>
            <Box color={'gray.500'} as="a" href={"#"} 
            target="_blank"  
            rel="noopener noreferrer">
              eight28mediazw@gmail.com
            </Box>
            <Box color={'gray.500'} as="a" href={"#"}>
              Harare, Zimbabwe
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
