import React from 'react'
import './Sidebar.css'
import { sideBarList } from './SideBarList.js';

export default function Sidebar(){
    return (
        <>
            <div className = 'SideBar'>
                <div className='logo'>
                    <Logo/>
                </div>
                <ul>
                    {sideBarList.map ((val, key) =>{
                        return(
                            <li key={key}
                                id= {window.location.pathname === val.link ? 'active' : ''}
                                className='row' onClick={()=>{
                                window.location.pathname = val.link}}>
                                <div id='icon'>{val.icon}</div>
                                <div id='name'>{val.name}</div>
                            </li>
                        );
                    })
                    }
                </ul>
            </div>
        </>
    );
}
