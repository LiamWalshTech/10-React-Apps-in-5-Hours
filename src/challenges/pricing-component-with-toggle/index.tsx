import { useState } from "react";
import styles from "./page.module.css";
import classNames from "classnames";

function Page() {
  const [payMonthly, setPayMonthly] = useState(false);

  return (
    <main className={styles.main}>
      <article className={styles.container}>
        <h1>Our Pricing</h1>

        <aside className={styles.toggleContainer}>
          Annualy{" "}
          <input
            className={styles.toggle}
            type="checkbox"
            onClick={() => setPayMonthly(true)}
          />{" "}
          Monthly
        </aside>

        <section className={styles.pricingTable}>
          <section className={styles.pricingSection}>
            <h2 className={styles.pricingTitle}>Professional</h2>
            <ul className={styles.pricingList}>
              <li
                className={classNames(
                  styles.pricingListItem,
                  styles.pricingListItemBig
                )}
              >
                $24.99
              </li>
              <li className={styles.pricingListItem}>1TB Storage</li>
              <li className={styles.pricingListItem}>5 Users Allowed</li>
              <li className={styles.pricingListItem}>Send up to 10GB</li>
            </ul>

            <a className={styles.button} href="#">
              Learn more
            </a>
          </section>

          <section className={styles.pricingSection}>
            <h2 className={styles.pricingTitle}>Professional</h2>
            <ul className={styles.pricingList}>
              <li
                className={classNames(
                  styles.pricingListItem,
                  styles.pricingListItemBig
                )}
              >
                $24.99
              </li>
              <li className={styles.pricingListItem}>1TB Storage</li>
              <li className={styles.pricingListItem}>5 Users Allowed</li>
              <li className={styles.pricingListItem}>Send up to 10GB</li>
            </ul>

            <a className={styles.button} href="#">
              Learn more
            </a>
          </section>
          <section className={styles.pricingSection}>
            <h2 className={styles.pricingTitle}>Professional</h2>
            <ul className={styles.pricingList}>
              <li
                className={classNames(
                  styles.pricingListItem,
                  styles.pricingListItemBig
                )}
              >
                $24.99
              </li>
              <li className={styles.pricingListItem}>1TB Storage</li>
              <li className={styles.pricingListItem}>5 Users Allowed</li>
              <li className={styles.pricingListItem}>Send up to 10GB</li>
            </ul>

            <a className={styles.button} href="#">
              Learn more
            </a>
          </section>
        </section>
      </article>
    </main>
  );
}

export default Page;
