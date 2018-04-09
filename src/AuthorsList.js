import React, {Component} from 'react';

import AuthorCard from './AuthorCard';
import SearchBar from './SearchBar';

class AuthorsList extends Component {

  componentWillUnmount() {
    this.props.filterAuthors("");
  }

  render() {
    const authors = this.props.authors.map(author => (
      <AuthorCard key={author.first_name + author.last_name}
        author={author} />
      ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        <SearchBar changeHandler={this.props.filterAuthors} />
        <div className="row">
          {authors}
        </div>
      </div>
    );
  }
}

export default AuthorsList;
