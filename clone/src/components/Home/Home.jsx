import React from 'react';
import TwitterBox from '../TwitterBox/TwitterBox';
import Post from '../Post/Post';
import './Home.scss';

const Home = () => {

    return (
        <div className="Home">
            <h2>Home</h2>
            <TwitterBox />
            <Post />
        </div>
    );
}

export default Home;