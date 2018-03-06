import React, { Component } from 'react';
import axios from 'axios';

// Components
import Sidebar from './Sidebar';
import AuthorsList from './AuthorsList';


const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      authors: []
    }
  }

  componentDidMount() {
    instance.get('/api/authors/')
      .then(res => res.data)
      .then(authors => this.setState({authors}))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">
            {
              this.state.authors.length ?
              <AuthorsList authors={this.state.authors}/> :
              'loading...'
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
