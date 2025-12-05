import PrimaryButton from '../elements/PrimaryButton';
import Text from '../elements/Text';
import {PlayerRole} from '../Player'
import Messages from '../Messages';

function GameEnded({ impostorWins, numberOfImpostors, newGame }) {
  const renderImpostorWins = () => {
    const message = numberOfImpostors === 1 ? 'El impostor ha ganado': 'Los impostores han ganado'
    return (
    <>
    <Text className="text-red-400 text-xl font-semibold mb-6">{message} 😈</Text>
    <Text className="text-red-400 text-xl font-semibold mb-6">{Messages.for(PlayerRole.IMPOSTOR).win(numberOfImpostors)}</Text>
    </>)
  }

  const renderCitizensWins = () => (
    <>
    <Text className="text-green-400 text-xl font-semibold mb-6">Los ciudadanos ganan 🎉</Text>
    <Text className="text-green-400 text-xl font-semibold mb-6">{Messages.for(PlayerRole.CITIZEN).win()}</Text>
    </>
  )

  return (
    <>
       {impostorWins && renderImpostorWins()}
       {!impostorWins && renderCitizensWins()}
      <PrimaryButton onClick={() => { newGame() }}>Comenzar otra partida</PrimaryButton>
    </>
  )
}

export default GameEnded
