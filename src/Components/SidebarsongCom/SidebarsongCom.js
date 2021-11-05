import React from 'react';
import "./Sidebarsong.scss"

const SidebarsongCom = ({element, setCurrentSong}) => {
    function Change() {
        setCurrentSong(element)
    }

    return (
        <div>
            <div className="row" onClick={Change}>
                <img className="images" src={element.cover} alt="image"/>
                <div className="infos">
                    <h1 className="names">{element.name}</h1>
                    <h1 className="artist">{element.artist}</h1>
                </div>
            </div>
        </div>
    );
};

export default SidebarsongCom;