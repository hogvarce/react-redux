import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBook } from '../actions';

class AddBook extends Component {

    handleSubmit(e) {
        e.preventDefault();
        let book = {
            title: e.target.querySelector('input[name="title"]').value,
            pages: e.target.querySelector('input[name="pages"]').value
        };
        addBook(book);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" placeholder="title" name="title" /><input type="text" placeholder="pages" name="pages" /><button>Create</button>
            </form>
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
        addBook: addBook
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);