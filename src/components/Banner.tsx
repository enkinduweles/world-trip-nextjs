import { ReactNode } from 'react';

import { Box, BoxProps } from '@chakra-ui/react';

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
