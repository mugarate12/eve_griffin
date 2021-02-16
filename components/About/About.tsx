import Typography from '@material-ui/core/Typography'

import * as Styled from './styles'

export default function About() {
  return (
    <Styled.Container>
      <Typography variant='h5' component='h3' style={{width: '80%', fontWeight: 'bold'}}>Quem somos? Lorem ipsum libero habitant himenaeos quisque placerat himenaeos dapibus, vel volutpat nibh orci cras ac auctor, commodo dapibus aliquam condimentum himenaeos vulputate tellus. nulla nam curae dapibus est mauris condimentum donec integer feugiat maecenas ut, ultricies id libero porta semper neque aptent curabitur habitant. luctus </Typography>
      
      <Styled.TextAlignContainer>
        <Typography variant='h5' component='h3' style={{width: '80%', fontWeight: 'lighter', fontStyle: 'italic'}}>"Com grandes poderes, há grandes responsavilidades"</Typography>
        <Typography variant='h5' component='h3' style={{width: '80%', fontWeight: 'lighter', letterSpacing: '4px', marginTop: '10px'}}>- Miranha</Typography>
      </Styled.TextAlignContainer>
    </Styled.Container>
  )
}