import { useState } from 'react'

function Killing({ players, killPlayer }) {
  const [selected, setSelected] = useState('');

  return (
    <>
      <h2>Quien es el impostor?</h2>
      {players.map((p, index) => (
        <div key={index}>
          <label >
            <input
              type="radio"
              value={p.name}
              checked={selected === p.name}
              onChange={() => setSelected(p.name)}
            />
            {p.name}
          </label>
        </div>
      ))}

      {selected && <button onClick={() => killPlayer(selected)}>Matar a {selected}</button>}
    </>
  )
}

export default Killing
