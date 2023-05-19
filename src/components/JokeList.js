import React, { useState } from "react";
import styles from "./JokeList.module.css";

const JokeList = ({ jokes, onUpdateJoke, onDeleteJoke }) => {
  const [updatedJoke, setUpdatedJoke] = useState({ id: "", type: "", setup: "", punchline: "" });

  const handleUpdateJoke = () => {
    onUpdateJoke(updatedJoke.id, updatedJoke);
    setUpdatedJoke({ id: "", type: "", setup: "", punchline: "" });
  };

  const handleCancelUpdate = () => {
    setUpdatedJoke({ id: "", type: "", setup: "", punchline: "" });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedJoke((prevJoke) => ({
      ...prevJoke,
      [name]: value,
    }));
  };

  return (
    <div>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.setup}</h3>
          <p>{joke.punchline}</p>
          {updatedJoke.id === joke.id ? (
            <div className={styles.control}>
              <input
                type="text"
                name="type"
                value={updatedJoke.type}
                placeholder="Type"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="setup"
                value={updatedJoke.setup}
                placeholder="Setup"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="punchline"
                value={updatedJoke.punchline}
                placeholder="Punchline"
                onChange={handleInputChange}
              />
              <div>
                <button onClick={handleUpdateJoke}>Save</button>
                <button onClick={handleCancelUpdate}>Cancel</button>
              </div>
            </div>
          ) : (
            <div>
              <button onClick={() => setUpdatedJoke(joke)}>Update Joke</button>
              <button onClick={() => onDeleteJoke(joke.id)}>Delete Joke</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default JokeList;
