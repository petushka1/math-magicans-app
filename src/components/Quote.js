import React from 'react';
import styles from './Quote.module.css';

const Quote = () => {
  const text = '“As far as the laws of mathematics refer to reality, they are not certain, and as'
  + 'far as they are certain, they do not refer to reality.”';
  return (
    <>
      <main className={styles.wrapper}>
        <p>{text}</p>
        <span className={styles.name}>-Albert Einstein</span>
      </main>
    </>
  );
};

export default Quote;
