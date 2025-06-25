import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  Box,
  Button,
  Center,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
  Container,
  Heading
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import brand from '../assets/Content/brand.jpeg'
import other from '../assets/Content/other.PNG'
import gd from '../assets/Content/gd.PNG'
import pkg from '../assets/Content/pkgin.png'
import printing from '../assets/Content/print.jpeg'

const CustomRightArrow = ({ onClick }) => (
  <Button
    onClick={onClick}
    style={{
      position: 'absolute',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: useColorModeValue("rgba(54, 55, 149, 0.5)", "rgba(35, 33, 93, 0.5)"),
      color: 'white',
      borderRadius: '50%',
      padding: '10px',
    }}
  >
    →
  </Button>
);

const CustomLeftArrow = ({ onClick }) => (
  <Button
    onClick={onClick}
    style={{
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: useColorModeValue("rgba(54, 55, 149, 0.5)", "rgba(35, 33, 93, 0.5)"),
      color: 'white',
      borderRadius: '50%',
      padding: '10px',
    }}
  >
    ←
  </Button>
);

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ServiceCard = ({ title, image, items, link }) => (
  <Box p={4}>
    <Center py={6}>
      <Box
        maxW={'110%'}
        w={'full'}
        bg={useColorModeValue('white')}
        boxShadow={'0 4px 6px rgba(0, 0, 0, 0.1)'}
        rounded={'md'}
        overflow={'hidden'}
        p={4}
      >
        <Stack textAlign={'center'} p={6} color={useColorModeValue('gray.800', 'white')} align={'center'}>
          <Text fontSize={'m'} fontWeight={500} bg={useColorModeValue("white")} p={2} px={3} color={"#363795"} rounded={'full'}>
            {title}
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <img src={image} alt={title} style={{ borderRadius: '8px', width: '150px', height: '150px' }} />
          </Stack>
        </Stack>
        <Box bg={useColorModeValue('gray.50')} px={6} py={10}>
          <List fontSize={'sm'} color={"gray.600"} spacing={3}>
            {items.map((item, index) => (
              <ListItem key={index}>
                <ListIcon as={CheckIcon} color="#363795"/>
                {item}
              </ListItem>
            ))}
          </List>
          <Button
            as="a" 
            mt={10}
            w={'full'}
            bg={'#363795'}
            color={'white'}
            rounded={'xl'}
            _hover={{
              bg: '#23215D',
            }}
            href={link} 
            target="_blank"  
            rel="noopener noreferrer"
          >
            Place Order
          </Button>
        </Box>
      </Box>
    </Center>
  </Box>
);

const Service = ({ deviceType }) => (
  <Box p={4} >
    <Stack spacing={4} as={Container} maxW={"6xl"} textAlign={"center"}>
      <Heading color={"#363795"} fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
        Our Services
      </Heading>
      <Text color={"gray.500"} fontSize={{ base: "sm", sm: "lg" }}>
      We have a wide variety of services which include: Branding, Graphic Design, Printing, Packaging , and other services such as website design, copywriting, consultations.
      </Text>
    </Stack>
    <Container maxW={"7xl"} mt={5}>
      <Carousel
        swipeable
        draggable
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={deviceType !== 'mobile'}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 0.5s ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        <ServiceCard
          title="Branding Services"
          image={brand}
          items={[
            'Brand Strategy',
            'Logo Design',
            'Brand Identity',
            'Brand Guidelines',
          ]}
          link="https://wa.me/p/6517977988258120/263788638544"
        />
        <ServiceCard
          title="Graphic Design Services"
          image={gd}
          items={[
            'Advertising Materials',
            'Corporate Stationery',
            'Label & Sticker Design',
            'Digital Graphics',
          ]}
          link="https://wa.me/p/6561959997227920/263788638544"
        />
        <ServiceCard
          title="Printing Services"
          image={printing}
          items={[
            'Digital Printing',
            'Large Format Printing',
            'Promotional Materials',
            'Packaging Printing',
          ]}
          link="https://wa.me/p/10078948428844755/263788638544"
        />
        <ServiceCard
          title="Packaging Services"
          image={pkg}
          items={[
            'Packaging Design',
            'Custom Packaging ',
            'Product Labeling',
            'Packaging Mock-ups',
          ]}
          link="https://wa.me/p/6749115131841729/263788638544"
        />
        <ServiceCard
          title="Other Services"
          image={other}
          items={[
            'Website Design',
            'Marketing Copywriting',
            'Brand Consultancy',
            'Social Media Management',
          ]}
          link="https://wa.me/p/6513211588747915/263788638544"
        />
      </Carousel>
    </Container>
  </Box>
);

export default Service;
