import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBook } from '../actions';

class AddBook extends Component {

    componentWillMount() {
        this.setState({
            warn: false
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let inputs = {
            title: e.target.querySelector('input[name="title"]'),
            pages: e.target.querySelector('input[name="pages"]')
        };
        if (!inputs.title.value || !inputs.title.value) {
            this.setState({
                warn: true
            });
            return;
        }
        let book = {
            title: inputs.title.value,
            pages: inputs.pages.value
        };
        this.props.addBook(book);
        inputs.title.value = inputs.pages.value = '';
        this.setState({
            warn: false
        });
    }

    render() {
        let warning = (this.state.warn) ? <span className="warn">Заполните поле</span>: '';
        return(
            <div className="col-md-6">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder="title" name="title" />
                    {warning}
                    <input type="text" placeholder="pages" name="pages" />
                    {warning}
                    <button>Create</button>
                </form>
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
        addBook: addBook
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);