import classNames from "classnames";
import styles from "./page.module.css";

function Page() {
  return (
    <main className={styles.main}>
      <article className={styles.container}>
        <div className={styles.bento}>
          <section className={classNames(styles.bentoSlot, styles.bentoSlotA)}>
            Social Media 10X
          </section>
          <section className={classNames(styles.bentoSlot, styles.bentoSlotB)}>
            Manage multiple accounts and platforms
          </section>
          <section className={classNames(styles.bentoSlot, styles.bentoSlotC)}>
            Maintain a consistent posting schedule
          </section>
          <section className={classNames(styles.bentoSlot, styles.bentoSlotD)}>
            Schedule to social media
          </section>
          <section className={classNames(styles.bentoSlot, styles.bentoSlotE)}>
            Grow followers with non-stop content.
          </section>
          <section className={classNames(styles.bentoSlot, styles.bentoSlotF)}>
            56% faster audience growth
          </section>
          <section className={classNames(styles.bentoSlot, styles.bentoSlotG)}>
            Create and schedule content quicker
          </section>
          <section className={classNames(styles.bentoSlot, styles.bentoSlotH)}>
            Write your content using AI.
          </section>
        </div>
      </article>
    </main>
  );
}

export default Page;
