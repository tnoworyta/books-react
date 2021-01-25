import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import BookList from '../components/BookList';
import NewBook from '../components/NewBook';
import EditBook from '../components/EditBook';
import BookHome from '../components/BookHome';

export default class BookApp extends Component {
  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={BookHome}>
          <IndexRoute component={BookList} />
          <Route path="/books" component={BookList} />
          <Route path="/books/new" component={NewBook} />
          <Route path="/books/:book_id/edit" component={EditBook} />
        </Route>
      </Router>
    );
  }
}
