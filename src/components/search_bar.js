import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchVideos} from '../actions';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        };
    }
    onInputChange(event){
        this.setState({
            term: event.target.value
        });
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchVideos(this.state.term);
        this.setState({ term : '' });
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
                    <input
                    type="text"
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)}
                    className="form-control" />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-primary">Найти</button>
                    </span>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchVideos
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
