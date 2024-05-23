import { useState } from 'react'
import './App.css'
import PopExit from './components/PopExit/PopExit'
import PopNewCard from './components/PopNewCard/PopNewCard'
import PopBrowse from './components/PopBrowse/PopBrowse'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { cardList } from './data'
import { GlobalStyle } from './global.styled.js'

function App() {
  const [cards, setCards] = useState(cardList)

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">


			<PopExit />
			<PopNewCard />
			<PopBrowse />
			<Header setCards={setCards} cards={cards}/>
			<Main cardList={cards}/>
		
    </div>
    </>
  )
}

export default App
