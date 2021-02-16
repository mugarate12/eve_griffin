import Image from 'next/image'

import * as Styled from './styles'

export default function Header() {
  return (
    <Styled.Container>
      <Image 
        src='/img/eve_griffin_logo.png'
        width={60}
        height={60}
      />
    </Styled.Container>
  )
}