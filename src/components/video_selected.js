import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { selectVideo } from '../actions';

require('../../style/videos.scss');

class VideoSelected extends Component {
    componentWillMount(){
        this.props.selectVideo();
    }
    render(){
        const select = this.props.select;
        if (_.isEmpty(select)) return <div className="col-md-7"> loading ...</div>
        return(
            <div className="col-md-7">
                <iframe width="100%" height="480" src={`https://www.youtube.com/embed/${select.id.videoId}`} frameBorder="0" allowFullScreen></iframe>
                <h2>{select.snippet.title}</h2>
                <p>{select.snippet.description}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        select: state.videos.select
    }
}


export default connect(mapStateToProps, {selectVideo})(VideoSelected);
