import { Background } from '../components/Background';
import { Social } from '../components/Social';
import { About } from '../components/About';
import { Profile } from '../components/Profile';
import { Link } from 'react-scroll';

export default function Home() {
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

  return (
    <>
      <Background />
      <Social />
      <div className="wrapper">
          <section className="section" id="profile">
            <Profile />
            <span id="linkProfile">
              <Link 
              onClick={clickHandler}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
                {"< More about me >"}
              </Link>
            </span>
          </section>
          <section className="section" id= "about">
            <span id="linkAbout">
              <Link 
              onClick={clickHandler}
              activeClass="active"
              to="profile"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
                {"< Home >"}
              </Link>
            </span>
            <About />
          </section>
          <footer>
            <div className="footer">
            <p>&copy; Crafted by me ツ</p> 
            </div>
          </footer>
      </div>
    </>
  )
}