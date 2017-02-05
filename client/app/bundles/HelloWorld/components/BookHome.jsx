import React, { Component } from 'react';
import { Link } from 'react-router';

export default class BookHome extends Component {
  render() {
    return(
      <div>
        <ul className="header">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">List</Link></li>
          <li><Link to="/books/new">Add</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
