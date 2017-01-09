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
          <td><button onClick={this.handleDelete.bind(this, book.id)} >Delete</button></td>
        </tr>
      )
    });
    return(<table><tbody>{bookRows}</tbody></table>);
  }
}
