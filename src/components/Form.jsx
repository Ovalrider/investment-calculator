import { useState } from "react";
import styles from "./Form.module.css";

const initUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

export default function Form(props) {
  const [userInput, setUserInput] = useState(initUserInput);

  function changeHandler(input, value) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [input]: value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    props.onSubmit(userInput);
    changeHandler();
  }
  function resetHandler() {
    setUserInput(initUserInput);
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              changeHandler("current-savings", event.target.value)
            }
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
            min="0"
            step="1"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              changeHandler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
            min="0"
            step="1"
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              changeHandler("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
            min="0"
            step="1"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => changeHandler("duration", event.target.value)}
            value={userInput["duration"]}
            type="number"
            id="duration"
            min="0"
            step="1"
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          onClick={resetHandler}
          type="reset"
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}
