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
  Docker,
  Fastapi,
  Git,
  Graphql,
  Linux,
  Mongo,
  Mysql,
  Next,
  React,
  Socketio,
  Tailwind,
  Tensorflow,
  Threejs,
} from '~/icons';
import {
  car,
  island,
  johnson,
  kharkiv,
  kharkiv_2d,
  lecture,
  linebot,
  medical,
  netflix,
  socket,
  syria,
  taichi,
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
              {t('common.name')}
            </Heading>
            <p>"A Refreshing Rookie Currently @ MIT City Science Lab"</p>
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
            {/* Personel Introduction */}
            {t('common.pi')}
          </Heading>
          {/* MY TODO */}
          <p>
            <b> {t('pi.education-1')}:</b> National Taipei University of
            Technology (Taiepi Tech)
          </p>
          <b>{t('pi.current-1')}:</b> Bachelor Degree & Junior Year
          <p>
            <b>{t('pi.main-skills-1')}:</b> C, C#, Python, TypeScript, SQL
            (Database)
          </p>
          <p>
            <b>{t('pi.tech')}:</b>
          </p>
          <Paragraph className='m-3 flex bg-slate-50'>
            <Docker className='m-3 text-7xl' />{' '}
            <Fastapi className='m-3 text-7xl' />{' '}
            <Git className='m-3 text-7xl' />{' '}
            <Graphql className='m-3 text-7xl' />
            <Linux className='m-3 text-7xl' />
          </Paragraph>
          <Paragraph className='m-3 flex bg-slate-50'>
            <Mongo className='m-3 text-7xl' />
            <Mysql className='m-3 text-7xl' />
            <Next className='m-3 text-7xl' />
            <React className='m-3 text-7xl' />
            <Threejs className='m-3 text-7xl' />
          </Paragraph>
          <Paragraph className='m-3 flex bg-gray-50 '>
            <Socketio className='m-3 text-7xl' />
            <Tailwind className='m-3 text-7xl' />
            <Tensorflow className='m-3 text-7xl' />
          </Paragraph>
        </Section>
        <Section delay={0.1}>
          <Heading mb={5} as='h3'>
            {t('common.sp')}
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
            {t('common.exprience')}
          </Heading>
          <BioSection>
            <BioYear>2020 summmer</BioYear>
            Internship at Taipei Medical University AI Bio Desing Center
          </BioSection>
          <BioSection>
            <BioYear>2022 winter</BioYear>
            Winter School at Innusbruck University Bussiness School
          </BioSection>

          <BioSection>
            <BioYear>2022 spring</BioYear>Appworks school software developer
            trainee
          </BioSection>
          <BioSection>
            <BioYear>2022 summer</BioYear>OpenHCI event as technical and
            software teaching assistant
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            MIT City Science Lab @ Taipei UROP project member
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            President of programming club at school
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading mb={5} as='h3'>
            {/* City Science Project */}
            {t('common.csl')}
          </Heading>
          <List></List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href='https://incandescent-stardust-141f3a.netlify.app/posts/kharkiv'
              title='Kharkiv the Perfect World 2D'
              thumbnail={kharkiv_2d}
            >
              React, Redux, Redux Saga, DeckGL, Django, Docker
            </GridItem>
            <GridItem
              href='https://incandescent-stardust-141f3a.netlify.app/posts/kharkiv' // TODO add netfliy intro here
              title='Kharkiv the Perfect World 3D'
              thumbnail={kharkiv}
            >
              React, Redux, Redux Saga, Babylon.js, Docker
            </GridItem>
            <GridItem
              href='https://www.inside.com.tw/article/28677-taiwan-hitcon-peace-2022'
              title='Object Detection and Tracking'
              thumbnail={track}
            >
              Fastapi, GraphQL, Tensorflow, Algorithm
            </GridItem>
            <GridItem href='coming' title='Taiwan Island' thumbnail={island}>
              React, Redux, DeckGL, Socket.io, Colyseus.js, Styled Components
            </GridItem>
          </SimpleGrid>
        </Section>

        <Section delay={0.3}>
          <Heading mb={5} as='h3'>
            {/* Personel Side Project */}
            {t('common.psp')}
          </Heading>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href='https://github.com/PaBaNaNa/netflix_project' // TODO add netfliy intro here ?
              title='Netflix Project'
              thumbnail={netflix}
            >
              React, Redux, Redux Thunk , Styled Components, FireBase
            </GridItem>
            <GridItem
              href='https://github.com/PaBaNaNa/socket_colab'
              title='Socket Realtime Editor'
              thumbnail={socket}
            >
              React, Node JS, Socket.io, Mongo DB
            </GridItem>
            <GridItem
              href='https://github.com/PaBaNaNa/johnsonafool.com'
              title='johnsonafool.com'
              thumbnail={web}

              // textalgin='center'
            >
              Next JS, Three JS, Github Action, Tailwind CSS
            </GridItem>
            <GridItem
              href='coming'
              title='Personel Web Porttfolio'
              thumbnail={web}
            >
              Personel Web Porttfolio
            </GridItem>
            <GridItem href='coming' title='Arduino' thumbnail={car}>
              C, Arduino
            </GridItem>
            <GridItem
              href='coming'
              title='Medical Image Segmentation'
              thumbnail={medical}
            >
              Python, Tensorflow, UNet, FastAPI, MLops
            </GridItem>
          </SimpleGrid>
        </Section>

        <Section delay={0.3}>
          <Heading mb={5} as='h3'>
            {/* Programming Club Project */}
            {t('common.pcp')}
          </Heading>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href='https://www.google.com/search?q=%E3%80%90%E5%9F%BA%E7%A4%8E%E8%AA%B2%E7%A8%8B%E3%80%91Python+%E5%9F%BA%E7%A4%8E%E7%A4%BE%E8%AA%B2%EF%BC%88%E4%B8%80%EF%BC%89+%E5%90%8C%E5%AD%B8%E5%80%91%E6%9C%9F%E5%BE%85%E5%B7%B2%E4%B9%85%E7%9A%84+Python+%E7%A4%BE%E8%AA%B2%E7%B5%82%E6%96%BC%E4%BE%86%E5%95%A6%EF%BD%9E+%E6%B2%92%E6%9C%89%E5%9F%BA%E7%A4%8E%E4%B9%9F%E4%B8%8D%E8%A6%81%E6%93%94%E5%BF%83%EF%BC%8C+%E9%80%99%E6%AC%A1%E7%9A%84%E8%AA%B2%E7%A8%8B%E6%9C%83%E5%BE%9E%E9%9B%B6%E6%95%99%E8%B5%B7%EF%BC%8C+%E8%AE%93%E5%A4%A7%E5%AE%B6%E8%83%BD%E5%A4%A0%E4%B8%80%E6%AD%A5%E4%B8%80%E6%AD%A5%E9%AB%94%E9%A9%97%E5%AF%AB%E7%A8%8B%E5%BC%8F%E7%9A%84%E6%A8%82%E8%B6%A3%EF%BC%8C+%E5%B8%8C%E6%9C%9B%E5%A4%A7%E5%AE%B6%E9%83%BD%E8%83%BD%E7%8E%A9%E7%9A%84%E9%96%8B%E5%BF%83%E5%96%94%EF%BC%9D%EF%BC%B5%EF%BC%9D+%E5%8F%A6%E5%A4%96%E6%95%99%E5%AD%B8%E6%9C%9F%E9%96%93%E4%B9%9F%E6%9C%83%E7%A9%BF%E6%8F%92%E5%AF%A6%E4%BD%9C%E7%B7%B4%E7%BF%92%EF%BC%8C+%E8%AE%93%E4%BD%A0%E9%99%A4%E4%BA%86%E8%81%BD%E8%AA%B2%E4%BB%A5%E5%A4%96%EF%BC%8C+%E9%82%84%E5%8F%AF%E4%BB%A5%E5%8B%95%E6%89%8B%E5%AF%AB%E7%A8%8B%E5%BC%8F%E5%91%A6%EF%BC%81+%E3%80%90%E8%AA%B2%E7%A8%8B%E4%BB%8B%E7%B4%B9%E3%80%91+%E2%9C%85Python+%E7%92%B0%E5%A2%83%E5%BB%BA%E7%BD%AE+%E2%9C%85%E5%9F%BA%E7%A4%8E%E8%AA%9E%E6%B3%95+%E2%9C%85%E9%80%B2%E9%9A%8E%E7%B7%B4%E7%BF%92&oq=%E3%80%90%E5%9F%BA%E7%A4%8E%E8%AA%B2%E7%A8%8B%E3%80%91Python+%E5%9F%BA%E7%A4%8E%E7%A4%BE%E8%AA%B2%EF%BC%88%E4%B8%80%EF%BC%89+%E5%90%8C%E5%AD%B8%E5%80%91%E6%9C%9F%E5%BE%85%E5%B7%B2%E4%B9%85%E7%9A%84+Python+%E7%A4%BE%E8%AA%B2%E7%B5%82%E6%96%BC%E4%BE%86%E5%95%A6%EF%BD%9E+%E6%B2%92%E6%9C%89%E5%9F%BA%E7%A4%8E%E4%B9%9F%E4%B8%8D%E8%A6%81%E6%93%94%E5%BF%83%EF%BC%8C+%E9%80%99%E6%AC%A1%E7%9A%84%E8%AA%B2%E7%A8%8B%E6%9C%83%E5%BE%9E%E9%9B%B6%E6%95%99%E8%B5%B7%EF%BC%8C+%E8%AE%93%E5%A4%A7%E5%AE%B6%E8%83%BD%E5%A4%A0%E4%B8%80%E6%AD%A5%E4%B8%80%E6%AD%A5%E9%AB%94%E9%A9%97%E5%AF%AB%E7%A8%8B%E5%BC%8F%E7%9A%84%E6%A8%82%E8%B6%A3%EF%BC%8C+%E5%B8%8C%E6%9C%9B%E5%A4%A7%E5%AE%B6%E9%83%BD%E8%83%BD%E7%8E%A9%E7%9A%84%E9%96%8B%E5%BF%83%E5%96%94%EF%BC%9D%EF%BC%B5%EF%BC%9D+%E5%8F%A6%E5%A4%96%E6%95%99%E5%AD%B8%E6%9C%9F%E9%96%93%E4%B9%9F%E6%9C%83%E7%A9%BF%E6%8F%92%E5%AF%A6%E4%BD%9C%E7%B7%B4%E7%BF%92%EF%BC%8C+%E8%AE%93%E4%BD%A0%E9%99%A4%E4%BA%86%E8%81%BD%E8%AA%B2%E4%BB%A5%E5%A4%96%EF%BC%8C+%E9%82%84%E5%8F%AF%E4%BB%A5%E5%8B%95%E6%89%8B%E5%AF%AB%E7%A8%8B%E5%BC%8F%E5%91%A6%EF%BC%81+%E3%80%90%E8%AA%B2%E7%A8%8B%E4%BB%8B%E7%B4%B9%E3%80%91+%E2%9C%85Python+%E7%92%B0%E5%A2%83%E5%BB%BA%E7%BD%AE+%E2%9C%85%E5%9F%BA%E7%A4%8E%E8%AA%9E%E6%B3%95+%E2%9C%85%E9%80%B2%E9%9A%8E%E7%B7%B4%E7%BF%92&aqs=chrome..69i57.291j0j7&sourceid=chrome&ie=UTF-8'
              title='Lecturer'
              thumbnail={lecture}
            >
              Being Lecturer in Club Python Course
            </GridItem>
            <GridItem
              href='https://hi-in.facebook.com/NPC.OwO/posts/5901022323275410/'
              title='Event Final Picture'
              thumbnail={welcome}
            >
              Organize and host welcoming event with 70+ people in sucess
            </GridItem>
            <GridItem
              href='https://line.me/R/ti/p/%40249zwxoo'
              title='Club Line Chat Bot Development'
              thumbnail={linebot}
            >
              Django, Postgres SQL
            </GridItem>
          </SimpleGrid>
        </Section>
        <Section delay={0.3}>
          <Heading mb={5} as='h3'>
            {/* Others */}
            {t('common.others')}
          </Heading>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title='International Volunteer'
              thumbnail={syria}
              href='./coming'
            >
              Love to teach others, and help people in need.
            </GridItem>
            <GridItem
              title='Activity Participation'
              thumbnail={workshop}
              href='./coming'
            >
              Explore different filed and make friends.
            </GridItem>
            <GridItem
              title='Embrace Chanllenge and New Stuff'
              thumbnail={taichi}
              href='./coming'
            >
              Eager to learn new tech and share knowlege to others, especially
              in coding and programming.
            </GridItem>
            <GridItem title='Travel' thumbnail={travel} href='./coming'>
              Take trip around the world and meet different people.
            </GridItem>
          </SimpleGrid>
        </Section>

        <Box borderRadius='lg' mb={6} p={3} textAlign='center'>
          <Button onClick={generate} colorScheme='teal' mb={3}>
            {/* Get Another Random Quote! */}
            {t('common.random')}
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
