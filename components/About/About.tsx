import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'

import * as Styled from './styles'

export default function About() {
  const smallWidth = useMediaQuery('(max-width: 700px)')

  return (
    <Styled.Container>
      <Typography variant='h5' component='h5' style={{
        width: smallWidth ? '90%' : '80%', 
        fontWeight: 'bold',
        marginBottom: smallWidth ? '30px' : ''
      }}>Quem somos? Lorem ipsum libero habitant himenaeos quisque placerat himenaeos dapibus, vel volutpat nibh orci cras ac auctor, commodo dapibus aliquam condimentum himenaeos vulputate tellus. nulla nam curae dapibus est mauris condimentum donec integer feugiat maecenas ut, ultricies id libero porta semper neque aptent curabitur habitant. luctus </Typography>
      
      <Styled.TextAlignContainer>
        <Typography variant='h5' component='h5' style={{
          width: smallWidth ? '90%' : '80%',
          fontWeight: 'lighter', 
          fontStyle: 'italic'
        }}>"Com grandes poderes, há grandes responsavilidades"</Typography>
        
        <Typography variant='h5' component='h5' style={{
          width: '80%', 
          fontWeight: 'lighter', 
          letterSpacing: '4px', 
          marginTop: '10px'
        }}>- Miranha</Typography>
      </Styled.TextAlignContainer>
    </Styled.Container>
  )
}