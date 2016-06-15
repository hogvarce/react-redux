import React, {Component} from 'react';

class SearchBar extends Component  {
    constructor(props){
        super(props);
        this.state = {term: ''};
        this.onSubmite = this.onSubmite.bind(this);
    }
    render(){
        return (
            <div>
                <form className="form-inline" id="SearchBar" onSubmit={this.onSubmite} >
                    <div className="form-group">
                        <input name="search" className="form-control" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Найти</button>
                    </div>
                </form>
            </div>
        )
    }
    onInputChange(term){
        this.props.onSearchTermChange(term);
    }
    onSubmite(event){
        event.preventDefault();
        this.setState({
            term: event.target.querySelector('input[name="search"]').value
        });
        this.onInputChange(event.target.querySelector('input[name="search"]').value);
    }
};

export default SearchBar;
