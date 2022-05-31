import { StarIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export function ActivityOptions() {
  const mediumVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  if (mediumVersion) {
    return (
      <Flex w='100%' justify='space-around'>
        <Flex direction='column' align='center'>
          <Image
            src='./images/cocktail.svg'
            alt='A Cocktail and limon on the rim of the glass'
            width={{ md: '65px', lg: '85px' }}
            height={{ md: '65px', lg: '85px' }}
          />
          <Text fontSize='2xl'>vida noturna</Text>
        </Flex>
        <Flex direction='column' align='center'>
          <Image
            src='./images/surf.svg'
            alt='A Cocktail and limon on the rim of the glass'
            width={{ md: '65px', lg: '85px' }}
            height={{ md: '65px', lg: '85px' }}
          />
          <Text fontSize='2xl'>praia</Text>
        </Flex>
        <Flex direction='column' align='center'>
          <Image
            src='./images/building.svg'
            alt='A Cocktail and limon on the rim of the glass'
            width={{ md: '65px', lg: '85px' }}
            height={{ md: '65px', lg: '85px' }}
          />
          <Text fontSize='2xl'>moderno</Text>
        </Flex>
        <Flex direction='column' align='center'>
          <Image
            src='./images/museum.svg'
            alt='A Cocktail and limon on the rim of the glass'
            width={{ md: '65px', lg: '85px' }}
            height={{ md: '65px', lg: '85px' }}
          />
          <Text fontSize='2xl'>clássico</Text>
        </Flex>
        <Flex direction='column' align='center'>
          <Image
            src='./images/earth.svg'
            alt='A Cocktail and limon on the rim of the glass'
            width={{ md: '65px', lg: '85px' }}
            height={{ md: '65px', lg: '85px' }}
          />
          <Text fontSize='2xl'>e mais...</Text>
        </Flex>
      </Flex>
    );
  }

  // dividir o return em Grid para layout mobile e Flex para layout Desktop
  return (
    <Grid maxW='275px' mx='auto' templateColumns='repeat(2, 1fr)' rowGap={6}>
      <GridItem>
        <Flex align='center' direction={{ md: 'column' }}>
          <Icon as={StarIcon} color='brandHighlight.500' mr={2} />
          vida noturna
        </Flex>
      </GridItem>

      <GridItem>
        <Flex align='center' justifyContent='flex-end'>
          <Icon as={StarIcon} color='brandHighlight.500' mr={2} />
          praia
        </Flex>
      </GridItem>
      <GridItem>
        <Flex align='center'>
          <Icon as={StarIcon} color='brandHighlight.500' mr={2} />
          moderno
        </Flex>
      </GridItem>
      <GridItem>
        <Flex align='center' justifyContent='flex-end'>
          <Icon as={StarIcon} color='brandHighlight.500' mr={2} />
          clássico
        </Flex>
      </GridItem>
      <GridItem colSpan={2}>
        <Flex align='center' justify='center'>
          <Icon as={StarIcon} color='brandHighlight.500' mr={2} />e mais...
        </Flex>
      </GridItem>
    </Grid>
  );
}
