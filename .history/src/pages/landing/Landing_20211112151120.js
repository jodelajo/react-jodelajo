import styles from './Landing.module.css'
import Neon from '../../components/neon/Neon'
import EnterButton from '../../components/enterButton/EnterButton'
import LandingButton from '../../components/landingButton/LandingButton';


export default function Landing() {
    return (
        <main className={styles.landing}>
          <div className={styles.neon}>
          <Neon />
          </div>
        
          <LandingButton/>
          <div className={styles.enterButton}>
          
         
          </div>
        </main>
      );
}