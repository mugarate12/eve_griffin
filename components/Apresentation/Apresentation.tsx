import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import * as Styled from './styles'

export default function Apresentation() {
  return (
    <Styled.Content>
      <span></span>
      
      <Styled.CenterElementsContainer>
        <Typography variant='h3' component='h1' style={{
          width: '90%',

          color: 'black',
          fontWeight: 'bold',
          letterSpacing: '3px'
        }}>O melhor da moda streetwear perto de você!</Typography>

        <IconButton aria-label='ver mais'>
          <ExpandMoreIcon fontSize='large'/>
        </IconButton>
      </Styled.CenterElementsContainer>
    </Styled.Content>
  )
}