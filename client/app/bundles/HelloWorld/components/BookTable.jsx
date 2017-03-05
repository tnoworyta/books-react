import React, { Component } from 'react';

export default class BookTable extends Component {
  handleDelete(id) {
    this.props.handleDelete(id);
  }

  render() {
    let bookRows = this.props.books.map((book) => {
      return (
        <tr key={book.id}>
          <td>{book.author}</td>
          <td>{book.title}</td>
          <td>{book.year}</td>
          <td><button onClick={this.handleDelete.bind(this, book.id)} className='btn btn-secondary'>Delete</button></td>
        </tr>
      )
    });
    return(
      <table className='table'>
        <thead>
          <tr>
            <th>Author</th>
            <th>Title</th>
            <th>Year</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{bookRows}</tbody>
      </table>
    );
  }
}
