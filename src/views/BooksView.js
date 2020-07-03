import React, { Component } from 'react';
import Axios from 'axios';
import BookList from '../components/BookList';

class BooksView extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const response = await Axios.get('http://localhost:4040/books');

    this.setState({ books: response.data });
  }

  render() {
    return (
      <div className="container-fluid">
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default BooksView;
