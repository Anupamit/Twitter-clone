import SearchIcon from '@mui/icons-material/Search';import React from 'react';
import { TwitterTweetEmbed, TwitterTimelineEmbed, TwitterShareButton } from 'react-twitter-embed';
import "./Widgets.css"

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets__input'>
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder='Search Twitter' type="text" />
            </div>
            <div className='widgets__widgetContainer'>
            <h2>What's happening</h2>

            <TwitterTweetEmbed tweetId={"858551177860055040"} />
            
            <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="narendramodi"
            options={{ height: 400 }}
            />
            
            <TwitterShareButton
            url={"https://github.com/Anupamit"}
            options={{ text: "#reactjs is awesome", via: "indiankumar01"}}
            />
            </div>
        </div>
    );
}

export default Widgets;
