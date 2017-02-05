import React, { Component } from 'react';

export default class NewBook extends Component {
  handleClick() {
    $.ajax({
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
      },
      url: '/api/v1/books',
      type: 'POST',
      data: JSON.stringify({
        data: {
          type: 'books',
          attributes: {
            author: this.refs.author.value,
            title: this.refs.title.value,
            year: this.refs.year.value
          }
        }
      }),
      success: (book) => {
        this.refs.author.value = '';
        this.refs.title.value = '';
        this.refs.year.value = '';
        this.props.router.push('/books');
        //this.props.handleSubmit(Object.assign(book.data.attributes, { id: book.data.id }));
      }
    });
  }

  render() {
    return(
      <div>
        <p>Add new book</p>
        <input ref='author' placeholder='Enter the name of the author' /><br/>
        <input ref='title' placeholder='Enter a title' /><br/>
        <input ref='year' placeholder='Enter a year' /><br/>
        <button onClick={this.handleClick.bind(this)}>Submit</button>
      </div>
    );
  }
}
