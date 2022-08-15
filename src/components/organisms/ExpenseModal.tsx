import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  useDisclosure,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Search from './Search';

const ExpenseModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation('common');

  return (
    <>
      <Button onClick={onOpen}>+ {t('expense')}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t('newExpense')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NumberInput defaultValue={0} precision={2}>
              <NumberInputField />

              <Search />
            </NumberInput>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ExpenseModal;
