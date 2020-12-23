import {Component} from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ''
        }
    }

    handleChange(e) {
        this.setState({
            userInput: e
        })
    }

    handleClick = e => {
        e.preventDefault();
        this.props.filterBooks(this.state.userInput);       
    }

    handleClear = e => {
        e.preventDefault();
        this.props.reset();

        this.setState({
            userInput: ''
        });

    }

    render() {
        console.log(this.props)
        console.log(this.state.userInput)
        return (
            <section className="search-bar">
                <form>
                    <input 
                        value={this.state.userInput}
                        type="text" 
                        placeholder="Enter Book Title"
                        onChange={e => this.handleChange(e.target.value)}
                    />
                    <button onClick={this.handleClick}>search</button>
                    <button onClick={this.handleClear}>clear search</button>
                </form>
            </section>
        )
    }
}

export default SearchBar;