import {Component} from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ''
        }
    }

    render() {
        return (
            <section className="search-bar">
                <input />
                <button>search</button>
                <button>clear search</button>
            </section>
        )
    }
}

export default SearchBar;