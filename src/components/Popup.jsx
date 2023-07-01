import React, {useEffect} from 'react';

const Popup = ({closePopup, children}) => {

  function closeOnEsc(e) {
    if (e.key === "Escape") closePopup()
  }
  function closeOnDocumentClick(e) {
    const closeButton = document.querySelector('.popup__close')
    const popup = document.querySelector('.popup')
    if (e.target === closeButton || e.target === popup) closePopup()
  }

  useEffect(() => {
    document.addEventListener('keydown', closeOnEsc)
    document.addEventListener('click', closeOnDocumentClick)
    return () => {
      document.removeEventListener("keydown", closeOnEsc)
      document.removeEventListener('click', closeOnDocumentClick)
    }
  })
  return (
      <div className="popup">
        
        <div className="popup__content">
          <div className="popup__close"></div>
          <h3>{children}</h3>
        </div>
      </div>
  );
};

export default Popup;
