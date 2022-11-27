import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition';
  },
});

export const Section = ({
  children,
}: {
  children: React.ReactNode;
  delay: number;
}) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transitionDuration='0.8'
    mb={6}
  >
    {children}
  </StyledDiv>
);

export default Section;
