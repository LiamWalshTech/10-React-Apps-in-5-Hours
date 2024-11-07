import { useEffect, useState } from "react";
import styles from "./page.module.css";

interface GenerateApiUrlArgs {
  searchMode?: "name" | "region";
  value?: string;
}

function Page() {
  const generateApiUrl = ({
    searchMode,
    value,
  }: GenerateApiUrlArgs): string => {
    switch (searchMode) {
      case "name":
        return `https://restcountries.com/v3.1/name/${value}`;

      case "region":
        return `https://restcountries.com/v3.1/region/${value}`;

      default:
        return `https://restcountries.com/v3.1/all`;
    }
  };
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(generateApiUrl({}))
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const handleSearch = (e) => {
    fetch(generateApiUrl({ searchMode: "name", value: e.target.value }))
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network error");
        }
        return response.json();
      })
      .then((data) => setCountries(data))
      .catch((error) => {
        console.log(error);
      });
  };

  const renderList = countries.length === 0 ? false : true;

  return (
    <main className={styles.main}>
      <article className={styles.container}>
        <header>
          <h1>Where in the world?</h1>
          <button>🌙 Dark Mode</button>
        </header>

        <form onSubmit={(e) => e.preventDefault()}>
          <input name="search" type="text" onChange={handleSearch} />
          <select name="continent" id="continent">
            <option value="England">England</option>
          </select>
        </form>

        <ul>
          {renderList &&
            countries.map((country) => {
              const { flags, name, population, region, capital = [] } = country;

              return (
                <li key={name.common}>
                  <img src={flags.png} alt="" />
                  <h2>{name.common}</h2>
                  <p>
                    <strong>Population:</strong> {population}
                  </p>
                  <p>
                    <strong>Continent:</strong> {region}
                    <p>
                      <strong>Capital:</strong> {capital.join(",")}
                    </p>
                  </p>
                </li>
              );
            })}
        </ul>
      </article>
    </main>
  );
}

export default Page;
