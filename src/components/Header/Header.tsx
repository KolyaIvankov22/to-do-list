import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";

export function Header({ handleAddTask }) {
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 500);
      return;
    }
    handleAddTask(inputValue);
    setInputValue("");
  };

  const handleInput = (e) => {
    const value = e.target.value;
    if (value.length <= 50) {
      setInputValue(value);
      if (submitted && value.trim()) {
        setSubmitted(false);
      }
    }
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Todos</h1>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className={`${submitted ? styles.animateShake : ""} ${
          styles.newTaskForm
        }`}
      >
        {inputValue.length >= 50 && (
          <p className={styles.inputMessage}>Limit is 50 symbols</p>
        )}
        <input
          placeholder="Add a new task"
          type="text"
          onChange={(e) => handleInput(e)}
          value={inputValue}
        />

        <button type="submit">
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}