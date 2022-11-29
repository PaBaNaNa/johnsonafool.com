import { Box } from '@chakra-ui/react';

const Footer = () => {
  // const [likeNum, setLikeNum] = useState(11);
  // const { t } = useTranslation();

  return (
    <>
      <Box textAlign='center' opacity={0.8} fontSize='sm'>
        {/* &copy; {new Date().getFullYear()} {t('common.footer')} */}
      </Box>
      {/* <Box textAlign='center' opacity={0.8} fontSize='sm'>
        If you like my site, please like it 😇
      </Box>
      <Box textAlign='center' opacity={0.8} fontSize='sm' mt='2'>
        current like number: {likeNum}
      </Box>
      <Box textAlign='center' opacity={0.8} fontSize='sm'>
        <Button
          size='sm'
          mt='2'
          onClick={() => {
            setLikeNum(likeNum + 1);
          }}
        >
          like it
        </Button>
      </Box> */}
    </>
  );
};

export default Footer;
