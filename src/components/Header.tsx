import { useRouter } from 'next/router';

import Link from 'next/link';
import { Flex, Image } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

interface HeaderProps {
  enableNav?: boolean;
}

export function Header({ enableNav = false }: HeaderProps) {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <Flex
      as='header'
      minHeight='50px'
      align='center'
      justify='center'
      maxW='1160px'
      mx='auto'
      px={4}
      py={4}
    >
      {enableNav && (
        <ChevronLeftIcon mr='auto' boxSize='30px' onClick={goBack} />
      )}

      <Link href='/' passHref>
        <Image
          src='/images/logo.svg'
          alt='Logo Yellow Airplane Departuring and Clouds'
          maxHeight={['20px', '40px', '50px']}
          mr={enableNav ? 'auto' : '0'}
        />
      </Link>
    </Flex>
  );
}
