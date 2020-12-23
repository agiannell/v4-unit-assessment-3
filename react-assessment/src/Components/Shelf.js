import {Component} from 'react';

class Shelf extends Component {
    render() {
        const mappedShelf = this.props.shelf.map((e, i) => {
            return (
            <section key={i}>
                <h3>{e}</h3>
            </section>
        )})
        return (
            <section className="book-list">
                <h1>Your Shelf</h1>
                <button onClick={this.props.clearShelf}>clear shelf</button>
                <h3>{mappedShelf}</h3>
            </section>
        )
    }
}

export default Shelf;