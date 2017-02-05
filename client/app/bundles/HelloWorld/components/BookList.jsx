import React, { Component } from 'react';

import BookTable from '../components/BookTable';

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    $.ajax({
      url: '/api/v1/books',
      type: 'GET',
      success: (response) => {
        this.setState({ books: response.data.map(((b) => { return Object.assign(b.attributes, {id: b.id}) })) });
      }
    });
  }

  handleSubmit(book) {
    let newState = this.state.books.concat(book);
    this.setState({ books: newState })
  }

  handleDelete(id) {
    $.ajax({
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
      },
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
      </div>
    );
  }
}
