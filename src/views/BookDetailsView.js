import React, { Component } from 'react';
import Axios from 'axios';
import routes from '../routes';

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

  handleGoBack = () => {
    const { location, history } = this.props;

    //     if (location.state && location.state.from) {
    //       return history.push(location.state.from);
    //  }

    // history.push(routes.books);

    history.push(location?.state?.from || routes.books);
  };

  render() {
    const { imgUrl, title, author, descr } = this.state;

    return (
      <div className="container-fluid">
        <button type="button" onClick={this.handleGoBack}>
          Вернуться назад
        </button>

        <img src={imgUrl} alt="" />
        <h2>{title}</h2>
        {author && <p>Автор: {author.name}</p>}
        <p>{descr}</p>
      </div>
    );
  }
}

export default BookDetailsView;
