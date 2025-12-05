import { useState, useRef } from 'react'
import Subtitle from '../elements/Subtitle';
import SecundaryButton from '../elements/SecundaryButton';
import InputText from '../elements/InputText';
import PrimaryButton from '../elements/PrimaryButton';
import Messages from '../Messages';
import SmallText from '../elements/SmallText';
import ListItem from '../elements/ListItem';

function ImpostorsNumber({numberOfImpostors, setNumberOfImpostors, impostorsSelected}) {
  //This is required so it does not change message on every re-rendering
  const [chooseImpostorsMessage, _] = useState(Messages.random.howManyImpostors())

  return (
    <>
      <Subtitle>{chooseImpostorsMessage}</Subtitle>
      {/* Botones */}
      <div className="flex gap-4 justify-center mb-10">
        
        {/* 1 impostor */}
        <button
          type="button"
          onClick={() => setNumberOfImpostors(1)}
          className={
            "flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-150 w-36 " +
            (numberOfImpostors === 1
              ? "bg-gray-100 text-gray-900 shadow-md scale-[1.02]"
              : "bg-gray-800 text-gray-100 hover:bg-gray-700 active:scale-[0.97]")
          }
        >
          😈 <span>1</span>
        </button>

        {/* 2 impostores */}
        <button
          type="button"
          onClick={() => setNumberOfImpostors(2)}
          className={
            "flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-150 w-36 " +
            (numberOfImpostors === 2
              ? "bg-gray-100 text-gray-900 shadow-md scale-[1.02]"
              : "bg-gray-800 text-gray-100 hover:bg-gray-700 active:scale-[0.97]")
          }
        >
          😈😈 <span>2</span>
        </button>
      </div>
      <PrimaryButton onClick={() => impostorsSelected()}>Elegir tematica</PrimaryButton>
    </>
  )
}

export default ImpostorsNumber
