import {Component} from 'react'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import Shelf from './Components/Shelf'
import BookList from './Components/BookList'
import data from './Components/data'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: data,
      shelf: []
    }
  }

  addToShelf = title => {
    // const shelfCopy = this.state.shelf.slice();
    // shelfCopy.push(title);

    const shelfCopy = [...this.state.shelf, title]

    this.setState({
      shelf: shelfCopy
    })

  }

  clearShelf = () => {
    this.setState({
      shelf: []
    })
  }

  filterBooks = userInput => {
    let filteredBooks = this.state.books
      .filter((el, i) => {
        return el.title.includes(userInput)
      })

    this.setState({
      books: filteredBooks
    })
  }

  reset = () => {
    this.setState({
      books: data
    })
  }
  
  render() {
    const {books, shelf} = this.state
    console.log(shelf)

    return (
      <section className="App">
        <Header />
        <SearchBar 
          filterBooks={this.filterBooks}
          reset={this.reset}
        />
        <div className="content">
          <BookList
            books={books}
            addToShelf={this.addToShelf}
          />
          <Shelf 
            shelf={shelf} 
            clearShelf={this.clearShelf}
          />
        </div>
      </section>
    );
  }
}

export default App;
