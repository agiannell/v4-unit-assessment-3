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
        // console.log(this.props)
        // console.log(this.state.userInput)

        let clearButton;

        if (!this.state.userInput) {
            clearButton = <button className='hidden-button' onClick={this.handleClear}>clear search</button>
        } else {
            clearButton = <button onClick={this.handleClear}>clear search</button>
        }
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
                    {clearButton}
                </form>
            </section>
        )
    }
}

export default SearchBar;