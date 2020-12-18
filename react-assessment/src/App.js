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
      data,

    }
  }
  
  render() {
    return (
      <section className="App">
        <Header />
        <SearchBar />
        <div className="content">
          <Shelf />
          <BookList />
        </div>
      </section>
    );
  }
}

export default App;
