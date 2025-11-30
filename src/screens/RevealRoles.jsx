import { useState } from 'react'
import { PlayerRole } from '../App'
import Text from '../elements/Text'
import PrimaryButton from '../elements/PrimaryButton';
import WarningButton from '../elements/WarningButton';

const State = {
  PASS_PHONE: 1,
  LOADING: 2,
  REVEALING: 3,
}

export const CITIZEN_MESSAGES = [
  "Eres un simple ciudadano. Qué glamour.",
  "No eres el impostor… vaya, qué sorpresa.",
  "Ciudadano. Haz lo que puedas, que tampoco es mucho.",
  "Inocente total. Como tu historial de decisiones.",
  "Te ha tocado ser ciudadano. No te duermas, crack."
];

export const PASS_PHONE_MESSAGES = [
  "Pásale el móvil a {{player}}. Y no mires, cotilla.",
  "Turno de {{player}}. Los demás, a mirar al techo.",
  "{{player}}, te toca. Los demás, comportaos… por una vez.",
  "Entrega el teléfono a {{player}}. Sí, con cuidado, que es caro.",
  "Pásaselo a {{player}}. Y respira lejos del móvil, gracias."
];

export const IMPOSTOR_MESSAGES = [
  "Eres el IMPOSTOR. Intenta no sonreír demasiado.",
  "IMPOSTOR. Ya puedes activar tu modo rata.",
  "Te ha tocado ser impostor. A ver si esta vez no te pillan al minuto.",
  "Eres el impostor. Procura no celebrarlo en voz alta.",
  "IMPOSTOR detectado. Tú sabrás qué haces con ese poder."
];

export function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function RevealRoles({ players, footbalPlayer, rolesRevealed }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentState, setCurrentState] = useState(State.PASS_PHONE)

  const handleConfirmPlayer = () => {
    setCurrentState(State.LOADING)
    setTimeout(() => {
      setCurrentState(State.REVEALING)
    }, 1000); // 700ms de suspense
  };

  const passPhone = () => {
    const message = pickRandom(PASS_PHONE_MESSAGES).replace("{{player}}", players[currentIndex].name);
    return (
      <div key='currentIndex' className='animate-fade-in-up'>
        <Text>{message}</Text>
        <PrimaryButton onClick={() => handleConfirmPlayer()}>Soy {players[currentIndex].name}</PrimaryButton>
      </div>
    )
  }

  const loading = () => {
    return (
      <div className="animate-fade-in-up">
        <p className="mb-6 text-center">Preparando tu rol...</p>
      </div>
    )
  }

  const showCitizien = () => {
    return (
      <>
        <Text>{pickRandom(CITIZEN_MESSAGES)}</Text>
        <Text>El jugador es {footbalPlayer}</Text>
        <PrimaryButton onClick={() => revealNext()}>Entendido</PrimaryButton>
      </>
    )
  }

  const showImpostor = () => {
    return (
      <>
        <Text>{pickRandom(IMPOSTOR_MESSAGES)}</Text>
        <WarningButton onClick={() => revealNext()}>🤫 Soy el impostor</WarningButton>
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
      {players[currentIndex].role == PlayerRole.CITIZIEN && showCitizien()}
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
