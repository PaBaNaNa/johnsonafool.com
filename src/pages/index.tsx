import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  List,
  SimpleGrid,
} from '@chakra-ui/react';
import axios from 'axios';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Layout from '@/components/layout/Layout';
import {
  BioSection,
  BioYear,
  GridItem,
  Paragraph,
  Section,
} from '@/components/ui';

import { IRandomQuote } from '@/types';

import {
  island,
  johnson,
  kharkiv,
  linebot,
  medical,
  netflix,
  socket,
  syria,
  tat,
  track,
  travel,
  web,
  welcome,
  workshop,
} from '~/images';

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

const Home = () => {
  const { t } = useTranslation('common');
  const [quotes, setQuotes] = useState<any>();
  const [randomQuote, setRandomQuote] = useState<IRandomQuote>({});
  const [first, setFirst] = useState(true);

  useEffect(() => {
    axios.get('https://type.fit/api/quotes').then((response) => {
      const quotes = response.data;
      setQuotes(quotes);
    });
  }, []);

  const generate = () => {
    const randomNumber = Math.floor(Math.random() * 1643);
    const randomQuote = quotes[randomNumber];
    setRandomQuote(randomQuote);
    setFirst(false);
  };
  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title' mb={3}>
              Hungyuan Tseng
            </Heading>
            <p>"A Refreshing Rookie Currently @ MIT City Science Lab"</p>
            <p> {t('common.intro')}</p>
            <p> {t('common.about-title')}</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign='center'
          >
            <Box
              borderColor='whiteAlpha.800'
              borderWidth={2}
              borderStyle='solid'
              w='100px'
              h='100px'
              display='inline-block'
              borderRadius='full'
              overflow='hidden'
            >
              <ProfileImage
                src={johnson}
                alt='Profile image'
                borderRadius='full'
                width='100%'
                height='100%'
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading mb={5} as='h3'>
            Self Promotion
          </Heading>
          {/* MY TODO */}
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer
            feugiat scelerisque varius morbi enim nunc faucibus a. Diam volutpat
            commodo sed egestas egestas fringilla phasellus faucibus
            scelerisque. Ultricies lacus sed turpis tincidunt id aliquet risus
            feugiat. Convallis aenean et tortor at risus viverra adipiscing at.
          </Paragraph>
          {/*  */}
        </Section>

        <Section delay={0.2}>
          <Heading mb={5} as='h3'>
            Exprience
          </Heading>
          <BioSection>
            <BioYear>2020</BioYear>
            Internship at Taipei Medical University AI Bio Desing Center
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Winter School at Innusbruck University Bussiness School
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            President of programming club at school
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            MIT city science lab Taipei UROP project member
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading mb={5} as='h3'>
            City Science Project
          </Heading>
          <List></List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href='https://github.com/PaBaNaNa/netflix_project'
              title='Kharkiv the Perfect World 2D'
              thumbnail={kharkiv}
            >
              React, Redux, Redux-Saga, Babylon JS, Docker ...
            </GridItem>
            <GridItem
              href='https://github.com/PaBaNaNa/netflix_project'
              title='Kharkiv the Perfect World 3D'
              thumbnail={kharkiv}
            >
              React, Redux, Redux-Saga, Babylon JS, Docker ...
            </GridItem>
            <GridItem
              href='https://github.com/PaBaNaNa/socket_colab'
              title='Object Detection and Tracking'
              thumbnail={track}
            >
              Using collected data to simulate and improve traffic pheonenon
            </GridItem>
            <GridItem
              href='https://johnsonafool.github.io/hungyuan-homepage/'
              title='Taiwan Island'
              thumbnail={island}
            >
              React, Redux, DeckGL, Colyseus JS (WebSocket based framework),
            </GridItem>
          </SimpleGrid>
        </Section>

        <Section delay={0.3}>
          <Heading mb={5} as='h3'>
            Personel Side Project
          </Heading>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href='https://github.com/PaBaNaNa/netflix_project'
              title='Netflix Project'
              thumbnail={netflix}
            >
              React, Redux, Styled Components, FireBase
            </GridItem>
            <GridItem
              href='https://github.com/PaBaNaNa/socket_colab'
              title='Socket Realtime Editor'
              thumbnail={socket}
            >
              React, Node JS, Mongo DB
            </GridItem>
            <GridItem
              href='https://johnsonafool.github.io/hungyuan-homepage'
              title='johnsonafool.com'
              thumbnail={web}

              // textalgin='center'
            >
              Next JS, Three JS, Charka UI, Github Action
            </GridItem>
            <GridItem
              href='https://johnsonafool.github.io/hungyuan-homepage'
              title='Medical Image Segmentation'
              thumbnail={medical}
            >
              Python, Tensorflow, UNet, FastAPI, MLops
            </GridItem>
          </SimpleGrid>
        </Section>

        <Section delay={0.3}>
          <Heading mb={5} as='h3'>
            Programming Club Project
          </Heading>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href='https://line.me/R/ti/p/%40249zwxoo'
              title='Club Line Chat Bot Development'
              thumbnail={linebot}
            >
              Build a NPC chat bot via line Message API recieving 50+ users
            </GridItem>
            <GridItem
              href='https://play.google.com/store/apps/details?id=club.ntut.npc.tat&hl=zh_TW&gl=US&pli=1'
              title='Socket Realtime Editor'
              thumbnail={tat}
            >
              Google Docs App with React & Node JS
            </GridItem>
            <GridItem
              href='https://hi-in.facebook.com/NPC.OwO/posts/5901022323275410/'
              title='Event Final Picture'
              thumbnail={welcome}
            >
              Organize and host welcoming event with 70+ people in sucess.
            </GridItem>
            <GridItem
              href='https://hi-in.facebook.com/NPC.OwO/posts/5901022323275410/'
              title='Lecturer'
              thumbnail={welcome}
            >
              Lecturer in Club Course to ...
            </GridItem>
          </SimpleGrid>
        </Section>
        <Section delay={0.3}>
          <Heading mb={5} as='h3'>
            Others
          </Heading>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem title='Volunteer' thumbnail={syria}>
              Love to teach others, and help people in need.
            </GridItem>
            <GridItem title='Activity Participation' thumbnail={workshop}>
              Explore different filed and make friends.
            </GridItem>
            <GridItem title='Travel' thumbnail={travel}>
              Take trip around the world and meet different people.
            </GridItem>
          </SimpleGrid>
        </Section>

        <Box borderRadius='lg' mb={6} p={3} textAlign='center'>
          <Button onClick={generate} colorScheme='teal' mb={3}>
            Get Another Random Quote!
          </Button>

          <Heading mb={5}>
            {first
              ? 'I think it is possible for ordinary people to choose to be extraordinary'
              : randomQuote.text}
          </Heading>
          <div>- {first ? 'Elon Musk' : randomQuote?.author}</div>
        </Box>
      </Container>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Home;
