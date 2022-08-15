import { Heading } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import ExpenseList from '../organisms/ExpenseList';
import ExpenseModal from '../organisms/ExpenseModal';

const HomeTemplate = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Heading as="h2">{t('welcomeTo')}</Heading>
      <ExpenseModal />
      <ExpenseList />
    </>
  );
};

export default HomeTemplate;
