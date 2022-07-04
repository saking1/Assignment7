import React from 'react'
import "./Video.css";

function Video() {

    const [playing, setPlaying] = useState (false); 
    const videoRef = useRef (null); 

    const handleVideoPress = () => {

      // stop video 
          if (playing) {
            videoRef.current.pause();
          } else {
            videoRef.current.play(); 
            setPlaying(true);
          }
          

      // start video 


  }
  return <div className="video">
        <video 
          onClick={handleVideoPress}
          className="video_Player"
          loop
          ref={videoRef}
          src="https://www.youtube.com/watch?v=EMl2QAphkGc"
          ></video>

          <VideoFooter />
          {/* video sidebar */}

  </div>
  
}

export default Video