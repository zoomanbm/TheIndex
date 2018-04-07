import React from 'react';

import BookRow from './BookRow';

function AuthorDetail(props) {
  const author = props.author;
  const bookRows = author.books && author.books.map(book =>
    <BookRow key={book.title} book={book} />);
	return (
    <div className="author col-xs-10">
  		<div>
  			<h3>{author.first_name} {author.last_name}</h3>
  			<img src={author.imageUrl} className="img-thumbnail"/>
  		</div>
  		<table className='mt-3 table'>
  			<thead>
  				<tr>
  					<th>Name</th>
  					<th>Authors</th>
  					<th>Color</th>
  				</tr>
  			</thead>
  			<tbody>
  				{bookRows}
  			</tbody>
  		</table>
    </div>
  );
}

export default AuthorDetail;
