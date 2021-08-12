import './Header.css';
import header from './header.gif';
import he from './svg-icons/he.svg';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import opening from './svg-icons/opening.svg';
import logos from './svg-icons/logos.svg';
import NavBar from './Navbar';
export default function Header(){
    return(
        <div>
        <div className="topbar">
       <NavBar/>
        </div>
        <div className="heading">
           Welcome to AntNet Ecosystem
            </div>
            <br/>
            <Row>
            <Col>
           <div className="subheading2">
            <img src={opening}/>
            <button className="btnss2">Get Started</button>
            </div>

            </Col>
            <Col>
            <div className="animations">
            {/* <div style={{left:'100vh'}}>
            <img src={he}/>
            </div> */}
            <div>
            
                <img src={header}/>
                </div>
            </div>
            </Col>

            </Row>
        </div>
    )
}