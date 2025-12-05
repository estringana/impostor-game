import { useState } from 'react'
import './App.css'
import SetPlayers from './screens/SetPlayers'
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
import WordSets from './WordSets'
import SetWordset from './screens/SetWordSet'
import ImpostorsNumber from './screens/ImpostorsNumber'

const State = {
  LOBBY: 'LOBBY',
  PLAYERS: 'PLAYERS',
  IMPOSTOR_NUMBER: 'IMPOSTOR_NUMBER',
  WORDSET: 'WORDSET',
  REVEAL_ROLES: 'REVEAL_ROLES',
  READY_TO_START: 'READY_TO_START',
  KILLED_IMPOSTOR: 'KILLED_IMPOSTOR',
  KILLED_CITIZEN: 'KILLED_CITIZEN',
  FAIL: 'FAIL',
  GAME_ENDED: 'GAME_ENDED',
};

function App() {

  const [state, setState] = useState(State.LOBBY);
  const [impostorWins, setImpostorWins] = useState(false);
  const [secretWord, setSecretWord] = useState('');
  const [wordsetIcon, setWordsetIcon] = useState('');
  const [numberOfImpostors, setNumberOfImpostors] = useState(1);
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
    setState(State.PLAYERS)
    setImpostorWins(false)
  }

  function pickRandomIndexes(count, arrayLength) {
    const indexes = new Set();

    while (indexes.size < count) {
      const random = Math.floor(Math.random() * arrayLength);
      indexes.add(random);
    }

    return [...indexes];
  }

  const playersIntroduced = () => {
    setState(State.IMPOSTOR_NUMBER);
  };

  const impostorsSelected = () => {
    const impostorIndexes = pickRandomIndexes(numberOfImpostors, players.length);
    setPlayers(prev => {
      const copy = [...prev];
      impostorIndexes.forEach((i) => {
        copy[i] = { ...copy[i], role: PlayerRole.IMPOSTOR };
      })
      return copy;
    });
    setState(State.WORDSET);
  }

  const handleWordSetSelected = (wordSetId) => {
    const set = WordSets.getSet(wordSetId)
    setSecretWord(WordSets.getWordFromSet(set));
    setWordsetIcon(set.icon);
    setState(State.REVEAL_ROLES);
  }

  const handleRolesRevealed = () => {
    setState(State.READY_TO_START)
  }

  const handleKillingPlayer = (killedPlayerName) => {
    setPlayers(prev => {
      let killedRole = PlayerRole.CITIZEN;
      const updated = prev.map(player => {
        if (player.name === killedPlayerName) {
          killedRole = player.role
          return { ...player, state: PlayerState.DEATH }
        }
        return player
      }
      );

      const { aliveCitizens, aliveImpostors } = updated.reduce(
        (acc, p) => {
          if (p.state === PlayerState.ALIVE) {
            if (p.role === PlayerRole.CITIZEN) acc.aliveCitizens++;
            else if (p.role === PlayerRole.IMPOSTOR) acc.aliveImpostors++;
          }
          return acc;
        },
        { aliveCitizens: 0, aliveImpostors: 0 }
      );

      if (aliveImpostors === 0) {
        setImpostorWins(false);
        setState(State.GAME_ENDED);
      } else if (aliveImpostors >= aliveCitizens) {
        setImpostorWins(true);
        setState(State.GAME_ENDED);
      } else if (killedRole === PlayerRole.CITIZEN) {
        setState(State.KILLED_CITIZEN);
      } else {
        setState(State.KILLED_IMPOSTOR);
      }

      return updated;
    });
  };

  const renderCitizenKilledScreen = () => {
    const goBackToKilling = () => setState(State.KILLING);
    return (<>
      <Text>{Messages.random.killedCitizen()}</Text>
      <PrimaryButton onClick={goBackToKilling}>Matar a otro jugador</PrimaryButton>
    </>)
  }

  const renderImpostorKilledScreen = () => {
    const goBackToKilling = () => setState(State.KILLING);
    return (<>
      <Text>{Messages.random.killedImpostor()}</Text>
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
    setState(State.PLAYERS);
  }

  return (
    <Main>
      <Card key={state}>
        <Title>El impostor</Title>
        {state === State.LOBBY && <Lobby createGame={handleCreateGame} />}
        {state === State.PLAYERS && <SetPlayers players={players.map(p => p.name)} addNewPlayer={handleNewPlayer} removePlayer={handleRemovePlayer} playersIntroduced={playersIntroduced} />}
        {state === State.IMPOSTOR_NUMBER && <ImpostorsNumber numberOfImpostors={numberOfImpostors} setNumberOfImpostors={setNumberOfImpostors} impostorsSelected={impostorsSelected} />}
        {state === State.WORDSET && <SetWordset wordsets={WordSets.getAll()} wordSetSelected={handleWordSetSelected} />}
        {state === State.REVEAL_ROLES && <RevealRoles players={players} wordsetIcon={wordsetIcon} secretWord={secretWord} numberOfImpostors={numberOfImpostors} rolesRevealed={handleRolesRevealed} />}
        {state === State.READY_TO_START && renderReadyToStart()}
        {state === State.KILLING && <Killing players={players.filter(p => p.state == PlayerState.ALIVE)} killPlayer={handleKillingPlayer} />}
        {state === State.KILLED_CITIZEN && renderCitizenKilledScreen()}
        {state === State.KILLED_IMPOSTOR && renderImpostorKilledScreen()}
        {state === State.GAME_ENDED && <GameEnded impostorWins={impostorWins} numberOfImpostors={numberOfImpostors} newGame={startAgain} />}
      </Card>
    </Main>
  )
}

export default App
