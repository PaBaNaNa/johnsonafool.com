import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import Image from 'next/image';
import NextLink from 'next/link';

import { IGridItemProps } from '@/types';

export const GridItem = ({
  children,
  href,
  title,
  thumbnail,
}: IGridItemProps) => (
  <Box w='100%' textAlign='center'>
    <LinkBox cursor='pointer'>
      <Image
        src={thumbnail}
        alt={title}
        className='grid-item-thumbnail'
        placeholder='blur'
        loading='lazy'
      />
      <LinkOverlay href={href} target='_blank'>
        <Text mt={5} color='blue' as='u'>
          {title}
        </Text>
      </LinkOverlay>
      <Text mt={5} fontSize={14}>
        {children}
      </Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
}: IGridItemProps) => (
  <Box w='100%' textAlign='center'>
    <NextLink href={`/works/${id}`} passHref scroll={false}>
      <LinkBox cursor='pointer'>
        <Image
          src={thumbnail}
          alt={title}
          className='grid-item-thumbnail'
          placeholder='blur'
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
