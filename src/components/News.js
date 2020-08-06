import React, { Component } from 'react';
import axios from 'axios';

export default class News extends Component {
  state = {
    articles: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });

    axios
      .get('https://hn.algolia.com/api/v1/search?query=react')
      .then(({ data }) => this.setState({ articles: data.hits }))
      .catch(error => this.setState({ error: error.message }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <>
        {this.state.loading && (
          <p>
            Загружаем...
            <span aria-label="Иконка" role="img">
              🧙‍♂️
            </span>
          </p>
        )}

        <ul>
          {this.state.articles.map(({ objectID, title, url }) => (
            <li key={objectID}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
