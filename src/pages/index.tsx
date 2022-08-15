import type { NextPage } from 'next';
import type { Locales } from '../types/locales';
import HomeTemplate from '../components/templates/HomeTemplate';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = () => {
  return <HomeTemplate />;
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
