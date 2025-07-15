
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
import logo from '../assets/logos/logo.png';
import React, { forwardRef } from 'react';
import audit from '../assets/Content/audit.jpeg';
import ba from '../assets/Content/ba.jpeg';
import bk from '../assets/Content/bk.jpeg';
import fl from '../assets/Content/fl.jpeg';
import fr from '../assets/Content/fr.jpeg';
import payroll from '../assets/Content/payroll.jpeg';
import st from '../assets/Content/st.jpeg';
import tax from '../assets/Content/taxx.jpeg';
import vCFO from '../assets/Content/vcfo.jpg';
import zimra from '../assets/Content/zimra.jpeg';

const CustomRightArrow = ({ onClick }) => {
  const bgColor = useColorModeValue("#E67E22", "#E67E22");

  return (
    <Button
      onClick={onClick}
      position="absolute"
      right={0}
      top="50%"
      transform="translateY(-50%)"
      bg={bgColor}
      _hover={{ bg: "#F39C12" }}
      color="white"
      borderRadius="50%"
      p="10px"
    >
      →
    </Button>
  );
};

const CustomLeftArrow = ({ onClick }) => {
  const bgColor = useColorModeValue("#E67E22", "#E67E22");

  return (
    <Button
      onClick={onClick}
      position="absolute"
      left={0}
      top="50%"
      transform="translateY(-50%)"
      bg={bgColor}
      _hover={{ bg: "#F39C12" }}
      color="white"
      borderRadius="50%"
      p="10px"
    >
      ←
    </Button>
  );
};


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

const ServiceCard = ({ title, image, items}) => (
  <Box p={4} paddingBottom={6}>
    <Center py={6}>
      <Box
        maxW={'85%'}
        w={'full'}
        bg={useColorModeValue('white')}
        boxShadow={'0 4px 6px rgba(0, 0, 0, 0.1)'}
        rounded={'md'}
        overflow={'hidden'}
        p={4}
      >
        <Stack textAlign={'center'} p={6} color={useColorModeValue('gray.800', 'white')} align={'center'}>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <img src={image} alt={title} style={{ borderRadius: '8px', width: '150px', height: '150px' }} />
          </Stack>
          <Text fontSize={'2xl'} fontWeight={700} bg={useColorModeValue("white")} p={2} px={3} color={"#E67E22"} rounded={'full'}>
            {title}
          </Text>
        </Stack>
        <Box bg={useColorModeValue('gray.50')} px={6}>
          <List fontSize={'xl'} color={"#111111"} spacing={3} marginBottom={5}>
            {items.map((item, index) => (
              <ListItem key={index}>
                <ListIcon as={CheckIcon} color="#E67E22"/>
                {item}
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Center>
  </Box>
);

const Service = forwardRef(({ deviceType }, ref) => (
  <Box p={4} ref={ref}>
    <Stack spacing={4} as={Container} maxW={"90%"} textAlign={"center"}>
      <Heading color={"#E67E22"} fontSize={{ base: "3xl", sm: "4xl" }} fontWeight={"bold"}>
        Our Services
      </Heading>
      <Text color={"#111111"}  fontSize={{ base: "lg", sm: "xl" }}>
        We offer a full suite of professional accounting and financial management services to 
        support sustainable business growth — whether you're operating in Zimbabwe or managing a business remotely from abroad.
      </Text>
    </Stack>
    <Container maxW={"90%"} mt={5}>
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
          title="Financial Reporting"
          image={fr}
          items={[
            'Accurate financial statements',
            'Timely financial reports',
            'Decision-support & insights',
            'IFRS-compliant reporting',
            ]}
        />
        <ServiceCard
          title="Bookkeeping Services"
          image={bk}
          items={[
            'Daily transaction recording',
            'Bank & account reconciliations',
            'General ledger maintenance',
            'Audit-ready financials',
            ]}
        />
        <ServiceCard
          title="Compliance & Taxation"
          image={tax}
          items={[
            'ZIMRA registration',
            'VAT registration & filing',
            'Tax returns preparation',
            'Regulatory reporting',
            ]}
        />
        <ServiceCard
          title="ZIMRA Representation"
          image={zimra}
          items={[
            'Representation during audits',
            'Liaison with ZIMRA on behalf',
            'Issue & dispute resolution',
            'Expert support for queries',
            ]}
        />
        <ServiceCard
          title="Auditing Services"
          image={audit}
          items={[
            'Full statutory audits',
            'Independent financial reviews',
            'Internal control assessments',
            'Compliance verification',
            ]}
        />
        <ServiceCard
          title="Virtual CFO Services"
          image={vCFO}
          items={[
            'High-level financial strategy',
            'Budgeting, forecasting',
            'Business performance analysis',
            'Diaspora Remote CFO services',
            ]}
        />
        <ServiceCard
          title="Business Advisory"
          image={ba}
          items={[
            'Budget preparation',
            'Cash flow management',
            'Financial planning for startups',
            'Strategic advisory',
            ]}
        />
        <ServiceCard
          title="Payroll Services"
          image={payroll}
          items={[
            'Salary processing and payslips',
            'PAYE and NSSA calculations',
            'Statutory submissions',
            'Confidential, timely payroll',
            ]}
        />
        <ServiceCard
          title="Financial Literacy"
          image={fl}
          items={[
            'Non-finance professionals',
            'Basic finance concepts',
            'Budget & report understanding',
            'Team-wide financial awareness',
             ]}
        />
        <ServiceCard
          title="Software Training"
          image={st}
          items={[
            'QuickBooks & Pastel training',
            'Palladium accounting software',
            'Hands-on practical sessions',
            'Teams & individuals',
          ]}
        />
      </Carousel>
    </Container>
  </Box>
));

export default Service;
