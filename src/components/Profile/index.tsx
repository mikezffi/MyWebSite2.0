import styles from './styles.module.scss';
import { Link, animateScroll as scroll } from 'react-scroll'

export function Profile() {
  function animeSlow() {
    document.getAnimations().forEach(
      function (animation) {
        console.log(animation)
        animation.playbackRate = 1;
      });
  };

  function clickHandler() {
    document.getAnimations().forEach(
      function (animation) {
        console.log(animation)
        animation.playbackRate *= 42;
      },
      setTimeout(animeSlow, 600)
    );
  };

  return(
    <section className={styles.wrapper}>
      <div className={styles.container}>
      <div>
        <h1>Michael Zuffi</h1>
        <h3>Front-end Developer<span>_</span></h3>
      </div>

      <p>Hello, feel free to call me Mike, I like to code and create awesome things.</p>

      <span id="linkProfile">
        <Link 
        onClick={clickHandler}
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        >
          {"< More about me >"}
        </Link>
      </span>
      </div>
    </section>
  );
}