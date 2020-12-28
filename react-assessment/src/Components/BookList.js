import {Component} from 'react';

class BookList extends Component {
    render() {
        const mappedBooks = this.props.books.map((e, i) => {
            if(this.props.shelf.includes(this.props.books.title)) {
                return (
                    <div key={i} className="book-info">
                        <img src={e.img} alt={e.title} />
                        <span>{e.title} by {e.author}</span>
                    </div>
                )
            } else {
                return (
                    <div key={i} className="book-info">
                        <img src={e.img} alt={e.title} onClick={() => this.props.addToShelf(e.title)} />
                        <span>{e.title} by {e.author}</span>
                    </div>
                )
            }
        })

        console.log(this.props.shelf)
        console.log(this.props.books)
        return (
            <section className="book-list">
                {mappedBooks}
            </section>
        )
    }
}

export default BookList;