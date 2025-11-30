import PrimaryButton from '../elements/PrimaryButton';
import {PlayerRole} from '../Player'
import Messages from '../Messages';

function GameEnded({ impostorWins, newGame }) {
  return (
    <>
      <p className={(impostorWins ? 'text-red-400' : 'text-green-400') + ' text-xl font-semibold mb-6'}>
       {impostorWins ? Messages.for(PlayerRole.IMPOSTOR).win() : Messages.for(PlayerRole.CITIZEN).win()}
      </p>
      <PrimaryButton onClick={() => { newGame() }}>Comenzar otra partida</PrimaryButton>
    </>
  )
}

export default GameEnded
