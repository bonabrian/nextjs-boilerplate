import type { AppProps } from 'next/app'

import { Chakra } from '@/shared/components'
import { MainLayout } from '@/shared/layouts'
import type { NextPageWithLayout } from '@/shared/types'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>)
  return <Chakra>{getLayout(<Component {...pageProps} />)}</Chakra>
}
