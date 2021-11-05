import React from 'react';
import "./SongCom.scss"

const SongCom = ({myCurrentSong, openlibrary, setopenLib}) => {
    function myLibrary() {
        setopenLib (!openlibrary);
    }
    return (
        <div>
            <div className="song-container">
                <div className="container">
                    <div className="top-infos">
                        <h1 className="top-info-header">Waves</h1>
                        <button onClick={myLibrary} className="top-info-btn">Click</button>
                    </div>
                </div>

                <div className="container">
                    <div className="song-wrapper">
                        <img className="song-image" width="200" height="200" src={myCurrentSong.cover} alt=""/>
                        <h1 className="song-name">{myCurrentSong.name}</h1>
                        <h1 className="song-artist">{myCurrentSong.artist}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SongCom;