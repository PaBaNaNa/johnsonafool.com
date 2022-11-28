import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { IoLogoGithub, IoLogoLinkedin, IoLogoMedium } from 'react-icons/io5';

import ThemeToggleButton from './theme-toggle-button';

import { ILinkItemProps } from '@/types';

const LinkItem = ({
  href,
  path,
  target,
  children,
  ...props
}: ILinkItemProps) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props: any) => {
  const { path } = props;
  const router = useRouter();

  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.md'
        flexWrap='wrap'
        textAlign='center'
        justifyContent='space-between'
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href='/works' path={path}>
            {/* Homepage */}
          </LinkItem>
          <LinkItem href='/works' path={path}>
            {/* Works */}
          </LinkItem>
          {/* TODO: substitue this link with like anohter netlify app? */}
          <LinkItem href='/posts' path={path}>
            {/* Posts */}
          </LinkItem>
          <LinkItem href='https://uses.craftz.dog/'></LinkItem>
          <LinkItem
            target='_blank'
            href='https://github.com/johnsonafool'
            path={path}
            display='inline-flex'
            alignItems='center'
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Github
          </LinkItem>
          <LinkItem
            target='_blank'
            href='https://www.linkedin.com/in/hungyuan'
            path={path}
            display='inline-flex'
            alignItems='center'
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoLinkedin />
            Linkedin
          </LinkItem>

          <LinkItem
            target='_blank'
            href='https://medium.com/@good_orchid_elephant_483'
            path={path}
            display='inline-flex'
            alignItems='center'
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoMedium />
            Tech Blog (See You Soon!)
          </LinkItem>
          <NextLink href='/' locale={router.locale === 'es' ? 'en' : 'es'}>
            <Button colorScheme='teal' size='xs'>
              {router.locale === 'es' ? 'EN' : '中'}
            </Button>
          </NextLink>
        </Stack>

        <Box flex={1} alignItems='right'>
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id='navbar-menu'>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                aria-label='Options'
              />
              <MenuList>
                <NextLink href='/' passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href='/works' passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href='/posts' passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>

                <MenuItem as={Link} href='https://github.com/johnsonafool'>
                  Github
                </MenuItem>
                <MenuItem
                  as={Link}
                  href='https://www.linkedin.com/in/hungyuan-tseng-1969621b2'
                >
                  Linkedin
                </MenuItem>
                <MenuItem
                  as={Link}
                  href='https://medium.com/@good_orchid_elephant_483'
                >
                  Medium
                </MenuItem>
                <NextLink
                  href='/'
                  locale={router.locale === 'es' ? 'en' : 'es'} // TODO: responsive in mobile
                  passHref
                >
                  <MenuItem as={Link}>
                    <Button colorScheme='teal' size='sm'>
                      {router.locale === 'es' ? 'English' : 'Español'}
                    </Button>
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
