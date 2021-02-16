import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: center;
  justify-content: center;
  justify-items: center;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

export const CenterElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    width: 80%;
  }
`
