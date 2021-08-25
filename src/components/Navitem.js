import React from 'react'


function navItem(props, active) {
    return (
        <div className="bgroundnav p-5">
            <div className="container-active p-2 m-1">
                <i className={props.icon}></i>
            </div>
        </div>
    )
}

export default navItem;