import { Link } from 'react-router-dom';
import "./NavBar.css"
import * as userService from "../../utilities/users-service"

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <div className='nav-and-welcome-msg'>
            <p className='welcome-user'>Welcome, {(user.name).charAt(0).toUpperCase() + (user.name).slice(1)}!</p>
            <nav>
                
                <div className='nav-el'>
                    <Link to="/checkedlist">Add List</Link>
                </div>
                <div className='nav-el'>
                    <Link to="/checked">Done</Link>
                </div>
                <div className='nav-el'>
                    <Link to="" onClick={handleLogOut}>Log Out</Link>
                </div>
            </nav>
            <footer>© Jelis Li, Inc. 2023</footer>
        </div>
    );
}