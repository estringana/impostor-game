import PrimaryButton from '../elements/PrimaryButton'
import Text from '../elements/Text'
import Messages from '../Messages'

function Lobby({ createGame }) {
  return (
    <>
      <Text>{Messages.random.intro()}</Text>
      <PrimaryButton onClick={() => createGame()}>Jugar nueva partida</PrimaryButton>
    </>
  )
}

export default Lobby
