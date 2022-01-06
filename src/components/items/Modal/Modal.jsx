import React from 'react'
import "./items/modal.css"


    const Modal = ({active, setActive}) => { 
    return (
        
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)} >
            <div className="modal__content" onClick={e => e.stopPropagation()}>

            </div>

        </div>
        
    )
};

export default Modal;
