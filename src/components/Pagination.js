import React from 'react';

const Pagination = (props) => {

    let pageArray = [];
    for(let i=1; i <= Math.ceil(props.posts.length / props.postsPerPage); i++) {
        pageArray.push(i);
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