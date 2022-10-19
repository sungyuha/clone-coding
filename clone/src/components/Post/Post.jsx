import React from 'react'
import { Avatar } from '@mui/material';
// import { VerifiedUserIcon } from '@mui/icons-material';
import './post.scss';

const Post = () => {
    return (
        <div className="Post">
            <div className="post-avatar">
                <Avatar />
                <div className="post-body">
                    <div className="post-header">
                        <div className="post-headerText">
                            <h3>DisplayName</h3>
                            <span className="post-headerSpecial">
                                {/* <VerifiedUserIcon /> */}
                                @username
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;