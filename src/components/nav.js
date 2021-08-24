import React from 'react'
import logo from './logo.svg'
import NavItem from './Navitem'




function nav() {
    return (
        <div className=" bg-basedark rounded-2xl fixed left-0 flex flex-col items-center pt-3 pb-3 w-24 overflow-hidden">
            <div className="bg-primoryop m-4 p-3 rounded-xl">
             <img src={logo} alt="Logo" />
            </div>

            <NavItem />
  
        </div>
    )
}
export default nav;