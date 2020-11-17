import React, { useContext, useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

import MusicContext from '../../context/music_context';
import MusicListItem from './music_list_item';

const MusicPlayer = ({ visible, setVisible }) => {
    const { music, setMusic } = useContext(MusicContext);

    const [ playing, setPlaying ] = useState();
    const [ queue, setQueue ] = useState();

    const config = {
        soundcloud: {
            options : {}
        }
    }

    const updatePlayer = () => {
        setPlaying(music[0]);
        setQueue(music.slice(1));
    }

    const display = visible ? "music-modal-container" : "music-hidden";

    // useEffect(() => {
    //     // setPlaying(music[0]);
    //     // setQueue(music.slice(1));
    //     updatePlayer();
    // }, [music]);


    console.log(music);
    console.log(playing);
    console.log(queue);
    
    return (
            <div className="music-player">
                {/* <h3 className="p-color">Music Player</h3> */}

                {/* { playing && */}
                    <ReactPlayer 
                        controls={true}
                        config={config}
                        width={'150px'}
                        height={'150px'}
                        // url={playing.audio} />
                        url={'https://www.youtube.com/playlist?list=PLm2X5PEC8_0xzwUOygMsTdIDB8gSWHQBM'} />
                {/* }  */}

                {
                    queue && 
                    <ul>
                        {
                            queue.map(m => (
                                <MusicListItem song={m} />
                            ))
                        }
                    </ul>
                }

                {/* <button 
                    className="button"
                    onClick={() => setVisible(false)}>
                    Close
                </button> */}
            </div>
    )
}

export default MusicPlayer;