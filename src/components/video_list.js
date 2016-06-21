import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { fetchVideos, selectVideo } from '../actions';


class VideoList extends Component {
    componentWillMount(){
        this.props.fetchVideos();
    }
    renderVideos(){
        const videos = this.props.videos.items || [];
        if (!videos.length) return <li> Loading ... </li>
        return videos.map((video, i) => {
            return (
                <li onClick={()=>this.props.selectVideo(video)} key={video.etag} className="videos list-group-item raw clearfix">
                    <div className="col-md-4"><img className="thumb" src={video.snippet.thumbnails.default.url} /></div>
                    <div  className="col-md-8">{video.snippet.title}</div>
                </li>
            )
        });
    }
    render(){
        return (
            <ul className="list-group col-md-5">
                {this.renderVideos()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        videos: state.videos.all
    }
}


export default connect(mapStateToProps, {fetchVideos, selectVideo})(VideoList);
