import React, {Component} from 'react';

import {connect} from 'react-redux';
import {selectBook, removeBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList(){
        return this.props.books.map((book, i) => {
            return (
                <li
                key={i}
                onClick={()=>this.props.selectBook(book)}
                className="list-group-item">
                    {book.title}
                    <span onClick={()=>this.props.removeBook(book)} className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                </li>
            );
        });
    }
    render(){
        return (
            <div className="col-md-6">
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectBook: selectBook,
        removeBook: removeBook
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
