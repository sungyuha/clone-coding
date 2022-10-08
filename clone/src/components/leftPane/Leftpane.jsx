import { NavLink } from 'react-router-dom';
import { home, explore, twitter, notifications, messages, bookmarks, lists, profile } from './icons';
import './leftPane.scss';


const Leftpane = () => {
    return (
        <div className="left-pane">
            <div className="container">
                <header>{twitter}</header>
                <nav>
                    {/* 카테고리 경로 */}
                    <NavLink to="/">
                        <span>{home} Home</span>
                    </NavLink>
                    <NavLink to="/explore">
                        <span>{explore} Explore</span>
                    </NavLink>
                    <NavLink to="/notice">
                        <span>{notifications} Notice</span>
                    </NavLink>
                    <NavLink to="/messages">
                        <span>{messages} Messages</span>
                    </NavLink>
                    <NavLink to="/bookmarks">
                        <span>{bookmarks} Bookmarks</span>
                    </NavLink>
                    <NavLink to="/lists">
                        <span>{lists} Lists</span>
                    </NavLink>
                    <NavLink to="/profile">
                        <span>{profile} Profile</span>
                    </NavLink>
                </nav>

                <button className="tweet">Tweet</button>

                <footer>
                    <button className="account">
                        <div className="photo">
                            <img
                                src="/img/user.png"
                                alt="user"
                            />    
                        </div>
                        {/* 프로필 버튼 */}
                        <div>
                            <div>YuHa Don</div>
                            <div>@yuha profile</div>
                        </div>
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default Leftpane;