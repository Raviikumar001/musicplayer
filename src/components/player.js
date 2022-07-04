import React,{ useRef, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, 
    faAngleLeft,
     faAngleRight,
     faPause
}
 from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong, isPlaying, setIsPlaying})=>{
    
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration :0
    })

    const audioRef= useRef(null)
    const playSongHandler = ()=>{
        if(isPlaying)
        {
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        }else{
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }

    }

    const getTime = (time)=>
    {
        return (
            Math.floor(time/60)+":"+ ("0"+ Math.floor(time % 60 )).slice(-2)
        )
    }

    const dragHandler = (e)=>{
        audioRef.current.currentTime = e.target.value
        setSongInfo( {...songInfo, currentTime: e.target.value})

    }


    const timeUpdateHandler = (e)=>{
        const current = e.target.currentTime
        const duration = e.target.duration
        setSongInfo({...songInfo, currentTime:current, duration})

    }

    return (
            <div className="player">
            <div className="time-control">
                <p>
                   {getTime(songInfo.currentTime)}
                </p>
                <input
                onChange={dragHandler} 
                min={0} max={songInfo.duration} value={songInfo.currentTime} type="range" />
                <p>{getTime(songInfo.duration)}</p>
            </div>

            <div className="play-control">

                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon className="play"  onClick={playSongHandler} size="2x" icon={isPlaying? faPause: faPlay} />


                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
            <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate ={timeUpdateHandler} ref={audioRef}src={currentSong.audio}></audio>
            
            </div>
    )
}


export default Player