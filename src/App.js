import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Search from "./Search"
import  { Route }  from 'react-router-dom'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    books:[],
  }


  componentDidMount(){
    this.getBooks()
  }

  shelfChanger = (book, shelf) => {
    BooksAPI.update(book, shelf).then(res => {
      this.getBooks()
    })
  }

  getBooks = () => {
    BooksAPI.getAll()
    .then(books => {
      this.setState({
        books
      })
    })
    
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <Search shelfChanger={this.shelfChanger} books={this.state.books} />
          )}
        />

        <Route exact path='/' render={() => (
          <ListBooks books={this.state.books} shelfChanger={this.shelfChanger} />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
