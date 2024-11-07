import "./page.css";

const Page = () => {
  return (
    <aside className="price-grid">
      <section className="price-grid-section price-grid-section--lightest">
        <h2 className="section-title">Join our community</h2>
        <p className="accent">30-day, hassle-free money back gurantee</p>
        <p>
          Gain access to our full library of tutorials along with expect code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </section>
      <section className="price-grid-section price-grid-section--primary">
        <h2 className="section-title section-title--light">
          Monthly Subscription
        </h2>
        <p>
          <span className="enlarge">$29</span> per month
        </p>
        <p>Full acccess for less than $1 a day</p>
        <a className="button">Sign up</a>
      </section>
      <section className="price-grid-section price-grid-section--light">
        <h2 className="section-title section-title--light">Why Us</h2>
        <ul className="plain-list">
          <li>Tutorials by industry experts</li>
          <li>Peer & expert code review</li>
          <li>Coding exercises</li>
          <li>Access to our GitHub repos</li>
          <li>Community forum</li>
          <li>Flashcard decks</li>
          <li>New videos ever week</li>
        </ul>
      </section>
    </aside>
  );
};

export default Page;
