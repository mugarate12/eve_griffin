import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import styles from './Apresentation.module.css'

export default function Apresentation() {
  const smallWidth = useMediaQuery('(max-width: 700px)')

  return (
    <div className={styles.content}>
      <span></span>
      
      <div className={styles.centerElementsContainer}>
        <Typography variant='h3' component='h1' style={{
          width: '90%',

          color: 'black',
          fontWeight: 'bold',
          letterSpacing: '3px',
          textAlign: smallWidth ? 'center' : 'left'
        }}>O melhor da moda streetwear perto de você!</Typography>

        <IconButton aria-label='ver mais'>
          <ExpandMoreIcon fontSize='large'/>
        </IconButton>
      </div>
    </div>
  )
}