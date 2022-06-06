import { Flex, VStack, Text, Box } from '@chakra-ui/react';
import Link from 'next/link';

type TopCitiesData = {
  name: string;
  country: string;
};

type SliderContentData = {
  id: string;
  name: string;
  brief: string;
  topCities: TopCitiesData;
  url: string;
};

interface SliderContent {
  slideContent: SliderContentData;
}

export function SliderContent({ slideContent }: SliderContent) {
  return (
    <Flex
      align='center'
      justify='center'
      h='100%'
      direction='column'
      px={12}
      backgroundImage={`url('${slideContent.url}')`}
      backgroundSize='cover'
      backgroundRepeat='no-repeat'
      position='relative'
    >
      <Box
        backgroundColor='rgba(0,0,0,0.6)'
        w='100%'
        position='absolute'
        top='0'
        bottom='0'
        left='0'
        right='0'
      />
      <VStack spacing={2} zIndex='1'>
        <Link href={`/continents/${slideContent.id}`} passHref>
          <Text
            as='a'
            fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
            fontWeight='bold'
            color='brandLight.50'
          >
            {slideContent.name}
          </Text>
        </Link>
        <Text
          fontSize={{ base: 'sm', md: 'lg', lg: '2xl' }}
          fontWeight='bold'
          textAlign='center'
          color='brandLight.300'
        >
          {slideContent.brief}
        </Text>
      </VStack>
    </Flex>
  );
}
