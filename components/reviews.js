import { useState } from 'react';

import Image from 'next/image';

import Team from '../data';

import styles from './reviews.module.css';

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const { name, role, quote, image } = Team[index];

  //check if index is still in range
  const checkIndex = (index) => {
    if (index > Team.length - 1) {
      return 0;
    }
    if (index < 0) {
      return Team.length - 1;
    }
    return index;
  };

  const prev = () => {
    setIndex((index) => {
      return checkIndex(index - 1);
    });
  };

  const next = () => {
    setIndex((index) => {
      return checkIndex(index + 1);
    });
  };

  const random = () => {
    let randomNum = Math.floor(Math.random() * Team.length);

    //check if randomNum is already === current index
    if (randomNum === index) {
      randomNum = index + 1;
    }

    setIndex(checkIndex(randomNum));
  };

  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <Image src={image} width={140} height={140} alt={name} />
      </div>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.role}>{role}</p>
      <p className={styles.quote}>{quote}</p>
      <div className={styles.sideBtns}>
        <button className={styles.leftBtn} onClick={prev}>
          &#60;
        </button>
        <button onClick={next}> &#62; </button>
      </div>
      <button className={styles.randomBtn} onClick={random}>
        Randomly
      </button>
    </section>
  );
}
