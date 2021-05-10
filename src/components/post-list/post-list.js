import React from 'react';

import PostlistItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts, onDelete}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                 <PostlistItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}/>
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;