import React, { useRef } from "react";

import styles from "./AddJoke.module.css";

function AddJoke(props) {
    return <form>
        <div className={styles.control}>
            <label htmlFor="type">Type</label>
            <input type="text" id="type" />
        </div>
        <div className={styles.control}>
          <label htmlFor="setup">Setup</label>
          <textarea  type="text" id="setup"></textarea>
        </div>
        <div className={styles.control}>
          <label htmlFor="punchline">Punchline</label>
          <textarea  type="text" id="punchline"></textarea>
        </div>
    </form>
};

export default AddJoke;