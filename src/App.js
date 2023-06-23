import "./index.css";
import Game from "./components/Game";
import Popup from "./components/Popup";
import {useState} from "react";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  function onGameFinish() {
    setIsPopupOpen(true)
  }
  function closePopup() {
    setIsPopupOpen(false)
  }
  return (
    <div className="App">
      <h1>Игра в крестики-нолики</h1>
      <Game onFinish={onGameFinish}/>
      {isPopupOpen && <Popup closePopup={closePopup} children={'Something else happened'}/>}

    </div>
  );
}

export default App;
