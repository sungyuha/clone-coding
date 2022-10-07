import { NavLink } from 'react-router-dom';
import './leftPane.scss'

const Leftpane = () => {
    return (
        <div className="left-pane">
           <div className="container">
                <header>Twitter icon here</header>
                <nav>
                    {/* 카테고리 경로 */}
                    <NavLink to="/">
                        <span>Home</span>
                    </NavLink>
                    <NavLink to="/explore">
                        <span>Explore</span>
                    </NavLink>
                    <NavLink to="/notice">
                        <span>Notice</span>
                    </NavLink>
                    <NavLink to="/messages">
                        <span>Messages</span>
                    </NavLink>
                    <NavLink to="/bookmarks">
                        <span>Bookmarks</span>
                    </NavLink>
                    <NavLink to="/lists">
                        <span>Lists</span>
                    </NavLink>
                    <NavLink to="/profile">
                        <span>Profile</span>
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