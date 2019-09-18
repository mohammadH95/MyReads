import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Search from "./Search"
import  { Switch, Route }  from 'react-router-dom'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    books:[],
  }
 
  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({ books })
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
        books,
        change: false
      })
    })
    
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route path='/search' render={() => (
          <Search shelfChanger={this.shelfChanger} books={this.state.books} />
            )}
          />
          <Route exact path='/' render={() => (
            <ListBooks books={this.state.books} shelfChanger={this.shelfChanger} />
            )}
          />

          <Route render = {
            () => <div>
              <h1>404</h1>
                  <h3>page not found</h3>
            </div>
          }/>
        </Switch>
        
      </div>
    )
  }
}

export default BooksApp
