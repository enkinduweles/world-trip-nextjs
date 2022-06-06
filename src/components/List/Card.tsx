import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

type CardData = {
  name: string;
  country: string;
  codeFlag: string;
  cityImageUrl: string;
  flagImageUrl: string;
};

interface CardProps {
  cardData: CardData;
}

export function Card({ cardData }: CardProps) {
  return (
    <Box w='100%'>
      <Box
        backgroundImage={`url(${cardData.cityImageUrl})`}
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        backgroundAttachment='scroll'
        backgroundSize='cover'
        w='100%'
        h='173px'
      />
      <Flex
        alignItems='center'
        px={6}
        pt={5}
        pb={6}
        backgroundColor='white'
        borderLeft='1px'
        borderRight='1px'
        borderBottom='1px'
        borderColor='brandHighlightAlpha.50'
      >
        <Box>
          <Text fontSize='xl' fontWeight='600'>
            {cardData.name}
          </Text>
          <Text mt={3} color='brandDark.400'>
            {cardData.country}
          </Text>
        </Box>
        <Avatar size='sm' src={cardData.flagImageUrl} ml='auto' />
      </Flex>
    </Box>
  );
}
