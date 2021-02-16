import { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children: ReactNode
}

export const siteTitle = 'Eve Griffin'

export default function Layout({
  children
}: Props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <meta
          name="O melhor da moda streetwear num só lugar"
          content="meu conteúdo"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      { children }
    </>
  )
}