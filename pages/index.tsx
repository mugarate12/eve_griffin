import Head from 'next/head'
import styled from 'styled-components'

import {
  Layout,
  ContainerImage,
  Apresentation,
  About
} from './../components'
import {
  Header
} from './../containers'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Eve Griffin</title>
      </Head>

      <Header />

      <ContainerImage imgURL='/img/image_example_2.jpg'/>

      <Apresentation />

      <About />
    </Layout>
  )
}