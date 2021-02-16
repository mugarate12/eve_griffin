import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: auto;

  padding-left: 50px;
  padding-right: 50px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-content: center;
  justify-items: center;

  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: #908686;

  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #908686;

  @media (max-width: 700px) {
    padding-top: 50px;
    padding-bottom: 50px;

    grid-template-columns: 1fr;
  }
`

export const TextAlignContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`