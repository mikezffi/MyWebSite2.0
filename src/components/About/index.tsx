import styles from './styles.module.scss';

export function About() {
  return(
    <div className={styles.wrapper}>
      <div className={styles.tilt}>
        <div className={styles.content}>
              <h2>Hi, I'm mike</h2>

              
              <p>I'm a web developer and UI/UX specialist based in São Paulo, Brazil.</p>

              <p>Powered up with some great tools such as React, Typescript, SASS, Node.JS... I help people bring their ideas to life.</p>

              <p>I'm genuinely interested in technology in general, curious, and always improving my skills, new challenges are welcome.</p>

              <p>Hope we can create awesome and unique things together!</p>

              <p>You can reach me at mikeaazuffi@gmail.com. <a href="mailto: mikeaazuffi@gmail.com">e-mail me!</a></p>
        </div>
      </div>
    </div>
  );
}