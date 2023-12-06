import './appHeader.scss';
import {Link, NavLink} from "react-router-dom";

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink 
                        end        
                        style={({isActive}) => ({color: isActive ? '#9F0013' : 'inherit'})} 
                        to="/">Characters</NavLink></li>
                    /
                    <li><NavLink  
                        style={({isActive}) => ({color: isActive ? '#9F0013' : 'inherit'})} 
                        to="/comics">Comics</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

// https://stackblitz.com/github/remix-run/react-router/tree/main/examples/basic?file=src%2FApp.tsx
export default AppHeader;

