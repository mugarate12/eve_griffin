import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: center;
  justify-content: center;
  justify-items: center;
`

export const CenterElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
