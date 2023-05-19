import React from "react";

const JokeList = ({ jokes, onUpdateJoke, onDeleteJoke }) => {
  return (
    <div>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.setup}</h3>
          <p>{joke.punchline}</p>
          <button onClick={() => onUpdateJoke(joke.id, { ...joke, type: "updated" })}>
            Update
          </button>
          <div><button onClick={() => onDeleteJoke(joke.id)}>Delete</button></div>
        </div>
      ))}
    </div>
  );
};

export default JokeList;
