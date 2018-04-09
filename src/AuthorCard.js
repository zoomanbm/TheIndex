import React from 'react';
import {Link} from 'react-router-dom';

function AuthorCard(props) {
  return (
    <div className="col-4">
      <Link to={`/authors/${props.author.id}`} className="card">
        <div className="image">
          <img className="card-img-top img-fluid" src={props.author.imageUrl} />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{props.author.first_name} {props.author.last_name}</span>
          </h5>
          <small className="card-text">{props.author.books.length} books</small>
        </div>
      </Link>
    </div>
  );
}

export default AuthorCard;
