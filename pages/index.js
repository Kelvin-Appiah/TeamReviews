import styles from '../styles/Home.module.css';

import Reviews from '../components/reviews';

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>Our Team</h1>
      <div className={styles.underline}></div>
      <Reviews />
    </main>
  );
}
