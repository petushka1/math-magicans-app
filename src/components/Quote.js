import React from 'react';
import styles from './Quote.module.css';

const Quote = () => {
  return (
    <>
    <main className={styles.wrapper}>
      <p>“As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality.”</p>
      <span className={styles.name}>-Albert Einstein</span>
    </main>
    </>
  );
}

export default Quote;
