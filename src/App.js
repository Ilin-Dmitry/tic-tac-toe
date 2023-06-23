import "./index.css";
import Game from "./components/Game";
import Popup from "./components/Popup";
import React, {useState} from "react";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [whoWon, setWhoWon] = useState('')
  function setWinner(winner) {
    setWhoWon(winner)
  }

  function onGameFinish() {
    setIsPopupOpen(true)
  }
  function closePopup() {
    setIsPopupOpen(false)
  }
  return (
    <div className="App">
      <h1>Игра в крестики-нолики</h1>
      <Game onFinish={onGameFinish} winner={whoWon} setWinner={setWinner}/>
      {isPopupOpen && <Popup closePopup={closePopup} children={whoWon}/>}

    </div>
  );
}

export default App;
