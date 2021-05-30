import styles from './styles.module.scss';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";

export function Footer() {
  return(
    <footer className={styles.wrapper}>
      <p>&copy; Crafted by me ツ</p> 
      <ul>
        <a href="mailto: mikeaazuffi@gmail.com"><li className={styles.email}><AiOutlineMail  /> e-mail</li></a>
        <a href="https://www.linkedin.com/in/mikezffi/"><li className={styles.linkedin}><FaLinkedinIn  /> Linkedin</li></a>
        <a href="https://github.com/mikezffi"><li className={styles.github}><FaGithub  /> Github</li></a>
        <a href="https://twitter.com/Michael37267673"><li className={styles.twitter}><FaTwitter  /> Twitter</li></a>
      </ul>
    </footer>
  );
}