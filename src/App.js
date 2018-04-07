import React, { Component } from 'react';
import axios from 'axios';

// Components
import Sidebar from './Sidebar';
import Loading from './Loading';
import AuthorsList from './AuthorsList';
import AuthorDetail from './AuthorDetail';


const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      authors: [],
      loading: true,
      currentAuthor: {}
    }

    this.selectAuthor = this.selectAuthor.bind(this);
    this.unselectAuthor = this.unselectAuthor.bind(this);
  }

  componentDidMount() {
    instance.get('/api/authors/')
      .then(res => res.data)
      .then(authors => this.setState({authors, loading: false}))
      .catch(err => console.error(err));
  }

  getView() {
    if (this.state.loading) {
      return <Loading />
    } else if (this.state.currentAuthor.id) {
      return <AuthorDetail author={this.state.currentAuthor}/>
    } else {
      return <AuthorsList authors={this.state.authors}
                          selectAuthor={this.selectAuthor} />
    }
  }

  selectAuthor(authorID) {
    this.setState({loading: true});
    instance.get(`/api/authors/${authorID}`)
      .then(res => res.data)
      .then(author => this.setState({
        currentAuthor: author,
        loading: false
      }))
      .catch(err => console.error(err));
  }

  unselectAuthor() {
    this.setState({currentAuthor: {}});
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unselectAuthor={this.unselectAuthor}/>
          </div>
          <div className="content col-10">
            {this.getView()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
