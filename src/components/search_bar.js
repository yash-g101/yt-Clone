import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = { term: ''};
    }

    render() {
        return ( 
            <div className="search-bar">
                <input
                    value = {this.state.term} 
                    onChange = {(event) => this.onInputChange(event.target.value)} />
                
                <button type="button" className="btn btn-outline-dark btn-sm" 
                    onClick={(event) => this.onButtonClick(this.state.term)}>Search</button>
            </div>           
        );
    }

    onInputChange(term) {
        this.setState({term});
    };

    onButtonClick(term) {
        this.props.onButtonPress(term);
    }

}

export default SearchBar;