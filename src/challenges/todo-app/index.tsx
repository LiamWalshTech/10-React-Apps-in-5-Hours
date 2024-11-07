import { useState } from "react";
import styles from "./page.module.css";

function Page() {
  const [todos, setTodos] = useState<Array<string>>([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, e.currentTarget.elements.newTodo.value]);
  };
  const removeTodo = (todoIndex: number) => {
    const filtered = todos.filter(
      (_todo, loopIndex) => todoIndex !== loopIndex
    );

    setTodos(filtered);
  };

  console.log("TODOS", todos);

  return (
    <main className={styles.main}>
      <article className={styles.container}>
        <h1>TODO</h1>

        <form onSubmit={submitHandler}>
          <input name="newTodo" className={styles.todoInput} type="text" />
        </form>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <input type="checkbox" />
              <span>{todo}</span>
              <button onClick={() => removeTodo(index)}>✖️</button>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}

export default Page;
