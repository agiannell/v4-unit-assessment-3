import {Component} from 'react';

class BookList extends Component {
    render() {
        const mappedBooks = this.props.books.map((e, i) => (
            <div key={i} className="book-info">
                <img src={e.img} alt={e.title} onClick={() => this.props.addToShelf(e.title)} />
                <span>{e.title} by {e.author}</span>
            </div>
        ))
        return (
            <section className="shelf">
                {mappedBooks}
            </section>
        )
    }
}

export default BookList;