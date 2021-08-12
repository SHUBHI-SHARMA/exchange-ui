import logos from './svg-icons/logos.svg';
import './Navbar.css';
const NavBar = () => (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>
            <img src={logos}/>
        </div>
        <div className='navbar__item'>About Us</div>
        <div className='navbar__item'>Contact</div>
        <div className='navbar__item'>Help</div>        
    </header>
);
export default NavBar;