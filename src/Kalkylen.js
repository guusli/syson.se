import React from 'react';
import classNames from 'classnames';
import styles from './Kalkylen.module.css';
export default () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <h2 className={styles.title}>Räkna ut din månadslön</h2>
        <div className={styles.inputs}>
          <div>
            <label className={styles.label}>Timpris</label>
            <input className={styles.input} />
          </div>
          <div>
            <label className={styles.label}>Procent av heltid</label>
            <input className={styles.input} />
          </div>
          <div>
            <label className={styles.label}>Sjukdagar / Övrig frånvaro</label>
            <input className={styles.input} />
          </div>
          <div>
            <label className={styles.label}>Övrigt</label>
            <input className={styles.input} />
            <label className={classNames(styles.label, styles.labelSmall)}>Telefon, tjänstebil, mm</label>
          </div>
          <div>
            <label className={styles.label}>Extra pensionsavsättning</label>
            <input className={styles.input} />
            <label className={classNames(styles.label, styles.labelSmall)}>Utöver 2600 kr</label>
          </div>
        </div>
      </div>
      <div className={styles.results}>
        <div className={classNames(styles.result, styles.first)}>
          <span className={styles.resultLabel}>2019 antal dagar</span>
          <span className={styles.resultValue}>253</span>
        </div>
        <div className={classNames(styles.result)}>
          <span className={styles.resultLabel}>Total månadspension</span>
          <span className={styles.resultValue}>2600</span>
        </div>
        <div className={classNames(styles.result, styles.highlight)}>
          <span className={styles.resultLabel}>Månadslön</span>
          <span className={styles.resultValue}>5 miljoner!</span>
        </div>
      </div>
    </div>
  );
};
