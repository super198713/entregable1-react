import './App.css'
import Quote from './components/Quote'
import phrase from'./utils/pharses.json'
import BtnQuote from './components/BtnQuote'
import { useState } from 'react'
import GetRandomElemArray from './utils/GetRandomElemArray'

function App() {
  
  const phraseRandom = GetRandomElemArray(phrase)
  const numberRandom = GetRandomElemArray([1, 2, 3, 4])

  const [quote, setQuote] = useState(phraseRandom)

  const [numberBg, setnumberBg] = useState(numberRandom)

  const bgStyle = {
    backgroundImage: ` linear-gradient( rgba( 0,0,255,.3), rgba(0, 0, 255, .3)), url(/fondo${numberBg}.jpg)`
  }

  return (
   
    <div className='container' style={bgStyle}>
      <img className='container__img' src="/animado.png" alt="esto es una galleta" />
      <h1 className='container__title'>Galleta de la fortuna</h1>
      <Quote phrase={quote}/>
      <BtnQuote 
      setQuote={setQuote}
      phrase={phrase}
      setnumberBg={setnumberBg}
      />
    </div>
      
  )
}

export default App
