import getRandomFromArray from "../utils/getRandomFromArray"
import phrases from '../utils/phrases.json'
import arrImages from '../utils/arrimages.json'
import './styles/BtnPhrase.css'

const BtnPhrase = ({setPhraseRandom , setImageSelected}) => {

  const handleClick = () => {
   const phrase = getRandomFromArray(phrases)
    setPhraseRandom(phrase)

    const background = getRandomFromArray(arrImages)
    setImageSelected(background)
  }
  return (
    <button className="card__btn" onClick={handleClick}> <span className="flicker1">Siguente</span></button>
  )
}

export default BtnPhrase