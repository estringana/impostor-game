import { useState } from 'react'
import Subtitle from '../elements/Subtitle';
import PrimaryButton from '../elements/PrimaryButton';
import Messages from '../Messages';

function SetWordset({ wordsets, wordSetSelected }) {
  const [wordsetMessage, _] = useState(Messages.random.chooseWordset())
  const [selectedId, setSelectedId] = useState('')
  return (
    <>
      <Subtitle>{wordsetMessage}</Subtitle>
      <div className="grid grid-cols-1 gap-3">
        {wordsets.map((cat) => {
          const isSelected = cat.id === selectedId
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedId(cat.id)}
              className={
                "w-full text-left rounded-xl px-4 py-3 transition-all duration-150 " +
                (isSelected
                  ? "bg-gray-100 text-gray-900 shadow-md scale-[1.02]"
                  : "bg-gray-800 text-gray-100 hover:bg-gray-700")
              }
            >
              <div className="font-semibold mb-1">{cat.icon} {cat.label}</div>
              <div className="text-xs text-gray-400">{cat.description}</div>
            </button>
          )
        })}
      </div>
      <div className='mt-6'>
        <PrimaryButton disabled={selectedId.length === 0} onClick={() => wordSetSelected(selectedId)}>A jugar</PrimaryButton>
      </div>
    </>
  )
}

export default SetWordset
