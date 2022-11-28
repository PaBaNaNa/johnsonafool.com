import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import Image from 'next/image';

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
        width={300}
        height={250}
        className='grid-item-thumbnail'
        placeholder='blur'
        loading='lazy'
      />
      <LinkOverlay href={href} target='_blank'>
        <Text mt={5} color='green' as='u'>
          {title}
        </Text>
      </LinkOverlay>
      <Text mt={5} fontSize={14}>
        {children}
      </Text>
    </LinkBox>
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
