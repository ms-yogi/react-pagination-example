import React from 'react';

const Pagination = (props) => {

    let pageArray = [];

    if(props.posts.length === props.postsPerPage && props.currentPage > 0) {
        pageArray.push("Prev")        
    }

    for(let i=1; i <= Math.ceil(props.posts.length / props.postsPerPage); i++) {
        pageArray.push(i);
    }

    if(props.posts.length === props.postsPerPage) {
        pageArray.push("Next");
    }

    return (
        <div>
            <ul className="pagination">
                {pageArray.map( page => (
                    <li className="page-item" key={page}>
                        <a className="page-link" onClick={() => props.paginate(page)} href="!#">{page}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination;