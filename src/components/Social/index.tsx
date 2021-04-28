import styles from './styles.module.scss';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";

export function Social() {
  return(
    <div className={styles.icons}>
      <ul>
        <a href="mailto: mikeaazuffi@gmail.com"><li className={styles.email}><AiOutlineMail  /></li></a>
        <a href="https://www.linkedin.com/in/mikezffi/"><li className={styles.linkedin}><FaLinkedinIn  /></li></a>
        <a href="https://github.com/mikezffi"><li className={styles.github}><FaGithub  /></li></a>
        <a href="https://twitter.com/Michael37267673"><li className={styles.twitter}><FaTwitter  /></li></a>
      </ul>
    </div>
  );
}