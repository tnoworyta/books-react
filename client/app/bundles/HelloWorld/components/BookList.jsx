import React, { Component } from 'react';
import fetch from 'node-fetch';

import BookTable from '../components/BookTable';

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    fetch(`http://${window.location.href.split('/')[2]}/api/v1/books`)
      .then(res => res.json())
      .then(json => this.setState({ books: json.data.map(((b) => { return Object.assign(b.attributes, {id: b.id}) })) }));
  }

  handleSubmit(book) {
    let newState = this.state.books.concat(book);
    this.setState({ books: newState })
  }

  handleEdit(id) {

  }

  handleDelete(id) {
    fetch(`http://${window.location.href.split('/')[2]}/api/v1/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
      }
    })
      .then(res => this.removeItemClient(id))
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
        <BookTable books={this.state.books} handleEdit={this.handleEdit.bind(this)} handleDelete={this.handleDelete.bind(this)} />
      </div>
    );
  }
}
