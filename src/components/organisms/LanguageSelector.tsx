import { Box, ChakraProps } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Locales } from '../../types/locales';
import BrazilIcon from '../icons/flags/BrazilIcon';
import UnitedStatesIcon from '../icons/flags/UnitedStatesIcon';

const iconProps: ChakraProps = {
  cursor: 'pointer',
  _hover: {
    opacity: 0.8,
  },
};

const LanguageSelector = () => {
  const router = useRouter();

  const setLanguage = (locale: Locales) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale });
  };

  return (
    <Box>
      <BrazilIcon onClick={() => setLanguage('pt-BR')} {...iconProps} />
      <UnitedStatesIcon onClick={() => setLanguage('en')} {...iconProps} />
    </Box>
  );
};

export default LanguageSelector;
