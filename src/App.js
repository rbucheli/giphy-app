import React from 'react';
import './App.css';
// IMPORT COMPONENTS  
import GifDisplay from './components/GifDisplay';
import Button from './components/Button';

function App() {
  // variable with my apiKey
  const apikey = "R3f4qDXqUqVKUwstMWAONwET1iM6rfp2";

  // State to hold GIF data
  const [giphy, setGiphy] = React.useState(null);

  // Function to getGif
  const getGif = async () => {
    //make fetch request and store response
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
    // Parse JSON response into a javascript object
    const data = await response.json();
    setGiphy(data);
  };
  
  return (
    <div className="App">
      <h1>Giphy</h1>
      <Button Change={getGif} />
      <GifDisplay gif={giphy}/>
    </div>
  );
}

export default App;