import React from 'react';
import "./Feed.css"
import TweetBox from './components/TweetBox';

function Feed() {
    return (
        <div className='feed'>
            {/* Header*/}
                <div className='feed__header'>
                    <h2>Home</h2>
                </div>

            {/* Tweet*/}
            <TweetBox/>
            {/* Post*/}        
        </div>
    );
}

export default Feed;