import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

class App extends Component {
  state = {
    posts : [],
    loading: false,
    currentPage: 1,
    postsPerPage: 10
  }

  componentDidMount() {
    this.setState({
      loading : true
    })
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      this.setState({
        posts: res.data,
        loading: false
      })
    }

    fetchPosts();
  } 

  paginate = (pageNumber) => {
    this.setState({
      currentPage : pageNumber
    })
  }

  render() {
    const endPosts = this.state.currentPage * this.state.postsPerPage;
    const startPosts = endPosts - this.state.postsPerPage;
    const showPosts = this.state.posts.slice(startPosts, endPosts);

    return (
      <div className="App container">
        <h1>My Pagination App</h1>
        <Posts loading={this.state.loading} posts={showPosts}/>
        <Pagination 
          postsPerPage={this.state.postsPerPage}
          paginate={this.paginate} 
          posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
