import styles from "./page.module.css";

function Page() {
  return (
    <main className={styles.main}>
      <article className={styles.container}>
        <img
          className={styles.hero}
          src="https://plus.unsplash.com/premium_photo-1665203421659-09089ede4ffa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <section className={styles.content}>
          <h2 className={styles.title}>
            Get <span className={styles.primaryLightColour}>insights</span> that
            help your business grow.
          </h2>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
            totam consequuntur sequi accusantium! Iusto possimus aspernatur
            ipsa, accusamus dolorem doloribus vitae obcaecati. Molestiae
            asperiores modi id eaque voluptates illum cum.
          </p>

          <ul className={styles.stats}>
            <li className={styles.stat}>
              <span className={styles.statValue}>10k+</span>
              <span className={styles.statCategory}>Companies</span>
            </li>
            <li className={styles.stat}>
              <span className={styles.statValue}>314</span>
              <span className={styles.statCategory}>Templates</span>
            </li>
            <li className={styles.stat}>
              <span className={styles.statValue}>12M+</span>
              <span className={styles.statCategory}>Queries</span>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}

export default Page;
