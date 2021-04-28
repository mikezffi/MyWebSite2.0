import styles from './styles.module.scss';

export function Background() {
  return(
      <section className={styles.starsWrapper}>
        <div className={styles.stars1}></div>
        <div className={styles.stars2}></div>
        <div className={styles.stars3}></div>
      </section>
  );
}