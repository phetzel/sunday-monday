import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../../../app/assets/images/loading.json';

const ActivityIndicator = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
        <div>
            <Lottie 
                options={defaultOptions}
                height={100}
                width={100}
            />
        </div>
    )
}

export default ActivityIndicator;