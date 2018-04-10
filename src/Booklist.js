import React, {Component} from 'react';
import SearchBar from './SearchBar';

class BookList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books,
      filteredBooks: this.props.books
    }

    this.filterBooks = this.filterBooks.bind(this);
  }

  filterBooks(query) {
    console.log("hello")
    query = query.toLowerCase()
    let filteredBooks = this.state.books.filter(book => {

      return book.title.toLowerCase().includes(query);
    });
    this.setState({filteredBooks})
  }

  render() {
    const books = this.state.filteredBooks && this.state.filteredBooks.map(book => (
     <tr key={book.id} book={book}>
         <td>{book.title}</td>
        <link to ='/authors/:authorID'><td>{book.authors && book.authors.map(author => author.name).join(", ")}</td></link>
         <td>
             <button className="btn" style={{backgroundColor:book.color}}/>
         </td>
     </tr>
 ));
    return (
      <div className="authors">
        <h3>Books</h3>
        <SearchBar changeHandler={this.filterBooks} />
        <div className="row">
          <table className='mt-3 table'>
             <thead>
                 <tr>
                   <th>Name</th>
                   <th>Authors</th>
                   <th>Color</th>
                 </tr>
             </thead>
   <tbody>
       {books}        
   </tbody>
   </table>
   
        </div>
      </div>
    );
  }
}

export default BookList;


