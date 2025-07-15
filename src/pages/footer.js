import React, { forwardRef } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";
import logo from "../assets/logos/logo.png";

// Logo component
const Logo = () => (
  <img
    src={logo}
    alt="logo"
    style={{ borderRadius: "1px", height: "40px" }}
  />
);

// Social button component
const SocialButton = ({ children, label, href }) => (
  <Button
    bg="#363795"
    color="white"
    rounded="full"
    w={8}
    h={8}
    as="a"
    href={href}
    display="inline-flex"
    alignItems="center"
    justifyContent="center"
    transition="background 0.3s ease"
    _hover={{ bg: "#23215D" }}
  >
    <VisuallyHidden>{label}</VisuallyHidden>
    {children}
  </Button>
);

// Footer component
const Footer = forwardRef((props, ref) => {
  return (
    <Box
      maxW="100%"
      bg={useColorModeValue("gray.50")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container ref={ref} as={Stack} py={6} maxW="90%">
        <Stack
          direction={{ base: "column", md: "row" }} // VStack on mobile, HStack on larger screens
          spacing={{ base: 8, md: "14%" }}
          align="flex-start"
        >
          {/* Company Info */}
          <Stack spacing={3}>
            <Stack direction="row" spacing={3} align="center">
              <img
                src={logo}
                alt="logo"
                style={{ borderRadius: "1px", width: "30px" }}
              />
              <Text
                fontSize={{ base: "sm", md: "md", lg: "xl" }}
                fontWeight="bold"
                color="#4A2900"
              >
                Dominion Financial Management Services
              </Text>
            </Stack>
            <Text color="#111111" fontSize={{ base: "xs", md: "sm", lg: "xl" }}>
              © 2025 Dominion Finance. All Rights Reserved.
            </Text>
          </Stack>

          {/* Address */}
          <Stack align="flex-start">
            <Text
              fontSize={{ base: "xs", md: "sm", lg: "xl" }}
              color="#111111"
              as="a"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Business Address:</b>
              <br />
              4 Kirkaldy Road, Pomona, Harare, Zimbabwe
              <br />
              <b>Working Hours:</b> Mon–Fri, 8am–4:30pm
            </Text>
          </Stack>

          {/* Contact Info */}
          <Stack align="flex-start">
            <Text
              fontSize={{ base: "sm", md: "md", lg: "xl" }}
              color="#111111"
              as="a"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Get in Touch:</b>
              <br />
              info@dominionfinance.org
              <br />
              (+263) 77 542 4146
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
});

export default Footer;
