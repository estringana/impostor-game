import { useState } from 'react'
import { PlayerRole } from '../App'

const State = {
  PASS_PHONE: 1,
  REVEALING: 2,
}

function RevealRoles({ players, footbalPlayer, rolesRevealed }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentState, setCurrentState] = useState(State.PASS_PHONE)

  const passPhone = () => {
    return (
      <div>
        <h2>Pasa el telefono a {players[currentIndex].name}</h2>
        <div>
          <button onClick={() => setCurrentState(State.REVEALING)}>Soy {players[currentIndex].name}</button>
        </div>
      </div>
    )
  }

  const showCitizien = () => {
    return (
      <div>
        <p>El jugador es {footbalPlayer}</p>
      </div>
    )
  }

  const showImpostor = () => {
    return (
      <div>
        <p>{players[currentIndex].name} eres el IMPOSTOR</p>
      </div>
    )
  }

  const revealNext = () => {
    const next = currentIndex + 1;
    if (next == players.length) {
      rolesRevealed()
      return
    }
    setCurrentIndex(next)
    setCurrentState(State.PASS_PHONE)
  }

  const revealing = () => {
    return <>
      {players[currentIndex].role == PlayerRole.CITIZIEN && showCitizien()}
      {players[currentIndex].role == PlayerRole.IMPOSTOR && showImpostor()}
      <button onClick={() => revealNext()}>Entendito</button>
    </>
  }

  return (
    <>
      {currentState === State.PASS_PHONE && passPhone()}
      {currentState === State.REVEALING && revealing()}
    </>
  )
}

export default RevealRoles
