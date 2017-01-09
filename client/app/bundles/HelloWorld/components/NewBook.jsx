import React, { Component } from 'react';

export default class NewBook extends Component {
  handleClick() {
    $.ajax({
      url: '/api/v1/books',
      type: 'POST',
      data: {
        book: {
          author: this.refs.author.value,
          title: this.refs.title.value,
          year: this.refs.year.value
        }
      }, success: (book) => {
        this.refs.author.value = '';
        this.refs.title.value = '';
        this.refs.year.value = '';
        this.props.handleSubmit(book);
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
