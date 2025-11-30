import { useState, useRef } from 'react'
import Subtitle from '../elements/Subtitle';
import SecundaryButton from '../elements/SecundaryButton';
import InputText from '../elements/InputText';
import PrimaryButton from '../elements/PrimaryButton';
import Messages from '../Messages';
import SmallText from '../elements/SmallText';
import ListItem from '../elements/ListItem';

function NewGame({ players, addNewPlayer, removePlayer, startGame}) {
  const [newPlayer, setNewPlayer] = useState('');
  //This is required so it does not change message on every re-rendering
  const [choosePlayersMessage, _] = useState(Messages.random.choosePlayers())

  const handlePlayersChange = (e) => {
    addNewPlayer(newPlayer)
    setNewPlayer('')
  }

  const handlePlayerRemove = (player) => {
    removePlayer(player)
  }

  const playersList = players.map(player =>
    <ListItem key={player}>
      <span className="text-left">{player}</span>      
      <SecundaryButton onClick={() => handlePlayerRemove(player)}>❌</SecundaryButton>
    </ListItem>
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handlePlayersChange()
    }
  }

  return (
    <>
      <Subtitle>{choosePlayersMessage}</Subtitle>
      <div>
        <div className='flex gap-2 mb-6'>
          <InputText type="text" value={newPlayer} onChange={e => setNewPlayer(e.target.value)} placeholder={Messages.random.namePlaceholder()} onKeyDown={handleKeyDown}/>
          <SecundaryButton onClick={handlePlayersChange}>Añade</SecundaryButton>
        </div>
      </div>
      <div className='flex flex-col space-y-2 mt-4 mb-6'>{playersList}</div>
      <div>
        {players.length < 3 && (<SmallText>Se necesitan al menos 3 jugadores</SmallText>)}
      <PrimaryButton disabled={players.length < 3 || newPlayer.length > 0} onClick={() => startGame()}>Comenzar partida</PrimaryButton>
      </div>
    </>
  )
}

export default NewGame
