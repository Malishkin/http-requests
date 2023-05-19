import React, { useRef } from "react";
import styles from "./AddJoke.module.css";

function AddJoke({ onAddJoke }) {
  const typeInputRef = useRef(null);
  const setupInputRef = useRef(null);
  const punchlineInputRef = useRef(null);

  function submitHandler(event) {
    event.preventDefault();
    const joke = {
      type: typeInputRef.current.value,
      setup: setupInputRef.current.value,
      punchline: punchlineInputRef.current.value,
    };

    onAddJoke(joke);

    // Reset form inputs
    typeInputRef.current.value = "";
    setupInputRef.current.value = "";
    punchlineInputRef.current.value = "";
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="type">Type</label>
        <input type="text" id="type" ref={typeInputRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="setup">Setup</label>
        <textarea rows={5} type="text" id="setup" ref={setupInputRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="punchline">Punchline</label>
        <textarea rows={5} type="text" id="punchline" ref={punchlineInputRef} />
      </div>
      <button type="submit">Add Joke</button>
    </form>
  );
}

export default AddJoke;
