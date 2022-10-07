import { NavLink } from 'react-router-dom';
import './leftPane.scss'

const Leftpane = () => {
    return (
        <div className="left-pane">
           <div className="container">
                <header>Twitter icon here</header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/explore">Explore</NavLink>
                    <NavLink to="/notice">Notice</NavLink>
                    <NavLink to="/messages">Messages</NavLink>
                    <NavLink to="/bookmarks">Bookmarks</NavLink>
                    <NavLink to="/lists">Lists</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
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