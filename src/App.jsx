import { useState } from 'react'
import './App.css'
import NewGame from './screens/NewGame'
import Lobby from './screens/Lobby'
import RevealRoles from './screens/RevealRoles'
import Killing from './screens/Killing'

const State = {
  LOBBY: 1,
  SETTING_GAME: 2,
  REVEAL_ROLES: 3,
  KILLING: 4,
  FAIL: 5,
  GAME_ENDED: 6
}

export const PlayerRole = {
  CITIZIEN: 1,
  IMPOSTOR: 2
}

export const PlayerState = {
  ALIVE: 1,
  DEATH: 2
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

const getNewPlayer = (name) => {
  return { name: name, role: PlayerRole.CITIZIEN, state: PlayerState.ALIVE }
}

function App() {

  const [state, setState] = useState(State.LOBBY);
  const [footballPlayer, setFootballPlayer] = useState('');
  const [players, setPlayers] = useState([
    getNewPlayer("Alex"),
    getNewPlayer("Juan"),
    getNewPlayer("Alonso"),
    getNewPlayer("Juanjo"),
  ]);

  const handleNewPlayer = (newPlayerName) => {
    setPlayers([...players, getNewPlayer(newPlayerName)]);
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
    setState(State.KILLING)
  }

  const handleKillingPlayer = (killedPlayerName) => {
    const killedPlayerIndex = players.findIndex(p => p.name == killedPlayerName)
    let nextState = State.FAIL;

    setPlayers(prev => {
      const copy = [...prev];
      copy[killedPlayerIndex] = { ...copy[killedPlayerIndex], state: PlayerState.DEATH };

      //Citiziens win
      if (copy[killedPlayerIndex].role == PlayerRole.IMPOSTOR) {
        nextState = State.GAME_ENDED
      }

      //Impostor wins
      if (copy.filter(p => p.state == PlayerState.ALIVE).length <= 2) {
        nextState = State.GAME_ENDED
      }

      return copy;
    });

    setState(nextState)
  }

  const renderFailScreen = () => (
    <>
      <p>Habeis matado a un ciudadano</p>
      <button onClick={() => { setState(State.KILLING) }}>Matar a otro jugador</button>
    </>
  )

  const renderGameEnded = () => {
    const impostor = players.find(p => p.role == PlayerRole.IMPOSTOR)
    const message = impostor.state == PlayerState.ALIVE ? 'El impostor ha ganado' : 'Los ciudadanos ganan'
    return (
      <>
        <p>{message}</p>
      </>
    )
  }


  return (
    <>
      <h1>Impostor</h1>
      {state === State.LOBBY && <Lobby createGame={handleCreateGame} />}
      {state === State.SETTING_GAME && <NewGame players={players.map(p => p.name)} addNewPlayer={handleNewPlayer} removePlayer={handleRemovePlayer} startGame={handleStartGame} />}
      {state === State.REVEAL_ROLES && <RevealRoles players={players} footbalPlayer={footballPlayer} rolesRevealed={handleRolesRevelaed} />}
      {state === State.KILLING && <Killing players={players.filter(p => p.state == PlayerState.ALIVE)} killPlayer={handleKillingPlayer} />}
      {state === State.FAIL && renderFailScreen()}
      {state === State.GAME_ENDED && renderGameEnded()}
    </>
  )
}

export default App
