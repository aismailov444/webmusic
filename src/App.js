import React, {useState} from "react";
import SongCom from "./Components/SongCom/SongCom";
import data from "./data";
import SidebarCom from "./Components/SidebarCom/SidebarCom";
import PlayerCom from "./Components/PlayerCom/PlayerCom";

function App() {
    const [array, setArray] = useState(data)
    const [currentSong, setCurrentSong] = useState(array[0])
    const [openLibrary, setopenlibrary] = useState(false);
    const [isPlaying, setPlaying] = useState(false);

  return (
    <div className="App">
        <SongCom myCurrentSong={currentSong} openlibrary={openLibrary} setopenLib={setopenlibrary}/>
        <SidebarCom songArray={array} openlibrary={openLibrary} setCurrentSong={setCurrentSong}/>
        <PlayerCom isPlaying={isPlaying} setPlaying={setPlaying} currentSong={currentSong} setCurrentSong={setCurrentSong} array={array}/>
    </div>
  );
}

export default App;
