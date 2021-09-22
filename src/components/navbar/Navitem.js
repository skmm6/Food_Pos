import React from 'react'


function navItem(props, active) {
    return (
        <div className="bgroundnav w-24 h-24 rounded-l-2xl flex justify-center items-center ml-2">
            <div className="container-active p-3 mr-2">
                <i className={props.icon}></i>
            </div>
        </div>
    )
}

export default navItem;