import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { SliderContent } from './SliderContent';

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

interface SliderProps {
  data: SliderContentData[];
}

export function Slider({ data: sliderContents }: SliderProps) {
  return (
    <Box height={{ base: '250px', sm: '350px', md: '450px' }}>
      <Swiper modules={[Navigation, Pagination]} navigation pagination>
        {sliderContents.map((sliderContent) => {
          return (
            <SwiperSlide key={sliderContent.id}>
              <SliderContent slideContent={sliderContent} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
