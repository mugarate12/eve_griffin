import styled from 'styled-components'

interface ImageDiv {
  imgURL: string;
}

export const Div = styled.div<ImageDiv>`
  position: fixed;
  z-index: -999;

  width: 100%;
  height: 100vh;

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.imgURL});
`