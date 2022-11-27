import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';

import Footer from '@/components/ui/footer';
// import dynamic from 'next/dynamic'
import NavBar from '@/components/ui/navbar';

const Main = ({
  children,
  router,
}: {
  children: React.ReactNode;
  router: any;
}) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <title>Hungyuan Tseng Personel Profile</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW='container.md' pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
