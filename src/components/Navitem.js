import React from 'react'


function navItem(props, active) {
    return (
        <div className="bgroundnav p-6">
            <div className=" relative right-1 container-active p-2 m-1">
                <i className={props.icon}></i>
            </div>
        </div>
    )
}

export default navItem;