import React, { useState } from 'react'
import './twitterbox.scss';

const TwitterBox = () => {

    return (
        <div className="twitterBox">
            <form>
                <div className="twitterBox_input">
                    <img
                        src="/img/user.png"
                        alt="user"
                    />
                    <input type="text" placeholder="What's happening" />
                </div>
                <input
                    className = "twitterBox_imginput"
                    placeholder = "image : URL"
                />
                <button>Tweet</button>
            </form>
        </div>
    )
}

export default TwitterBox;