import { Box, Button, Container, Divider, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';

const NotFound = () => {
  return (
    <Container>
      <Heading as='h1' textAlign='center'>
        Page Not found 😢
      </Heading>
      <Divider my={6} />
      <Box my={6} textAlign='center'>
        <NextLink href='/' passHref>
          <Button colorScheme='teal'>Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
