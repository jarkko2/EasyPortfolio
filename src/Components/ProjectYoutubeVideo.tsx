import YouTube from 'react-youtube';
import ProjectTypeItem from './ProjectTypeItem';

export default function ProjectYoutubeVideo({item} : {item : ProjectTypeItem}) {
    const opts = {
        height: '500px',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        <YouTube videoId={item.ytVidId} opts={opts}/>
    )
}