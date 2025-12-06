import { useState } from 'react'
import Subtitle from '../elements/Subtitle';
import PrimaryButton from '../elements/PrimaryButton';
import Text from '../elements/Text';
import SmallText from '../elements/SmallText';

function CustomWordSet({ words, customWordSetFinish }) {
  const [customWordsText, setCustomWordsText] = useState(words.join("\n"))
  const [customWords, setCustomWords] = useState(words)
  const MIN_PALABRAS = 5

  const keyChanged = (newWords) => {
    setCustomWordsText(newWords)
    setCustomWords(newWords.split("\n")
      .map(w => w.trim())
      .filter(Boolean))

    return true;
  }

  return (
    <>
      <Subtitle>📝 Palabras personalizadas</Subtitle>
      <Text>Escribid vuestras propias palabras. <br />
        Una por línea. Chistes internos bienvenidos.</Text>
      <div className='mt-4 mb-6'>
        <textarea
          className="w-full h-52 bg-gray-800 border border-gray-700 rounded-xl 
                   p-4 text-gray-100 text-lg placeholder-gray-500 
                   focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
          placeholder={"Ejemplo:\nManzana\nCristiano Ronaldo\nCoche rojo\nTu primo Paco..."}
          value={customWordsText}
          onChange={(e) => keyChanged(e.target.value)}
        />
      </div>
      <div>
        {customWords.length < MIN_PALABRAS && (<SmallText>Se necesitan al menos {MIN_PALABRAS} palabras</SmallText>)}
        <PrimaryButton disabled={customWords.length < MIN_PALABRAS} onClick={() => customWordSetFinish(customWords)}>Usar palabras</PrimaryButton>
      </div>
    </>
  )
}

export default CustomWordSet
