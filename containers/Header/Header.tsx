import Image from 'next/image'

import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Image 
        src='/img/eve_griffin_logo.png'
        width={60}
        height={60}
      />
    </header>
  )
}