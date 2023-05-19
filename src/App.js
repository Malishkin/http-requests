import React, {useState, useEffect, useCallback} from "react";

import JokeList from "./components/JokeList";
import "./App.css";

function App() {
  // const dummyJokes = [
  //   {
  //     id: 1,
  //     type: "general",
  //     setup: "What do you call a bee that lives in America?",
  //     punchline: "A USB.",
  //   },
  //   {
  //     id: 2,
  //     type: "programming",
  //     setup: "What's the best thing about a Boolean?",
  //     punchline: "Even if you're wrong, you're only off by a bit.",
  //   },
  // ];
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchJokesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_ten"
      );

      if (!response.ok) {
        throw new Error("Что-то пошло не так...");
      }
      const data = await response.json();
      setJokes(data);

      // const loadedJokes = [];

      // for (const key in data) {
      //   loadedJokes.push({
      //     id: key,
      //     type: data[key].type,
      //     setup: data[key].setup,
      //     punchline: data[key].punchline,
      //   });
      // }

      // setJokes(loadedJokes);
    } catch (e) {
      setError(e.message);
    }
    setIsLoading(false);
  }, []);


  useEffect(()=>{
    fetchJokesHandler();
  },[fetchJokesHandler]);



  // async function fetchJokesHandler() {
  //   setIsLoading(true);
  //   setError(null);
  //   try{
  //     const response = await fetch("https://official-joke-api.appspot.com/random_ten"); 
  //     if(!response.ok){
  //       throw new Error("Something went wrong!");
  //     }    
  //     const data = await response.json();
     
  //     setJokes(data);
  //   } catch(e){
  //     setError(e.message);}
  //     setIsLoading(false);
  //   }

    let content = <p>Found no jokes.</p>;
    if(jokes.length>0){
      content = <JokeList jokes={jokes} />;
    }
    if(isLoading){ 
      content = <p>Loading...</p>;
     }
    if(error){ 
      content = <p>{error}</p>;
     }


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchJokesHandler}>Fetch Jokes</button>
      </section>
      <section>
        {content}
       {/* {!isLoading && jokes.length>0 && <JokeList jokes={jokes} />}
       {!isLoading && jokes.length===0 && !error && <p>Found no jokes.</p>}
       {isLoading && <p>Loading...</p>}
       {!isLoading && error && <p>{error}</p> } */}
      </section>
    </React.Fragment>
  );
}

export default App;
