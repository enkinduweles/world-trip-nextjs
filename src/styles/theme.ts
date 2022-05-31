import { extendTheme, ComponentSingleStyleConfig } from '@chakra-ui/react';

const Divider: ComponentSingleStyleConfig = {
  baseStyle: {
    borderColor: 'brandDark.700',
  },
};

const customTheme = {
  colors: {
    brandDark: {
      '700': '#47585b',
      '400': '#999999',
    },
    brandDarkAlpha: {
      '50': 'rgba(153,153,153,0.5)',
    },
    brandLight: {
      '50': '#f5f8fa',
      '300': '#DADADA',
    },
    brandHighlight: {
      '500': '#ffba08',
    },
    brandHighlightAlpha: {
      '50': 'rgba(255,186,8,0.5)',
    },
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'brandLight.50',
        color: 'brandDark.700',
      },
      '.swiper': {
        h: '100%',
      },
      '.swiper-button-next::after, .swiper-button-prev::after': {
        fontSize: ['lg'],
        color: 'brandHighlight.500',
      },
      '.swiper-pagination-bullet': {
        background: 'brandDark.400',
      },
      '.swiper-pagination-bullet-active': {
        background: 'brandHighlight.500',
      },
    },
  },
  components: {
    Divider,
  },
};

export const theme = extendTheme(customTheme);
