import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//. styles
import styles from './Card.module.css';

//. assets
import DesktopDevider from '../../assets/desktopDevider.svg';
import MobileDevider from '../../assets/mobileDevider.svg';
import Dice from '../../assets/dice.svg';

export default function Card() {
  const [data, setData] = useState({ advice: '', id: '' });
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const json = await res.json();
    setData(json.slip);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      fetchData();
      setIsLoading(false);
    }, 2000);
  };

  return (
    <main className={styles.card}>
      <div className={styles.advice}>
        <span>advice # {data.id}</span>
        <AnimatePresence>
          {!isLoading && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'anticipate' }}
            >
              <span className='material-symbols-outlined'>format_quote</span>
              <span className={styles.adviceText}>{data.advice}</span>
              <span className='material-symbols-outlined'>format_quote</span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <img src={DesktopDevider} alt='' />
      <button
        onClick={handleClick}
        className={isLoading ? styles.disabled : ''}
      >
        <img src={Dice} alt='' />
      </button>
    </main>
  );
}
