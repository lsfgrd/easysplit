import Header from '../organisms/Header';

interface FullProps {
  children: any;
}

const Full = ({ children }: FullProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Full;
