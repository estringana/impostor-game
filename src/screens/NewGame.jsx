import { useState, useRef } from 'react'

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
    <li key={player}>{player} <button onClick={() => handlePlayerRemove(player)}>X</button></li>
  );

  return (
    <>
      <h2>Hora de decir quien va a jugar</h2>
      <h3>Jugadores</h3>
      <ul>{playersList}</ul>
      <div>
        <input ref={newPlayerInputRef} type="text" value={newPlayer} onChange={e => setNewPlayer(e.target.value)} placeholder='Escribe aqui el nombre...' autoFocus />
        <button onClick={handlePlayersChange}>Añade</button>
      </div>
      <div>
      <button disabled={players.length < 3} onClick={() => startGame()}>Comenzar partida</button>
      </div>
    </>
  )
}

export default NewGame
