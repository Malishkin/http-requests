import React, { useState } from "react";

const JokeList = ({ jokes, onUpdateJoke, onDeleteJoke }) => {
  const [updatedJoke, setUpdatedJoke] = useState({ id: "", type: "", setup: "", punchline: "" });

  const handleUpdateJoke = () => {
    onUpdateJoke(updatedJoke.id, updatedJoke);
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
            <div>
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
              <button onClick={handleUpdateJoke}>Save</button>
            </div>
          ) : (
            <div>
              <button onClick={() => setUpdatedJoke(joke)}>Update Joke</button> 
              <div> <button onClick={() => onDeleteJoke(joke.id)}>Delete Joke</button></div>           
            </div>
           
          )}
        </div>
      ))}
    </div>
  );
};

export default JokeList;
