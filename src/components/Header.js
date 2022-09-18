import headerClasses from './Header.module.css';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
    <div className={headerClasses.headerWrap}>
        <h2>Test application</h2>
        <ul>
            <li><Link to="add-post">Add Posts</Link></li>
            <li><Link to="contact">Contact</Link></li>
        </ul>
    </div>)
}

export default Header;