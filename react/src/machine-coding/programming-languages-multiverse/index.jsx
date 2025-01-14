import React from 'react';
import styles from './styles.module.css'; // Importing CSS classes from styles.module.css
import languagesData from './languagesData';

function LanguageInfo({ name, year, creator, usecase }) {
  return (
    <div className={styles.languageCard}>
      <h2 className={styles.languageName}>{name}</h2>
      <p className={styles.info}>Year of Start: {year}</p>
      <p className={styles.info}>Creator: {creator}</p>
      <p className={styles.info}>Use Case: {usecase}</p>
    </div>
  );
}

function ProgrammingLanguageMultiverse() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.heading} ${styles.rainbowPulseAnimation}`}>Programming Language Multiverse</h1>
      <div className={styles.languageList}>
        {languagesData.map((language, index) => (
          <LanguageInfo key={index} {...language} />
        ))}
      </div>
    </div>
  );
}

export default ProgrammingLanguageMultiverse;
