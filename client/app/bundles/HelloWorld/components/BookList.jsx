import React, { Component } from 'react';

import BookTable from '../components/BookTable';
import NewBook from '../components/NewBook';

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    $.getJSON('/api/v1/books.json', (response) => {
      this.setState({ books: response });
    });
  }

  handleSubmit(book) {
    let newState = this.state.books.concat(book);
    this.setState({ books: newState })
  }

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/books/${id}`,
      type: 'DELETE',
      success: (response) => {
        this.removeItemClient(id);
      }
    });
  }

  removeItemClient(id) {
    let newBooks = this.state.books.filter((book) => {
      return book.id != id;
    });
    this.setState({ books: newBooks });
  }

  render() {
    return(
      <div>
        <BookTable books={this.state.books} handleDelete={this.handleDelete.bind(this)} />
        <NewBook handleSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}
