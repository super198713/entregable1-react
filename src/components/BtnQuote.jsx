import getRandomElemArray from "../utils/GetRandomElemArray"

const BtnQuote = ({setQuote, phrase, setnumberBg}) => {

  const andleRandomPhrase = () =>{
    setQuote(getRandomElemArray(phrase))

    setnumberBg( getRandomElemArray([1, 2, 3, 4]))
  }  
  return (
    <button className="container__btn" onClick={andleRandomPhrase}>click aquí </button>
    
  )
}

export default BtnQuote