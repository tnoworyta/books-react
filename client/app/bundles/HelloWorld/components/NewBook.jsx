import React, { Component } from 'react';
import fetch from 'node-fetch';

export default class NewBook extends Component {
  handleClick() {
    fetch(`http://${window.location.href.split('/')[2]}/api/v1/books`, {
      method: 'POST',
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
      },
      body: JSON.stringify({
        data: {
          type: 'books',
          attributes: {
            author: this.refs.author.value,
            title: this.refs.title.value,
            year: this.refs.year.value
          }
        }
      })
    })
      .then(res => this.handleCreate())
  }

  handleCreate() {
    this.refs.author.value = '';
    this.refs.title.value = '';
    this.refs.year.value = '';
    this.props.router.push('/books');
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
