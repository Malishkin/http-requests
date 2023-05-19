import React, { useRef } from "react";

import styles from "./AddJoke.module.css";

function AddJoke(props) {
    const typeInputRef = useRef('');
    const setupInputRef = useRef('');
    const punchlineInputRef = useRef('');

    function submitHandler(event) {
        event.preventDefault();
        const joke = {
            type: typeInputRef.current.value,
            setup: setupInputRef.current.value,
            punchline: punchlineInputRef.current.value
        }

        props.onAddJoke(joke);
    }

    return <form onSubmit={submitHandler}>
        <div className={styles.control}>
            <label htmlFor="type">Type</label>
            <input type="text" id="type" ref={typeInputRef}/>
        </div>
        <div className={styles.control}>
          <label htmlFor="setup">Setup</label>
          <textarea rows={5}  type="text" id="setup" ref={setupInputRef}></textarea>
        </div>
        <div className={styles.control}>
          <label htmlFor="punchline">Punchline</label>
          <textarea rows={5}  type="text" id="punchline" ref={punchlineInputRef}></textarea>
        </div>
        <button>Add Joke</button>
    </form>
};

export default AddJoke;