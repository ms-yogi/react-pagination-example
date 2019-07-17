import React from 'react';

const Posts = (props) => {
    if(props.loading) {
        return <h2>Loading.....</h2>
    }

    return (
        <ul className="list-group">
            {props.posts.map( post => {
                return (
                    <li key= {post.id}
                    className="list-group-item list-group-item-secondary my-1">
                    {post.title}
                </li>
                )
            })}
        </ul>
    )
}

export default Posts;