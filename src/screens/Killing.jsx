import { useState } from 'react'
import Subtitle from '../elements/Subtitle'
import WarningButton from '../elements/WarningButton';

function Killing({ players, killPlayer }) {
  const [selected, setSelected] = useState('');

  return (
    <>
      <Subtitle>Quien es el impostor?</Subtitle>
      <div className='space-y-2 mb-6'>
        {players.map((p, index) => (
          <div key={index} className={(p.name == selected ? 'bg-gray-700 border border-gray-500' : 'bg-gray-800 hover:bg-gray-700') + ' cursor-pointer flex items-center justify-between bg-gray-800 rounded-lg px-4 py-3 cursor-pointer transition-colors'}
            onClick={() => setSelected(p.name)} >
            {p.name}
          </div>
        ))}
      </div>
      {selected && <WarningButton onClick={() => killPlayer(selected)}>Matar a {selected}</WarningButton>}
    </>
  )
}

export default Killing
