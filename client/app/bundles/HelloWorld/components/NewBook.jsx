import React, { Component } from 'react';
import fetch from 'node-fetch';

export default class NewBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      title: '',
      year: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.target.classList.add('active');

    this.setState({
      [e.target.name]: e.target.value
    });

    this.showInputError(e.target.name);
  }

  showFormErrors() {
    const inputs = document.querySelectorAll('input');
    let isFormValid = true;

    inputs.forEach(input => {
      input.classList.add('active');

      const isInputValid = this.showInputError(input.name);

      if (!isInputValid) {
        isFormValid = false;
      }
    });

    return isFormValid;
  }

  showInputError(refName) {
    const field = this.refs[refName];
    const validity = field.validity;
    const label = document.getElementById(`${refName}Label`).textContent;
    const error = document.getElementById(`${refName}Error`);
    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`;
      } else if (validity.typeMismatch) {
        error.textContent = `${label} should be a valid email address`;
      } else if (validity.rangeOverflow) {
        error.textContent = `${label} should be less than ${field.max}`;
      } else if (validity.rangeUnderflow) {
        error.textContent = `${label} should be greater than ${field.min}`;
      }
      return false;
    }

    error.textContent = '';
    return true;
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.showFormErrors()) {
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
  }

  handleCreate() {
    this.refs.author.value = '';
    this.refs.title.value = '';
    this.refs.year.value = '';
    this.props.router.push('/books');
  }

  render() {
    return(
      <div className="container">
        <h1>Add new book</h1>
        <form noValidate>
          <div className='form-group'>
            <label id="authorLabel">Author</label>
            <input
              className='form-control'
              type='text'
              ref='author'
              name='author'
              placeholder='Enter the name of the author'
              onChange={ this.handleChange }
              required/>
            <div className='error' id='authorError'></div>
          </div>
          <div className='form-group'>
            <label id="titleLabel">Title</label>
            <input
              className='form-control'
              type='text'
              ref='title'
              name='title'
              placeholder='Enter the title'
              onChange={ this.handleChange }
              required/>
            <div className='error' id='titleError'></div>
          </div>
          <div className='form-group'>
            <label id="yearLabel">Year</label>
            <input
              className='form-control'
              type='number'
              ref='year'
              name='year'
              min='1900'
              max='2017'
              placeholder='Enter the year'
              onChange={ this.handleChange }
              required/>
            <div className='error' id='yearError'></div>
          </div>
          <button
            className='btn btn-primary'
            onClick={ this.handleSubmit.bind(this) }>Submit</button>
        </form>
      </div>
    );
  }
}
