import type { AppProps } from 'next/app'

import { Chakra } from '@/shared/components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Chakra>
      <Component {...pageProps} />
    </Chakra>
  )
}
