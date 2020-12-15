import React, { useState } from 'react';
import Slider from 'react-input-slider';

const VolumeSlider = ({ volume, setVolume }) => {
    return (
        <div className="volume-slider">
            <Slider 
                axis="y"
                onChange={({ y }) => setVolume(y)} 
                y={volume}
                ymax={1}
                ymin={0}
                ystep={.01}
                yreverse={true}
            />
        </div>
    )
}

export default VolumeSlider;