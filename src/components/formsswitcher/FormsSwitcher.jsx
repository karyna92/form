import { useState, useEffect, useContext } from 'react';
import { ImQuotesLeft } from "react-icons/im";
import quotas from '../../constans/qutas';
import styles from '../../comons/styles/base.module.scss';
import ViewChangeContext from '../../contexts/SingedContext'; 

const FormsSwitcher = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  let {isLogged, setIsLogged } = useContext(ViewChangeContext); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotas.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []); 

  const changeHandler = () => {
    setIsLogged(isLogged=!isLogged);
  };

  return (
    <div className={styles.switcherContainer}>
      <div className={styles.icon}><ImQuotesLeft /></div>
      <h1 className={styles.quota}>{quotas[currentIndex]}</h1>
      <footer>
      <span>{isLogged && 'Not traveler yet?'}{!isLogged && 'Already a traveler ?'}</span>
        <button className={styles.switchBtn} onClick={changeHandler}>{isLogged && 'Sign up'}{!isLogged && 'Sign in'}</button>
      </footer>
    </div>
  );
};

export default FormsSwitcher;
