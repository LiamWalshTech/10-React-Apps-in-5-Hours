import { useEffect, useState } from "react";
import styles from "./page.module.css";

const gameTemplate = {
  userChose: null,
  computerChose: null,
  userWon: false,
};

const renderInterface = (setCurrentGame, currentGame, currentStage) => {
  switch (currentStage) {
    case "waitingForComputer":
      return <section>Waiting for computer</section>;

    case "gameComplete":
      return <section>Game complete</section>;

    default: {
      return (
        <section>
          <h1>Pick an option</h1>
          <button
            onClick={() =>
              setCurrentGame({
                ...currentGame,
                userChose: "rock",
              })
            }
          >
            Rock
          </button>
          <button onClick={() => {}}>Paper</button>
          <button onClick={() => {}}>Scissor</button>
        </section>
      );
    }
  }
};

function Page() {
  const [userScore, setUserScore] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState([]);
  const [currentGame, setCurrentGame] = useState(gameTemplate);
  const [gameStage, setGameStage] = useState<
    "waitingForUser" | "waitingForComputer" | "gameComplete"
  >("waitingForUser");

  useEffect(() => {
    if (currentGame.userChose !== null) {
      setGameStage("waitingForComputer");
    }
  }, [currentGame]);

  return (
    <main className={styles.main}>
      <article className={styles.container}>
        <header>
          <h1>Rock, Paper, Scissors</h1>
          <code>{userScore}</code>
        </header>

        <section>
          {renderInterface(setCurrentGame, currentGame, gameStage)}
        </section>
      </article>
    </main>
  );
}

export default Page;
