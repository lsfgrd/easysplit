import { Avatar, Box, Flex, Heading } from '@chakra-ui/react';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  return (
    <Flex
      border="1px solid"
      borderColor="brand"
      m={1}
      justifyContent="space-between"
    >
      <Heading>easysplit</Heading>
      <LanguageSelector />
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
    </Flex>
  );
};

export default Header;
