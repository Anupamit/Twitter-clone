import { Avatar } from '@mui/material';
import React from 'react';
import './Post.css';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import RepeatIcon from '@mui/icons-material/Repeat';

function Post({
    displayName, username, verified, text, image, avatar
}) {
    return (
        <div className='post'>
            <div className='post__avatar'>
                <Avatar src=''/>
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h3>
                            Anupam kumar{" "}
                            <span className='post__headerSpecial'>
                            <VerifiedIcon className="post__badge"/> @anupamkumar
                            </span>
                        </h3>
                    </div>
                    <div className='post__headerDescription'>
                        <p>I am going to build the Twitter Clone</p>
                    </div>
                </div>
                <img src='https://media2.giphy.com/media/atZII8NmbPGw0/giphy.gif' alt='' />
                <div className='post__footer'>
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    );
}

export default Post;
