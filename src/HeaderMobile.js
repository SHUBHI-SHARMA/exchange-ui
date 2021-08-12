import './Header.css';
import header from './header.gif';
import he from './svg-icons/he.svg';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import openingm from './svg-icons/openingm.svg';
import logos from './svg-icons/logos.svg';
import NavBar from './Navbar';
import headingm from './svg-icons/headingm.svg';
export default function HeaderMobile(){
    return(
        <div>
        <div className="topbarm">
       <NavBar/>
        </div>
        <br/>
        <br/>
        <img src={headingm}/>
            <br/>
           <br/>
           <div className="subheading2m">
            <img src={openingm}/>
            </div>
            <button className="btnss2m">Get Started</button>
            <div className="animationsm">
            <img src={header}/>
</div>
            
    
          
        </div>
    )
}