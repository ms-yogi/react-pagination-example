import React, { Component } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';

class ApiPaginate extends Component {
    state = {
        posts : [],
        loading: false,
        currentPage: 0,
        postsPerPage: 10
    }

    getHackerNewsApi = (page, hits) => {
        return (
        `http://hn.algolia.com/api/v1/search?tags=story&page=${page}&hitsPerPage=${hits}`
        )
    }


    fetchPosts = async (page, hits) => {
        fetch(this.getHackerNewsApi(page, hits))
        .then(data => data.json())
        .then(resultArray => this.printTitle(resultArray)) 
    }

    componentDidMount() {
        this.setState({
        loading : true
        })
        this.fetchPosts(this.state.currentPage, this.state.postsPerPage);
        console.log("component mounted")
    } 

    printTitle = (resultArray) => {
        console.log(resultArray.hits);
        const titles = resultArray.hits.map(result => {
            return result
        })
        this.setState({
            posts: titles,
            loading: false
        })
    }

    paginate = (pageNumber) => {
        (Number.isInteger(pageNumber) ?
            this.setState({
            currentPage : pageNumber
            }) :
            (
                (pageNumber === 'Next') ?
                    this.setState({
                        currentPage: this.state.currentPage + 1
                    }, () => (
                        this.fetchPosts(this.state.currentPage, this.state.postsPerPage)
                    )) : 
                    this.setState({
                        currentPage: this.state.currentPage - 1
                    }, () => (
                        this.fetchPosts(this.state.currentPage, this.state.postsPerPage)
                    ))
            )
        )
    }

    render() {
        return (
        <div className="App container">
            <h1>API Pagination App</h1>
            <Posts loading={this.state.loading} posts={this.state.posts}/>
            <Pagination 
            postsPerPage={this.state.postsPerPage}
            paginate={this.paginate} 
            posts={this.state.posts}
            currentPage={this.state.currentPage}/>
        </div>
        );
    }
}

export default ApiPaginate;