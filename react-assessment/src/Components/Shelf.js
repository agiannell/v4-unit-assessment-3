import {Component} from 'react';
import ShelfMessage from './ShelfMessage';

class Shelf extends Component {
    render() {
        // console.log(this.props)

        const mappedShelf = this.props.shelf.map((e, i) => {
            return (
            <section key={i}>
                <h3>{e}</h3>
            </section>
        )})
        let button;
        let shelfMessage

        if (!this.props.shelf.length) {
            button = null
            shelfMessage = <ShelfMessage />
        } else {
            button = <button onClick={this.props.clearShelf}>clear shelf</button>
            shelfMessage = null
        }

        return (
            <section className="shelf">
                <h1>Your Shelf</h1>
                {/* <button onClick={this.props.clearShelf}>clear shelf</button> */}
                {button}
                {shelfMessage}
                {/* <ShelfMessage shelf={this.props.shelf} /> */}
                <h3>{mappedShelf}</h3>
            </section>
        )
    }
}

export default Shelf;