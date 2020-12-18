import {Component} from 'react';

class BookList extends Component {
    render() {
        return (
            <section className="book-list">
                <h1>Your Shelf</h1>
                <button>clear shelf</button>
            </section>
        )
    }
}

export default BookList;