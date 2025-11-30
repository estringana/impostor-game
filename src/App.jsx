import { useState } from 'react'
import './App.css'
import NewGame from './screens/NewGame'
import Lobby from './screens/Lobby'
import RevealRoles from './screens/RevealRoles'
import Killing from './screens/Killing'
import Title from './elements/Title'
import Card from './elements/Card'
import Main from './elements/Main'
import Text from './elements/Text'
import PrimaryButton from './elements/PrimaryButton'

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

export const KILLED_CITIZEN_MESSAGES = [
  "Habéis matado a un ciudadano. Buen trabajo, Sherlocks.",
  "Otro inocente al hoyo. Muy bien, equipo.",
  "Ciudadano eliminado. 10/10 en intuición inversa.",
  "Era inocente. Pero oye, la intención es lo que cuenta… ¿no?",
  "Enhorabuena: era ciudadano. Bravo, cracks."
];

export const IMPOSTOR_WIN_MESSAGES = [
  "El impostor ha ganado. Y vosotros ayudando, básicamente.",
  "Victoria del impostor. Ni disimulando os salváis.",
  "Ha ganado el impostor. GG EZ.",
  "El impostor os ha toreado como ha querido.",
  "El impostor se ha reído de todos. Literalmente."
];

export const CITIZEN_WIN_MESSAGES = [
  "Los ciudadanos ganan. ¡Milagro!",
  "Victoria ciudadana. Algo habrá salido bien por accidente.",
  "Ciudadanos: 1 — Impositor: 0. Toma ya.",
  "Han ganado los inocentes. Era hora.",
  "Ciudadanos victoriosos. No sé cómo, pero oye, bien."
];

export function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

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
    if (newPlayerName == '') {
      return
    }
    if (players.find(p => p.name.toLowerCase() == newPlayerName.toLowerCase())) {
      return
    }

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
      <Text>{pickRandom(KILLED_CITIZEN_MESSAGES)}</Text>
      <PrimaryButton onClick={() => { setState(State.KILLING) }}>Matar a otro jugador</PrimaryButton>
    </>
  )

  const startAgain = () => {
    setPlayers([...players.map(p => getNewPlayer(p.name))])
    setState(State.SETTING_GAME)
  }

  const renderGameEnded = () => {
    const impostor = players.find(p => p.role == PlayerRole.IMPOSTOR)
    const message = impostor.state == PlayerState.ALIVE ? pickRandom(IMPOSTOR_WIN_MESSAGES) : pickRandom(CITIZEN_WIN_MESSAGES)
    const impostorWins = impostor.state == PlayerState.ALIVE
    return (
      <>
        <p className={(impostorWins ? 'text-red-400' : 'text-green-400') + ' text-xl font-semibold mb-6'}>{message}</p>
        <PrimaryButton onClick={() => { startAgain() }}>Comenzar otra partida</PrimaryButton>
      </>
    )
  }

  return (
    <Main>
      <Card key={state}>
        <Title>El impostor</Title>
        {state === State.LOBBY && <Lobby createGame={handleCreateGame} />}
        {state === State.SETTING_GAME && <NewGame players={players.map(p => p.name)} addNewPlayer={handleNewPlayer} removePlayer={handleRemovePlayer} startGame={handleStartGame} />}
        {state === State.REVEAL_ROLES && <RevealRoles players={players} footbalPlayer={footballPlayer} rolesRevealed={handleRolesRevelaed} />}
        {state === State.KILLING && <Killing players={players.filter(p => p.state == PlayerState.ALIVE)} killPlayer={handleKillingPlayer} />}
        {state === State.FAIL && renderFailScreen()}
        {state === State.GAME_ENDED && renderGameEnded()}
      </Card>
    </Main>
  )
}

export default App
