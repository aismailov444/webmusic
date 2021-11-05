import React from 'react';
import "./SidebarCom.scss"
import SidebarsongCom from "../SidebarsongCom/SidebarsongCom";

const SidebarCom = ({songArray, openlibrary, setopenLib ,setCurrentSong}) => {
    return (
        <div className={`${openlibrary === true ? "" : "toggle"}`}>
            <div className="wrapper">
                <h1>Library</h1>
                {
                    songArray.map(el => {
                        return  <SidebarsongCom element={el} setCurrentSong={setCurrentSong}/>
                    })
                }


            </div>
        </div>
    );
};

export default SidebarCom;