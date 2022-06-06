import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { AxiosResponse } from 'axios';
import axios from '../../services/api';
import { ParsedUrlQuery } from 'querystring';

import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { List } from '../../components/List';

type TopCitiesData = {
  name: string;
  country: string;
  codeFlag: string;
  cityImageUrl: string;
  flagImageUrl: string;
};

type ContinentData = {
  id: string;
  name: string;
  description: string;
  brief: string;
  countries: number;
  languages: number;
  amountTopCities: number;
  topCities: TopCitiesData[];
  keyword: string;
  url: string;
};

interface RequestParams extends ParsedUrlQuery {
  slug: string;
}

interface ContinentAboutProps {
  data: ContinentData;
}

const ContinentAbout: NextPage<ContinentAboutProps> = ({ data }) => {
  return (
    <Box pb={6}>
      <Header enableNav />
      <Box as='main'>
        <Banner backgroundUrl={data.url} minH='250px' as='section'>
          <Flex justify='center' align='center' minH='inherit'>
            <Heading color='brandLight.50'>{data.name}</Heading>
          </Flex>
        </Banner>
        <Box
          pt={{ base: 6, md: 9, lg: 20 }}
          px={4}
          mb={8}
          as='section'
          maxW={{ md: '640px', lg: '960px' }}
          mx='auto'
        >
          <Stack
            spacing={{ base: 4, lg: '70px' }}
            direction={{ base: 'column', lg: 'row' }}
            mb={{ base: 8, lg: 20 }}
          >
            <Text maxW={{ lg: '550px' }} textAlign='justify'>
              {data.description}
            </Text>
            <Flex justify='space-between' flex={1}>
              <Box>
                <Text
                  fontSize='2xl'
                  color='brandHighlight.500'
                  fontWeight='600'
                >
                  {data.countries}
                </Text>
                <Text fontSize='lg'>países</Text>
              </Box>
              <Box>
                <Text
                  fontSize='2xl'
                  color='brandHighlight.500'
                  fontWeight='600'
                >
                  {data.languages}
                </Text>
                <Text fontSize='lg'>línguas</Text>
              </Box>
              <Box>
                <Text
                  fontSize='2xl'
                  color='brandHighlight.500'
                  fontWeight='600'
                >
                  {data.amountTopCities}
                </Text>
                <Text fontSize='lg'>cidades +100</Text>
              </Box>
            </Flex>
          </Stack>

          <Box>
            <Heading mb={5}>Cidade 100+</Heading>
            <List topCities={data.topCities} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: response }: AxiosResponse<ContinentData[]> = await axios(
    '/continents'
  );

  const paths = response.map((continent) => {
    return {
      params: {
        slug: continent.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as RequestParams;

  const { data: response }: AxiosResponse<ContinentData> = await axios(
    `/continents/${slug}`
  );

  const newTopCities = response.topCities.map((topCity) => {
    return {
      ...topCity,
      name: topCity.name.replace('-', ' '),
      cityImageUrl: `https://source.unsplash.com/random?${topCity.name},sightseeing,city`,
      flagImageUrl: `https://countryflagsapi.com/svg/${topCity.codeFlag}`,
    };
  });

  const data = {
    ...response,
    url: `https://source.unsplash.com/random?${response.keyword},city`,
    topCities: newTopCities,
  };

  return {
    props: { data },
    revalidate: 60 * 60, //1 hour
  };
};

export default ContinentAbout;
