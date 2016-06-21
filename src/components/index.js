import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import VideoSelected from './video_selected';
import VideoList from './video_list';
import SearchBar from './search_bar';

require('../../style/videos.scss');

export default class Index  extends Component {
    render(){
        return(
            <div>
                <SearchBar />
                <hr />
                <div className="row">
                    <VideoSelected />
                    <VideoList />
                </div>
            </div>
        )
    }
}
