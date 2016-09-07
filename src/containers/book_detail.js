import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render(){
        if (!this.props.book){
            return <div className="col-md-6 pull-right">Select book to get started.</div>
        }
        return(
            <div className="col-md-6 pull-right">
                <h3>Detail for:</h3>
                <div>{this.props.book.title}</div>
                <div>{this.props.book.pages}</div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);
