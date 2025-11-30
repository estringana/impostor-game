import { useState, useRef } from 'react'
import Subtitle from '../elements/Subtitle';
import Text from '../elements/Text';
import SecundaryButton from '../elements/SecundaryButton';
import InputText from '../elements/InputText';
import PrimaryButton from '../elements/PrimaryButton';

function NewGame({ players, addNewPlayer, removePlayer, startGame}) {
  const [newPlayer, setNewPlayer] = useState('');
  const newPlayerInputRef = useRef(null);

  const handlePlayersChange = (e) => {
    addNewPlayer(newPlayer)
    setNewPlayer('')
    newPlayerInputRef.current.focus()
  }

  const handlePlayerRemove = (player) => {
    removePlayer(player)
    newPlayerInputRef.current.focus()
  }

  const playersList = players.map(player =>
    <div className='flex items-center justify-between bg-gray-800 rounded-lg px-4 py-2 text-gray-100' key={player}>
      {player}
      <SecundaryButton onClick={() => handlePlayerRemove(player)}>X</SecundaryButton>
    </div>
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handlePlayersChange()
    }
  }

  return (
    <>
      <Subtitle>Hora de decir quien va a jugar</Subtitle>
      <Text>Jugadores</Text>
      <div className='space-y-2 mb-6'>{playersList}</div>
      <div>
        <div className='flex gap-2 mb-6'>
          <InputText ref={newPlayerInputRef} type="text" value={newPlayer} onChange={e => setNewPlayer(e.target.value)} placeholder='Escribe aqui el nombre...' autoFocus onKeyDown={handleKeyDown}/>
          <SecundaryButton onClick={handlePlayersChange}>Añade</SecundaryButton>
        </div>
      </div>
      <div>
      <PrimaryButton disabled={players.length < 3} onClick={() => startGame()}>Comenzar partida</PrimaryButton>
      </div>
    </>
  )
}

export default NewGame
