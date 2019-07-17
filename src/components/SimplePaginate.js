import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts';
import Pagination from './Pagination';

class SimplePaginate extends Component {
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

    //   fetch('http://hn.algolia.com/api/v1/search?tags=story&page=2&hitsPerPage=100')
    //     .then(data => data.json())
    //     .then(result => console.log(result)) 
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
        <h1>Simple Pagination App</h1>
        <Posts loading={this.state.loading} posts={showPosts}/>
        <Pagination 
          postsPerPage={this.state.postsPerPage}
          paginate={this.paginate} 
          posts={this.state.posts}/>
      </div>
    );
  }
}

export default SimplePaginate;
