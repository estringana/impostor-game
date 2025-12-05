import { useState } from 'react'
import { PlayerRole } from '../Player'
import Text from '../elements/Text'
import PrimaryButton from '../elements/PrimaryButton';
import WarningButton from '../elements/WarningButton';
import Messages from '../Messages';

const State = {
  PASS_PHONE: 1,
  LOADING: 2,
  REVEALING: 3,
}

function RevealRoles({ players, secretWord, wordsetIcon, numberOfImpostors, rolesRevealed }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentState, setCurrentState] = useState(State.PASS_PHONE)

  const handleConfirmPlayer = () => {
    setCurrentState(State.LOADING)
    setTimeout(() => {
      setCurrentState(State.REVEALING)
    }, 1000); // 700ms de suspense
  };

  const passPhone = () => {
    const message = Messages.random.passPhone(players[currentIndex].name);
    return (
      <div key='currentIndex' className='animate-fade-in-up'>
        <Text>📱 {message}</Text>
        <PrimaryButton onClick={() => handleConfirmPlayer()}>👉 Soy {players[currentIndex].name}</PrimaryButton>
      </div>
    )
  }

  const loading = () => {
    return (
      <div className="animate-fade-in-up">
        <p className="mb-6 text-center">Cargando rol...</p>
      </div>
    )
  }

  const showCitizien = () => {
    return (
      <>
        <Text>{Messages.for(PlayerRole.CITIZEN).assignment()}</Text>
        <Text>Tu palabra secreta es: {wordsetIcon} {secretWord}</Text>
        <PrimaryButton onClick={() => revealNext()}>Entendido</PrimaryButton>
      </>
    )
  }

  const showImpostor = () => {
    const other = players.find((p, i) => p.role === PlayerRole.IMPOSTOR && i !== currentIndex)
    return (
      <>
        <Text>😈 {Messages.for(PlayerRole.IMPOSTOR).assignment(other ?  other.name : null)}</Text>
        <WarningButton onClick={() => revealNext()}>🤫 Soy impostor</WarningButton>
      </>
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
      {players[currentIndex].role == PlayerRole.CITIZEN && showCitizien()}
      {players[currentIndex].role == PlayerRole.IMPOSTOR && showImpostor()}

    </>
  }

  return (
    <>
      {currentState === State.PASS_PHONE && passPhone()}
      {currentState === State.LOADING && loading()}
      {currentState === State.REVEALING && revealing()}
    </>
  )
}

export default RevealRoles
