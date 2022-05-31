import {
  Box,
  Stack,
  Heading,
  Text,
  Image,
  useBreakpointValue,
  Flex,
  BoxProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface BannerProps extends BoxProps {
  backgroundUrl?: string;
  children: ReactNode;
}

export function Banner({ backgroundUrl, children, ...rest }: BannerProps) {
  return (
    <Box
      backgroundImage={`url("${backgroundUrl}")`}
      px={4}
      py={7}
      {...rest}
      backgroundAttachment='fixed'
      backgroundSize='cover'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
    >
      {children}
    </Box>
  );
}
