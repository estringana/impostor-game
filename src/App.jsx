import { useState } from 'react'
import './App.css'
import NewGame from './screens/NewGame'
import Lobby from './screens/Lobby'
import RevealRoles from './screens/RevealRoles'

const State = {
  LOBBY: 1,
  SETTING_GAME: 2,
  REVEAL_ROLES: 3,
  GAME: 4,
  RESULTS: 5
}

export const PlayerRole = {
  CITIZIEN: 2,
  IMPOSTOR: 3
}

const footballPlayers = [
  'Lionel Messi',
  'Cristiano Ronaldo',
  'Neymar Jr',
  'Kylian Mbappé',
  'Erling Haaland',
  'Robert Lewandowski',
  'Luka Modrić',
  'Andrés Iniesta',
  'Xavi Hernández',
  'Sergio Ramos',
  'Gerard Piqué',
  'Karim Benzema',
  'Mohamed Salah',
  'Kevin De Bruyne',
  'Eden Hazard',
  'David Beckham',
  'Ronaldinho',
  'Zinedine Zidane',
  'Thierry Henry',
  'Zlatan Ibrahimović',
  'Wayne Rooney',
  'Luis Suárez',
  'Antoine Griezmann',
  'Virgil van Dijk',
  'Frank Lampard',
  'Steven Gerrard',
  'Andrea Pirlo',
  'Francesco Totti',
  'Didier Drogba',
  'Arjen Robben'
]

function App() {

  const [state, setState] = useState(State.LOBBY);
  const [footballPlayer, setFootballPlayer] = useState('');
  const [players, setPlayers] = useState([
    { name: "Alex", role: PlayerRole.CITIZIEN },
    { name: "Juan", role: PlayerRole.CITIZIEN },
    { name: "Alonso", role: PlayerRole.CITIZIEN },
    { name: "Juanjo", role: PlayerRole.CITIZIEN },
  ]);

  const handleNewPlayer = (newPlayer) => {
    setPlayers([...players, { name: newPlayer, role: PlayerRole.CITIZIEN }]);
  }

  const handleRemovePlayer = (playerToRemove) => {
    setPlayers(players.filter(player => player.name !== playerToRemove));
  }

  const handleCreateGame = () => { setState(State.SETTING_GAME) }
  const handleStartGame = () => {
    //Let's set the impostor
    const impostor = Math.floor(Math.random() * players.length);
    setPlayers(prev => {
      const copy = [...prev];
      copy[impostor] = { ...copy[impostor], role: PlayerRole.IMPOSTOR };
      return copy;
    });
    //Lets pick the random football player
    setFootballPlayer(footballPlayers[Math.floor(Math.random() * footballPlayers.length)])

    setState(State.REVEAL_ROLES)
  }

  const handleRolesRevelaed = () => {
    setState(State.GAME)
  }

  return (
    <>
      <h1>Impostor</h1>
      {state === State.LOBBY && <Lobby createGame={handleCreateGame} />}
      {state === State.SETTING_GAME && <NewGame players={players.map(p => p.name)} addNewPlayer={handleNewPlayer} removePlayer={handleRemovePlayer} startGame={handleStartGame} />}
      {state === State.REVEAL_ROLES && <RevealRoles players={players} footbalPlayer={footballPlayer} rolesRevealed={handleRolesRevelaed} />}
      {state === State.GAME && <p>Killing</p>}
      {state === State.RESULTS && <p>Results screen</p>}
    </>
  )
}

export default App
