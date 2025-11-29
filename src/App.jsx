import { useState } from 'react'
import './App.css'
import NewGame from './screens/NewGame'
import Lobby from './screens/Lobby'

const State = {
  LOBBY: 1,
  SETTING_GAME: 2,
  GAME: 3,
  RESULTS: 4
}

function App() {

  const [state, setState] = useState(State.LOBBY);
  const [players, setPlayers] = useState([]);
  
  const handleNewPlayer = (newPlayer) => {
    setPlayers([...players, newPlayer]);
  }

  const handleRemovePlayer = (playerToRemove) => {
    setPlayers(players.filter(player => player !== playerToRemove));
  }

  const handleCreateGame = () => {setState(State.SETTING_GAME)}
  const handleStartGame = () => {setState(State.GAME)}

  return (
    <>
      <h1>Impostor</h1>
      {state === State.LOBBY && <Lobby createGame={handleCreateGame} />}
      {state === State.SETTING_GAME && <NewGame players={players} addNewPlayer={handleNewPlayer} removePlayer={handleRemovePlayer} startGame={handleStartGame} />}
      {state === State.GAME && <p>Game screen</p>}
      {state === State.RESULTS && <p>Results screen</p>}
    </>
  )
}

export default App
