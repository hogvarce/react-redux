import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return (
            <div>
                <img src="/img/preloader.gif" className="preloader" />
            </div>
        )
    }
    const videoId= video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="detail">
                <h1>{video.snippet.title}</h1>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;
