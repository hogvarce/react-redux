import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    return (
        <li onClick={()=>onVideoSelect(video)} className="list-group-item video">
            <img src={video.snippet.thumbnails.high.url} width="100%" className="inline" />
            <div>
                <h4>{video.snippet.title}</h4>
            </div>
        </li>
    );
}

export default VideoListItem;
