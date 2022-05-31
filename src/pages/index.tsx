import type { GetStaticProps, NextPage } from 'next';
import axios from '../services/api';

import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  Image,
  List,
  ListItem,
  ListIcon,
  Icon,
  HStack,
  VStack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Slider } from '../components/Slider';
import { StarIcon } from '@chakra-ui/icons';
import { AxiosResponse } from 'axios';
import { ActivityOptions } from '../components/ActivityOptions';

type TopCitiesData = {
  name: string;
  country: string;
};

type ContinentData = {
  id: string;
  name: string;
  description: string;
  brief: string;
  countries: number;
  languages: number;
  amountTopCities: number;
  keyword: string;
  topCities: TopCitiesData;
  url: string;
};

interface HomeProps {
  data: ContinentData[];
}

const Home: NextPage<HomeProps> = ({ data }) => {
  const desktopVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box pb={6}>
      <Header />
      <Banner backgroundUrl='./images/background.jpg'>
        <Flex maxW={{ lg: '960px' }} mx={{ md: 'auto' }}>
          <Stack spacing={{ base: 2, lg: 5 }} maxWidth={{ lg: '525px' }}>
            <Heading
              color='brandLight.50'
              fontWeight='medium'
              fontSize={{ base: 'xl', lg: '4xl' }}
              lineHeight='short'
            >
              5 Continentes,
              <br />
              infinitas possibilidades.
            </Heading>
            <Text
              color='brandLight.300'
              fontSize={{ base: 'sm', lg: 'lg' }}
              lineHeight='short'
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Stack>
          {desktopVersion && (
            <Image
              src='./images/airplane.svg'
              alt='Yellow airplane departuring and clouds'
              maxW='250px'
              ml={12}
            />
          )}
        </Flex>
      </Banner>
      <Box maxW='1160px' mx='auto'>
        <Flex
          pt={9}
          pb={5}
          maxW={{ base: '300px', md: '100%' }}
          mx='auto'
          direction='column'
          align='center'
        >
          <ActivityOptions />
          <Divider width='60px' my={4} />
          <Text fontWeight='medium' fontSize={{ md: '2xl', lg: '4xl' }}>
            Vamos nessa?
          </Text>
          <Text fontWeight='medium' fontSize={{ lg: '4xl' }}>
            Então escolha seu continente
          </Text>
        </Flex>
        <Slider data={data} />
      </Box>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: response }: AxiosResponse<ContinentData[]> = await axios(
    '/continents'
  );

  const data = response.map((continent) => {
    return {
      ...continent,
      url: `https://source.unsplash.com/random/640x480/?${continent.keyword}`,
    };
  });

  return {
    props: { data },
    revalidate: 60 * 60, //1 hour
  };
};

export default Home;
