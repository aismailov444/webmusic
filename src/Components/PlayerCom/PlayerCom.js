import React, {useState,useRef} from 'react';
import "./PlayerCom.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause, faForward, faBackward} from "@fortawesome/free-solid-svg-icons";
import {icon} from "@fortawesome/fontawesome-svg-core";

const PlayerCom = ({isPlaying, setPlaying, currentSong, setCurrentSong, array}) => {

    const [time, setTime] = useState({
        current : 0,
        duration : 0
    })

    let audio = useRef("");
    let input =useRef("")

    function handliClick() {
        setPlaying(!isPlaying)
        console.log(isPlaying)
            if(isPlaying) {
                audio.current.pause()
            }else  {
                audio.current.play()
            }
    }

    function halerTimeUpdate () {
        let current = audio.current.currentTime
        let duration = audio.current.duration
        setTime ({...time, current: current, duration: duration})
    }


    function secondsToTime(e) {
        let h = Math.floor(e / 3600).toString().padStart(2, '0'),
            m = Math.floor(e % 3600 / 60).toString().padStart(2, '0'),
            s = Math.floor(e % 60).toString().padStart(2, '0');

        return m + ':' + s;
    }

    function skipSong (open) {
        let indexSong = array.findIndex ( i => i.id === currentSong.id);
        if (open === 'prev') {
            setCurrentSong(array[indexSong -1])

            if (indexSong === 0) {
                setCurrentSong(array[5]);
            }

        }else {
            setCurrentSong (array[indexSong +1])

            
            if (indexSong === 5) {
                setCurrentSong(array[0]);
            }

        }
    }

    function handleChange(e){
        audio.current.currentTime = e.target.value
    }
 
    return (
        <div>
            <div className="container box-container">
                <div className="input">
                    <p id="startTime">{secondsToTime(time.current)}</p>
                    <input onChange={handleChange} value={time.current} ref={input} className="range" type="range"/>
                    <p id="endTime">{secondsToTime(time.duration)}</p>
                </div>
                <div className="player-icons">
                    <FontAwesomeIcon onClick={() => skipSong("prev")} size="2x"  icon={faBackward}/>
                    <FontAwesomeIcon onClick={handliClick} size="2x" icon={isPlaying === true ? faPause : faPlay} />
                    <FontAwesomeIcon onClick={() => skipSong("next")} size="2x" icon={faForward}/>
                </div>

                <audio onLoadedData={halerTimeUpdate} onTimeUpdate={halerTimeUpdate} ref={audio} src={currentSong.audio}>

                </audio>
            </div>
        </div>
    );
};

export default PlayerCom;