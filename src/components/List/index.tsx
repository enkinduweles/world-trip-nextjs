import { Box, Stack, SimpleGrid } from '@chakra-ui/react';
import { Card } from './Card';

type TopCitiesData = {
  name: string;
  country: string;
  codeFlag: string;
  cityImageUrl: string;
  flagImageUrl: string;
};

interface ListProps {
  topCities: TopCitiesData[];
}

export function List({ topCities }: ListProps) {
  return (
    <SimpleGrid minChildWidth='256px' spacing={5} as='ul'>
      {topCities.map((topCity) => {
        return (
          <Card
            key={`${topCity.codeFlag}-${topCity.name}`}
            cardData={topCity}
          />
        );
      })}
    </SimpleGrid>
  );
}
