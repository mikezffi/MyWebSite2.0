import styles from './styles.module.scss';

export function Portfolio() {
  

  return(
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div data-aos="flip-right" className={styles.info}>
            <img src="/icon.png" alt="" style={{width: '80px', borderRadius: '20px'}} />
            <h3>My Timer Pal</h3>

            <p>
              MyTimerPal is a mobile app that lets people organize their workout and time each exercise.
            </p>
            <span>soon on:</span>
            <img src="/appstores.png" alt="app store" style={{width: '100px', marginTop: '5px', marginBottom: '20px'}} />

            <p>I made this app using React Native with Expo CLI. It is multiplatform, has animated Lists and Lottie animations.</p>
            <p>You can check out the code and a free demo on my <a href="https://github.com/mikezffi/MyTimerPal/releases/tag/v1.0">Github</a>.</p>

          </div>
        </div>
        <div className={styles.content} >
          <div data-aos="fade-up" className={styles.mockupContainer} >
            <img src="/mockup.png" alt="" className={styles.mockup} />
          </div>
        </div>
      </div>
    </section>
  );
}