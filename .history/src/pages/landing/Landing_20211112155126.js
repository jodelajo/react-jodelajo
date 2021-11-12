import styles from './Landing.module.css'
import Neon from '../../components/neon/Neon'
import EnterButton from '../../components/enterButton/EnterButton'
import LandingButton from '../../components/landingButton/LandingButton';


export default function Landing() {
    return (
        <main className={styles.landing}>
          <div className={styles.landingWrapper}>
          <div className={styles.neon}>
          <Neon />
          </div>
        
     
          <div className={styles.landingButton}>
          <LandingButton className={styles.test}/>
         
          </div>
          </div>
          
        </main>
      );
}