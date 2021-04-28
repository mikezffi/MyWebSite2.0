import styles from './styles.module.scss';

export function Profile() {
  return(
    <div className={styles.wrapper}>
      <div>
      <h1>Michael Zuffi</h1>
      <h3>Front-end Developer<span>_</span></h3>
      </div>
      <p>Hello, feel free to call me Mike, I like to code and create awesome things.</p>
    </div>
  );
}