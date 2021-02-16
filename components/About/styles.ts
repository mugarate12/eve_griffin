import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

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
`

export const TextAlignContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`