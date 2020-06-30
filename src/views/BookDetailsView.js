import React, { Component } from 'react';
import Axios from 'axios';

class BookDetailsView extends Component {
  state = {
    descr: null,
    genre: null,
    id: null,
    imgUrl: null,
    title: null,
    author: null,
  };

  async componentDidMount() {
    const { bookId } = this.props.match.params;
    const response = await Axios.get(
      `http://localhost:4040/books/${bookId}?_expand=author`,
    );

    this.setState({ ...response.data });
  }

  render() {
    const { imgUrl, title, author, descr } = this.state;
    return (
      <>
        <h1>Страница одной книги {this.props.match.params.bookId}</h1>
        <img src={imgUrl} alt="" />
        <h2>{title}</h2>
        {author && <p>Автор: {author.name}</p>}
        <p>{descr}</p>
      </>
    );
  }
}

export default BookDetailsView;
