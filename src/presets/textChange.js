import React from "react";
import Typewriter from 'typewriter-effect';


const TextChange = () => {
  return (
    <Typewriter
  options={{
    strings: ['Front-end Developer', 'UI/UX Designer', 'Video Editor', ' YouTuber'],
    autoStart: true,
    loop: true,
  }}
/>
  );
}
 

export default TextChange;