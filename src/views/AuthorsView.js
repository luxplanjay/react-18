import React, { Component } from 'react';
import Axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import BookList from '../components/BookList';

class AuthorsView extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      ' http://localhost:4040/authors?_embed=books',
    );

    this.setState({ authors: response.data });
  }

  render() {
    const { match } = this.props;
    const { authors } = this.state;

    return (
      <div className="container-fluid">
        <ul>
          {authors.map(({ id, name }) => (
            <li key={id}>
              <NavLink to={`${match.url}/${id}`}>{name}</NavLink>
            </li>
          ))}
        </ul>

        <Route
          path={`${match.path}/:authorId`}
          render={props => {
            const authorId = Number(props.match.params.authorId);
            const author = authors.find(({ id }) => id === authorId);

            return (
              author && (
                <>
                  <h2>Книги автора: {author.name}</h2>
                  <BookList {...props} books={author.books} />
                </>
              )
            );
          }}
        />
      </div>
    );
  }
}

export default AuthorsView;
