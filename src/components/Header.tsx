import styles from './Header.module.css';

import logoImg from '../assets/rocket.svg'

const Header = () => {
  return (
    <div className={styles.container} id='header-application'>
      <img 
        id='image-from-header'
        src={logoImg} 
        alt='Foguete' 
        className={styles.logoImg} 
      />
      <p  
        id='text-from-header' 
        className={styles.textHeader}
      >
        to<span>do</span>
      </p>
    </div>
  )
}

export {Header};
