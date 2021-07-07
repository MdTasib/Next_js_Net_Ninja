import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h2 className={styles.title}>Home Page</h2>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium expedita distinctio inventore sit explicabo pariatur, illo aliquam repellendus nulla ad.</p>
      <Link href='/portfolio'><a className={styles.btn}>Portfolio</a></Link>
    </div>
  )
}
