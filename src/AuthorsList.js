import React from 'react';

import AuthorCard from './AuthorCard';
import SearchBar from './SearchBar';

function AuthorsList(props) {

  const authors = props.authors.map(author => (
    <AuthorCard key={author.first_name + author.last_name}
                author={author}
                selectAuthor={props.selectAuthor}/>
  ));

  return (
    <div className="authors">
      <h3>Authors</h3>
      <SearchBar filterAuthors={props.filterAuthors} />
      <div className="row">
        {authors}
      </div>
    </div>
  );
}

export default AuthorsList;
