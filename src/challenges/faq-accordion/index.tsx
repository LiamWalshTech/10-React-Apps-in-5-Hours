import { useState } from "react";
import classNames from "classnames";
import styles from "./page.module.css";

function Page() {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <main className={styles.main}>
      <article className={styles.container}>
        <h1 className={styles.title}>FAQs</h1>

        <aside className={styles.accordion}>
          <section className={styles.accordionSection}>
            <button
              className={styles.accordionButton}
              onClick={() => setCurrentTab(1)}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </button>
            <p
              className={classNames(styles.accordionContent, {
                [styles.accordionActive]: currentTab === 1,
              })}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              architecto ex ipsam, error quod deleniti alias eos. Deserunt autem
              ut sint quis laborum aspernatur optio esse rem quae, vero
              laudantium!
            </p>
          </section>
          <section className={styles.accordionSection}>
            <button
              className={styles.accordionButton}
              onClick={() => setCurrentTab(2)}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </button>
            <p
              className={classNames(styles.accordionContent, {
                [styles.accordionActive]: currentTab === 2,
              })}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              architecto ex ipsam, error quod deleniti alias eos. Deserunt autem
              ut sint quis laborum aspernatur optio esse rem quae, vero
              laudantium!
            </p>
          </section>
          <section className={styles.accordionSection}>
            <button
              className={styles.accordionButton}
              onClick={() => setCurrentTab(3)}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </button>
            <p
              className={classNames(styles.accordionContent, {
                [styles.accordionActive]: currentTab === 3,
              })}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              architecto ex ipsam, error quod deleniti alias eos. Deserunt autem
              ut sint quis laborum aspernatur optio esse rem quae, vero
              laudantium!
            </p>
          </section>
          <section className={styles.accordionSection}>
            <button
              className={styles.accordionButton}
              onClick={() => setCurrentTab(4)}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </button>
            <p
              className={classNames(styles.accordionContent, {
                [styles.accordionActive]: currentTab === 4,
              })}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              architecto ex ipsam, error quod deleniti alias eos. Deserunt autem
              ut sint quis laborum aspernatur optio esse rem quae, vero
              laudantium!
            </p>
          </section>
        </aside>
      </article>
    </main>
  );
}

export default Page;
