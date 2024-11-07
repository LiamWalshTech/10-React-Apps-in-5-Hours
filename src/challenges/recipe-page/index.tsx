import styles from "./page.module.css";

function Page() {
  return (
    <main className={styles.main}>
      <article className={styles.container}>
        <img
          className={styles.hero}
          src="https://plus.unsplash.com/premium_photo-1667807521536-bc35c8d8b64b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <article className={styles.article}>
          <h1 className={styles.title}>Simple Omelette Recipe</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            recusandae dolorum non delectus, dolores iure rerum cupiditate iusto
            sequi commodi quo numquam voluptas at molestiae laborum, ullam
            libero magnam nisi?
          </p>

          <aside className={styles.prepBox}>
            <h3>Preparation time</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <strong>Total:</strong> Approximately 10 minutes
              </li>
              <li className={styles.listItem}>
                <strong>Preparation:</strong> 5 minutes
              </li>
              <li className={styles.listItem}>
                <strong>Cooking:</strong> 5 minuets
              </li>
            </ul>
          </aside>

          <section>
            <h2 className={styles.sectionTitle}>Ingredients</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>Lorem ipsum dolor sit amet.</li>
              <li className={styles.listItem}>Lorem ipsum dolor sit amet.</li>
              <li className={styles.listItem}>Lorem ipsum dolor sit amet.</li>
              <li className={styles.listItem}>Lorem ipsum dolor sit amet.</li>
              <li className={styles.listItem}>Lorem ipsum dolor sit amet.</li>
            </ul>
          </section>

          <hr />

          <section>
            <h2 className={styles.sectionTitle}>Instructions</h2>
            <ol className={styles.orderedList}>
              <li className={styles.listItem}>
                <strong>Beat the eggs:</strong> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Molestias omnis delectus
                consequatur eos placeat itaque assumenda suscipit nisi unde
                excepturi!
              </li>
              <li className={styles.listItem}>
                <strong>Heat the pan:</strong> Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Alias tenetur inventore maiores
                eum quibusdam laboriosam libero ducimus. Ad, iusto voluptatum!
              </li>
              <li className={styles.listItem}>
                <strong>Cook the omelette:</strong> Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Quis doloribus aut voluptatibus!
                Cupiditate libero recusandae, blanditiis dolores obcaecati hic
                maxime!
              </li>
              <li className={styles.listItem}>
                <strong>Add fillings (optional):</strong> Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Quis doloribus aut
                voluptatibus! Cupiditate libero recusandae, blanditiis dolores
                obcaecati hic maxime!
              </li>
              <li className={styles.listItem}>
                <strong>Fold and serve:</strong> Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Quis doloribus aut voluptatibus!
                Cupiditate libero recusandae, blanditiis dolores obcaecati hic
                maxime!
              </li>
              <li className={styles.listItem}>
                <strong>Enjoy:</strong> Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Quis doloribus aut voluptatibus! Cupiditate
                libero recusandae, blanditiis dolores obcaecati hic maxime!
              </li>
            </ol>
          </section>

          <hr />

          <section>
            <h2 className={styles.sectionTitle}>Nutrition</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              placeat iusto omnis expedita sed ullam.
            </p>

            <table>
              <thead>
                <tr>
                  <th>Calories</th>
                  <th>Carbs</th>
                  <th>Protein</th>
                  <th>Fat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>277kcal</td>
                  <td>0g</td>
                  <td>20g</td>
                  <td>22g</td>
                </tr>
              </tbody>
            </table>
          </section>
        </article>
      </article>
    </main>
  );
}

export default Page;
