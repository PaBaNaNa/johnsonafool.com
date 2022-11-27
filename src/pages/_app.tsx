import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import '@/styles/globals.css';

import Layout from '@/components/layout/Main';
import Chakra from '@/components/ui/chakra';
import Fonts from '@/components/ui/fonts';

if (typeof window !== `undefined`) {
  window.history.scrollRestoration = `manual`;
}

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== `undefined`) {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
}

export default appWithTranslation(MyApp);
