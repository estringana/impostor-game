import PrimaryButton from '../elements/PrimaryButton'
import Text from '../elements/Text'

export const INTRO_MESSAGES = [
  "Uno de vosotros es el impostor. Sí, alguien está mintiendo. Los demás… intentad no hacer el ridículo.",
  "Hay un impostor entre vosotros. No, no es sorpresa. A ver si esta vez acertáis alguna.",
  "Uno es el impostor. Los demás sois víctimas potenciales. ¡A jugar!",
  "Un jugador será el impostor. Buena suerte adivinando quién… visto lo visto, os hará falta.",
  "Hay un impostor. Ya veréis cómo lo liáis en la primera ronda. Pero oye… confiamos en vosotros. Más o menos.",
  "Uno de vosotros va a mentir mejor que los demás. Spoiler: normalmente no."
];

export function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function Lobby({ createGame }) {
  return (
    <>
      <Text>{pickRandom(INTRO_MESSAGES)}</Text>
      <PrimaryButton onClick={() => createGame()}>Jugar nueva partida</PrimaryButton>
    </>
  )
}

export default Lobby
