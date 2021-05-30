import styles from './styles.module.scss';

export function About() {
  return(
    <section id={"about"} className={styles.wrapper}>
      <div className={styles.tilt}>
        <div className={styles.content}>
          <div data-aos="fade-up">
              <h2>Hi, I'm mike</h2>

              
              <p>I'm a front-end and mobile developer based in São Paulo, Brasil.</p>

              <p>Powered up with some great tools such as Next.js, React Native, Typescript, Node.JS... I help people bring their ideas to life.</p>

              <p>I'm genuinely interested in technology in general, curious, and always improving my skills, new challenges are welcome.</p>

              <p>Hope we can create awesome and unique things together!</p>

              <p>You can reach me at mikeaazuffi@gmail.com. <a href="mailto: mikeaazuffi@gmail.com">e-mail me!</a></p>
        </div>
        </div>
      </div>
    </section>
  );
}