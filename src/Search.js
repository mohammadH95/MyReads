import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {
  state ={
    booksNOTinShelfs: [],
    query: ''
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))

    this.searchBooks()
  }

  searchBooks = e => {
    BooksAPI.search(this.state.query).then(res => {
      if (res !== undefined && this.state.query !== "") {
        this.setState({
          booksNOTinShelfs: res,
        })
        
      } else {
        this.setState({
          booksNOTinShelfs: [],
        })
      } 
    })
  } 

  render() {

    const { books, shelfChanger } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className="close-search"
            >Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="query" 
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.booksNOTinShelfs.map(book => (
              <Book
                key={book.id}
                book={book}
                shelfChanger={shelfChanger}
                books={books}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;