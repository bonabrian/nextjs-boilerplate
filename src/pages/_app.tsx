import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import defaultSeoConfig from 'next-seo.config'

import { Chakra } from '@/shared/components'
import { MainLayout } from '@/shared/layouts'
import type { NextPageWithLayout } from '@/shared/types'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>)
  return (
    <Chakra>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...defaultSeoConfig} />
      {getLayout(<Component {...pageProps} />)}
    </Chakra>
  )
}
