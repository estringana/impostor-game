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
import Subtitle from './elements/Subtitle'
import PrimaryButton from './elements/PrimaryButton'
import GameEnded from './screens/GameEnded'
import { PlayerRole, PlayerState, getNewPlayer } from './Player'
import Messages from './Messages'

const State = {
  LOBBY: 'LOBBY',
  SETTING_GAME: 'SETTING_GAME',
  REVEAL_ROLES: 'REVEAL_ROLES',
  READY_TO_START: 'READY_TO_START',
  KILLING: 'KILLING',
  FAIL: 'FAIL',
  GAME_ENDED: 'GAME_ENDED',
};

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
  const [impostorWins, setImpostorWins] = useState(false);  
  const [footballPlayer, setFootballPlayer] = useState('');
  const [players, setPlayers] = useState([
    getNewPlayer("Alex"),
    getNewPlayer("Juan"),
    getNewPlayer("Alonso"),
    getNewPlayer("Juanjo"),
  ]);

  const handleNewPlayer = (newPlayerName) => {
    if (!newPlayerName) return;

    setPlayers(prev => {
      if (prev.find(p => p.name.toLowerCase() === newPlayerName.toLowerCase())) {
        return prev;
      }
      return [...prev, getNewPlayer(newPlayerName)];
    });
  };

  const handleRemovePlayer = (playerToRemove) => {
    setPlayers(prev => prev.filter(p => p.name !== playerToRemove));
  };

  const handleCreateGame = () => { 
    setState(State.SETTING_GAME)
    setImpostorWins(false)
  }
  
  const handleStartGame = () => {
    const impostorIndex = Math.floor(Math.random() * players.length);
    const randomFootballer = footballPlayers[Math.floor(Math.random() * footballPlayers.length)];
  
    setPlayers(prev => {
      const copy = [...prev];
      copy[impostorIndex] = { ...copy[impostorIndex], role: PlayerRole.IMPOSTOR };
      return copy;
    });
  
    setFootballPlayer(randomFootballer);
    setState(State.REVEAL_ROLES);
  };

  const handleRolesRevealed = () => {
    setState(State.READY_TO_START)
  }

  const handleKillingPlayer = (killedPlayerName) => {
    setPlayers(prev => {
      const updated = prev.map(player =>
        player.name === killedPlayerName
          ? { ...player, state: PlayerState.DEATH }
          : player
      );

      const killedPlayer = updated.find(p => p.name === killedPlayerName);
      const aliveCount = updated.filter(p => p.state === PlayerState.ALIVE).length;

      if (killedPlayer.role === PlayerRole.IMPOSTOR) {
        setImpostorWins(false);
        setState(State.GAME_ENDED);
      } else if (aliveCount <= 2) {
        setImpostorWins(true);
        setState(State.GAME_ENDED);
      } else {
        setState(State.FAIL);
      }

      return updated;
    });
  };

  const renderFailScreen = () => {
    const goBackToKilling = () => setState(State.KILLING);
    return (<>
      <Text>😵 {Messages.random.killedCitizen()}</Text>
      <PrimaryButton onClick={goBackToKilling}>Matar a otro jugador</PrimaryButton>
    </>)
  }

  const renderReadyToStart = () => {
    const goBackToKilling = () => setState(State.KILLING);
    return (<>
      <Subtitle>🎭  Todos tenéis vuestro rol</Subtitle>
      <Text>{Messages.random.getWaitUntilReady()}</Text>
      <PrimaryButton onClick={goBackToKilling}>Empezar partida</PrimaryButton>
    </>)
  }

  const startAgain = () => {
    setPlayers(prev => prev.map(p => getNewPlayer(p.name)));
    setImpostorWins(false);
    setState(State.SETTING_GAME);
  }

  return (
    <Main>
      <Card key={state}>
        <Title>El impostor</Title>
        {state === State.LOBBY && <Lobby createGame={handleCreateGame} />}
        {state === State.SETTING_GAME && <NewGame players={players.map(p => p.name)} addNewPlayer={handleNewPlayer} removePlayer={handleRemovePlayer} startGame={handleStartGame} />}
        {state === State.REVEAL_ROLES && <RevealRoles players={players} footballPlayer={footballPlayer} rolesRevealed={handleRolesRevealed} />}
        {state === State.READY_TO_START && renderReadyToStart()}
        {state === State.KILLING && <Killing players={players.filter(p => p.state == PlayerState.ALIVE)} killPlayer={handleKillingPlayer} />}
        {state === State.FAIL && renderFailScreen()}
        {state === State.GAME_ENDED && <GameEnded impostorWins={impostorWins} newGame={startAgain}/>}
      </Card>
    </Main>
  )
}

export default App
